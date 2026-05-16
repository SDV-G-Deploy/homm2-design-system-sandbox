# Fairy Journeys Visual Regression Fix Pass - 2026-05-16

## Scope

User-reported applied-page regressions after the overnight Fairy Journeys pass:

- mobile top utility nav labels breaking inside plaques;
- applied page reading as mostly brown/sand/gold despite available semantic palette roles;
- FeedListingRecipe row text collapsing because the leading step badge consumed too much mobile row width.

## Evidence

- Live-page inspection confirmed `fairy-journeys` inherited global emergency text wrapping inside short nav labels.
- Mobile feed metrics before the fix showed the step badge track expanding to about `131px`, leaving the row title around `113px` wide.
- Documentation audit confirmed that palette roles existed in tokens and constitution, but there was no applied-page acceptance check against brown/sand monotone.

## Fix

- Shared `SiteShellNavigationRecipe` anchors now keep one-line labels through no-wrap behavior and horizontal scrolling.
- `fairy-journeys` no longer lowers utility nav below the compact-control floor.
- `fairy-journeys` FeedListing rows now use a stable `40px` mobile step track, fixed `38px` step badge, and status badges below the title column without magic offsets.
- Current feed rows now use mana/focus accents; ordinary badges use a quieter moss state; page background and feed surfaces use restrained mana/moss/verdigris accents.

## Documentation Updates

- `docs/design-system-constitution-2026-05-15.md`: added applied-page palette contrast rule and monotone rejection rule.
- `docs/responsive-recipe-contracts-2026-05-15.md`: added mobile nav wrapping rule and FeedListing step/index addendum.
- `docs/site-shell-navigation-pass-report-2026-05-15.md`: added follow-up no-wrap utility nav rule.
- `docs/text-system-guidelines-2026-05.md`: added nav plaque, feed index badge, and semantic color/state rules.

## Verification

- `git diff --check` passed.
- Static source check passed for anchors, ARIA references, no-wrap shell nav, feed step fixed sizing, removal of magic offset, and required documentation strings.
- Headless Chromium screenshots generated at `360x740`, `390x844`, and `1440x900` under `/root/snap/chromium/common/homm2-visual-fix/`.
- CDP metrics after the fix showed no horizontal overflow, one-line nav labels, `38px` step badges, and title columns wider than the step track.

## Remaining Risk

- This is still an applied-page fix plus contract update, not a full canonical fixture expansion for step/index FeedListing rows.
- Future work should add a canonical FeedListing fixture variant with leading index badges if that pattern is expected to be reused.
