# ArticleHero SideRail Host-Bound Pass Report - 2026-05-15

## Status

Implemented for the bounded follow-up proof pass.

This pass adds the missing `ArticleHeroRecipe` + `SideRailMetadataRecipe` host-bound proof surface without reopening the existing dossier/feed pass, shell navigation, promo-heavy, dashboard, search-heavy, applied-page, or broad family work.

## Fixture Changes

Updated canonical fixture:

- `fixtures/article-hero-recipe.html`

Added one explicit hostile host state:

- `data-fixture-state="hostile-side-rail"`
- `data-recipe="article-hero"`
- `data-primary-recipe="article-hero"`
- `data-support-recipes="side-rail-metadata"`

The new state keeps the ArticleHero copy card as `data-frame-rank="primary"` and attaches one support rail as:

- `data-support-recipe="side-rail-metadata"`
- `data-frame-rank="secondary"`
- `data-side-rail-state="long-label-hidden-count"`
- `data-hidden-count="4"`
- `data-recipe-collapse="summary"`

Hostile but plausible content included:

- long archive-location value;
- translated custody/status label;
- long witness group value;
- hidden-context row with an explicit hidden-row count;
- four `data-full-label` carriers for recoverable full text.

## CSS / Hook Scope

Only fixture-local hooks were added:

- `.hero-side-rail`
- `.hero-side-rail-list`
- `.hero-side-rail-row`
- one state-specific title-width guard for `data-fixture-state="hostile-side-rail"`
- one state-specific `overflow-wrap` guard for `data-full-label`

No shared CSS files were changed. No broad CSS rewrite was attempted.

## Verification Notes

Static selector audit passed:

- one ArticleHero host declares `side-rail-metadata` support;
- one attached side rail is present;
- rail is secondary;
- hidden count is present;
- four full-label carriers are present;
- rail has a support summary/state cue;
- rail contains no page-primary command.

Local viewport evidence was generated after serving the repo with `python3 -m http.server 8791 --bind 127.0.0.1` and using the local headless Chromium CDP endpoint on port `18891`.

Evidence files:

- `tmp/article-hero-side-rail-pass-2026-05-15/article-hero-side-rail-state-1440x900.png`
- `tmp/article-hero-side-rail-pass-2026-05-15/article-hero-side-rail-state-390x844.png`
- `tmp/article-hero-side-rail-pass-2026-05-15/article-hero-side-rail-metrics.json`

Viewport results:

| Viewport | Result |
| --- | --- |
| `1440x900` | Pass: page overflow `0`, overflow candidates `0`; primary hero frame width `755.47px`, side rail width `388.53px`; side rail remains secondary beside the host primary frame. |
| `390x844` | Pass: page overflow `0`, overflow candidates `0`; primary hero frame appears before the side rail; side rail collapses to its summary cue after the primary and before the handoff. |

Screenshots are non-zero PNGs with expected dimensions. OpenClaw image analysis could not be used because the configured image model returned an insufficient-credits error, so this is recorded as DOM/layout plus screenshot-file evidence, not a full visual-model review.

## Proven

- `SideRailMetadataRecipe` can attach to canonical `ArticleHeroRecipe` as support without taking primary frame rank.
- Hostile side-rail labels and values can remain recoverable through `data-full-label` and summary text.
- Mobile order preserves the hero title/deck/action before the rail, and the rail detail collapses to a summary cue at `390x844`.
- The ArticleHero visible handoff remains present after the support rail.

## Outside Scope

- No promotion of `SideRailMetadataRecipe` beyond support-only status.
- No shell-navigation contract work.
- No promo-heavy, dashboard-heavy, search-heavy, applied-page, ecommerce, form-heavy, or regulated-screen proof.
- No full browser-driven QA matrix or full WCAG/screen-reader audit.
- No rebuild of `fairy-journeys.html`; this proof is intentionally a clean canonical fixture artifact for a later safer rebuild.
