# Pass 04 - Token and Component Consistency

Status: complete

Started: 2026-06-01 01:31 UTC
Completed: 2026-06-01 01:38 UTC

## Scope

- Reviewed ledger and prior artifacts.
- Targeted shared solar primitives already used in proof and applied pages.
- Avoided layout rewrites; this pass is shared ownership cleanup.

## Files Changed

- `css/solarpunk.css`

## What Improved

### Shared solar command primitive

Normalized `.solar-command-plate` / `.solar-command` to use component-level custom properties for:

- text color
- border color
- background treatment

Variants now override:

- `--solar-command-color`
- `--solar-command-border`
- `--solar-command-bg`

instead of re-declaring the full component styling in each state.

### Shared solar state-row primitive

Normalized `.solar-state-row` / `.status-row` to use component-level custom properties for:

- left border color
- row background
- indicator border
- indicator background
- indicator shadow

Variants now override:

- `--solar-state-border-left`
- `--solar-state-bg`
- `--solar-state-indicator-border`
- `--solar-state-indicator-bg`
- `--solar-state-indicator-shadow`

This keeps charged / irrigating / growing semantics intact while making the primitive easier to maintain.

### Shared route-badge primitive

Normalized `.solar-route-badge` and the matching fairy feed badge states to use:

- `--solar-badge-color`
- `--solar-badge-border`
- `--solar-badge-bg`

so growing and charged variants no longer duplicate the base badge structure.

## Portable Proof

Reference proof uses the same normalized primitives:

- `.solar-command-plate`
- `.solar-state-row`
- `.solar-route-badge`
- `.solar-vellum-ledger`

under `reference.html#component-proof`.

Applied proof uses the same primitives on:

- `fairy-journeys.html` first screen and reading/feed sections
- `solarpunk.html` archive and status surfaces

This satisfies the pass goal that at least one applied page demonstrates the same primitive.

## Verification

- `git diff --check` clean
- `node tools/regression-smoke.js` passed
- screenshots/metrics captured under:
  - `tmp/night-runs/pass-04/reference/`
  - `tmp/night-runs/pass-04/fairy/`
  - `tmp/night-runs/pass-04/solarpunk/`
- no horizontal overflow detected on changed surfaces

## Why This Pass Matters

- The visual output stays stable, but component ownership is clearer.
- Future optimization passes can modify a variant by changing a smaller token surface instead of re-copying whole visual blocks.
- The solar grammar is more portable across proof and applied pages.

## Remaining Risk

- Some solar surfaces still use one-off local values outside the normalized primitives, especially larger scene cards and instrumentation panels.
- That is acceptable for now; this pass focused on the primitives already shared across multiple pages.

## Next Recommendation

Run Pass 05 as a bounded optimization/polish pass:

- trim obvious duplicated shell/section values if they still remain
- check whether any generated CSS can be reduced without losing the current visual character
- keep screenshots as the final arbiter, not raw line count
