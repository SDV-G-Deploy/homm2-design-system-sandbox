# HOMM2 Current Operator Index - 2026-05-16

## Purpose

This is the current entry point for humans and agents working on the HOMM2 design-system sandbox. It consolidates the Pass 1-7 documentation set, the first-tranche fixture proof, the host-bound support passes, the Fairy Journeys applied-page cycle, and the recent `reference.html` quick operator mode.

It is an index, not a new contract. If this file and a normative doc disagree, update the normative doc first, then this index.

## Read First Today

For production-facing design-system work, read in this order:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/recipe-family-map-2026-05-15.md`
3. `docs/content-contracts-and-budgets-2026-05-15.md`
4. `docs/fixture-strategy-2026-05-15.md`
5. `docs/generation-playbook-2026-05-15.md`
6. `docs/acceptance-qa-framework-2026-05-15.md`
7. This index

For a fast visual/manual orientation, open `reference.html#operator-mode` after reading the docs above. Quick mode is a shortcut for choosing a primary recipe, locking the responsive contract, running regression smoke, and promoting only proven patterns. It does not replace the normative docs or fixture proof.

## Document Roles

| Role | Documents | Operator status |
| --- | --- | --- |
| Normative core | `docs/design-system-constitution-2026-05-15.md`, `docs/recipe-family-map-2026-05-15.md`, `docs/content-contracts-and-budgets-2026-05-15.md`, `docs/fixture-strategy-2026-05-15.md`, `docs/generation-playbook-2026-05-15.md`, `docs/acceptance-qa-framework-2026-05-15.md` | Source of current rules, budgets, proof gates, and rejection criteria |
| Current proof / closeout | `docs/final-acceptance-closeout-2026-05-15.md`, `docs/broad-readiness-acceptance-pass-2026-05-15.md`, `docs/side-rail-host-bound-pass-report-2026-05-15.md`, `docs/article-hero-side-rail-host-bound-pass-report-2026-05-15.md`, `docs/site-shell-navigation-pass-report-2026-05-15.md` | Evidence ledgers for what has actually been checked |
| Applied-page notes | `docs/fairy-journeys-*-pass-2026-05-16.md`, especially `docs/fairy-journeys-closeout-pass-2026-05-16.md` and `docs/fairy-journeys-bugcheck-pass-2026-05-16.md` | Page-local applied smoke evidence; useful pressure, not canonical proof |
| Fixture / responsive history | `docs/responsive-recipe-*.md`, `docs/fixture-tranche1-viewport-notes-2026-05-15.md`, `docs/screen-recipe-contracts-2026-05-14.md` | Proven MenuScreenRecipe lineage and earlier contract/evidence trail; defer to current core on conflicts |
| Reference/manual notes | `docs/reference-operator-mode-pass-2026-05-16.md`, `docs/reference-manual-optimization-pass-2026-05-16.md` | Documentation-surface improvements; not production recipe proof |
| Research / visual strategy | `docs/design-system-research-plan-2026-05.md`, `docs/deep-design-pass-2026-05-14.md`, `docs/asset-layer-pilots-2026-05-14.md`, `docs/images-2-strategy-2026-05-14.md`, `docs/text-system-guidelines-2026-05.md` | Background, art direction, copy pressure, and future asset guidance |
| Historical audit | `docs/pass-1-4-audit-2026-05-15.md`, older correction plans | Rationale for current sequencing; not an unresolved blocker list unless a later doc says so |

## Current Proof Status

Proven now, within limits:

- `MenuScreenRecipe` has canonical fixture proof in `fixtures/menu-screen-recipe.html` and the responsive recipe evidence chain.
- `ArticleHeroRecipe`, `DossierReadingRecipe`, and `FeedListingRecipe` have canonical fixtures with acceptance evidence at `1440x900`, `390x844`, `360x740`, `1024x640`, and `1728x1000`, with strict fixture typography sanity closed.
- `SideRailMetadataRecipe` is proof-backed as support inside dossier, feed, and article-hero canonical host states. It remains support-only and is not a primary recipe.
- `SiteShellNavigationRecipe` has narrow host-bound proof around dossier/feed hosts for persistent utility nav, breadcrumb context, local section nav, and route shortcuts. It remains support-only outside true menu/navigation primary screens.
- `fairy-journeys.html` is a rebuilt applied smoke page using ArticleHero + DossierReading + FeedListing with page-local CSS. Its latest closeout verifies local/live parity, mobile nav no-wrap, stable feed index tracks, no checked page-level overflow, and a broader palette.
- `reference.html` now has quick operator mode plus manual table/guardrail fixes. It is a documentation/manual surface, not a production proof surface.

Limits that still matter:

- Proof is fixture-scope and pass-scope. Do not claim full site-generation readiness for arbitrary pages.
- Applied pages and bridge targets reveal pressure but do not replace canonical fixtures.
- No full WCAG, keyboard, screen-reader, legal accessibility, or compliance audit has been completed.
- Promo-heavy, dashboard-heavy, search-heavy, ecommerce-like, form-heavy, regulated, and safety-critical screens remain outside current proof.

## Canonical Surfaces

Current fixtures:

- `fixtures/menu-screen-recipe.html`
- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`
- `fixtures/site-shell-navigation-recipe.html`

Current applied/manual surfaces:

- `fairy-journeys.html`: applied smoke page, useful for integration pressure only.
- `reference.html`: design-system manual and quick operator reference.
- `index.html`: art-direction atmosphere board.

## Workflow Shortcuts

New page or site generation:

1. Name exactly one primary recipe family.
2. Name support recipes and proof tier.
3. Check budgets and downgrade order.
4. Compare against canonical fixtures.
5. Run acceptance QA before calling the result on-system.

Applied-page review:

1. Classify the page as canonical fixture, bridge smoke, applied page, or documentation surface.
2. Identify primary recipe and support recipes.
3. Check first-screen hierarchy, overflow, compact/full-label carriers, and support demotion.
4. Treat local visual success as pressure evidence unless a fixture pass promotes the pattern.

Reference/manual use:

1. Use `reference.html#operator-mode` for a quick operator reminder.
2. Use the full manual for token, specimen, and guardrail lookup.
3. Return to the normative docs before changing recipes, proof claims, or acceptance language.

## Remaining Work In Order

1. Fixture debt: continue promoting reusable patterns exposed by applied pages only through canonical fixtures. The Fairy Journeys indexed FeedListing row/badge pattern now has a canonical fixture state; keep looking for other applied-only behaviors before turning them into shared hooks.
2. Host-bound support: keep SideRail and SiteShell support-only; add broader host mixes only when a real page need requires them and verify with fixture evidence.
3. Prompt kit: turn the current recipe/budget/proof workflow into reusable generation prompts only after fixture debt is closed enough to avoid prompt-only claims.
4. Regression harness: a first local smoke harness now exists at `tools/regression-smoke.js`; next step is expanding recipe-specific assertions or wiring it into CI when the signal stays stable.

## Maintenance Rules

- Update the normative document that owns a rule before updating this index.
- Keep old docs classified instead of letting every artifact look equally current.
- Do not promote applied-page behavior into system claims without a fixture or explicit proof pass.
- When proof expands, record fixture path, viewport matrix, evidence class, and remaining exclusions.

## This Consolidation Pass

This update keeps `docs/design-system-operator-index-2026-05-15.md` as the canonical index path to avoid duplicate entry points. It refreshes the index through the 2026-05-16 Fairy Journeys and `reference.html` passes, shortens the operator path, and records current proof limits without adding CSS/HTML changes or new fixture implementation.
