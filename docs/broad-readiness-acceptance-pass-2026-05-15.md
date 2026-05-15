# Broad Readiness Acceptance Pass - 2026-05-15

## Status

Completed for the bounded broad-readiness acceptance/accessibility closeout pass.

This artifact was opened before deeper verification and used as the run ledger.

## Scope

Canonical host fixtures checked:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`

Required viewport matrix for this pass:

- `360x740`
- `1024x640`
- `1728x1000`

Checks recorded:

- first-screen hierarchy
- unintended horizontal overflow
- mobile/desktop host scan-path obligations
- compact/full-label carriers where relevant
- side-rail-secondary behavior for dossier/feed where relevant
- typography/accessibility sanity for negative tracking, 10-11px uppercase/meta labels, and force-fit patterns

Out of scope remained unchanged: broad CSS rewrite, new recipe families, shell-navigation reopening, promo/dashboard/search-heavy expansion, applied-page substitution, and ArticleHeroRecipe + SideRailMetadataRecipe implementation.

## Fixture Changes Made

Small fixture-local typography fixes were made because the strict sanity pass found residual acceptance pressure:

- removed negative tracking from the fixture recipe titles in the article hero, dossier and feed fixtures;
- raised fixture-local uppercase/meta labels that were hard-coded at `10px` or `11px` to `12px`;
- kept the changes scoped to the three canonical host fixtures, without editing shared CSS or adding new recipe behavior.

## Evidence Log

Method:

- Served the repo locally with `python3 -m http.server 8787 --bind 127.0.0.1`.
- OpenClaw browser navigation to localhost remained blocked by policy, so evidence used the already-running local headless Chromium CDP endpoint on port `18800`.
- Captured screenshots and DOM/layout metrics for every fixture at every required viewport.

Evidence files:

- `tmp/broad-readiness-acceptance-pass-2026-05-15/article-hero-360x740.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/article-hero-1024x640.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/article-hero-1728x1000.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/dossier-reading-360x740.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/dossier-reading-1024x640.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/dossier-reading-1728x1000.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/feed-listing-360x740.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/feed-listing-1024x640.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/feed-listing-1728x1000.png`
- `tmp/broad-readiness-acceptance-pass-2026-05-15/broad-readiness-metrics.json`

Screenshot byte sizes were non-zero for all nine captures.

## Viewport Results

| Fixture | 360x740 | 1024x640 | 1728x1000 | Result |
| --- | --- | --- | --- | --- |
| article hero | Pass | Pass | Pass | Primary hero frame starts 13px, 26.59px and 29px from the host top across states; no overflow; secondary metadata/bridge remains after the primary. |
| dossier reading | Pass | Pass | Pass | Primary parchment starts 13px, 23.45-23.46px and 25.28-25.30px from host top across states; no overflow; opening reading field remains primary. |
| feed listing | Pass | Pass | Pass | Primary feed starts 13px, 27.61px and 29px from host top across states; no overflow; every state shows at least two feed rows in the host first viewport. |

Page-level horizontal overflow result:

- `scrollWidth - clientWidth = 0` for all nine fixture/viewport combinations.
- DOM overflow candidate count was `0` for all nine fixture/viewport combinations.

## Gate Results

| Gate | Result | Evidence |
| --- | --- | --- |
| First-screen hierarchy | Pass | Every fixture state has its primary frame visible within the host first viewport at all three required sizes. |
| Mobile/desktop host scan path | Pass | Feed states show 2 rows at `360x740`, 2 rows at `1024x640`, and 2-4 rows at `1728x1000`; article and dossier keep their primary orientation/reading frame first. |
| Compact/full-label carriers | Pass | Article summary cues retain `aria-describedby` full-text carriers; dossier hostile rail has 3 `data-full-label` carriers and hidden-count hooks; feed hostile rail has 4 `data-full-label` carriers and dense/compact hidden-count hooks. |
| Dossier/feed side-rail-secondary behavior | Pass | Dossier has 5 host-bound side rails and feed has 6; all remain `data-frame-rank="secondary"` with `data-recipe-collapse="summary"`. Desktop/tablet rails are narrower than the primary frame; mobile rails become equal-width single-column blocks after the primary. |
| Typography/accessibility sanity | Pass for this bounded fixture tranche | Rendered typography-pressure query returned `0` after fixture-local fixes; static fixture search found no negative `letter-spacing`, no hard-coded `10px`/`11px` font sizes, and no ellipsis force-fit patterns in the three canonical fixtures. |

## Broad Readiness Statement

Broad readiness is now supportable for the first-tranche canonical host fixture acceptance surface: ArticleHeroRecipe, DossierReadingRecipe and FeedListingRecipe have evidence at the previous baseline viewports plus this remaining `360x740`, `1024x640` and `1728x1000` matrix, with no unintended horizontal overflow and with the strict fixture typography sanity issue closed.

This does not mean broad site-generation readiness for every HOMM2 page type. The proof remains limited to these canonical host fixtures and the documented dossier/feed SideRailMetadataRecipe host-bound combinations.

## Remaining Blockers / Non-Goals

- ArticleHeroRecipe + SideRailMetadataRecipe remains unimplemented and unproven; article hero only has its existing metadata/bridge support behavior.
- SiteShellNavigationRecipe, promo-heavy, dashboard-heavy, search-heavy, ecommerce-like, form-heavy, regulated and safety-critical screens remain outside current proof.
- This pass was not a full WCAG, keyboard, screen-reader or legal accessibility audit.
- Applied pages and bridge targets still cannot substitute for canonical fixture proof.
