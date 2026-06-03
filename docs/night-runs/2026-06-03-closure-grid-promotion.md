# Closure Grid Promotion - 2026-06-03

## Status

PASS - promoted only the narrow final-ledger closure layout after four production-like surfaces repeated the same grid and command spacing.

## Surfaces Compared

- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

## Promoted Pattern

New shared classes:

- `.v2-closure-ledger`
- `.v2-closure-grid`

Shared anatomy:

- final `v2-ledger` section after the proof block;
- section label plus `h2`;
- one left record/object slot plus one `v2-status-list`;
- one-column mobile stack;
- desktop `minmax(260px, .45fr) minmax(0, 1fr)` grid;
- final primary `.v2-command` with shared top spacing.

## Deliberately Not Promoted

- page-specific ending names: writ, reserve, send, publish;
- left-slot card styling and semantics;
- Charter's object cutout;
- Workshop date card;
- Intake/Offer note cards;
- final command copy and anchors;
- full page-ending content model.

## Decision Notes

This is a layout-helper promotion, not a content component. The repeated system move is route closure: the page turns into one concrete record and one action. The record itself remains local because the content model differs by surface.

The next promotion candidate should not be another broad page shell. A later pass may audit the left-slot record card only after more pages prove the same note/date/object styling contract without special cases.

## Files Changed

- `css/v2.components.css`
- `css/v2.recipes.css`
- `css/v2.responsive.css`
- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`
- `README.md`
- `docs/v2-library-decision-2026-06-02.md`
- `docs/night-runs/2026-06-03-closure-grid-promotion.md`

## Verification

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 25 targets across desktop/mobile/narrow
- Focused visual capture: PASS, 0 offenders at 1440x900, 390x844, and 360x740 for:
  - Site Charter Forge
  - Workshop Schedule Ledger
  - Service Intake Ledger
  - Offer Readiness Ledger
- Capture output: `tmp/closure-grid-promotion-2026-06-03/`
