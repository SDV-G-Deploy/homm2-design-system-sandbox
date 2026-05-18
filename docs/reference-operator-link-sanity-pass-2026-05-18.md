# Reference Operator Link Sanity Pass - 2026-05-18

## Scope

Tighten the local regression smoke so the HOMM2 operator/reference surfaces catch stale local anchors and missing proof/document paths before later visual QA or doc-sync passes.

## Changes

- Extended `tools/regression-smoke.js` static checks to verify local HTML anchor links and same-repo relative href targets across the checked manual, applied, and fixture surfaces.
- Added repo-path sanity for critical backtick references in `README.md`, the operator index, and the smoke-harness pass doc so stale proof/doc paths fail early.
- Updated smoke documentation and README language to reflect the broader static integrity coverage.

## Verification

- `node tools/regression-smoke.js`
- `git diff --check`

## Notes

This is still a bounded smoke layer, not a general broken-link crawler or a visual diff system. It is meant to protect the current operator/reference workflow from quiet documentation drift.
