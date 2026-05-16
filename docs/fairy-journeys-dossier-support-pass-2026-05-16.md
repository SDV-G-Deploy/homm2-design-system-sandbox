# fairy-journeys dossier support pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: demote dossier tertiary side-notes on narrow screens so the parchment reading field remains clearly primary and archive context stays secondary.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Lowered the visual weight of dossier side-notes on narrow widths through opacity, tighter spacing, and quieter card treatment.
- Reduced note-card scale on narrow widths so the parchment reading field keeps a clearer lead.
- Hid the already-compact hidden note at the smallest breakpoint so the dossier support stack stops competing like a parallel second column.

Dossier copy, archive rail, and page structure remain unchanged.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- Diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `249419 bytes written to file /tmp/fairy-journeys-dossier-support-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The dossier section should now read more clearly as parchment first, archive second, notes third on narrow screens.
