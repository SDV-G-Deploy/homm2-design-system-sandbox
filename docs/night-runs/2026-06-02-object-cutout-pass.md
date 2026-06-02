# V2 Object Cutout Pass - 2026-06-02

## Verdict

Added the first transparent object cutout slot for V2 Images 2.0.

The new slot is `object-brief-desk`: a PNG alpha object with SVG source, used on `sites/build-brief-desk/` and exposed in `v2/assets.html`.

## Slot

- Slot name: `object-brief-desk`
- Files:
  - `assets/v2/object-brief-desk.svg`
  - `assets/v2/object-brief-desk.png`
- Owning surface: `sites/build-brief-desk/index.html`, `.v2-brief-output-object`
- Gallery surface: `v2/assets.html`, `.v2-asset-object-preview`
- Asset type: transparent PNG with SVG source
- Meaning: build brief as a bounded work object, not a UI screen
- Fallback: SVG picture fallback
- Size: 640x480 PNG, about 95 KB
- Forbidden content: no readable UI labels, buttons, metrics, prices, or navigation

## Boundary

This is an Images 2.0 visual asset pass, not a shared CSS component promotion.

The page keeps semantic content in HTML and layout in CSS. The object cutout can be removed without breaking the page's meaning or interaction path.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 20 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html#output --out tmp/object-cutout-build-brief-output-2026-06-02 --selector body --selector .v2-brief-output-object --selector .v2-brief-output-grid`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /v2/assets.html --out tmp/object-cutout-gallery-2026-06-02 --selector body --selector .v2-asset-object-preview --selector .v2-asset-slot-grid`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- PNG probe:
  - `object-brief-desk.png`: `640x480`, `rgba`, about 95 KB
