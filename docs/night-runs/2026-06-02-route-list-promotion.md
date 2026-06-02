# V2 Route List Promotion - 2026-06-02

## Verdict

Promoted `.v2-route-list` from page recipe CSS into the shared V2 component layer.

This is the first deliberately small promotion after the library decision pass. V2 remains a repo-native production recipe kit, not an npm package or formal component library.

## Evidence

`.v2-route-list` appears with the same meaning and near-identical HTML grammar across three production surfaces:

- `sites/ant-school-landing-v2/index.html` - method route rows.
- `sites/product-map-field-note/index.html` - product-map route rows.
- `sites/build-brief-desk/index.html` - brief queue rows.

The pattern means an ordered route, method, or queue list. It is not page flavor.

## CSS Change

Moved the base rules for these selectors:

- `.v2-route-list`
- `.v2-route-list li`
- `.v2-route-list li > span`
- `.v2-route-list div`
- `.v2-route-list strong`
- `.v2-route-list small`
- `.v2-route-list em`

From:

- `css/v2.recipes.css`

To:

- `css/v2.components.css`

No HTML class rename was needed.

## Boundary Note

Recipe-specific overrides remain in `css/v2.recipes.css`, for example `.v2-note-map .v2-route-list`.

This keeps the shared component stable while allowing individual page recipes to control placement and surrounding composition.

## Visual Generation Lane

This promotion pass does not replace Images 2.0.

V2 now has two parallel development lanes:

1. **Component promotion lane** - move repeated, stable HTML/CSS patterns into `css/v2.components.css`.
2. **Visual asset lane** - create or generate bounded visual elements through `docs/v2-asset-production-kit-2026-06-02.md`.

The visual asset lane covers:

- SVG symbols and seals;
- PNG/WebP bitmap details;
- transparent object cutouts;
- small sprite-like sheets;
- vellum/fiber/water/metal textures;
- hero threshold assets;
- instrument and badge imagery.

Assets should be generated only for named slots, not as whole-page decoration.

## Verification

Passed:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 19 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/ant-school-landing-v2/index.html --out tmp/route-list-promotion-ant-2026-06-02 --selector body --selector .v2-route-list --selector .v2-antv2-method`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /sites/product-map-field-note/index.html --out tmp/route-list-promotion-note-2026-06-02 --selector body --selector .v2-route-list --selector .v2-note-map`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html --out tmp/route-list-promotion-brief-2026-06-02 --selector body --selector .v2-route-list --selector .v2-brief-board`
  - desktop: offenders `0`
  - mobile: offenders `0`
  - narrow: offenders `0`
