# Client Work Queue Production Surface - 2026-06-03

## Status

PASS - added a distinct V2 production-like client portal/work-queue surface.

## Page

- `sites/client-work-queue/index.html`

## Purpose

This page tests whether the HoMM2 x Solarpunk V2 recipe kit can handle a denser app-like workflow surface, not only landing, offer, pricing, or ledger endings.

The surface models:

- active client routes;
- blocked input;
- task owner/state/gate rows;
- inspection reason;
- handoff packet;
- one final closure action.

## Visual / Asset Decision

No new generated image was added.

The page reuses existing canonical V2 assets:

- `water-lens.svg`
- `instrument-readiness-lens.svg`
- `state-meter-readiness.svg` / `state-meter-readiness.webp`
- promoted sprite status marks through `.v2-status-mark`
- `texture-brief-grid.webp` for the handoff record

This keeps the pass focused on workflow density and state clarity. Images 2.0 remains a separate lane and does not need a new slot unless a later portal surface proves a real object or instrument role.

## Reused Shared Grammar

- `.v2-action-pair`
- `.v2-signal-badge`
- `.v2-state-meter-strip`
- `.v2-production-proof`
- `.v2-proof-grid`
- `.v2-closure-ledger`
- `.v2-closure-grid`
- `.v2-status-mark`

## Page-Local Grammar

- `.v2-workqueue-*`
- `.v2-workqueue-rows`
- `.v2-workqueue-row`

The row pattern remains page-local because this is the first client portal/work-queue proof. Do not promote it until another app-like surface repeats the same row anatomy and status behavior.

## Verification

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 27 targets across desktop/mobile/narrow
- Focused visual capture: PASS, 0 offenders at 1440x900, 390x844, and 360x740
- Capture output: `tmp/client-work-queue-2026-06-03/`

## Next Recommendation

Use this page as app-like density evidence. The next useful pass is a read-only audit comparing Package Ledger cards and Work Queue rows as separate page-local patterns, or another app-like portal surface if row anatomy needs more proof.
