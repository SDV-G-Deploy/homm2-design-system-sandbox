# Workshop Schedule Ledger - 2026-06-02

## Verdict

Add a new production-like V2 surface for workshop offers and prove one bounded hero/detail visual slot.

The new page is `sites/workshop-schedule-ledger/index.html`. It is intentionally not another agent, brief, or charter page. It tests a schedule/seat/reserve surface: date, seats, practice output, reserve rule, and proof rows.

## Files Changed

- `sites/workshop-schedule-ledger/index.html`
- `css/v2.recipes.css`
- `css/v2.responsive.css`
- `tools/regression-smoke.js`
- `assets/v2/hero-detail-workshop-table.svg`
- `assets/v2/hero-detail-workshop-table.png`
- `v2/assets.html`
- `docs/v2-asset-production-kit-2026-06-02.md`
- `README.md`
- `docs/v2-closeout-checkpoint-2026-06-02.md`

## Visual Slot

New slot:

- `hero-detail-workshop-table`
- source: `assets/v2/hero-detail-workshop-table.svg`
- raster output: `assets/v2/hero-detail-workshop-table.png`
- applied in: `sites/workshop-schedule-ledger/index.html`

The slot is non-semantic. It supports the first-screen workshop signal, but meaning stays in heading copy, `.v2-route-list`, `.v2-status-list`, and reserve rows.

The built-in image generation tool was not available in this session, so this pass uses repo-native asset generation: SVG source plus a locally drawn PNG derivative. This keeps the Images 2.0 contract active without pretending the asset came from an external image model.

## Signal/Badge Evidence

The page adds local `.v2-workshop-signal` and `.v2-workshop-badge` patterns. They are deliberately not promoted. They provide one more evidence point for future compact signal/badge comparison, but the shared anatomy is still not settled.

## Required Verification

Run:

- `git diff --check`
- `node tools/regression-smoke.js`
- `node tools/visual-capture.js --target /sites/workshop-schedule-ledger/index.html --out tmp/workshop-schedule-ledger-2026-06-02 --selector body --selector .v2-workshop-hero --selector .v2-workshop-signal --selector .v2-workshop-badge`
- `node tools/visual-capture.js --target /v2/assets.html --out tmp/workshop-asset-gallery-2026-06-02 --selector body --selector #hero-detail`

Manual screenshot checks:

- first screen reads as schedule/seat/reserve offer, not generic landing;
- hero detail asset does not replace the route or reserve rows;
- `.v2-workshop-badge` is useful evidence but still page-local;
- mobile and narrow viewports have no horizontal overflow or clipped nav labels.

Verification result:

- `git diff --check`: passed.
- `node --check tools/regression-smoke.js`: passed.
- `node tools/regression-smoke.js`: passed, 23 targets across 3 viewports.
- `tools/visual-capture.js` for `sites/workshop-schedule-ledger/`: passed, 0 offenders at desktop/mobile/narrow.
- `tools/visual-capture.js` for `v2/assets.html#hero-detail`: passed, 0 offenders at desktop/mobile/narrow.
- Manual screenshot review: passed for desktop, mobile, narrow page proof and hero-detail gallery card.

## Next Candidate

After this pass, the next useful step is a compact signal/badge audit across:

- `sites/ant-school-landing-v2/index.html`
- `sites/product-map-field-note/index.html`
- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`

Promote only if the evidence shows a stable slot anatomy.
