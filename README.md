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
- V2 Canopy Clinic service example: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/canopy-clinic.html
- ANT School landing v2: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/ant-school-landing-v2/
- Build Brief Desk: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/build-brief-desk/
- Service Intake Ledger: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/service-intake-ledger/
- Offer Readiness Ledger: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/offer-readiness-ledger/
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
- `v2/canopy-clinic.html` - compact service/booking page with care route and visit signal
- `sites/ant-school-landing-v2/index.html` - first real-site proof built from the V2 starter path
- `sites/service-intake-ledger/index.html` - diagnostic intake surface for service requests
- `sites/offer-readiness-ledger/index.html` - publication readiness surface for offer pages

Shared V2 system files:

- `css/v2.css` - compatibility entrypoint
- `css/v2.tokens.css`
- `css/v2.shell.css`
- `css/v2.components.css`
- `css/v2.reference.css`
- `css/v2.recipes.css`
- `css/v2.responsive.css`
- `assets/v2/solar-civic-gate.svg`
- `assets/v2/solar-badge.svg`
- `assets/v2/water-lens.svg`
- `assets/v2/vellum-grain.svg`
- `assets/v2/threshold-ant-guild.svg`
- `assets/v2/badge-product-map.svg`
- `assets/v2/instrument-readiness-lens.svg`
- `starters/v2-site-starter/`
- `sites/build-brief-desk/index.html`

Current acceptance note:

- `docs/v2-acceptance-2026-06-01.md`
- `docs/v2-starter-kit-2026-06-01.md`
- `docs/v2-asset-production-kit-2026-06-02.md`
- `docs/v2-library-decision-2026-06-02.md`

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

The copyable site starter lives in `starters/v2-site-starter/`. It is the recommended starting folder for new V2 landing pages before a component/npm package exists.

## Latest Production Example

**V2 slice 08 - ANT School production example** applies the starter kit to a real topic outside the sandbox vocabulary.

It uses production chrome, short mobile routes, no proof chips, and page content for AI non-technical builders.

The current landing v1 strengthens this example with a solar-civic threshold asset, a clearer builder route, an output desk, and one focused final CTA.

## Latest Boundary Pass

**V2 slice 09 - production vocabulary and CSS boundary** removes visible demo/proof vocabulary from production-like pages and adds a CSS extraction map:

- `docs/v2-css-boundary-2026-06-01.md`

The next high-leverage step is one more real product recipe without sandbox vocabulary, then a physical CSS split if the shared class set stays stable.

## Latest Service Recipe

**V2 slice 10 - Canopy Clinic service recipe** adds a compact service/booking page for yard water care.

It proves a lighter first screen, page-local navigation, a care route, a visit signal, and a booking ledger without sandbox vocabulary.

## Latest CSS Split

**V2 slice 11 - physical CSS split** turns `css/v2.css` into a compatibility entrypoint and moves V2 authoring into six ordered CSS layers:

- tokens;
- shell;
- shared components;
- reference-only styles;
- page recipes;
- responsive contracts.

## Current Asset Production Kit

**V2 asset production kit** defines how to create non-HTML visual elements for the system: threshold assets, textures, badges, seals, water-lens instruments, transparent object cutouts, compact sprite sheets, frame corner bitmaps, state meter strips, bitmap hero details, naming, formats, optimization, and visual QA.

Use `docs/v2-asset-production-kit-2026-06-02.md` before adding generated PNG/WebP/SVG assets beyond the existing V2 motifs. It now includes the canonical **V2 Images 2.0 Mode** contract for bitmap/image-assisted slots.

Latest asset production pass: `assets/v2/state-meter-readiness.svg` and `assets/v2/state-meter-readiness.webp` are now applied across Build Brief Desk, Agent Readiness Ledger, and Site Charter Forge as a repeatable state meter strip.

V2 now treats visual generation as a parallel lane to component promotion. Components move repeated HTML/CSS into `css/v2.components.css`; generated visual elements move through named Images 2.0 slots such as seals, badges, textures, instruments, transparent cutouts, compact sprites, frame corners, state meters, and bounded hero details.

Latest Images 2.0 practical report: `docs/night-runs/2026-06-02-images-2-practical-pass.md`.
Latest object cutout report: `docs/night-runs/2026-06-02-object-cutout-pass.md`.
Latest sprite sheet report: `docs/night-runs/2026-06-02-sprite-route-status-pass.md`.
Latest frame corner report: `docs/night-runs/2026-06-02-frame-corner-pass.md`.
Latest state meter report: `docs/night-runs/2026-06-02-state-meter-pass.md`.
Latest state meter helper report: `docs/night-runs/2026-06-02-state-meter-strip-promotion.md`.
Latest hero detail report: `docs/night-runs/2026-06-02-workshop-schedule-ledger.md`.
Current visual lane wrap-up: `docs/night-runs/2026-06-02-v2-visual-lane-wrap-up.md`.

