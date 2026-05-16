# Reference Manual Optimization Pass - 2026-05-16

## Scope

Bounded review and update for `reference.html` after the Fairy Journeys applied-page fixes.

## Findings

- The live and local reference page had no page-level horizontal overflow at `390 x 844` or `1440 x 900`.
- The manual structure was usable, but mobile table rows lost their column meaning after header rows were hidden.
- Recent applied-page rules from `fairy-journeys.html` were documented in deeper docs, but not surfaced in the public reference manual acceptance checklist.

## Changes

- Added mobile-only pseudo-labels for stacked reference tables so each row still exposes its column role after the header row collapses.
- Added four public reference guardrails: utility nav plaque no-wrap, indexed feed row badge track, semantic accent usage, and page-level overflow smoke.

## Verification

- `git diff --check`
- Static source sanity for new table labels and guardrail text
- CDP render smoke for local `reference.html` at `390 x 844` and `1440 x 900`
- Screenshots saved under `tmp/reference-review-2026-05-16-after/`

## Remaining Risk

This pass improves the existing reference manual. It does not convert the whole manual into a shorter generated-site checklist or add new canonical fixtures.
