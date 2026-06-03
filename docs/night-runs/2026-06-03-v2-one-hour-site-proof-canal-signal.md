# V2 One-Hour Site Proof - Canal Signal Desk

Date: 2026-06-03

## Reason

This pass tests the new Site Kit direction by creating a fresh small product
site from the first copyable product landing template instead of designing a new
page from zero.

## Site

- Path: `sites/canal-signal-desk/index.html`
- Template source: `starters/v2-site-starter/templates/product-landing/`
- Topic: Canal Signal Desk, a compact launch-page service for turning a rough
  offer into one route-ready page.
- Shared CSS changed: no.
- Package work changed: no.

## What The Template Proved

The template gave enough structure for a separate small site:

- topbar with 3 short routes;
- hero threshold with one offer signal;
- `ActionPair` for primary/secondary commands;
- `RouteList` for the working method;
- `SignalBadge` for compact readiness;
- `ProofGrid` and `StatusMark` for facts;
- final ledger with one action.

The work mostly became content replacement, asset-path adjustment, and route
wording. That supports the "fast internal site kit" direction.

## Friction

Observed friction remains starter-copy friction, not package pressure:

- asset paths must be adjusted manually for the destination folder depth;
- the template still requires human judgment for product nouns and route labels;
- no generator exists for turning a brief into page copy.

These are useful next-site-kit problems, but they do not justify npm/package
extraction yet.

## Verification

Completed:

- `git diff --check` OK.
- `node --check tools/regression-smoke.js` OK.
- `node tools/regression-smoke.js` OK: 34 targets across 3 viewports.
- `node tools/visual-capture.js --target /sites/canal-signal-desk/index.html --out tmp/canal-signal-desk-2026-06-03 --selector body --selector .v2-topbar --selector .v2-hero --selector .v2-production-proof` OK.
- Focused capture offenders: desktop 0, mobile 0, narrow 0.
