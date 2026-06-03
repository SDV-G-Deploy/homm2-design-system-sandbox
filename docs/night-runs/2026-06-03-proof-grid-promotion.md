# Proof Grid Promotion - 2026-06-03

## Status

PASS - promoted the narrow production proof-grid anatomy after four production-like surfaces repeated it.

## Surfaces Compared

- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

## Promoted Pattern

New shared classes:

- `.v2-production-proof`
- `.v2-proof-grid`

Shared anatomy:

- dark proof section with a heading block;
- three proof cards;
- each card contains `.v2-status-mark`, label, strong line, and small note;
- one-column mobile layout;
- three-column desktop grid at the shared responsive boundary;
- no asset dependency beyond the already-promoted status sprite.

## Deliberately Not Promoted

- compact production hero shells;
- side signal modules;
- action pairs;
- final writ / reserve / publish blocks;
- page-specific proof copy and semantic accent.

Charter and Workshop keep only a page-local brass border accent override. Intake and Offer use the shared water-lens accent default.

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
- `docs/night-runs/2026-06-03-proof-grid-promotion.md`

## Verification

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 25 targets across desktop/mobile/narrow
- Focused visual capture: PASS, 0 offenders at 1440x900, 390x844, and 360x740 for:
  - Site Charter Forge
  - Workshop Schedule Ledger
  - Service Intake Ledger
  - Offer Readiness Ledger
- Capture output: `tmp/proof-grid-promotion-2026-06-03/`

## Next Recommendation

Watch the action pair next, but do not promote it in the same pass. It should get its own small audit because command wording, width, and placement may diverge across production pages.
