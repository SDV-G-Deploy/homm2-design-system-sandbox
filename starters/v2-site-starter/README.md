# V2 Site Starter

Copy this folder when starting a new HoMM2 x Solarpunk V2 site.

This starter is intentionally plain HTML. It is a production recipe starter, not an npm package or component library.

## Use

1. Copy starters/v2-site-starter/ into a new site folder.
2. Keep body.v2-production-page.
3. Keep mobile navigation to 2-3 short routes.
4. Replace the page content before changing the system CSS.
5. Add page-local recipe CSS only when shared V2 classes are not enough.
6. Run the V2 gates before publishing.

## V2 Gates

- node tools/regression-smoke.js
- visual capture on the changed page
- desktop, 390px mobile, and 360px narrow mobile checks
- no horizontal overflow
- no clipped visible labels
- no proof/trial/reference vocabulary in customer-facing copy
- assets follow docs/v2-asset-production-kit-2026-06-02.md

## Files

- index.html - starter landing page.
- assets/README.md - reserved place for site-local assets.

Keep shared motifs in the root assets/v2/ system folder when they become reusable.
