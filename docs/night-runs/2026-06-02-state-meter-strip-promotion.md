# State Meter Strip Promotion - 2026-06-02

## Verdict

Promote only the repeated state-meter image frame into shared V2 components.

The promoted helper is `.v2-state-meter-strip`. It owns one narrow Images 2.0 slot: the framed `state-meter-readiness` asset strip. It does not own the surrounding panel, heading, status rows, signal badge, hero seal, or page layout.

## Changed Files

- `css/v2.components.css`
- `css/v2.recipes.css`
- `sites/build-brief-desk/index.html`
- `sites/agent-readiness-ledger/index.html`
- `sites/site-charter-forge/index.html`

## Promotion Contract

Shared helper:

- `.v2-state-meter-strip`
- `--v2-state-meter-width`

The helper provides:

- centered grid frame;
- dark translucent state background;
- solar-brass border;
- 7px radius matching the current V2 framed asset slots;
- bounded image width via `--v2-state-meter-width`.

Page recipes still decide where the strip sits:

- Build Brief Desk keeps `figure.v2-brief-meter-strip` and sets `--v2-state-meter-width: 260px`.
- Agent Readiness Ledger applies the helper to the meter `picture` inside `.v2-agent-meter`.
- Site Charter Forge applies the helper to the meter `picture` inside `.v2-charter-meter`.

## Deferred

These remain page-local:

- `.v2-brief-instrument`
- `.v2-agent-meter`
- `.v2-charter-meter`
- `.v2-charter-signal`
- `.v2-agent-seal`
- compact signal/badge wrappers
- hero shells and side-card compositions

The promotion is intentionally smaller than the broad signal lane and smaller than a full meter panel component.

## Verification

Required gates for this pass:

- `git diff --check`
- `node tools/regression-smoke.js`
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html --out tmp/state-meter-build-brief-2026-06-02 --selector body --selector .v2-brief-instrument --selector .v2-state-meter-strip`
- `node tools/visual-capture.js --target /sites/agent-readiness-ledger/index.html --out tmp/state-meter-agent-readiness-2026-06-02 --selector body --selector .v2-agent-meter --selector .v2-state-meter-strip`
- `node tools/visual-capture.js --target /sites/site-charter-forge/index.html --out tmp/state-meter-site-charter-2026-06-02 --selector body --selector .v2-charter-meter --selector .v2-state-meter-strip`

Manual screenshot checks should confirm:

- Build Brief Desk keeps the tighter 260px strip below the readiness lens.
- Agent Readiness Ledger keeps the meter centered inside the panel.
- Site Charter Forge keeps the launch meter aligned with the status rows.
- No seal or signal image accidentally receives the meter-strip helper.

## Remaining Risk

This helper is useful, but still narrow. Do not rename it to `.v2-meter`, `.v2-signal`, or `.v2-badge`. The evidence supports only one state-meter asset frame, not a generalized component family.
