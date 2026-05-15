# Responsive Recipe Slice Summary - 2026-05-15

## Status

Slice status: closed.

Scope status:

- MenuScreenRecipe responsive contract layer is stabilized.
- The canonical regression target exists and is versioned.
- The applied Fairy page remains a smoke target, not the source of truth for this slice.

## Story Of Record

This responsive recipe slice was intentionally run as bounded passes rather than a broad CSS rewrite.

Pass chain:

1. Evidence
   - `docs/responsive-recipe-evidence-2026-05-15.md`
   - Collected patterns, anti-patterns, failure taxonomy and Pass 2 priorities.
2. Contracts
   - `docs/responsive-recipe-contracts-2026-05-15.md`
   - Defined normalized recipe contract format, content budgets and downgrade behavior.
3. Implementation mapping
   - `docs/responsive-recipe-implementation-mapping-2026-05-15.md`
   - Mapped contract requirements to shared hooks, fixture ownership and API decisions.
4. Shared hooks
   - `docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
   - Landed shared tokens/hooks plus canonical fixture wiring.
5. Viewport QA
   - `docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md`
   - Produced screenshot/metric evidence and fixed the compact hidden-content regression.
6. Follow-up stabilization
   - `docs/responsive-recipe-followup-pass6-2026-05-15.md`
   - Closed residual ambiguity around fixture role, deploy path and durable selector APIs.

## Code Surfaces Landed

- `css/tokens.css`
  - Responsive recipe token layer for line clamps, summaries, metadata, annotations and frame-rank intensity.
- `css/components.css`
  - Shared recipe hooks, density selectors, frame-rank selectors, visually hidden text helper and summary collapse behavior.
- `fixtures/menu-screen-recipe.html`
  - Canonical MenuScreenRecipe regression fixture with `standard`, `compact`, `emergency` and `stress` states.

## Verification Record

- Static checks:
  - `git diff --check`
  - hook grep/sanity checks
  - fixture aria/static validation
- Visual checks:
  - contract matrix passed for `1440x900`, `390x844` and `360x740`
  - no horizontal overflow in the canonical matrix
  - no visible labels below `12px`
  - no clipped primary labels
  - no short visible targets in the checked states
- Compatibility checks:
  - `fairy-journeys.html#menu-shell` smoke checked without breakage
  - fixture path included by GitHub Pages upload path `.`

## What This Slice Does Not Claim

- It does not fully polish `fairy-journeys.html`.
- It does not solve broader typography debt outside the canonical fixture and smoke target.
- It does not automate character/count budgets in CSS.
- It does not create a reusable screenshot harness yet.

## Recommendation

Treat MenuScreenRecipe responsive behavior as a stabilized design-system layer.

Future work should be opened only as narrow follow-up slices such as:

- applied-page cleanup in `fairy-journeys.html`
- additional recipe families beyond MenuScreenRecipe
- a reusable viewport harness for future regression passes
