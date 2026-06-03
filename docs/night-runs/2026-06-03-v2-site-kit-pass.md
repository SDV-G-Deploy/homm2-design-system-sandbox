# V2 Site Kit Pass

Date: 2026-06-03

## Reason

After the package-gate pause, the next useful direction is not package
scaffolding. It is a practical site kit: a small set of copyable templates that
make it realistic to assemble a new V2-styled small site quickly.

## Changes

- Added `docs/v2-site-kit-2026-06-03.md`.
- Added `starters/v2-site-starter/templates/README.md`.
- Added first copyable template:
  `starters/v2-site-starter/templates/product-landing/index.html`.
- Kept package extraction paused.
- Kept shared V2 CSS unchanged.

## Current Verdict

V2 can now be described as a fast internal site-building system, not just a
design-system sandbox. The first template covers small product, service, offer,
campaign, and course pages.

This still does not prove npm/package value. The next proof should be a timed
one-hour site build using the product landing template or one more planned
template.

## Next Template Candidates

1. Report / proof page.
2. Dashboard / status board.
3. Catalog / object list.
4. Civic route / map-like page.

## Verification

Completed:

- `git diff --check` OK.
- `node tools/regression-smoke.js` OK: 33 targets across 3 viewports.
- `node tools/visual-capture.js --target /starters/v2-site-starter/templates/product-landing/index.html --out tmp/v2-product-landing-template-2026-06-03 --selector body --selector .v2-topbar --selector .v2-hero --selector .v2-production-proof` OK.
- Focused capture offenders: desktop 0, mobile 0, narrow 0.
