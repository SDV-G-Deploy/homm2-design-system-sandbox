# Site Charter Forge Surface Pass - 2026-06-02

## Verdict

`sites/site-charter-forge/index.html` adds a second fresh production surface after the Images 2.0 lane and the Agent Readiness Ledger proof.

The page tests a different use case: turning a new landing/site request into a launch charter before design work starts. It is intentionally not another agent-task page. The core job is to define audience, offer, proof route, page recipe, and bounded visual asset slots before building a site.

## What Changed

- Added `sites/site-charter-forge/index.html`.
- Added page-local `.v2-charter-*` recipe CSS to `css/v2.recipes.css`.
- Added desktop responsive contracts for `.v2-charter-*` in `css/v2.responsive.css`.
- Added the page to `tools/regression-smoke.js` as `Site Charter Forge smoke` and to static HTML sanity checks.

## Visual Slots Reused

No new asset type was introduced.

Reused slots:

- `seal-archive-reading` for the charter authority mark.
- `state-meter-readiness` for launch readiness.
- `sprite-route-status` through shared `.v2-status-mark`.
- `texture-brief-grid` as bounded support texture.
- `object-brief-desk` as the final writ object.

## System Evidence

This page gives the kit more evidence in two places:

1. `.v2-status-mark` now appears on a third production-like surface after promotion.
2. The state-meter strip appears in another page recipe, but its wrapper still differs enough to defer promotion.

The page also keeps the V2 boundary intact: page layout and composition stay in recipe CSS, while only already-promoted primitives such as `.v2-route-list`, `.v2-status-mark`, `.v2-command`, `.v2-ledger`, `.v2-panel`, `.v2-status-list`, and `.v2-lens-module` are shared.

## Deferred Promotions

Do not promote `.v2-charter-hero`, `.v2-charter-board`, `.v2-charter-proof`, or `.v2-charter-writ` yet. They prove the recipe kit can create another surface, but they are still page-specific compositions.

The next possible audit target is a very narrow state-meter wrapper, but only after comparing Build Brief Desk, Agent Readiness Ledger, and Site Charter Forge screenshots.

## Verification

Verification run:

- `git diff --check`: passed.
- `node tools/regression-smoke.js`: passed, 22 targets across 3 viewports, `HOMM2 regression smoke OK`.
- `node tools/visual-capture.js --target /sites/site-charter-forge/index.html --out tmp/site-charter-forge-2026-06-02 --selector body --selector .v2-charter-hero --selector .v2-charter-board --selector .v2-charter-proof --selector .v2-charter-writ`: passed, offenders 0 on desktop/mobile/narrow.
- `node tools/visual-capture.js --target /sites/site-charter-forge/index.html#writ --out tmp/site-charter-forge-writ-2026-06-02 --selector body --selector .v2-charter-proof --selector .v2-charter-writ --selector .v2-charter-object`: passed, offenders 0 on desktop/mobile/narrow.
- Manual screenshot inspection: first screen and writ section remain readable on desktop, mobile, and narrow mobile; no text overlap or clipped command labels observed.
