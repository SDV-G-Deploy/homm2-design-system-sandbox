# fairy-journeys hero support density pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: reduce first-screen support density on narrow screens so the primary dossier action stays visually dominant before scroll.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Added a lighter framed treatment to the hero metadata cells so they read as compact support details rather than plain stacked blocks.
- On mobile widths, changed the hero metadata strip from a full single-column stack into a tighter two-column compact pattern before collapsing to one column at the smallest breakpoint.
- Forced the hero support rail to summary-only on narrow screens and reduced its padding so the first screen keeps less competing support mass before scroll.

Page structure, copy, and recipe claims remain unchanged.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- Diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `250147 bytes written to file /tmp/fairy-journeys-hero-density-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The first screen should now spend less vertical and visual budget on support density, which gives the hero title and primary dossier action a cleaner lead on narrow screens.