The visual slot gallery lives at `v2/assets.html`. It shows canonical Images 2.0 slots with role, use, format, and fallback so future surfaces can choose visual elements from a visible system inventory.

## Latest Real Site Proof

**ANT School landing v2** lives in `sites/ant-school-landing-v2/` and is the first separate real-site proof built from the V2 starter direction.

It adds the first asset-pass motifs from the asset production kit: `threshold-ant-guild.svg`, `badge-product-map.svg`, and `instrument-readiness-lens.svg`.

## Latest Article / Dossier Site Proof

**Product Map Field Note** lives in `sites/product-map-field-note/`.

It proves the V2 production dossier/article recipe on a real ANT-adjacent topic: a readable field note, product-map route rows, readiness lens, and one compact action path without sandbox vocabulary.

## Latest Work Surface Proof

**Build Brief Desk** lives in `sites/build-brief-desk/`.

It proves a compact production work surface for turning a product map into an agent-ready build brief: bounded outcome, work boundary, proof gate, stop rule, readiness lens, and handoff output.

## Latest Production Surface Proof

**Agent Readiness Ledger** lives in `sites/agent-readiness-ledger/`.

It proves the current visual slot lane can move into a fresh production-like page without inventing a new asset type: seal, state meter, sprite marks, frame corners, and texture support a task-readiness audit surface.

**Site Charter Forge** lives in `sites/site-charter-forge/`.

It proves another fresh production-like page shape: a launch charter surface for turning a new landing/site request into audience, offer, proof route, recipe, and bounded visual asset slots before design work starts.

**Workshop Schedule Ledger** lives in `sites/workshop-schedule-ledger/`.

It proves a schedule/seat/reserve page shape for workshop offers and adds the bounded `hero-detail-workshop-table` visual slot as an Image 2.0 WebP with SVG fallback.

**Offer Readiness Ledger** lives in `sites/offer-readiness-ledger/`.

It proves a publication-readiness page shape for checking an offer's audience, promise, proof, gate, and stop-rule before release while repeating the proof-grid anatomy unchanged for future promotion evidence.

**Package Ledger** lives in `sites/package-ledger/`.

It proves a commercial pricing/package page shape for bounded service offers: package scope, starting price, included/excluded boundary, upgrade rule, proof requirement, and one purchase route without adding a new visual asset slot.

## Current Checkpoint

The current closeout checkpoint is `docs/v2-closeout-checkpoint-2026-06-02.md`.

Use it before the next broad pass. It records current heads, live proofs, verification, cleanliness, and the recommended next-pass order.

## Current Library Decision

V2 should remain a repo-native production recipe kit for now, not an npm package or formal component library.

The decision record is `docs/v2-library-decision-2026-06-02.md`. Promotion results so far:

- `docs/night-runs/2026-06-02-route-list-promotion.md`: `.v2-route-list` moved from recipe CSS into shared components after proving stable across three production surfaces.
- `docs/night-runs/2026-06-02-promotion-audit-v2-1.md`: `.v2-status-mark` moved into shared components after Build Brief Desk and Agent Readiness Ledger repeated the same sprite/status marker role.
- `docs/night-runs/2026-06-02-state-meter-strip-promotion.md`: `.v2-state-meter-strip` moved the repeated `state-meter-readiness` image frame into shared components while keeping meter panels and signal wrappers local.
- `docs/night-runs/2026-06-02-signal-badge-promotion.md`: `.v2-signal-badge` promoted only the compact icon + label/value badge anatomy after ANT School Landing V2, Product Map Field Note, and Workshop Schedule Ledger repeated the same slot.
- `docs/night-runs/2026-06-03-proof-grid-promotion.md`: `.v2-production-proof` and `.v2-proof-grid` promoted only the proof heading plus three-card evidence anatomy after four production-like surfaces repeated it.
- `docs/night-runs/2026-06-03-action-pair-promotion.md`: `.v2-action-pair` promoted only the two-command hero action layout after four production-like surfaces repeated the same primary/secondary command pair.
- `docs/night-runs/2026-06-03-closure-grid-promotion.md`: `.v2-closure-ledger` and `.v2-closure-grid` promoted only the final-ledger layout and command spacing after four production-like surfaces repeated the same closure anatomy.
- `docs/night-runs/2026-06-03-v2-wrap-around.md`: current wrap-around checkpoint for promoted/deferred primitives, Images 2.0 lane, and the next autonomous direction.
