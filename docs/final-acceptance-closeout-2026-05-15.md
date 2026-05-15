# Final Acceptance Closeout - 2026-05-15

## Scope

Canonical host fixtures checked in this pass:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`

Documentation/proof files checked for proof-language sync:

- `docs/acceptance-qa-framework-2026-05-15.md`
- `docs/generation-playbook-2026-05-15.md`
- `docs/design-system-operator-index-2026-05-15.md`
- `docs/side-rail-host-bound-pass-report-2026-05-15.md`

Out of scope for this pass: shell-navigation contract pass, broad CSS rewrite, new recipe families, applied-page expansion, promo/dashboard/search-heavy expansion.

## Evidence Plan

- Inspect existing docs/code to identify current proof claims and expected obligations.
- Render each canonical fixture locally.
- Check desktop pressure at approximately `1440x900`.
- Check mobile pressure at approximately `390x844`.
- Verify first-screen hierarchy, overflow, compact/full-label obligations, and `side-rail-secondary` host-bound behavior.
- Use browser/DOM evidence where feasible; if browser rendering is blocked, fall back to static or local headless verification and record the limitation.

## Verification Method

- Served the repo locally with `python3 -m http.server 8765 --bind 127.0.0.1`.
- OpenClaw browser navigation to localhost was blocked by policy, so this pass used local headless Chromium through CDP on port `9223`.
- Captured viewport screenshots:
  - `tmp/final-acceptance-closeout-2026-05-15/article-hero-desktop-1440x900.png`
  - `tmp/final-acceptance-closeout-2026-05-15/article-hero-mobile-390x844.png`
  - `tmp/final-acceptance-closeout-2026-05-15/dossier-reading-desktop-1440x900.png`
  - `tmp/final-acceptance-closeout-2026-05-15/dossier-reading-mobile-390x844.png`
  - `tmp/final-acceptance-closeout-2026-05-15/feed-listing-desktop-1440x900.png`
  - `tmp/final-acceptance-closeout-2026-05-15/feed-listing-mobile-390x844.png`
- Saved DOM/layout metrics:
  - `tmp/final-acceptance-closeout-2026-05-15/qa-metrics.json`
  - `tmp/final-acceptance-closeout-2026-05-15/qa-metrics-host-anchored.json`
  - `tmp/final-acceptance-closeout-2026-05-15/feed-row-relative.json`
- Screenshot metadata check confirmed all six PNG captures were non-empty at the expected dimensions.
- Vision-model screenshot review was attempted but unavailable in this environment due provider credit failure; the pass therefore relies on Chromium screenshots plus DOM/layout metrics.

## Pass/Fail Matrix

| Fixture | 1440x900 | 390x844 | First-screen hierarchy | Overflow | Compact/full labels | side-rail-secondary | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| article hero | Pass | Pass | Pass: each state keeps primary hero frame starting 13-29px from host top; handoff/support follows primary | Pass: no host overflow elements; page scroll width equals client width | Pass for bounded states: compact/emergency retain aria/full-text carriers for shortened visible labels | N/A; hero metadata/bridge stay secondary by frame rank, but this is not SideRailMetadataRecipe proof | Bounded pass with accessibility caveat |
| dossier reading | Pass | Pass | Pass: parchment primary starts 13-26px from host top across clean, compact, emergency and hostile states | Pass: no host overflow elements; page scroll width equals client width | Pass: compact/hostile rail expose `data-hidden-count` and full-label carriers where long rail labels are shortened/wrapped | Pass: 5 dossier rails are secondary; desktop rail width stays below primary, mobile rail follows the parchment primary | Bounded pass with accessibility caveat |
| feed listing | Pass | Pass | Pass: feed primary starts 13-29px from host top; mobile shows at least two rows or one featured plus one ordinary/supporting row in tested states | Pass: no host overflow elements; page scroll width equals client width | Pass: dense/compact/hostile filters expose hidden-count hooks and full-label carriers where long labels/values are under pressure | Pass: 6 feed rails are secondary; desktop rail width stays below primary, mobile rail follows the feed primary | Bounded pass with accessibility caveat |

## Findings

- The implemented canonical fixtures are present and render under the two required closeout viewports.
- The first-screen hierarchy check passes for this bounded acceptance pass: primary frames begin near the top of each host state, and support panels do not precede the primary frame on mobile.
- Dossier and feed SideRailMetadataRecipe host-bound states pass the bounded secondary-behavior check. Rails keep `data-frame-rank="secondary"`, use summary/collapse hooks, carry hidden-count hooks where needed, and remain narrower than the primary frame on desktop.
- Feed listing satisfies the mobile scan-path obligation in the rendered states checked here: the relative row pass shows 2+ rows or a featured row plus a current/ordinary row visible within `390x844`.
- No unintended horizontal overflow was detected in the tested host states.
- Superseded by the broad-readiness closeout: fixture-local typography fixes remove negative display-title tracking and hard-coded 10-11px uppercase/meta labels from the three canonical fixtures, and rendered typography-pressure checks now pass for that bounded fixture tranche.

## Doc Adjustments

Docs should say the tranche-1 canonical fixtures now have a bounded `1440x900` + `390x844` closeout pass, not that this exact work is still merely next-pass pending.

Docs should also stay conservative:

- no broad hero/dossier/feed generation readiness yet;
- no SideRailMetadataRecipe promotion to primary recipe;
- no shell-navigation, promo-heavy, dashboard-heavy, search-heavy or applied-page readiness claim;
- no full accessibility or full viewport-matrix claim.

## Remaining Blockers

- Superseded by `docs/broad-readiness-acceptance-pass-2026-05-15.md`: the remaining `360x740`, `1024x640`, and `1728x1000` viewport matrix has now been run for the tranche-1 canonical host fixtures.
- Superseded by `docs/broad-readiness-acceptance-pass-2026-05-15.md`: fixture-local typography fixes close the strict negative-tracking and hard-coded 10-11px uppercase/meta-label sanity issue for the three canonical fixtures.
- ArticleHeroRecipe + SideRailMetadataRecipe remains unimplemented and unproven; only hero metadata/bridge secondary behavior was checked.
- OpenClaw browser could not navigate to the local fixture server in this environment; local headless Chromium provided the fallback evidence.

## Closeout Statement

The remaining documentation tail can close with a conservative readiness statement:

The first-tranche host fixtures have bounded desktop/mobile acceptance evidence at `1440x900` and `390x844`. A later broad-readiness closeout adds `360x740`, `1024x640`, and `1728x1000` evidence and closes the strict fixture typography sanity gap for those canonical fixtures. Dossier and feed SideRailMetadataRecipe host-bound states are proof-backed for staying secondary inside those canonical hosts. Broad site-generation readiness remains limited to the proven recipe surfaces and does not cover shell-navigation, promo-heavy, dashboard-heavy, search-heavy, applied-page, or hero-hosted SideRail combinations.
