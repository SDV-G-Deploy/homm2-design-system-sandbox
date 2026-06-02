# V2 Frame Corner Pass - 2026-06-02

## Verdict

Added the first compact frame-corner bitmap slot for V2 Images 2.0: `frame-corner-solar-brass`.

The asset proves a bounded frame-detail lane. It supports HoMM2-style framed panels and ledgers without replacing HTML, copy, state, or layout.

## Files

New assets:

- `assets/v2/frame-corner-solar-brass.svg`
- `assets/v2/frame-corner-solar-brass.webp`

Applied:

- `sites/build-brief-desk/index.html` through existing output frame
- `css/v2.recipes.css`
- `v2/assets.html`

Updated docs:

- `README.md`
- `docs/v2-asset-production-kit-2026-06-02.md`
- `docs/v2-closeout-checkpoint-2026-06-02.md`
- `docs/night-runs/2026-06-02-v2-asset-gallery.md`

## Slot Contract

- Slot name: `frame-corner-solar-brass`
- Type: compact frame corner bitmap
- Source: SVG
- Optimized output: WebP, 128x128
- Use: non-semantic frame detail for panels, ledgers, and output surfaces
- Fallback: SVG through picture in gallery; page remains readable if CSS image loading fails

## Boundary

Do not use frame corners as content, labels, or icons.

The asset can reinforce frame grammar on a surface that already has readable layout and meaning. It should stay small, corner-bound, and removable.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 20 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html#output --out tmp/frame-corner-build-brief-2026-06-02 --selector body --selector .v2-brief-output --selector .v2-brief-output-grid`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /v2/assets.html#frame-corner --out tmp/frame-corner-gallery-slot-2026-06-02 --selector body --selector #frame-corner --selector .v2-asset-frame-corner-preview`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`

Manual screenshot inspection:

- Output frame corners stay outside text and output-card content.
- Gallery frame-corner slot remains readable on desktop and mobile.
