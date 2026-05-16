# FeedListing Indexed Route Row Pass - 2026-05-16

## Purpose

Promote the reusable row-index pattern discovered during the Fairy Journeys applied-page pass into canonical `FeedListingRecipe` fixture evidence.

This pass does not create a shared CSS API. It proves the behavior inside `fixtures/feed-listing-recipe.html` first, so the system can decide later whether the row index deserves a shared hook.

## Changes

- Added `data-fixture-state="indexed-route-rows"` to `fixtures/feed-listing-recipe.html`.
- Added a fixed `.feed-row-index` track for route sequence labels such as `01`, `02`, `03`.
- Kept the title as the primary row column and the status badge as secondary.
- Added mobile behavior where the badge wraps under the title column instead of forcing a three-column squeeze.
- Updated `docs/fixture-strategy-2026-05-15.md` and `docs/content-contracts-and-budgets-2026-05-15.md` to record the fixture state and row-index constraint.
- Updated `docs/design-system-operator-index-2026-05-15.md` so the indexed FeedListing row pattern is no longer listed as unpromoted fixture debt.

## Acceptance Intent

The pattern is accepted only as a FeedListing scan aid:

- row indexes must stay compact and stable;
- indexes must not become oversized step cards;
- current/ordinary row rank still owns hierarchy;
- metadata and annotations remain optional support;
- filters stay secondary.

## Verification

- `git diff --check`: clean.
- Static source sanity: indexed fixture state exists once, three row index markers exist, mobile badge-wrap CSS exists, referenced docs mention the indexed state, and `aria-describedby` targets resolve.
- Browser metric smoke through Chromium/CDP:
  - `390x844`: page overflow delta `0`, three indexed rows, index boxes `38x38`, badges wrap under the title column.
  - `1440x900`: page overflow delta `0`, three indexed rows, index boxes `38x38`, badges stay on the row's desktop badge column.
- Screenshot artifacts:
  - `/root/snap/chromium/common/homm2-feed-indexed/feed-indexed-390.png`
  - `/root/snap/chromium/common/homm2-feed-indexed/feed-indexed-1440.png`
