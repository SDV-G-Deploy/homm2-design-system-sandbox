# Build Brief Desk Surface Pass - 2026-06-02

## Purpose

Add one more production-like V2 surface after the Images 2.0 documentation pass.

The target was not another landing page. It was a compact work surface that checks whether V2 can support practical ANT-adjacent workflows.

## Added Surface

- `sites/build-brief-desk/index.html`

The page turns a product map into an agent-ready build brief:

- outcome clause;
- work boundary;
- proof gate;
- stop rule;
- readiness lens;
- output rail for agent task, acceptance gate, and handoff note.

## System Changes

- Added page-local recipe classes under `.v2-brief-*` in `css/v2.recipes.css`.
- Added desktop layout contracts for the new recipe in `css/v2.responsive.css`.
- Added the page to `tools/regression-smoke.js`.
- Updated README, V2 acceptance, starter-kit, and closeout checkpoint docs.

## Asset Use

No new bitmap asset was created in this pass.

The page reuses existing V2 image slots:

- `badge-product-map.svg`
- `instrument-readiness-lens.svg`

This keeps the pass focused on production surface proof rather than asset production.

## Verification

- `git diff --check`
- `node tools/regression-smoke.js`
  - 19 targets
  - desktop, mobile, narrow
  - result: OK
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html`
  - desktop 1440x900: offenders 0
  - mobile 390x844: offenders 0
  - narrow 360x740: offenders 0

