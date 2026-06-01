# HoMM2 Solarpunk v1.1 Pass 05 - Reference / Applied Consistency Polish

Date: 2026-06-01 12:58-13:00 UTC
Repo: `/root/.openclaw/workspace/homm2-design-system-sandbox`
Ledger: `docs/night-runs/2026-06-01-v1-1-hardening.md`

## Scope

- Read the component contract and prior hardening artifacts first
- Compare reference claims against `solarpunk.html`, `index.html`, and `fairy-journeys.html`
- Remove or fix orphan claims where the reference promised primitives/states not yet demonstrated
- Keep changes narrow and verified

## Files Changed

- `reference.html`

## What Changed

This pass kept the consistency fix inside the reference page only.

1. State vocabulary honesty:
   - added a note under the reference state matrix clarifying that the strongest currently demonstrated applied states are `charged`, `irrigating`, `growing`, and one bounded `drought risk` warning
   - explicitly marked `shaded`, `maintenance`, `inspected`, and `restored` as reserved rollout states rather than a claim that all applied pages already demonstrate them

2. Contract card honesty:
   - changed the “Living state marks” contract card from treating `growing, shaded, restored` as current applied proof to a truer description: `growing` is live now, `shaded/restored` follow after rollout

3. Applied page mapping honesty:
   - changed the `index.html` mapping line from a normative “must demonstrate” claim to a current-state note that it is still a darker transitional shell rather than the strongest proof surface

## Why This Stayed Narrow

- no CSS changes
- no new primitives
- no state rollout work
- no copy rewrite outside consistency corrections
- the pass only corrected reference claims that had drifted ahead of the applied proof

## Before / After Evidence

Reference captures:

- `tmp/night-runs/2026-06-01-pass-05/reference/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-05/reference/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-05/reference/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-05/reference/metrics.json`

## Verification

- `git diff --check` passed
- `node tools/regression-smoke.js` passed
- reference visual-capture metrics reported zero offenders and no document overflow across desktop/mobile/narrow

## Result

Verdict: successful narrow consistency pass

Why:

- the reference page still documents the fuller intended system vocabulary
- it no longer implies that every listed state is already proven on the applied pages
- the applied-page mapping now matches the actual current maturity of `index.html`

## Remaining Risk

- the reserved states still need future applied proof if they are meant to become live system vocabulary rather than reference-only planning
- `index.html` is still the weakest applied surface and remains the most likely candidate for future consistency work

## Next Recommendation

Proceed to closeout + deploy check.

Reason:

- the major bounded hardening passes are now represented
- the remaining work is synthesis, final review, and clear closeout of what actually landed
