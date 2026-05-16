# HOMM2 New Session Handoff - 2026-05-16

## Start Here

Repo:

- `/root/.openclaw/workspace/homm2-design-system-sandbox`
- branch: `main`
- Pages: `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/`

Read first:

1. `README.md`
2. `docs/design-system-operator-index-2026-05-15.md`
3. `docs/acceptance-qa-framework-2026-05-15.md`

Then choose the narrow task. Do not restart the whole design-system program.

## Latest Good State

Recent commits:

- `9c57cb6` - Mark visual alignment closeout report sent
- `f9db53b` - Close visual alignment night run
- `7d3d337` - Record visual alignment QA pass
- `0534208` - Add HOMM2 regression smoke harness
- `9a75f85` - Promote indexed feed rows to fixture proof
- `6697620` - Refresh HOMM2 operator docs index
- `b122478` - Add reference operator quick mode
- `e3c33e8` - Optimize reference manual mobile tables
- `0f1f6fb` - Document fairy journeys closeout smoke

Current proof:

- canonical fixtures exist for `MenuScreenRecipe`, `ArticleHeroRecipe`, `DossierReadingRecipe`, `FeedListingRecipe`, and narrow `SiteShellNavigationRecipe`
- `FeedListingRecipe` now includes `indexed-route-rows` fixture proof
- `fairy-journeys.html` is an applied smoke/reference-pressure page, not canonical proof; the latest visual-alignment run fixed anchors, mobile nav clipping, visible internal labels, and launch/read vs commit/choose copy
- `reference.html` is manual/quick operator reference, not production proof; the latest visual-alignment run also tightened tablet manual table stacking
- local regression smoke exists at `tools/regression-smoke.js`

## Verification Baseline

Before claiming a new pass is done:

```sh
git diff --check
node --check tools/regression-smoke.js
node tools/regression-smoke.js
```

Expected smoke scope:

- 6 targets
- 3 viewports: `1440x900`, `390x844`, `360x740`
- no page-level horizontal overflow
- FeedListing indexed boxes stay `38x38`
- Fairy nav labels stay one visual line on mobile

## Current Operating Rule

Keep documentation current before expanding implementation.

For the next `/new` session, the best default task is narrow proof expansion or reference-page slimming only after checking whether docs are already current:

1. Re-read operator index and README checkpoint.
2. Update any stale docs that still describe completed fixture debt, missing harness work, or pre-visual-alignment Fairy/reference issues.
3. If implementation work is needed, make it one bounded proof pass and record it immediately.
4. Commit, push, wait for Pages deploy, and report the commit hash plus deploy status.

## Known Remaining Work

- Expand `tools/regression-smoke.js` with more recipe-specific assertions when a proof pass needs them.
- Keep SideRail and SiteShell support-only unless a new host-bound proof pass expands them.
- Turn recipe/budget/proof workflow into prompt kit only after docs and proof status stay stable.
- GitHub Actions still shows a Node 20 deprecation warning during Pages deploy; not urgent for documentation-only flow, but should be handled in a later infra pass.

## Do Not Do By Default

- Do not turn `fairy-journeys.html` into canonical proof.
- Do not promote page-local CSS into shared hooks without fixture evidence.
- Do not wire the smoke harness into CI until local signal is stable enough.
- Do not reopen old Pass 1-4 sequencing unless a newer doc explicitly says it is unresolved.
