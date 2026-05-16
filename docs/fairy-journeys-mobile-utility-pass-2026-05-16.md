# fairy-journeys mobile utility pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: improve mobile readability of the utility shell and compact support controls without changing page structure, recipe claims, or shared component contracts.

## Files changed

- `css/fairy-journeys.css`

## What changed

- Increased mobile spacing in the sticky topbar so the shell stops reading as a compressed leftover strip.
- Raised mobile type size and line-height for the shell brand label and its support line.
- Enlarged utility-nav plaques on narrow screens with slightly stronger padding and letter-spacing.
- Strengthened breadcrumb readability and let it expand to full width at the smallest breakpoint.
- Increased small-screen label weight in support rails, filter chips, and feed badges so compact controls remain legible without changing hierarchy or structure.

## Verification

- HTML parse sanity for `fairy-journeys.html`.
- CSS diff inspection confirmed the pass stays page-local to `css/fairy-journeys.css`.
- Local `390x844` Chromium smoke render was attempted through a temporary localhost server.
  Chromium reported `248159 bytes written to file /tmp/fairy-journeys-mobile-390x844.png`.
  In this environment the snap-isolated screenshot path was not readable back from the shell afterward, so the render gate is treated as partial evidence rather than a full inspectable artifact.

## Outcome

The applied page now gives the mobile shell and compact support controls a more confident reading size without changing recipe selection, page structure, or readiness claims.
