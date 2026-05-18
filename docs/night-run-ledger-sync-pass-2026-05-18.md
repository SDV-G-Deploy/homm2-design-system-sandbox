# Night Run Ledger Sync Pass - 2026-05-18

## Scope

Update the active night-run ledger so completed and blocked passes reference the real commit hashes already pushed to `main`.

## Changes

- Replaced placeholder commit text for passes 01-03 with the actual short hashes.
- Updated the per-pass notes so the ledger can stand alone without requiring the separate final closeout report to resolve commit identity.

## Verification

- `git diff --check`

## Notes

This is a docs/status consistency pass only. It does not change product code, proof scope, or the blocked visual-review recommendation.
