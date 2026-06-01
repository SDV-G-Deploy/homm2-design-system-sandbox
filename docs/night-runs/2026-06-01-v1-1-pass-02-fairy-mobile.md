# HoMM2 Solarpunk v1.1 Pass 02 - Fairy Mobile Hero Compression

Date: 2026-06-01 11:43-11:47 UTC
Repo: `/root/.openclaw/workspace/homm2-design-system-sandbox`
Ledger: `docs/night-runs/2026-06-01-v1-1-hardening.md`

## Scope

- Read pass 01 evidence first
- Reduce mobile hero height/effect density on `fairy-journeys.html`
- Expose more route/state context above the fold
- Preserve ceremonial HoMM2 threshold feel
- Avoid broad copy rewrite or page redesign

## Files Changed

- `css/fairy-journeys.css`

## What Changed

This pass stayed CSS-only and kept the existing block order and content.

Mobile/narrow hero compression:

- tightened `.fairy-hero-copy` gap and padding
- reduced mobile hero title size and width pressure
- reduced mobile lead size and line-height
- tightened civic instrument padding, crest scale, and label sizing
- tightened hero action spacing
- reduced hero meta card padding and text sizing

Route/state visibility changes:

- kept hero metadata in a denser two-column layout on phone widths instead of collapsing every field into a full-width single column
- compacted `.fairy-state-ledger` rows and moved them into a two-column layout for general mobile widths
- allowed the smallest breakpoint to fall back to one column for clarity while still keeping the first state row materially closer to the fold
- hid the small `.fairy-handoff` support summary only at the smallest breakpoint because it repeated information already carried by the hero structure

## Why This Is Narrow Enough

- No copy was rewritten
- No markup structure was changed
- No shared cross-page primitives were modified
- The pass only compressed first-screen density for the target applied page

## Before / After Evidence

Before captures:

- `tmp/night-runs/2026-06-01-pass-02-before/fairy/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-02-before/fairy/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-02-before/fairy/metrics.json`

After captures:

- `tmp/night-runs/2026-06-01-pass-02-after/fairy/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-02-after/fairy/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-02-after/fairy/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-02-after/fairy/metrics.json`

## Key Measured Change

Hero first-screen height decreased materially in the capture metrics:

- `390x844`: `.fairy-first-screen` from about `1338px` to about `1123px`
- `360x740`: `.fairy-first-screen` from about `1366px` to about `1109px`

State context moved up:

- `390x844`: `.fairy-state-ledger` now starts around `757px` instead of around `920px+`
- `360x740`: state context is materially closer to the first fold than in pass 01, even though the full ledger still extends below the fold

## Visual Verdict

Verdict: improvement, still not final closeout

Why:

- The page still reads as a ceremonial HoMM2 threshold
- The route board, primary action, and route metadata now fit more efficiently
- At mobile width, the first state row becomes part of the first-screen system read instead of living much lower in the stack
- The page is still somewhat heavy relative to `solarpunk.html`, but the main mobile bottleneck identified in pass 01 is reduced without flattening the page into a generic compact card

## Remaining Risk

- `fairy-journeys.html` is now better compressed, but the broader applied-page darkness/effect density gap versus `solarpunk.html` still remains
- The smallest narrow viewport still cannot show the whole state ledger in one screen, only more of it than before
- Further compression should happen through shared effect cleanup rather than another page-specific squeeze unless a later review proves this hero is still failing

## Next Recommendation

Proceed to the shared effect-density hardening pass.

Reason:

- pass 02 solved the main mobile-height issue narrowly
- the next visible inconsistency is cross-page shadow/overlay heaviness, not hero structure
