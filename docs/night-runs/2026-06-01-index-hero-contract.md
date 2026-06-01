# 2026-06-01 Index Hero Contract Pass

Status: complete

## Scope

- Fix the residual internal `.hero-frame` overflow offender on `index.html`.
- Keep the public front door composition and HoMM2 x Solarpunk visual direction intact.
- Do not redesign the page.

## Finding

The closeout noted a persistent internal `.hero-frame` capture offender on `index.html`. It was not page-level horizontal overflow, but the frame reported `scrollWidth > clientWidth` on desktop, mobile, and narrow captures.

The measurable source was decorative geometry inside the clipped frame:

- `.foreground-road` used negative inline inset and a polygon extending to `103%` / `-3%`.
- mobile `.hero-frame::after` widened the decorative band with negative inline inset.

## Changes

- Kept `.foreground-road` inside the frame's inline bounds.
- Adjusted the road polygon to end at `0%` / `100%`.
- Kept the mobile hero decorative band inside frame bounds.
- Slightly reduced the mobile gate silhouette width so it stays inside the frame content box.

## Verification

- Before capture: `tmp/night-runs/index-hero-contract-before/`
  - desktop: 1 `.hero-frame` offender
  - mobile: 1 `.hero-frame` offender
  - narrow: 1 `.hero-frame` offender
- Final capture: `tmp/night-runs/index-hero-contract-final2/`
  - desktop: 0 offenders
  - mobile: 0 offenders
  - narrow: 0 offenders
- `git diff --check` - passed
- `node tools/regression-smoke.js` - passed

## Remaining Risk

No remaining `index.html` hero-frame overflow offender was detected in the final capture. This pass intentionally avoids broader first-screen height or composition changes.
