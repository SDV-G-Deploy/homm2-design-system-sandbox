# V2 Sprite Route Status Pass - 2026-06-02

## Verdict

Added the first compact sprite-sheet asset for V2 Images 2.0: `sprite-route-status`.

The asset proves a small status-mark lane, not a UI replacement. Existing text, numbers, and acceptance meaning remain in HTML; the sprite only adds a reusable visual mark layer.

## Files

New assets:

- `assets/v2/sprite-route-status.svg`
- `assets/v2/sprite-route-status.webp`

Applied:

- `sites/build-brief-desk/index.html`
- `css/v2.recipes.css`
- `v2/assets.html`

Updated docs:

- `README.md`
- `docs/v2-asset-production-kit-2026-06-02.md`
- `docs/v2-closeout-checkpoint-2026-06-02.md`
- `docs/night-runs/2026-06-02-v2-asset-gallery.md`

## Slot Contract

- Slot name: `sprite-route-status`
- Type: compact sprite sheet
- Source: SVG
- Optimized output: WebP, 512x128
- Use: route/status marks for task, lens-check, acceptance, and handoff states
- Fallback: SVG through picture in gallery; page semantics remain readable if CSS image loading fails

## Boundary

Do not use the sprite to replace labels, numbers, or state copy.

The marks are allowed beside existing status cards, route rows, and compact ledgers. They should remain small enough to support scan speed without becoming decorative hero art.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 20 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html#output --out tmp/sprite-route-status-build-brief-2026-06-02 --selector body --selector .v2-brief-output-grid --selector .v2-brief-status-mark`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /v2/assets.html --out tmp/sprite-route-status-gallery-2026-06-02 --selector body --selector .v2-asset-sprite-preview --selector .v2-asset-slot-grid`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /v2/assets.html#sprite --out tmp/sprite-route-status-gallery-slot-2026-06-02 --selector body --selector #sprite --selector .v2-asset-sprite-preview`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`

Manual screenshot inspection:

- Build Brief output marks are visible and do not compete with the output-card text.
- Gallery sprite slot is visible at `#sprite`, and mobile layout remains readable.
