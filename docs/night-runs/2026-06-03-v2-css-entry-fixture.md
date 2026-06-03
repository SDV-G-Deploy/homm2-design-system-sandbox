# V2 CSS Entry Fixture

Date: 2026-06-03

Status: **closed**.

## Purpose

Create the first package-example/import fixture without creating an npm package.

The goal is to test whether a standalone page can load V2 through one CSS entry and still render stable helpers, assets, and responsive contracts.

## Added

- package-examples/v2-css-entry/index.html
- package-examples/v2-css-entry/v2-entry.css
- package-examples/v2-css-entry/README.md

## Delivery Shape

The fixture uses:

- one local CSS entry file;
- import of ../../css/v2.css;
- stable helper markup in a standalone HTML page;
- existing V2 assets through normal relative paths.

It does not add:

- package.json;
- npm scripts;
- dist output;
- bundler config;
- framework binding;
- registry publishing flow.

## Helpers Under Pressure

The fixture renders:

- RouteList
- ActionPair
- SignalBadge
- ProofGrid
- StatusMark

It intentionally keeps WorkflowRows and PackageGrid out because this fixture is not an app-like task surface or commercial tier comparison.

## Verdict

The CSS-entry fixture is useful as a verification target.

It does not make V2 package-ready. It only satisfies the first package-example/import pressure with the smallest reversible artifact.

Remaining package blockers:

- real consuming project value;
- framework posture;
- asset delivery rules outside this repo;
- final decision on draft helpers;
- versioning and release policy.

## Verification

- git diff --check
- node --check tools/regression-smoke.js
- node tools/regression-smoke.js
- node tools/visual-capture.js --target /package-examples/v2-css-entry/index.html --out tmp/v2-css-entry-fixture-2026-06-03 --selector body --selector .v2-hero --selector .v2-route-list --selector .v2-action-pair --selector .v2-signal-badge --selector .v2-production-proof

