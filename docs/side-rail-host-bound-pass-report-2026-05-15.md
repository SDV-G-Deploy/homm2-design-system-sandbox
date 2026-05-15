# SideRail Host-Bound Pass Report - 2026-05-15

## Status

Implemented for the bounded pass.

This report was opened before implementation as the pass ledger for the bounded SideRailMetadataRecipe host-bound proof.

## Implemented Host Combinations

Implemented in this pass:

- `DossierReadingRecipe` + `SideRailMetadataRecipe` in `fixtures/dossier-reading-recipe.html`
- `FeedListingRecipe` + `SideRailMetadataRecipe` in `fixtures/feed-listing-recipe.html`

Not started in the original bounded dossier/feed pass:

- ArticleHeroRecipe + SideRailMetadataRecipe

Follow-up note:

- ArticleHeroRecipe + SideRailMetadataRecipe was implemented later as a separate bounded proof in docs/article-hero-side-rail-host-bound-pass-report-2026-05-15.md. The original dossier/feed evidence and scope remain unchanged.

## Selectors / Hooks Added Or Reused

- Reused canonical host hooks: `data-recipe`, `data-recipe-density`, `data-frame-rank`, `recipe-support-summary`, `recipe-support-panel`, `data-recipe-collapse="summary"`.
- Added explicit host/support declaration on each covered host state: `data-primary-recipe` and `data-support-recipes="side-rail-metadata"`.
- Added explicit side-rail support hook on each covered rail: `data-support-recipe="side-rail-metadata"`.
- Added proof-state hooks: `data-side-rail-state="clean-support"`, `compact-summary`, `emergency-cue`, `long-label-hidden-count`, `long-value-hidden-count`, `dense-filter-support`, and related support states.
- Added explicit hidden count hooks where collapse pressure is under test: `data-hidden-count`.
- Added accessible/full-value carrier hooks for hostile shortened/wrapped labels: `data-full-label`, plus existing visually hidden summary text through `aria-describedby`.
- Kept the host primary frame on `data-frame-rank="primary"` and side rail on `data-frame-rank="secondary"` in every implemented state.

## Hostile States Covered

- Dossier-hosted clean support-attached rail: existing clean state now explicitly declares SideRailMetadataRecipe support.
- Dossier-hosted compact summary rail: existing compact state declares `data-side-rail-state="compact-summary"` and `data-hidden-count="3"`.
- Dossier-hosted hostile long-label rail: existing hostile-rail state declares `data-side-rail-state="long-label-hidden-count"` and `data-hidden-count="5"`; long labels carry `data-full-label`.
- Dossier-hosted emergency cue: existing emergency state declares the rail as a secondary cue only.
- Feed-hosted clean support-attached rail: existing clean state now explicitly declares SideRailMetadataRecipe support.
- Feed-hosted compact summary rail: existing compact state declares `data-side-rail-state="compact-summary"` and `data-hidden-count="4"`.
- Feed-hosted hostile long-value rail: new `hostile-side-rail` state adds long filter labels/values, `data-side-rail-state="long-value-hidden-count"`, `data-hidden-count="4"`, and explicit full-label carriers.
- Feed-hosted dense/featured/emergency support rails are also marked as secondary SideRailMetadataRecipe attachments.

## Viewport / Evidence Notes

- Static selector audit passed after implementation: dossier has 5 host-bound side rails; feed has 6; every side rail is an `<aside>` with `data-frame-rank="secondary"` and `data-recipe-collapse="summary"` matching one host with `data-support-recipes="side-rail-metadata"`.
- Narrow fixture-local CSS was added only to prevent long side-rail labels/values from creating overflow: dossier `archive-rail[data-support-recipe="side-rail-metadata"] [data-full-label]` and feed sidebar `min-width: 0`/`overflow-wrap: anywhere` guards.
- Headless Chromium smoke screenshots were generated at `1440x900` and `390x844` under `tmp/side-rail-pass/` and `tmp/side-rail-pass3/` after serving the repo with `python3 -m http.server 8765`.
- OpenClaw browser navigation to local file/localhost was blocked by policy, so automated browser layout evaluation did not run through that tool. This pass therefore records a smoke check plus selector/static verification, not a full visual QA matrix.
- The final closeout pass in `docs/final-acceptance-closeout-2026-05-15.md` adds local headless-Chromium DOM/layout evidence at `1440x900` and `390x844`: dossier and feed rails remain secondary, desktop rails stay narrower than their primary frames, mobile rails follow the primary frame, hidden-count/full-label hooks remain present, and no unintended host horizontal overflow was detected.
- The broad-readiness closeout pass in `docs/broad-readiness-acceptance-pass-2026-05-15.md` adds `360x740`, `1024x640`, and `1728x1000` evidence plus strict fixture typography sanity closure. Dossier has 5 host-bound side rails and feed has 6; all remain secondary/collapsed-summary. Desktop/tablet rails are narrower than primary frames, and mobile rails become equal-width single-column support after the primary.
- ArticleHeroRecipe + SideRailMetadataRecipe remains outside the original dossier/feed bounded proof. See docs/article-hero-side-rail-host-bound-pass-report-2026-05-15.md for the later ArticleHero host-bound proof artifact.

## Remaining Gaps / Not Yet Proven Combinations

- `ArticleHeroRecipe` + `SideRailMetadataRecipe` was not implemented in the original dossier/feed bounded pass; it is covered by the later ArticleHero host-bound proof artifact.
- No applied-page proof substitution was attempted.
- No shell-navigation contract pass was attempted.
- No promo-heavy, dashboard-heavy or search-heavy rail expansion was attempted.
- SideRailMetadataRecipe remains support-only; this pass does not promote it to a primary recipe.
