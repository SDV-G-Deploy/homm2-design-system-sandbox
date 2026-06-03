# V2 Promoted Helper Inventory

Date: 2026-06-03

## Result

Added `v2/components.html` as a focused promoted-helper inventory board.

The page makes the current shared component layer visible without creating a package or promoting new abstractions. Each helper is shown with:

- class name;
- ownership boundary;
- explicit non-scope warning;
- one minimal correct example;
- responsive/mobile-safe examples where the helper has layout behavior.

## Helpers Covered

- `.v2-route-list`
- `.v2-status-mark`
- `.v2-state-meter-strip`
- `.v2-signal-badge`
- `.v2-production-proof`
- `.v2-proof-grid`
- `.v2-action-pair`
- `.v2-closure-ledger`
- `.v2-closure-grid`
- `.v2-workflow-rows`
- `.v2-workflow-row`
- `.v2-package-grid`
- `.v2-package-card`
- `.v2-package-card-primary`

## Files Changed

- `v2/components.html`
- `v2/index.html`
- `v2/reference.html`
- `v2/assets.html`
- `css/v2.reference.css`
- `css/v2.responsive.css`
- `tools/regression-smoke.js`
- `README.md`
- `docs/v2-library-decision-2026-06-02.md`

## Boundary

This pass does not create a package, component API, or new shared helper.

It records the current repo-native contract: `css/v2.components.css` owns repeated helper anatomy, while `css/v2.reference.css` owns only the inventory-board presentation.

## Verification

Passed:

- `git diff --check`
- `node --check tools/regression-smoke.js`
- `node tools/regression-smoke.js` - 30 targets across desktop, mobile, and narrow viewports
- `node tools/visual-capture.js --target /v2/components.html --out tmp/v2-promoted-helper-inventory-2026-06-03 --selector body --selector .v2-helper-hero --selector .v2-helper-card --selector .v2-package-grid --selector .v2-workflow-row --selector .v2-route-list`

Focused visual capture produced 0 offenders at:

- 1440x900
- 390x844
- 360x740

The first smoke attempt caught a mobile overflow caused by a long hero word. The closeout version shortens the heading and passes with 0 overflow.

## Next

Use this board as the evidence surface for the next package-readiness review. The package decision remains conservative until a consuming project and a small written component API exist.
