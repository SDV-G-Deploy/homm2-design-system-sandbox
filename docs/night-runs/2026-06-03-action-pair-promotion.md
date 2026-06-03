# Action Pair Promotion - 2026-06-03

## Status

PASS - promoted the narrow two-command action pair helper after four production-like surfaces repeated the same layout.

## Surfaces Compared

- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

## Promoted Pattern

New shared class:

- `.v2-action-pair`

Shared anatomy:

- two `.v2-command` links directly under hero copy;
- primary route commit plus secondary route inspection;
- one-column mobile stack;
- desktop `repeat(2, minmax(0, 220px))` grid;
- no asset dependency.

## Deliberately Not Promoted

- hero shell layout;
- side signal module;
- final writ / reserve / publish blocks;
- command text semantics;
- page-specific destination anchors.

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
- `docs/night-runs/2026-06-03-action-pair-promotion.md`

## Verification

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 25 targets across desktop/mobile/narrow
- Focused visual capture: PASS, 0 offenders at 1440x900, 390x844, and 360x740 for:
  - Site Charter Forge
  - Workshop Schedule Ledger
  - Service Intake Ledger
  - Offer Readiness Ledger
- Capture output: `tmp/action-pair-promotion-2026-06-03/`

## Next Recommendation

Do not promote the full hero shell next by default. The side signal module still has varied asset/content height. The next useful audit should look at final writ/reserve blocks or keep building production surfaces until a narrower candidate repeats.
