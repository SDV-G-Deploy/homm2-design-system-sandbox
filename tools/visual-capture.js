#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const net = require("net");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.HOMM2_CAPTURE_PORT || 4210);
const CDP_PORT = Number(process.env.HOMM2_CAPTURE_CDP_PORT || 9350);
const CHROMIUM = process.env.CHROMIUM_BIN || findChromium();

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});

async function main() {
  if (!CHROMIUM) throw new Error("Chromium not found. Set CHROMIUM_BIN.");

  const options = parseArgs(process.argv.slice(2));
  if (!options.target) {
    throw new Error("Missing --target, for example --target /fairy-journeys.html#journey-opening");
  }

  const outDir = path.resolve(ROOT, options.out || "tmp/visual-capture");
  fs.mkdirSync(outDir, { recursive: true });

  const viewports = options.viewports.length
    ? options.viewports
    : [["desktop", 1440, 900], ["mobile", 390, 844], ["narrow", 360, 740]];
  const selectors = options.selectors.length ? options.selectors : ["body"];
  const scrollSelector = options.scrollSelector || hashSelector(options.target);
  const targetPath = options.target.startsWith("/") ? options.target : "/" + options.target;

  const server = await startStaticServer();
  const chromium = spawn(CHROMIUM, [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--no-first-run",
    "--noerrdialogs",
    "--remote-debugging-address=127.0.0.1",
    "--remote-debugging-port=" + CDP_PORT,
    "--window-size=390,844",
    "http://127.0.0.1:" + PORT + "/index.html",
  ], { stdio: ["ignore", "ignore", "pipe"] });

  const results = [];
  const cleanup = () => {
    chromium.kill("SIGTERM");
    server.close();
  };
  process.on("exit", cleanup);

  try {
    await waitForCdp();
    const page = await openPage("/index.html");
    const cdp = await connectCdp(page.webSocketDebuggerUrl);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");

    for (const [name, width, height] of viewports) {
      await cdp.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: false,
      });
      await cdp.send("Page.navigate", { url: "http://127.0.0.1:" + PORT + targetPath });
      await waitForLoad(cdp);

      if (scrollSelector) {
        await cdp.eval(scrollExpression(scrollSelector, options.scrollOffset), true);
        await delay(100);
      }

      const metrics = await cdp.eval(boundsExpression(selectors, scrollSelector), true);
      const screenshot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
        fromSurface: true,
      });

      const base = safeName(name + "-" + width + "x" + height);
      const imagePath = path.join(outDir, base + ".png");
      fs.writeFileSync(imagePath, Buffer.from(screenshot.result.data, "base64"));

      const record = {
        viewport: { name, width, height },
        target: targetPath,
        scrollSelector,
        image: imagePath,
        metrics: metrics.value,
      };
      results.push(record);

      console.log(name + " " + width + "x" + height);
      console.log("  image: " + imagePath);
      console.log("  scrollWidth/clientWidth: " + record.metrics.doc.scrollWidth + "/" + record.metrics.doc.clientWidth);
      console.log("  offenders: " + record.metrics.offenders.length);
    }

    cdp.close();
  } finally {
    cleanup();
  }

  const jsonPath = path.join(outDir, "metrics.json");
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2) + "\n");
  console.log("metrics: " + jsonPath);
}

function parseArgs(args) {
  const options = {
    out: null,
    target: null,
    scrollSelector: null,
    scrollOffset: 0,
    selectors: [],
    viewports: [],
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = () => {
      index += 1;
      if (index >= args.length) throw new Error("Missing value for " + arg);
      return args[index];
    };

    if (arg === "--out") options.out = next();
    else if (arg === "--target") options.target = next();
    else if (arg === "--scroll-selector") options.scrollSelector = next();
    else if (arg === "--scroll-offset") options.scrollOffset = Number(next());
    else if (arg === "--selector") options.selectors.push(next());
    else if (arg === "--viewport") options.viewports.push(parseViewport(next()));
    else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error("Unknown argument: " + arg);
    }
  }

  return options;
}

function printHelp() {
  console.log([
    "Usage:",
    "  node tools/visual-capture.js --target /fairy-journeys.html --out tmp/fairy \\",
    "    --viewport mobile:390x844 --selector .fairy-hero-copy .lead",
    "",
    "Options:",
    "  --target <path[#hash]>        Local repo URL path to capture",
    "  --out <dir>                  Output directory, default tmp/visual-capture",
    "  --viewport <name:WxH>        Repeatable viewport spec",
    "  --selector <css>             Repeatable selector for bounds checks",
    "  --scroll-selector <css>      Element to scroll near before capture; defaults to URL hash",
    "  --scroll-offset <px>         Offset from the top after scrolling, default 0",
  ].join("\n"));
}

