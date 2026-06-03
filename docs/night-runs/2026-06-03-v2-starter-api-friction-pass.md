# V2 Starter API Friction Pass

Date: 2026-06-03

Status: **closed**. This is a starter-copy review, not package scaffolding.

## Purpose

Check whether a new page can start from starters/v2-site-starter/ while following the promoted-helper API sketch without reading production page source first.

## Inputs

- starters/v2-site-starter/
- v2/components.html
- docs/v2-package-api-sketch-2026-06-03.md
- docs/v2-starter-kit-2026-06-01.md
- docs/v2-library-decision-2026-06-02.md

## Findings

### Friction 1 - helper choice was implicit

Before this pass, the starter README explained production chrome and gates, but did not say which promoted helpers should be preferred for common starter needs.

Result: **fixed in docs**.

The README now points to:

- .v2-route-list
- .v2-action-pair
- .v2-signal-badge
- .v2-status-list
- optional .v2-production-proof / .v2-proof-grid
- optional .v2-state-meter-strip
- draft-only .v2-workflow-rows
- draft-only .v2-package-grid

### Friction 2 - copyable HTML underused promoted helpers

Before this pass, the starter HTML used .v2-route-list, but did not show the newer command-pair or signal-badge helper in the copyable first page.

Result: **fixed in starter HTML**.

The starter now demonstrates:

- .v2-route-list for ordered product steps;
- .v2-action-pair for primary + secondary command;
- .v2-signal-badge for compact icon + state copy.

### Friction 3 - package API pressure remains limited

This pass reduces starter-copy friction, but it does not prove a public package API.

Result: **package extraction remains blocked**.

The current delivery path remains repo-native:

- copy starters/v2-site-starter/;
- read docs/v2-starter-kit-2026-06-01.md;
- choose helpers from v2/components.html;
- use docs/v2-package-api-sketch-2026-06-03.md as a contract sketch;
- keep page recipes local until they repeat.

## Package Readiness Impact

This pass satisfies the documented precondition to identify and reduce starter-copy friction.

It does **not** satisfy:

- a real consuming project;
- import/build verification;
- framework posture;
- final stability for WorkflowRows;
- final stability for PackageGrid.

## Verdict

The starter is now a better copy path for V2 production pages.

V2 is still not ready for npm/package extraction. The next useful package-pressure step is either:

1. Build one new applied page from the updated starter and API sketch.
2. Create a tiny package-example fixture that imports/copies CSS and validates the first likely delivery shape.

## Verification

- git diff --check
- node --check tools/regression-smoke.js
- node tools/regression-smoke.js
- node tools/visual-capture.js --target /starters/v2-site-starter/index.html --out tmp/v2-starter-api-friction-2026-06-03 --selector body --selector .v2-hero --selector .v2-action-pair --selector .v2-signal-badge --selector .v2-route-list

