# Regression Smoke Harness Pass - 2026-05-16

## Purpose

Convert repeated manual viewport/static checks into a small local harness for the current HOMM2 static Pages repo.

The harness is intentionally dependency-free: no `package.json`, no Playwright install, and no CI wiring yet. It uses Node core modules plus a local Chromium binary.

## Added

- `tools/regression-smoke.js`
- README smoke instructions

## Current Coverage

Targets:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`
- `fixtures/site-shell-navigation-recipe.html`
- `fairy-journeys.html`
- `reference.html#operator-mode`

Viewports:

- `1440x900`
- `390x844`
- `360x740`

Checks:

- static `aria-labelledby` / `aria-describedby` target sanity
- FeedListing indexed route row state exists once
- three FeedListing row index markers exist
- no page-level horizontal overflow
- primary surface starts inside the viewport
- FeedListing indexed row boxes stay `38x38`
- Fairy utility nav labels remain one visual line on mobile

## Deliberate Limits

- Not a visual diff system.
- Not a full accessibility audit.
- Not wired into GitHub Actions yet.
- It checks high-value layout contracts only; detailed recipe assertions can be added per pass.
