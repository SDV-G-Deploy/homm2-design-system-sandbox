# V2 Images 2 Practical Pass - 2026-06-02

## Verdict

Added the first post-roadmap Images 2.0 practical pass to `sites/build-brief-desk/`.

This pass creates two bounded visual element types:

- `seal-build-brief` - symbolic seal/object slot for the hero readiness card.
- `texture-brief-grid` - quiet repeatable material texture for the output surface.

The page remains CSS/HTML-owned. The assets do not contain UI labels, buttons, metrics, navigation, or readable page copy.

## Slots

### seal-build-brief

- Files:
  - `assets/v2/seal-build-brief.svg`
  - `assets/v2/seal-build-brief.webp`
- Owning surface: `sites/build-brief-desk/index.html`, `.v2-brief-seal`.
- Asset type: SVG source plus optimized WebP display path.
- Meaning: build brief order seal, proof gate, bounded route hardware.
- Fallback: SVG fallback through `<picture>`.
- Size: 384px WebP display asset, about 17 KB.

### texture-brief-grid

- Files:
  - `assets/v2/texture-brief-grid.svg`
  - `assets/v2/texture-brief-grid.webp`
- Owning surface: `sites/build-brief-desk/index.html`, `.v2-brief-output`.
- Asset type: SVG source plus optimized WebP texture tile.
- Meaning: sun-vellum brief grid with quiet water-line signal.
- Fallback: existing CSS gradients remain behind the WebP layer.
- Size: 180px WebP tile, about 5.3 KB.

## Page Change

`sites/build-brief-desk/index.html` now renders the hero seal through a `<picture>` element with WebP first and SVG fallback.

`css/v2.recipes.css` applies `texture-brief-grid.webp` only to `.v2-brief-output`, leaving the rest of the page structure unchanged.

## Boundary

This is not a component promotion pass.

The change proves the Visual Asset / Images 2.0 lane:

- named slot before production;
- source asset plus optimized display asset;
- fallback path;
- small size budget;
- no baked UI text;
- viewport verification required.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 19 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html --out tmp/images-2-practical-build-brief-2026-06-02 --selector body --selector .v2-brief-seal --selector .v2-brief-output`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html#output --out tmp/images-2-practical-build-brief-output-2026-06-02 --selector body --selector .v2-brief-output --selector .v2-brief-output-grid`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- WebP probe:
  - `seal-build-brief.webp`: `384x384`, about 17 KB
  - `texture-brief-grid.webp`: `180x180`, about 5.3 KB