function parseViewport(value) {
  const match = value.match(/^([^:]+):(\d+)x(\d+)$/);
  if (!match) throw new Error("Invalid viewport. Expected name:WIDTHxHEIGHT, got " + value);
  return [match[1], Number(match[2]), Number(match[3])];
}

function hashSelector(target) {
  const hashIndex = target.indexOf("#");
  if (hashIndex === -1) return null;
  const id = target.slice(hashIndex + 1);
  return id ? "#" + cssEscape(id) : null;
}

function cssEscape(value) {
  return value.replace(/([^a-zA-Z0-9_-])/g, "\\$1");
}

function safeName(value) {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
}

function scrollExpression(selector, offset) {
  return "(() => {" +
    "const node=document.querySelector(" + JSON.stringify(selector) + ");" +
    "if(node) window.scrollTo(0, node.getBoundingClientRect().top + window.scrollY - " + Number(offset || 0) + ");" +
    "return undefined;" +
  "})()";
}

function boundsExpression(selectors, scrollSelector) {
  return "(() => {" +
    "const vw=document.documentElement.clientWidth;" +
    "const doc={scrollWidth:document.documentElement.scrollWidth,clientWidth:vw,bodyScrollWidth:document.body.scrollWidth,scrollY:Math.round(window.scrollY)};" +
    "const selectors=" + JSON.stringify(selectors) + ";" +
    "const rows=[];" +
    "for(const selector of selectors){const nodes=[...document.querySelectorAll(selector)];nodes.slice(0,12).forEach((node,index)=>{" +
      "const r=node.getBoundingClientRect();const cs=getComputedStyle(node);" +
      "rows.push({selector,index,left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),top:Math.round(r.top),bottom:Math.round(r.bottom),overLeft:Math.max(0,Math.round(-r.left)),overRight:Math.max(0,Math.round(r.right-vw)),scrollWidth:Math.round(node.scrollWidth||0),clientWidth:Math.round(node.clientWidth||0),overflowX:cs.overflowX,text:(node.textContent||'').trim().replace(/\\s+/g,' ').slice(0,120)});" +
    "});}" +
    "const target=" + JSON.stringify(scrollSelector || "") + ";" +
    "const targetNode=target?document.querySelector(target):null;" +
    "const targetRect=targetNode?targetNode.getBoundingClientRect():null;" +
    "return {doc,target:targetRect?{selector:target,top:Math.round(targetRect.top),bottom:Math.round(targetRect.bottom),left:Math.round(targetRect.left),right:Math.round(targetRect.right)}:null,offenders:rows.filter(r=>r.overLeft||r.overRight||r.scrollWidth>r.clientWidth+1),rows};" +
  "})()";
}

function startStaticServer() {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, "http://127.0.0.1:" + PORT);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";
    const target = path.normalize(path.join(ROOT, pathname));
    if (!target.startsWith(ROOT)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    fs.readFile(target, (error, body) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }
      response.writeHead(200, { "Content-Type": contentType(target) });
      response.end(body);
    });
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".md")) return "text/markdown; charset=utf-8";
  return "application/octet-stream";
}

