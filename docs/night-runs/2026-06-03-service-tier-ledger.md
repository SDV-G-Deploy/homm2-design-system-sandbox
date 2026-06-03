# Service Tier Ledger Production Surface - 2026-06-03

## Summary

Added `sites/service-tier-ledger/index.html` as a second commercial production surface after Package Ledger.

This is deliberately not a package-card promotion. It creates the missing evidence for a later independent package-card audit by using the same package-card anatomy under a different buying pressure: monthly service tiers / retainer scope instead of one-off bounded packages.

## Surface Role

Service Tier Ledger tests whether V2 commercial grammar can express:

- monthly retainer tiers;
- cadence and cap;
- included/excluded monthly work;
- overflow gate;
- written monthly archive;
- one start route.

## Reused System Grammar

The page reuses existing V2 helpers and visual slots:

- `.v2-pricing-shell`
- `.v2-pricing-hero`
- `.v2-pricing-board`
- `.v2-package-grid`
- `.v2-package-card`
- `.v2-package-card-primary`
- `.v2-action-pair`
- `.v2-route-list`
- `.v2-state-meter-strip`
- `.v2-signal-badge`
- `.v2-production-proof`
- `.v2-proof-grid`
- `.v2-closure-ledger`
- `.v2-closure-grid`

No new image slot was added. The page reuses `seal-archive-reading`, `state-meter-readiness`, `solar-badge`, and existing status marks.

## Package-Card Evidence

Service Tier Ledger repeats Package Ledger's card anatomy:

- eyebrow;
- title;
- price/period line;
- short scope paragraph;
- one emphasized middle card;
- three-column desktop grid;
- single-column mobile stack.

This now gives the system two distinct commercial surfaces for a later package-card audit:

- `sites/package-ledger/index.html` - one-off bounded service packages;
- `sites/service-tier-ledger/index.html` - monthly service/retainer tiers.

Do not promote `.v2-package-card` inside this pass. The correct next step is an independent audit comparing the two surfaces and deciding whether the helper can move from recipe CSS into `css/v2.components.css` without absorbing pricing semantics.

## Verification

Passed before closeout:

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 29 targets across desktop/mobile/narrow
- full-page visual capture for Service Tier Ledger: PASS, 0 offenders at 1440x900, 390x844, and 360x740
- package-card-focused visual capture: PASS, 0 offenders at 390x844 and 360x740

Capture output:

- `tmp/service-tier-ledger-2026-06-03/`
- `tmp/service-tier-ledger-cards-2026-06-03/`
