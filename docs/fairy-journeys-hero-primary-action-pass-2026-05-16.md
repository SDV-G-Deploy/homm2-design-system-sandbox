# fairy-journeys hero primary action pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: make the first-screen hero resolve more clearly to one primary action by demoting the secondary route jump and the immediate handoff summary.

## Files changed

- `fairy-journeys.html`
- `css/fairy-journeys.css`

## What changed

- Kept `Читать досье` as the dominant plaque-style primary action.
- Replaced the previous secondary hero button with a lighter route-style link: `Сначала журнал маршрута`.
- Shortened and softened the immediate handoff cue from a louder “what next” plaque into a quieter order cue.
- Added page-local CSS so the supporting route and handoff summary read as secondary information rather than peer primaries.

The broader page structure and recipe stack remain unchanged.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- Diff inspection confirmed the pass is limited to the hero section in `fairy-journeys.html` plus page-local rules in `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `246002 bytes written to file /tmp/fairy-journeys-hero-primary-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The first screen now answers the user faster: the dossier action reads as the one primary move, while the journal jump and handoff cue stay available but no longer compete at the same rank.
