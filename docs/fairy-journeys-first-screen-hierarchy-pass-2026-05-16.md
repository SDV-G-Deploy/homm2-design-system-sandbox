# fairy-journeys first-screen hierarchy pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: demote the top shell so the first screen reads more clearly as one primary hero task with a supporting utility layer above it.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Reduced topbar contrast, border weight, and shadow depth so the shell reads as support instead of a competing slab.
- Demoted breadcrumb contrast and background weight.
- Muted the shell support line under the brand.
- Reduced the page-nav plaque scale and current-state emphasis so the nav reads as utility navigation rather than a second menu tier.
- Slightly demoted the trailing sandbox link to keep focus on the page flow.

The page structure, recipe hooks, and hero content remain unchanged.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- CSS diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `244615 bytes written to file /tmp/fairy-journeys-hierarchy-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The first screen now gives the shell a quieter utility role, which should leave the hero action block more obviously dominant without changing layout structure or readiness claims.
