#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const net = require("net");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.HOMM2_SMOKE_PORT || 4199);
const CDP_PORT = Number(process.env.HOMM2_CDP_PORT || 9339);
const CHROMIUM = process.env.CHROMIUM_BIN || findChromium();

const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["mobile", 390, 844],
  ["narrow", 360, 740],
];

const TARGETS = [
  ["ArticleHeroRecipe fixture", "/fixtures/article-hero-recipe.html", "articleHero"],
  ["DossierReadingRecipe fixture", "/fixtures/dossier-reading-recipe.html", "dossier"],
  ["FeedListingRecipe fixture", "/fixtures/feed-listing-recipe.html", "feed"],
  ["SiteShellNavigationRecipe fixture", "/fixtures/site-shell-navigation-recipe.html", "siteShell"],
  ["Fairy Journeys applied smoke", "/fairy-journeys.html", "fairy"],
  ["Reference manual smoke", "/reference.html#operator-mode", "reference"],
];

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});

async function main() {
  if (!CHROMIUM) throw new Error("Chromium not found. Set CHROMIUM_BIN.");

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

  const cleanup = () => {
    chromium.kill("SIGTERM");
    server.close();
  };
  process.on("exit", cleanup);

  try {
    await waitForCdp();
    const page = await openPage("/index.html");
    const cdp = await connectCdp(page.webSocketDebuggerUrl);
    const failures = [];

    staticSanity(failures);

    for (const target of TARGETS) {
      for (const viewport of VIEWPORTS) {
        const [viewportName, width, height] = viewport;
        await cdp.send("Emulation.setDeviceMetricsOverride", {
          width,
          height,
          deviceScaleFactor: 1,
          mobile: false,
        });
        await cdp.send("Page.navigate", { url: "http://127.0.0.1:" + PORT + target[1] });
        await waitForLoad(cdp);
        await cdp.eval("if (location.hash) { const target = document.querySelector(location.hash); if (target) window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY); } undefined", true);
        await delay(100);
        const result = await cdp.eval(pageCheckExpression(target[2]), true);
        reportMetric(target[0], target[2], viewportName, width, height, result.value, failures);
      }
    }

    cdp.close();

    if (failures.length) {
      console.error("\nSmoke failures:");
      for (const failure of failures) console.error("- " + failure);
      process.exitCode = 1;
      return;
    }

    console.log("\nHOMM2 regression smoke OK");
    console.log("Checked " + TARGETS.length + " targets across " + VIEWPORTS.length + " viewports.");
  } finally {
    cleanup();
  }
}

