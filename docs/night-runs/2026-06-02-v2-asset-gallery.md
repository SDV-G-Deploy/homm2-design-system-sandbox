# V2 Visual Slot Gallery - 2026-06-02

## Verdict

Added `v2/assets.html` as the system-facing visual asset gallery for V2 Images 2.0.

The page makes visual generation visible as a production lane: assets are shown as named slots with role, use, format, and fallback rather than as decorative files scattered through pages.

## Scope

New page:

- `v2/assets.html`

Updated:

- `v2/index.html` - adds the `Assets` route.
- `css/v2.recipes.css` - gallery-local recipe styles.
- `css/v2.responsive.css` - desktop gallery grid.
- `tools/regression-smoke.js` - adds the gallery to V2 smoke/static sanity.

## Canonical Slots Shown

- `threshold-ant-guild`
- `badge-product-map`
- `instrument-readiness-lens`
- `seal-archive-reading`
- `seal-build-brief`
- `texture-brief-grid`

## Boundary

The gallery is a reference/system page, not a production landing page.

It should not promote new components by itself. Its purpose is to make the visual asset lane inspectable and reusable for future production surfaces.

## Next Visual Candidates

- transparent object cutout;
- compact sprite sheet;
- bounded hero detail bitmap.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 20 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /v2/assets.html --out tmp/v2-asset-gallery-2026-06-02 --selector body --selector .v2-asset-slot-grid --selector .v2-asset-gallery-ledger`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
