# Package Ledger Production Surface - 2026-06-03

## Status

PASS - added a distinct V2 production-like pricing surface for bounded service packages.

## Page

- `sites/package-ledger/index.html`

## Purpose

This page tests whether the HoMM2 x Solarpunk V2 recipe kit can handle commercial/pricing content without becoming a generic card grid.

The surface turns pricing into a route ledger:

- package scope;
- named starting price;
- included/excluded boundary;
- upgrade/stop rule;
- proof and handoff requirement;
- one purchase route.

## Visual / Asset Decision

No new generated image was added.

The page reuses existing canonical V2 assets:

- `seal-build-brief.svg` / `seal-build-brief.webp`
- `state-meter-readiness.svg` / `state-meter-readiness.webp`
- `solar-badge.svg`
- `texture-brief-grid.webp`
- promoted sprite status marks through `.v2-status-mark`

This keeps the pass focused on a new production surface instead of expanding the Images 2.0 lane. The current asset-production rules and formats are already documented in `docs/v2-asset-production-kit-2026-06-02.md` and visible in `v2/assets.html`.

## Reused Shared Grammar

- `.v2-action-pair`
- `.v2-route-list`
- `.v2-signal-badge`
- `.v2-state-meter-strip`
- `.v2-production-proof`
- `.v2-proof-grid`
- `.v2-closure-ledger`
- `.v2-closure-grid`

## Page-Local Grammar

- `.v2-pricing-*`
- `.v2-package-grid`
- `.v2-package-card`

Package cards remain page-local because this is the first commercial pricing proof. Do not promote them until another distinct surface repeats the same pricing anatomy.

## Verification

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 26 targets across desktop/mobile/narrow
- Focused visual capture: PASS, 0 offenders at 1440x900, 390x844, and 360x740
- Capture output: `tmp/package-ledger-2026-06-03/`

## Next Recommendation

Use this page as evidence, not as an immediate promotion source. The next useful step is either a second commercial surface that repeats the package-card anatomy or a different app-like work queue surface to test V2 density outside landing/pricing flows.
