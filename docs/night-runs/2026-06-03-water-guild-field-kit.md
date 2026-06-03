# Water Guild Field Kit

Date: 2026-06-03

Status: **closed**.

## Purpose

Build one new applied page from the updated V2 starter and the documentation-only package API sketch.

This pass checks whether the starter helper map is enough to create a fresh production-like page without reading older production page source first.

## Surface

- sites/water-guild-field-kit/index.html

## Source Inputs

- starters/v2-site-starter/
- starters/v2-site-starter/README.md
- docs/v2-package-api-sketch-2026-06-03.md
- v2/components.html

## Helper Use

Used directly from the starter/API sketch:

- RouteList via .v2-route-list
- ActionPair via .v2-action-pair
- SignalBadge via .v2-signal-badge
- ProofGrid via .v2-production-proof and .v2-proof-grid
- StatusMark variants inside proof cards

Not used:

- WorkflowRows, because this is not an app-like task surface.
- PackageGrid, because this is not a commercial tier comparison.
- any blocked package candidates such as HeroShell, GenericCard, or GenericRow.

## Design Notes

The page keeps the HoMM2 form through the existing V2 threshold frame, vellum ledger, bevelled commands, route rows, and proof cards.

The Solarpunk condition is carried by the topic and state language: water route, living state, runoff, dry corners, repair route, field audit, and seven-day state check.

No new generated assets were added. The pass reuses existing V2 bounded assets:

- solar-civic-gate.svg
- solar-badge.svg
- water-lens.svg

## Verdict

The starter helper map worked for a fresh applied surface.

This does not make V2 package-ready. It proves that the repo-native starter path is easier to use after the friction pass.

Package extraction still needs:

- a real consuming project or package-example fixture;
- import/build verification;
- final framework posture;
- a decision on whether draft helpers stay out of the first package.

## Verification

- git diff --check
- node --check tools/regression-smoke.js
- node tools/regression-smoke.js
- node tools/visual-capture.js --target /sites/water-guild-field-kit/index.html --out tmp/water-guild-field-kit-2026-06-03 --selector body --selector .v2-hero --selector .v2-route-list --selector .v2-action-pair --selector .v2-signal-badge --selector .v2-production-proof

