# fairy-journeys hero art budget pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: reduce narrow-screen vertical budget spent on the decorative hero art slot so first-screen copy and the primary dossier action stay visible earlier.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Reduced the mobile hero-art slot height at both narrow breakpoints.
- Tightened the inner frame inset and softened the moon glow on mobile.
- Reduced the road, gate, and tower dimensions on narrow widths.
- Hid the side towers entirely at the smallest breakpoint so decoration yields space before the primary task does.

The decorative slot remains present, but it now surrenders more vertical budget before the title and primary action do.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- Diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium render attempt was run through a temporary localhost server.
  Chromium reported `250474 bytes written to file /tmp/fairy-journeys-hero-art-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a fully inspectable artifact.

## Outcome

The first screen should now spend less of its narrow-screen budget on scenery, which further protects title, action, and support hierarchy above the fold.
