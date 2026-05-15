# SideRail Host-Bound Pass Plan - 2026-05-15

## Status

Post-tranche-1 prep artifact.

The first regression-critical host fixtures now exist:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`

This document defines the next bounded pass for `SideRailMetadataRecipe` host-bound proof.

## Goal

Prove that `SideRailMetadataRecipe` stays secondary inside canonical host families instead of becoming a co-primary first-screen surface.

## Why This Pass Exists Now

- Pass 4 and later docs kept side rail as support-only until host-bound proof exists.
- Tranche 1 established the host fixtures that the rail must defer to.
- The next useful risk is not a broad rewrite; it is proving that rail summaries, long labels and hidden-count cues behave correctly inside real hosts.

## Recommended Bounded Scope

Implement host-bound rail proof states against existing canonical fixtures, not against applied pages.

Primary targets:

1. `DossierReadingRecipe` host-bound rail state
2. `FeedListingRecipe` host-bound rail state

Optional follow-up target after the bounded pass succeeds:

3. `ArticleHeroRecipe` host-bound rail state

## Why Dossier + Feed First

- `DossierReadingRecipe` is the strongest reading-host proof surface for testing whether the rail demotes before the parchment opening breaks.
- `FeedListingRecipe` is the strongest scan-host proof surface for testing whether filter-like or metadata-like rail content yields before the result rows lose scan priority.
- `ArticleHeroRecipe` is still relevant, but dossier + feed cover the clearest two host-pressure modes first: reading dominance and scan-path dominance.

This does not settle the longer-term open question of whether hero must be part of the minimum permanent host-bound proof set. It only defines the next bounded pass.

## Required States

For each chosen host target, the pass should prove at least:

- clean support-attached state
- compact summary state
- long-label or long-value hostile state
- one hidden-count or collapsed-section summary state

## Required Selectors And Hooks

- stable host `data-recipe`
- stable host `data-recipe-density`
- stable `data-frame-rank` markers showing the host remains primary and the rail remains secondary
- `recipe-support-summary` or equivalent cue hook for the rail summary state
- accessible full-text carrier for shortened visible values
- hidden-count or active-scope summary text where content collapses

## Acceptance Focus

The pass should explicitly check:

- the host primary frame remains visually dominant above fold
- the rail does not outrank the reading opening or first result rows
- compact state summarizes the rail before shrinking labels
- long labels do not create horizontal overflow
- hidden summaries name what is hidden instead of using vague "more" language
- mobile first-screen still shows the host task before expanded rail detail

## Out Of Scope

- no broad CSS rewrite
- no shell-navigation contract pass
- no promo-heavy or dashboard-like variants
- no applied-page proof substitution
- no claim that isolated side-rail proof is enough by itself

## Suggested Deliverables

- host-bound rail state additions to the canonical host fixtures, or a narrowly scoped companion proof fixture if that keeps selectors cleaner
- short viewport notes for the checked host-bound states
- brief report of which host combinations are now proven versus still pending

## Recommended Prompt Shape For The Next Run

Task:
Implement the first `SideRailMetadataRecipe` host-bound proof pass against existing canonical host fixtures, starting with dossier-hosted and feed-hosted states. Keep the rail secondary, add stable selectors and summary hooks, avoid broad CSS rewrite, and verify mobile first-screen hierarchy before closing the pass.
