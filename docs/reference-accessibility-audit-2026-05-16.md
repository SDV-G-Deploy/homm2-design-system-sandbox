# Reference Accessibility Audit - 2026-05-16

## Scope

Initial accessibility audit for `reference.html` after the bounded reference slimming pass.

This pass covers the reference/manual page only. It is not a full WCAG certification, not a screen-reader lab pass, and not a legal compliance statement.

## Files Changed

- `reference.html`

## Fixes Applied

- Marked decorative ambient glow nodes with `aria-hidden="true"`.
- Removed incomplete `role="table"` / `role="row"` usage from CSS-grid comparison blocks. They remain visual comparison grids instead of partial ARIA tables.
- Kept visual button state specimens out of normal keyboard tab order with `tabindex="-1"` and explicit specimen labels.
- Added `type="button"` to all visual specimen buttons.
- Clarified accessibility baseline copy: real controls keep `:focus-visible`; visual specimens do not behave like live actions.
- Replaced repeated ambiguous recipe proof link text such as `fixture` with recipe-specific link text.
- Updated the remaining debt note so it reflects this initial audit and keeps full WCAG/screen-reader certification as a separate pass.

## Checks Run

### Static accessibility sanity

Custom static check over `reference.html`:

- duplicate IDs: `[]`
- missing `aria-labelledby` / `aria-describedby` targets: `[]`
- lingering `role="table"` / `role="row"` count: `0`
- ambient nodes missing `aria-hidden`: `0`
- broken same-page hash targets: `[]`
- visual specimen buttons still in tab order: `0`
- buttons missing explicit `type="button"`: `0`
- ambiguous link text in the checked recipe proof links: `[]`

### Contrast sanity

Token-pair contrast spot check:

| Pair | Ratio |
| --- | ---: |
| `ink-on-night` on `ink-950` | 18.40 |
| `ink-on-night-soft` composite on `ink-950` | 12.28 |
| `ink-on-night-mute` composite on `ink-950` | 8.58 |
| `accent-value` / gold on `ink-950` | 12.44 |
| `accent-consequence` / mana on `ink-950` | 6.70 |
| `accent-consequence-soft` on `ink-950` | 12.87 |
| `ink-on-parchment` on `parchment-100` | 11.33 |
| `gold-700` on `parchment-100` | 4.80 |
| `ink-950` on `gold-300` | 12.44 |

The sampled text pairs pass WCAG AA contrast thresholds for normal text in this token context. `gold-700` on parchment remains close enough to keep watching under future theme overrides.

### Regression smoke

`node tools/regression-smoke.js`

Result: OK.

Coverage:

- 6 targets
- 3 viewports: `1440x900`, `390x844`, `360x740`
- no page-level horizontal overflow
- reference manual target still resolves at `reference.html#operator-mode`

## Remaining Accessibility Work

- Full keyboard walkthrough with a human browser session.
- Screen-reader pass with at least one desktop screen reader.
- Theme override contrast audit for future faction/theme variants.
- Broader accessibility review for fixtures and applied pages, not only `reference.html`.
- Decide whether comparison grids should become native `<table>` elements if tabular reading becomes more important than compact visual scanning.
