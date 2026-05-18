# Reference Table Stack Smoke Pass - 2026-05-18

## Scope

Add one bounded regression assertion for the \`reference.html\` tablet/mobile contract so the local smoke harness protects the already-claimed table-stack behavior.

## Changes

- Extended \`tools/regression-smoke.js\` reference checks to verify that, at narrow widths, the decision and responsive-contract tables:
  - hide their header rows; and
  - expose inline field labels through \`::before\` on body cells.

## Verification

- \`node tools/regression-smoke.js\`
- \`git diff --check\`

## Notes

This does not replace visual review. It only turns one current reference/manual responsiveness claim into an automated guardrail.
