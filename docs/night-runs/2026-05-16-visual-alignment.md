# Night Run: HOMM2 Visual Alignment - 2026-05-16

## Config

- Project: `/root/.openclaw/workspace/homm2-design-system-sandbox`
- Session: `session:homm2-fairy-review-night-2026-05-16`
- Cadence: 25 minutes
- Pass timeout: 20 minutes
- Model: `gpt-5.4`
- Delivery: none during run; announce closeout only
- Lock: `tmp/night-runs/2026-05-16-visual-alignment.lock`
- Max wakes: 6 bounded work wakes + 1 closeout wake
- Baseline branch: `main`
- Baseline rule: each wake does exactly one bounded pass, verifies narrowly, commits and pushes only if clean

## Objective

Align the Fairy Journeys applied page and HOMM2 reference surface against the visual/design-system review findings without broad redesign: fix broken anchors, mobile clipping, reference tablet overflow, visible proof-label leakage, and the remaining launch-vs-commit dramaturgy issue.

## Source Context

- `README.md`
- `docs/new-session-handoff-2026-05-16.md`
- `docs/design-system-operator-index-2026-05-15.md`
- `docs/fairy-journeys-task-list-reconciliation-2026-05-16.md`
- `docs/fairy-journeys-bounded-prompt-2026-05-16.md`
- this ledger

## Review Findings Being Executed

1. `fairy-journeys.html#route-ledger` is broken; live DOM has `#route-feed`.
2. `fairy-journeys.html` clips the top nav item `ПЕСОЧНИЦА` at `390x844`.
3. `reference.html` tablet manual tables overflow at `768px`.
4. `fairy-journeys.html` exposes internal/proof labels such as `ARTICLEHERORECIPE` and `не канонический тест` in the applied page UI.
5. Fairy Journeys Task 5 remains open: separate launch/read from commit/choose dramaturgy.

## Stop Rules

- unexpected dirty tree or unrelated user changes
- failed verification or browser check
- push rejection
- deploy/CI red with unclear next step
- stale lock
- no clear bounded next step remains
- next step requires broad redesign or new canonical proof expansion
- reference table fix becomes too large for one 20-minute wake
- manual visual judgment is needed before proceeding
- applied-page behavior would be promoted to canonical proof without fixture evidence

## Pass Ladder

1. Anchor contract pass: resolve `#route-ledger` vs `#route-feed`; re-check requested anchors.
2. Fairy mobile nav pass: remove `ПЕСОЧНИЦА` clipping at `390x844` without changing page structure.
3. Reference tablet overflow pass: make problematic reference tables/cards fit at `768px`.
4. Fairy applied-copy/proof-label pass: remove visible internal proof labels while preserving QA hooks/classes.
5. Fairy Task 5 dramaturgy pass: separate launch/read action from commit/choose beat without broad reshuffle.
6. Alignment QA + minimal docs sync pass: run smoke and targeted browser checks, update only stale facts.
7. Closeout wake: collect commits, git/deploy status, residual risks, and send concise report.

## Runs

| Pass | Scheduled UTC | Status | Commit | Artifact | Verification | Next |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | launch + 00m | completed | pending | alias anchor on \`fairy-journeys.html#route-ledger\` | \`git diff --check\`; \`node tools/regression-smoke.js\`; static anchor re-check for \`#field-dossier\`, \`#route-feed\`, \`#route-ledger\`; no \`#threshold\` target claimed on page | pass 02 if clean |
| 02 | launch + 25m | planned | - | mobile nav | - | pass 03 if clean |
| 03 | launch + 50m | planned | - | reference tablet overflow | - | pass 04 if clean |
| 04 | launch + 75m | planned | - | applied proof-label copy | - | pass 05 if clean |
| 05 | launch + 100m | planned | - | Task 5 dramaturgy | - | pass 06 if clean |
| 06 | launch + 125m | planned | - | alignment QA/docs sync | - | closeout |
| closeout | launch + 150m | planned | - | closeout report | - | done |

## Closeout

- Commits:
- Verification/deploy:
- Report sent:
- Residual risks:
- Best next step:

## Pass 01 Notes

- Result: added a backward-compatible \`id="route-ledger"\` alias on the Fairy Journeys feed heading while preserving the existing \`#route-feed\` section id and all current internal links.
- Changed files: \`fairy-journeys.html\`, this ledger.
- Anchor re-check: \`#field-dossier\` present, \`#route-feed\` present, \`#route-ledger\` now present, and no \`#threshold\` target is present or claimed in \`fairy-journeys.html\`.
- Next best step: pass 02 mobile-nav clipping check for \`ПЕСОЧНИЦА\` at \`390x844\`.
