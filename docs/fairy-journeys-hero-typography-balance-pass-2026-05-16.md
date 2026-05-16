# fairy-journeys hero typography balance pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: reduce narrow-screen hero typography pressure so the title, lead, and primary action sit in a more stable first-screen balance.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Slightly reduced hero-copy padding and internal gap on narrow screens.
- Reduced the narrow-screen title width and scale so the heading resolves faster and consumes less vertical budget.
- Tightened the lead paragraph width, size, and line-height on narrow screens.

The page structure and hero copy remain unchanged; only the narrow-screen typography balance moved.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- Diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `247756 bytes written to file /tmp/fairy-journeys-hero-typography-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The first screen should now give the hero title and lead a slightly calmer narrow-screen rhythm, which helps the primary dossier action surface earlier without flattening the page tone.
