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
| 01 | launch + 00m | completed | \`dc7c528\` | alias anchor on \`fairy-journeys.html#route-ledger\` | \`git diff --check\`; \`node tools/regression-smoke.js\`; static anchor re-check for \`#field-dossier\`, \`#route-feed\`, \`#route-ledger\`; no \`#threshold\` target claimed on page | pass 02 if clean |
| 02 | launch + 25m | completed | \`9805102\` | mobile nav trailing rail budget on \`fairy-journeys.html\` shell | \`git diff --check\`; \`node tools/regression-smoke.js\`; targeted browser reproduction on live page at \`390x844\` showed nav rail \`348px\`, content \`379px\`, and \`Песочница\` ending at \`x=392\` before local CSS fix | pass 03 if clean |
| 03 | launch + 50m | completed | \`56a86a3\` | tablet-safe stack breakpoint for reference manual tables | \`git diff --check\`; \`node tools/regression-smoke.js\`; source re-check showed wide table stack rules previously started only at \`560px\`, leaving desktop multi-column table grids active at \`768px\` | pass 04 if clean |
| 04 | launch + 75m | completed | \`0f177f6\` | applied-copy cleanup for visible proof labels on \`fairy-journeys.html\` | \`git diff --check\`; \`node tools/regression-smoke.js\`; source grep confirmed visible strings \`ArticleHeroRecipe ·\`, \`DossierReadingRecipe ·\`, \`FeedListingRecipe ·\`, and \`не канонический тест\` were removed from the applied page UI | pass 05 if clean |
| 05 | launch + 100m | completed | \`d99c027\` | copy-only sequencing split between launch/read and later commit beat | \`git diff --check\`; \`node tools/regression-smoke.js\`; source check confirmed hero copy now frames reading first and the first route row now frames the later choice/price beat | pass 06 if clean |
| 06 | launch + 125m | completed | \`7d3d337\` | final alignment QA across touched pages plus minimal fact sync | \`git diff --check\`; \`node --check tools/regression-smoke.js\`; \`node tools/regression-smoke.js\`; targeted live browser checks on \`fairy-journeys.html\` and \`reference.html\` at \`1440x900\`, \`390x844\`, and \`768px\` | closeout |
| closeout | launch + 150m | completed | `f9db53b` | closeout report | `git diff --check`; git/github state inspection; GitHub status lookup (no checks/runs exposed) | done |

## Closeout

- Commits: `dc7c528` anchor alias, `5054599` ledger sync, `9805102` mobile nav rail padding, `0825f2b` ledger sync, `56a86a3` reference tablet table stack, `9b9cca7` ledger sync, `0f177f6` applied proof-label cleanup, `c860d41` ledger sync, `d99c027` launch-vs-commit copy split, `1d9e0b6` ledger sync, `7d3d337` alignment QA record, `8a6cd4e` ledger sync.
- Verification/deploy: local repo clean at closeout start with `HEAD == origin/main == 8a6cd4e`; GitHub connector returned no combined-status checks and no workflow runs for `8a6cd4e`, so deploy/CI could not be positively confirmed from available tooling in this wake; prior pass-06 regression/browser checks remain the last successful verification gate.
- Report sent: manual status/closeout reply sent in Telegram on 2026-05-16 after the closeout wake.
- Residual risks: no connector-visible CI/deploy signal was available for the final pushed commit; pass 02 also lacked a local host-browser re-measurement after the nav fix because host-browser navigation to local `127.0.0.1` was blocked in that wake, though the later deployed browser QA in pass 06 was clean.
- Best next step: no further autonomous implementation pass is needed; if additional confidence is wanted, do a human spot-check of the deployed `fairy-journeys.html` and `reference.html` surfaces on tablet/mobile.

## Pass 01 Notes

- Result: added a backward-compatible \`id="route-ledger"\` alias on the Fairy Journeys feed heading while preserving the existing \`#route-feed\` section id and all current internal links.
- Changed files: \`fairy-journeys.html\`, this ledger.
- Anchor re-check: \`#field-dossier\` present, \`#route-feed\` present, \`#route-ledger\` now present, and no \`#threshold\` target is present or claimed in \`fairy-journeys.html\`.
- Next best step: pass 02 mobile-nav clipping check for \`ПЕСОЧНИЦА\` at \`390x844\`.

## Pass 02 Notes

- Result: added narrow-screen trailing inline padding and matching scroll padding to the Fairy page shell nav so the last plaque no longer dies against the clipped shell edge while preserving the existing horizontal scroller behavior and shell identity.
- Changed files: \`css/fairy-journeys.css\`, this ledger.
- Bug evidence before fix: live browser check at \`390x844\` measured the nav rail at \`348px\` wide with \`379px\` of scroll content; the last item \`Песочница\` stayed one line but ended at \`x=392\`, past the viewport edge.
- Verification after fix: \`git diff --check\` clean; \`node tools/regression-smoke.js\` passed across all 6 targets / 3 viewports; browser policy blocked loading the local \`127.0.0.1\` page in the host browser, so local browser re-measurement was not available in this wake.
- Next best step: pass 03 reference tablet overflow at \`768px\`.

## Pass 03 Notes

- Result: moved the stacked-table treatment for \`.decision-table\`, \`.contract-table\`, \`.slot-table\`, and \`.responsive-contract-table\` from the old \`560px\` mobile-only range into a dedicated tablet-safe \`820px\` breakpoint, while keeping broader reference manual mobile collapse rules unchanged.
- Changed files: \`css/reference.css\`, this ledger.
- Bug evidence before fix: source re-check showed the problematic wide manual tables still used desktop multi-column grids until \`560px\`, which left the decision/contract surfaces exposed to tablet-width overflow at \`768px\`.
- Verification after fix: \`git diff --check\` clean; \`node tools/regression-smoke.js\` passed across all 6 targets / 3 viewports. A separate local \`768px\` CDP probe was attempted during this wake, but the probe process returned no captured stdout in this environment, so the change was kept bounded to the explicit breakpoint defect rather than broadened further.
- Next best step: pass 04 Fairy applied-copy/proof-label cleanup.

## Pass 04 Notes

- Result: removed visible internal/proof phrasing from the Fairy applied page shell subtitle, section eyebrows, and footer while preserving all existing recipe classes, \`data-*\` hooks, ids, and hidden proof-boundary notes.
- Changed files: \`fairy-journeys.html\`, this ledger.
- Removed from visible UI: \`не канонический тест\`, \`ArticleHeroRecipe · вступительная запись\`, \`DossierReadingRecipe · поле чтения\`, and \`FeedListingRecipe · журнал маршрута\`.
- Verification after fix: \`git diff --check\` clean; \`node tools/regression-smoke.js\` passed across all 6 targets / 3 viewports; source grep confirmed the targeted visible strings no longer appear in \`fairy-journeys.html\`.
- Next best step: pass 05 Fairy Task 5 dramaturgy cleanup.

## Pass 05 Notes

- Result: separated the two beats through copy only. The hero now reads as entry/reading, while the first route row reads as the later commitment point where the decision gains a price.
- Changed files: \`fairy-journeys.html\`, this ledger.
- Applied changes: hero secondary link now points to where the choice starts; the handoff summary now says \`сначала чтение, затем выбор имени\`; the route summary, current-row badge, and current-row annotation now frame the first route step as the choice/price beat rather than another generic continuation cue.
- Verification after fix: \`git diff --check\` clean; \`node tools/regression-smoke.js\` passed across all 6 targets / 3 viewports; source check confirmed the new sequencing strings in the hero and route sections.
- Next best step: pass 06 alignment QA + minimal docs sync.

## Pass 06 Notes

- Result: final alignment QA passed for the touched surfaces; no additional page/code changes were needed beyond syncing the ledger facts for this wake.
- Changed files: this ledger only.
- Regression gate: \`git diff --check\` clean; \`node --check tools/regression-smoke.js\` clean; \`node tools/regression-smoke.js\` passed across all 6 targets / 3 viewports.
- Targeted browser checks on the deployed sandbox:
  - \`fairy-journeys.html#route-ledger\` at \`1440x900\` and \`390x844\`: no page overflow, anchor present, nav labels one line, subtitle \`маршрутная проверка\`, handoff \`сначала чтение, затем выбор имени\`, route summary \`3 записи · выбор начинается с первой строки\`, badge \`момент выбора\`.
  - \`fairy-journeys.html#field-dossier\` at \`768px\`: no page overflow and both \`#field-dossier\` and \`#route-ledger\` present.
  - \`reference.html#operator-mode\` at \`1440x900\`, \`390x844\`, and \`768px\`: no page overflow, operator mode present, and no detected overflow in \`.decision-table\`, \`.contract-table\`, \`.slot-table\`, or \`.responsive-contract-table\`; the first table templates stacked to \`1fr\` at \`390px\` and \`768px\`.
- Next best step: closeout wake.
