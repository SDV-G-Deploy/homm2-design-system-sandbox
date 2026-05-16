# Reference Operator Mode Pass - 2026-05-16

## Scope

Add a short operator mode to `reference.html` so generation and review passes do not have to start from the full manual body.

## Changes

- Added `#operator-mode` directly below the reference header.
- Added four quick actions: pick one primary recipe, lock responsive contract, run regression smoke, and promote only proven patterns.
- Added the quick mode entry to the sticky table of contents.
- Added page-local CSS for the quick operator cards with mobile single-column behavior.

## Verification

- `git diff --check`
- Static source sanity for quick links and target ids
- CDP render smoke for local and live `reference.html` at `390 x 844` and `1440 x 900`

## Remaining Risk

This pass adds a fast entry layer. It does not shorten or reorganize the full manual body.
