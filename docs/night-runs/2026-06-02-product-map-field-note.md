# Product Map Field Note

## Goal

Prove the V2 production dossier/article recipe on a real ANT-adjacent topic, separate from sandbox pages and landing/service flows.

## Changes

- Added `sites/product-map-field-note/index.html`.
- Added page-local article/dossier recipe CSS to `css/v2.recipes.css`.
- Added responsive contracts to `css/v2.responsive.css`.
- Added the new page to `tools/regression-smoke.js`.
- Updated README, V2 acceptance, and the starter kit recipe notes.

## Design Notes

The page is RU-first and production-like. It uses compact product navigation, a readable field-note article body, product-map route rows, readiness lens, and one action ledger.

It reuses existing controlled SVG motifs instead of adding new assets, because this pass tests the dossier/article recipe rather than the asset pipeline.