function staticSanity(failures) {
  const htmlFiles = [
    "index.html",
    "reference.html",
    "fairy-journeys.html",
    ...fs.readdirSync(path.join(ROOT, "fixtures")).filter((name) => name.endsWith(".html")).map((name) => "fixtures/" + name),
  ];
  const docFiles = [
    "README.md",
    "docs/design-system-operator-index-2026-05-15.md",
    "docs/regression-smoke-harness-pass-2026-05-16.md",
    "docs/reference-operator-link-sanity-pass-2026-05-18.md",
  ];

  for (const file of htmlFiles) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    const ids = new Set([...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
    const refs = [...source.matchAll(/\saria-(?:labelledby|describedby)="([^"]+)"/g)].flatMap((match) => match[1].split(/\s+/));
    for (const ref of refs) {
      if (!ids.has(ref)) failures.push(file + ": missing aria target #" + ref);
    }
    for (const href of [...source.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1])) {
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) continue;
      if (href.startsWith("#")) {
        if (!ids.has(href.slice(1))) failures.push(file + ": missing local href target " + href);
        continue;
      }
      const [rawPath, fragment] = href.split("#");
      const resolvedPath = resolveRepoPath(file, rawPath);
      if (!resolvedPath || !fs.existsSync(path.join(ROOT, resolvedPath))) {
        failures.push(file + ": missing local href path " + href);
        continue;
      }
      if (fragment && resolvedPath.endsWith(".html")) {
        const targetSource = fs.readFileSync(path.join(ROOT, resolvedPath), "utf8");
        const targetIds = new Set([...targetSource.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
        if (!targetIds.has(fragment)) failures.push(file + ": missing local href fragment " + href);
      }
    }
  }

  for (const file of docFiles) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    for (const rawPath of [...source.matchAll(/\`((?:docs|fixtures|tools)\/[^\`]+\.(?:md|html|js))\`/g)].map((match) => match[1])) {
      if (rawPath.includes("*")) continue;
      if (!fs.existsSync(path.join(ROOT, rawPath))) failures.push(file + ": missing repo path " + rawPath);
    }
  }

  const feed = fs.readFileSync(path.join(ROOT, "fixtures/feed-listing-recipe.html"), "utf8");
  if ((feed.match(/data-fixture-state="indexed-route-rows"/g) || []).length !== 1) {
    failures.push("fixtures/feed-listing-recipe.html: indexed route row state missing or duplicated");
  }
  if ((feed.match(/class="feed-row-index"/g) || []).length !== 3) {
    failures.push("fixtures/feed-listing-recipe.html: expected exactly three feed-row-index markers");
  }
}

function resolveRepoPath(fromFile, hrefPath) {
  if (!hrefPath) return normalizeRepoPath(fromFile);
  if (hrefPath.startsWith("/")) return normalizeRepoPath(hrefPath.slice(1));
  return normalizeRepoPath(path.join(path.dirname(fromFile), hrefPath));
}

function normalizeRepoPath(repoPath) {
  const normalized = path.normalize(repoPath).replace(/\\/g, "/");
  if (normalized.startsWith("../")) return null;
  return normalized;
}

function reportMetric(label, check, viewportName, width, height, result, failures) {
  const prefix = label + " @ " + viewportName;
  if (!result || result.error) {
    failures.push(prefix + ": " + (result ? result.error : "no result"));
    return;
  }
  if (result.overflow > 0) failures.push(prefix + ": horizontal overflow " + result.overflow + "px");
  if (result.primaryTop !== null && result.primaryTop > height) {
    failures.push(prefix + ": primary surface starts below viewport at " + result.primaryTop + "px");
  }
  if (check === "feed" && result.indexedRows !== 3) {
    failures.push(prefix + ": expected three indexed feed rows, got " + result.indexedRows);
  }
  if (check === "feed" && result.indexBoxes.some((box) => box.width !== 38 || box.height !== 38)) {
    failures.push(prefix + ": indexed feed row boxes are not stable 38x38");
  }
  if (check === "fairy" && width <= 390 && !result.navOneLine) {
    failures.push(prefix + ": fairy utility nav labels are wrapping");
  }
  console.log(prefix + ": overflow=" + result.overflow + ", primaryTop=" + result.primaryTop);
}

function pageCheckExpression(check) {
  return "(() => {" +
    "const box=(selector)=>{const node=document.querySelector(selector);if(!node)return null;const rect=node.getBoundingClientRect();return{top:Math.round(rect.top),width:Math.round(rect.width),height:Math.round(rect.height)}};" +
    "const common={overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,primaryTop:null,indexedRows:0,indexBoxes:[],navOneLine:true};" +
    "const check=" + JSON.stringify(check) + ";" +
    "if(check==='articleHero') common.primaryTop=box('[data-primary-recipe=\"article-hero\"] [data-frame-rank=\"primary\"], [data-recipe=\"article-hero\"] [data-frame-rank=\"primary\"]')?.top??null;" +
    "if(check==='dossier') common.primaryTop=box('[data-primary-recipe=\"dossier-reading\"] [data-frame-rank=\"primary\"], [data-recipe=\"dossier-reading\"] [data-frame-rank=\"primary\"]')?.top??null;" +
    "if(check==='feed'){common.primaryTop=box('[data-primary-recipe=\"feed-listing\"] [data-frame-rank=\"primary\"], [data-recipe=\"feed-listing\"] [data-frame-rank=\"primary\"]')?.top??null;const rows=[...document.querySelectorAll('[data-fixture-state=\"indexed-route-rows\"] [data-row-indexed]')];common.indexedRows=rows.length;common.indexBoxes=rows.map((row)=>{const rect=row.querySelector('.feed-row-index').getBoundingClientRect();return{width:Math.round(rect.width),height:Math.round(rect.height)}});}" +
    "if(check==='siteShell') common.primaryTop=box('[data-frame-rank=\"primary\"]')?.top??null;" +
    "if(check==='fairy'){common.primaryTop=box('.fairy-first-screen [data-frame-rank=\"primary\"]')?.top??null;common.navOneLine=[...document.querySelectorAll('.fairy-nav a')].every((link)=>link.getClientRects().length===1&&link.scrollWidth<=link.clientWidth+1);}" +
    "if(check==='reference') common.primaryTop=box('#operator-mode')?.top??null;" +
    "return common;" +
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
      if (result.result.exceptionDetails) throw new Error(result.result.exceptionDetails.text || "Runtime.evaluate failed");
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
      throw new Error("Large websocket frames are not supported");
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
