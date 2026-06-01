# HoMM2 x Solarpunk Design System Sandbox

Public sandbox for a **solar-civic fantasy interface**: HoMM2 material weight, frames, plaques, bevels, ledgers, and object UI combined with solar civic infrastructure, water sensing, and living-state feedback.

## Current Status

**V2 is the current recommended design system.**

Use `/v2/` for new work, future passes, and agent handoffs. V1 is preserved as research/archive material only; do not extend V1 by default.

Live entry points:

- Root gateway: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/
- V2 gateway: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/
- V2 primitive board: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/reference.html
- V2 applied dossier: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/dossier.html
- V2 launch page: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/trial.html
- V2 control board: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/control.html
- V2 ANT School production example: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/ant-school.html
- V1 archive: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v1-archive.html

## Why V2 Exists

The V1/V1.1 passes proved useful ideas, but they mixed too many approaches:

- light text sometimes landed on light backgrounds;
- mobile navigation was too large;
- HTML graphics looked weak in several sections;
- labels and multilingual text could wrap badly;
- the old layer was not reliable enough for quickly generating new beautiful pages.

V2 resets the system around portable primitives and acceptance gates rather than another decorative pass.

## V2 Canon

Current V2 proof surfaces:

- `v2/index.html` - compact mobile-first gateway and navigation contract
- `v2/reference.html` - primitive board for material roles and reusable components
- `v2/dossier.html` - applied dossier proof
- `v2/trial.html` - launch/product page proving the system outside a reference board
- `v2/control.html` - dense operational board proving V2 beyond a landing/product shape
- `v2/ant-school.html` - new-topic production example for ANT School / AI non-technical builders

Shared V2 system files:

- `css/v2.css`
- `assets/v2/solar-civic-gate.svg`
- `assets/v2/solar-badge.svg`
- `assets/v2/water-lens.svg`
- `assets/v2/vellum-grain.svg`

Current acceptance note:

- `docs/v2-acceptance-2026-06-01.md`
- `docs/v2-starter-kit-2026-06-01.md`

## Archive Boundary

V1 remains available for comparison and archaeology:

- `v1-archive.html`
- `solarpunk.html`
- `fairy-journeys.html`
- legacy fixture/reference files
- older reports under `docs/`

Treat those as research, pressure tests, or historical evidence. The old pages are not the recommended starting point for new design-system work.

## Working Rule

Use the workspace skill before broad visual changes:

- `/root/.openclaw/workspace/skills/homm2-solarpunk-design/SKILL.md`

Target phrase: **solar-civic fantasy interface**.

The system must not be solved with green gradients or palette changes alone. Every new pattern should preserve HoMM2 form and express Solarpunk as state, infrastructure, material, or behavior.

## Production Chrome Rule

V2 separates proof/demo chrome from production-like pages.

- Technical proof labels such as RU/EN content-budget badges are allowed on reference and development proof pages.
- Production-like pages use `v2-production-page`; their `data-proof-chrome="true"` labels are hidden from the first-viewport experience.
- Mobile production navigation must be short and directly useful to the page. It must not require horizontal scrolling for core routes.
- Sandbox routes such as Gate, Ref, Trial, and Control are allowed on demo/reference pages, but they are not a product navigation model.
- Production-like pages must not show proof/trial/reference vocabulary as customer-facing copy; use product words such as signal, route, desk, map, result, status, readiness, launch, and queue.

## Local Preview

Serve the folder with any static server:

```sh
python3 -m http.server 4173
```

Then open:

```txt
http://127.0.0.1:4173/
http://127.0.0.1:4173/v2/
```

## Verification

Run the dependency-free smoke harness before commits:

```sh
node tools/regression-smoke.js
```

For visual passes, also capture changed pages:

```sh
node tools/visual-capture.js \
  --target /v2/index.html \
  --out tmp/v2-check \
  --selector body \
  --selector .v2-topbar \
  --selector .v2-hero
```

## Deployment

Current default: push to `main` and wait for the GitHub Pages workflow.

The workflow is static-only:

- no dependency install
- artifact upload is the repo contents
- deploy target is GitHub Pages

## Latest V2 Surface

**V2 slice 06 - control board** adds a dense operational screen with route filters, queue rows, civic summaries, water-lens inspection, and separated command rail.

This is the first V2 proof that is closer to an app/work surface than to a presentation page.

## Current Starter Kit

**V2 slice 07 - starter-kit extraction** documents page modes, production chrome, content budgets, component inventory, and four page recipes:

- Product Landing
- Operational Board
- Dossier / Article
- Reference Board

Use `docs/v2-starter-kit-2026-06-01.md` before building the next applied page.

## Latest Production Example

**V2 slice 08 - ANT School production example** applies the starter kit to a real topic outside the sandbox vocabulary.

It uses production chrome, short mobile routes, no proof chips, and page content for AI non-technical builders.

## Latest Boundary Pass

**V2 slice 09 - production vocabulary and CSS boundary** removes visible demo/proof vocabulary from production-like pages and adds a CSS extraction map:

- `docs/v2-css-boundary-2026-06-01.md`

The next high-leverage step is one more real product recipe without sandbox vocabulary, then a physical CSS split if the shared class set stays stable.