function findChromium() {
  for (const candidate of ["/snap/bin/chromium", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

async function waitForCdp() {
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    try {
      await httpGet("/json/version");
      return;
    } catch (_) {
      await delay(100);
    }
  }
  throw new Error("Timed out waiting for Chromium CDP on port " + CDP_PORT);
}

function httpGet(requestPath) {
  return new Promise((resolve, reject) => {
    http.get({ host: "127.0.0.1", port: CDP_PORT, path: requestPath }, (response) => {
      let data = "";
      response.on("data", (chunk) => { data += chunk; });
      response.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function openPage(urlPath) {
  const raw = await cdpHttp("PUT", "/json/new?http://127.0.0.1:" + PORT + urlPath);
  return JSON.parse(raw);
}

function cdpHttp(method, requestPath) {
  return new Promise((resolve, reject) => {
    const request = http.request({ host: "127.0.0.1", port: CDP_PORT, path: requestPath, method }, (response) => {
      let data = "";
      response.on("data", (chunk) => { data += chunk; });
      response.on("end", () => resolve(data));
    });
    request.on("error", reject);
    request.end();
  });
}

async function connectCdp(webSocketDebuggerUrl) {
  const socketPath = new URL(webSocketDebuggerUrl).pathname;
  const key = crypto.randomBytes(16).toString("base64");
  const socket = net.connect(CDP_PORT, "127.0.0.1");
  let nextId = 1;
  let buffer = Buffer.alloc(0);
  let upgraded = false;
  const pending = new Map();

  socket.write(
    "GET " + socketPath + " HTTP/1.1\r\n" +
    "Host: 127.0.0.1:" + CDP_PORT + "\r\n" +
    "Upgrade: websocket\r\n" +
    "Connection: Upgrade\r\n" +
    "Sec-WebSocket-Key: " + key + "\r\n" +
    "Sec-WebSocket-Version: 13\r\n\r\n"
  );

  socket.on("data", (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    if (!upgraded) {
      const headerEnd = buffer.indexOf("\r\n\r\n");
      if (headerEnd === -1) return;
      upgraded = true;
      buffer = buffer.subarray(headerEnd + 4);
    }
    const decoded = decodeFrames(buffer);
    buffer = decoded.rest;
    for (const text of decoded.messages) {
      const message = JSON.parse(text);
      if (message.id && pending.has(message.id)) {
        pending.get(message.id).resolve(message);
        pending.delete(message.id);
      }
    }
  });

  await delay(100);

  return {
    send(method, params = {}) {
      const id = nextId++;
      socket.write(encodeFrame(JSON.stringify({ id, method, params })));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        setTimeout(() => {
          if (pending.has(id)) {
            pending.delete(id);
            reject(new Error("CDP timeout for " + method));
          }
        }, 10000);
      });
    },
    async eval(expression, returnByValue = false) {
      const result = await this.send("Runtime.evaluate", { expression, returnByValue });
      if (result.result.exceptionDetails) {
        throw new Error(result.result.exceptionDetails.exception?.description || result.result.exceptionDetails.text || "Runtime.evaluate failed");
      }
      return result.result.result;
    },
    close() {
      socket.end();
    },
  };
}

async function waitForLoad(cdp) {
  for (let i = 0; i < 40; i += 1) {
    const result = await cdp.eval("document.readyState", true);
    if (result.value === "complete") return;
    await delay(100);
  }
  throw new Error("Timed out waiting for page load");
}

function encodeFrame(text) {
  const payload = Buffer.from(text);
  let header;
  if (payload.length < 126) {
    header = Buffer.alloc(2);
    header[1] = 0x80 | payload.length;
  } else {
    header = Buffer.alloc(4);
    header[1] = 0x80 | 126;
    header.writeUInt16BE(payload.length, 2);
  }
  header[0] = 0x81;
  const mask = crypto.randomBytes(4);
  const masked = Buffer.alloc(payload.length);
  for (let i = 0; i < payload.length; i += 1) masked[i] = payload[i] ^ mask[i % 4];
  return Buffer.concat([header, mask, masked]);
}

function decodeFrames(buffer) {
  const messages = [];
  let offset = 0;
  while (offset + 2 <= buffer.length) {
    const first = buffer[offset];
    const second = buffer[offset + 1];
    let length = second & 0x7f;
    let cursor = offset + 2;
    if (length === 126) {
      if (cursor + 2 > buffer.length) break;
      length = buffer.readUInt16BE(cursor);
      cursor += 2;
    } else if (length === 127) {
      if (cursor + 8 > buffer.length) break;
      const high = buffer.readUInt32BE(cursor);
      const low = buffer.readUInt32BE(cursor + 4);
      if (high !== 0) throw new Error("Large websocket frames are not supported");
      length = low;
      cursor += 8;
    }
    const masked = Boolean(second & 0x80);
    let mask;
    if (masked) {
      if (cursor + 4 > buffer.length) break;
      mask = buffer.subarray(cursor, cursor + 4);
      cursor += 4;
    }
    if (cursor + length > buffer.length) break;
    let payload = buffer.subarray(cursor, cursor + length);
    if (masked) {
      const unmasked = Buffer.alloc(length);
      for (let i = 0; i < length; i += 1) unmasked[i] = payload[i] ^ mask[i % 4];
      payload = unmasked;
    }
    if ((first & 0x0f) === 1) messages.push(payload.toString());
    offset = cursor + length;
  }
  return { messages, rest: buffer.subarray(offset) };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
