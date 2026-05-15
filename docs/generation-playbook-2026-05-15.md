# HOMM2 Generation Playbook - 2026-05-15

## Status / Scope

Pass 5 documentation-only artifact for the HOMM2 design-system documentation program.

This playbook explains how larger HOMM2-style pages should be assembled from recipe families without turning the pass into implementation work. It is not a fixture pass, CSS/API expansion, DOM hook rollout, shell-navigation contract pass, or side-rail host-bound implementation pass.

Sources carried forward:

- `docs/design-system-constitution-2026-05-15.md`
- `docs/recipe-family-map-2026-05-15.md`
- `docs/content-contracts-and-budgets-2026-05-15.md`
- `docs/fixture-strategy-2026-05-15.md`
- `docs/pass-1-4-audit-2026-05-15.md`

The playbook is intentionally conservative. It names what a generator may conceptually assemble, but it does not claim broad generation is credible until the regression-critical host fixtures exist and pass viewport QA.

## Ratified Assumptions Entering Pass 5

The content-first pivot is ratified and should not be reopened in this pass.

The first regression-critical host tranche is:

1. `ArticleHeroRecipe`
2. `DossierReadingRecipe`
3. `FeedListingRecipe`

`SideRailMetadataRecipe` remains a critical support family. A bounded host-bound proof now exists for dossier-hosted and feed-hosted states, showing the rail staying secondary there; that does not by itself make broad generation credible until the wider fixture and QA gates are satisfied. Its isolated fixture can prove row budgets and summary behavior only.

`SiteShellNavigationRecipe` remains important because shell navigation can compete with first-screen hierarchy, but it is not the next standalone blocker for this pass. It should be treated as surrounding support that must not become the screen recipe.

`MenuScreenRecipe` remains the only fully proven canonical baseline. Other families may inherit its density names, frame-rank model, summary/cue philosophy, and compact-before-shrink rule, but they do not inherit its proof status.

## Primary-Family Selection Rules

Every generated production screen must choose exactly one primary recipe family before support patterns are attached.

Choose by screen job, not by visual taste:

- Use `MenuScreenRecipe` when the first task is world entry, primary menu, chapter selection, or route entry through a dominant command mount.
- Use `ArticleHeroRecipe` when the first task is orientation into a story, record, chapter, feature, or archive unit before reading or scanning begins.
- Use `DossierReadingRecipe` when the first task is longform reading, archive record inspection, ledger-style comparison, or a dossier where a parchment reading field must dominate.
- Use `FeedListingRecipe` when the first task is scanning, browsing, filtering, or selecting from story/feed/archive rows.
- Use `RouteBoardRecipe` only when progression state is the screen job, not as a default feed or article list.
- Use `RitualThresholdRecipe` only when the screen job is commitment, warning, irreversible choice, or initiation.
- Use `ReferenceManualRecipe` only for documentation/manual surfaces, not production fantasy pages.
- Treat `TeaserCardBlockRecipe` and `SideRailMetadataRecipe` as support families unless a later pass creates a separate primary-family contract.

If the page cannot name one primary family, generation should stop. Ambiguous primary task selection is an authoring failure, not a CSS problem.

## ArticleHeroRecipe As Host Or Opening Slot

`ArticleHeroRecipe` is a standalone host when the page's primary job is first-screen orientation: title, summary, compact metadata, bounded art, and one clear onward path are the main experience above the fold.

`ArticleHeroRecipe` is an opening slot when the page's durable primary job is reading or listing:

- Hero + `DossierReadingRecipe`: legal when the hero introduces a specific record/article and visibly hands off into the first reading block.
- Hero + `FeedListingRecipe`: legal when the hero introduces an archive, chapter, category, or feature collection and visibly hands off into first results.
- Hero + support only: conceptual but not proof-backed unless the hero itself is the primary host and all support stays secondary.

The hero must not become a scenic poster. Art, captions, secondary CTAs, and metadata yield before title, summary, and handoff disappear. On mobile, the bridge into body or feed opening must remain visible without art pushing both below fold.

Proof status:

- Conceptually generatable: hero-led pages, hero-to-dossier pages, and hero-to-feed pages that obey the documented budgets.
- Proof-backed today: still not broad-use proof-backed. The tranche-1 canonical fixture now exists, but broader use remains blocked until fuller QA confirms the required hostile and density states.

## Host / Support Composition Rules

A host recipe owns the first-screen hierarchy. Support families can attach only after the host's primary frame, first-screen obligation, and downgrade order are preserved.

### General Host Rules

- One primary frame per screen, unless a recipe explicitly allows a grouped primary state.
- One loud thing per scene: title/context group, parchment field, scan path, command slab, or consequence frame.
- Support panels must be secondary or tertiary by frame rank.
- Optional support moves, summarizes, or disappears before the host weakens.
- Support copy and metadata are edited to budget; they are not rescued by micro-type, negative tracking, or cramped wrapping.
- Applied pages and bridge targets can reveal pressure, but they do not become proof.

### SideRailMetadataRecipe Attachment Rules

`SideRailMetadataRecipe` may attach to a host only as orientation, metadata, archive location, status, compact filters, or companion context.

Attachment limits:

- With `ArticleHeroRecipe`: the rail may expose current section, status, or metadata summary, but it must not compete with title, summary, or handoff. Mobile default is summary/cue, not a full stacked rail.
- With `DossierReadingRecipe`: the rail may expose archive location, current record, ledger summary, or selected spine item, but the parchment reading field remains primary. Notes and rails demote before reading measure breaks.
- With `FeedListingRecipe`: the rail may expose active scope, compact filters, or current collection metadata, but first results remain the scan path. Filter chrome stays secondary to rows.
- With `MenuScreenRecipe`: rail context may support route state or save/status cues, but it must not rival the command mount.
- With `RouteBoardRecipe`: rail support is legal only if progression state remains the primary board.

A side rail must be rejected or reclassified when it needs more than four above-fold rows to explain the screen, contains page-primary actions, demands equal visual weight with the host, or becomes a filter-heavy workflow that should be a future scoped filter pattern.

Proof status:

- Conceptually generatable: host pages with compact side-rail summaries that obey budgets.
- Unit proof only when isolated side-rail fixture exists.
- Regression-ready only after at least one reading-host state and at least one feed-hosted or hero-hosted state prove the rail stays secondary above fold.

## Allowed Page Archetypes

Allowed here means conceptually valid under the recipe map. It does not mean broad generation is proof-backed.

| Archetype | Primary family | Legal support | Current generation status |
| --- | --- | --- | --- |
| World entry / chapter select | `MenuScreenRecipe` | Shell nav, route/status cues, limited side rail | Proof-backed only for current menu fixture scope |
| Story or record opener | `ArticleHeroRecipe` | Side rail summary, one onward action, bounded art | Conceptual until hero fixture proof exists |
| Article / archive dossier | `DossierReadingRecipe` | Article hero opening slot, side rail summary, note cards, limited teaser block below primary reading | Conceptual until dossier fixture proof exists |
| Archive index / story feed | `FeedListingRecipe` | Article hero opening slot, compact filters, side rail summary, teaser cards as ranked support | Conceptual until feed fixture proof exists |
| Featured collection opener | `ArticleHeroRecipe` or `FeedListingRecipe` by first-screen job | One featured item plus quieter rows/cards | Conceptual; broad generation waits for hero and feed proof |
| Dossier with related links | `DossierReadingRecipe` | TeaserCardBlockRecipe below or after primary reading obligation | Conceptual; teaser support still needs mixed-rank proof |
| Route/progression state page | `RouteBoardRecipe` | Side rail/status support, shell nav | Conditional; not part of first broad-generation tranche |
| Ritual/action threshold | `RitualThresholdRecipe` | Minimal status/context support | Conditional; only when commitment is real |
| Documentation/manual page | `ReferenceManualRecipe` | Manual-local tables/cards | Documentation-only; not production inheritance |

Legal same-screen support combinations:

- `ArticleHeroRecipe` + one `SideRailMetadataRecipe` summary + one visible handoff to either dossier or feed.
- `DossierReadingRecipe` + one side rail or ledger strip + tertiary notes, with teaser cards below the first reading obligation.
- `FeedListingRecipe` + compact filter/scope rail + optional one featured row/card, while ordinary rows remain quieter.
- `MenuScreenRecipe` + shell navigation + limited state cue, provided the command mount remains dominant.
- `DossierReadingRecipe` or `FeedListingRecipe` + `TeaserCardBlockRecipe` only when card rank is explicit and only one teaser approaches primary visual weight.

## Rejected Page Archetypes / Anti-Patterns

Reject these during generation:

- Multi-primary pages where hero, rail, feed, promo, and CTA all compete at equal strength.
- Scenic poster pages where `ArticleHeroRecipe` has no visible handoff into body or feed.
- Dossiers assembled from generic equal-weight cards instead of a dominant parchment reading field.
- Feeds rendered as ornate card walls with no scan path, selected/current emphasis, or quiet repeated rows.
- Side rails that consume more first-screen attention than the host recipe.
- Shell navigation that becomes the screen recipe or pushes the host's first task down the page.
- Teaser-card grids used as default page architecture before feed and teaser proof exists.
- Promo-heavy landing pages that use HOMM2 ornament to hide missing recipe hierarchy.
- Utility/dashboard-density pages treated as covered by editorial recipes.
- Ecommerce, table-heavy, search-heavy, form-heavy, medical, financial, legal, or safety-critical screens without separate family contracts and accessibility/compliance passes.
- Any generated page that relies on prompt output alone without recipe selection, budgets, downgrade order, fixtures, and QA.

Generation guardrails:

- Equal-strength clutter guardrail: if more than one element claims primary frame rank, reduce or demote support before styling.
- Shell takeover guardrail: shell navigation can orient and route, but cannot own the first viewport unless the primary family is actually a navigation/menu family.
- Support-panel drift guardrail: rails, notes, teasers, filters, metadata, and promo blocks must summarize or move below fold before the host loses its first-screen obligation.
- Art takeover guardrail: imagery can crop, fade, move, or disappear before title, reading, scan path, or command access weakens.
- Copy-pressure guardrail: over-budget text requires authoring edits or documented summarization, not smaller type.

## Readiness Gates For Generation

### Gate 0: Conceptual Assembly

A page may be sketched conceptually when it has:

- one named primary family
- named support families
- first-screen obligation copied from the relevant contract
- content budgets and downgrade order identified
- explicit proof status marked as conceptual, unit-proof, bridge-smoke, or canonical-proof-backed

This is enough for planning and bounded experiments only.

### Gate 1: Bounded Experiment

A page may be implemented as a bounded experiment when:

- it uses one of the first-tranche host families
- it declares where support patterns attach and how they demote
- it avoids new CSS/API/DOM contract expansion unless that is the explicit pass goal
- it is reviewed as an applied or bridge surface, not proof

Bounded experiments should not be used to claim the design system can broadly generate sites.

### Gate 2: Host Fixture Proof

Generation of hero/dossier/feed pages remains blocked from broad proof-backed use until these canonical fixtures are both implemented and QA-backed:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`

Each must include the hostile and density states named in the fixture strategy, stable recipe/density/frame-rank selectors, summary/cue hooks where relevant, accessible full-text carriers for compact states, and viewport/QA evidence strong enough for acceptance.

### Gate 3: Viewport And Accessibility QA

Broad generation is not credible until the first-tranche fixtures pass a viewport QA matrix at minimum for desktop and mobile pressure:

- primary task visible in the first viewport at `1440 x 900` and `390 x 844`
- no unintended horizontal overflow
- primary controls keep preferred `44px` hit height
- compact secondary controls stay at `40px` or larger
- scan labels stay at `12px` or larger
- no negative letter spacing
- compact and emergency modes preserve the primary task plus one orientation cue
- accessible full labels/text exist where visible text is shortened

### Gate 4: Support Proof

`SideRailMetadataRecipe` can participate in broad generation only after:

- isolated unit proof validates row budgets, hidden-count summaries, and compact collapse
- at least one reading-host state proves the rail stays secondary to `DossierReadingRecipe` or equivalent
- at least one feed-hosted or hero-hosted state proves the rail stays secondary to rows or hero orientation
- filter-heavy rail behavior is either bounded inside the rail contract or split into a future filter pattern

The current bounded implementation/report satisfies the dossier-host and feed-host proof minimum, but it still does not replace the broader viewport/accessibility QA gates for claiming system-wide readiness.

### Gate 5: Broad Site Generation

Broad site generation is credible only when:

- the target site's page archetypes map to proof-backed recipe families
- each page chooses one primary family
- support combinations are legal and host-bound proof exists where needed
- applied pages are checked against canonical fixtures rather than replacing them
- shell navigation has enough contract coverage to avoid first-screen takeover
- unresolved utility, promo, ecommerce, dense dashboard, or compliance-heavy screens are excluded or routed to later dedicated passes

## Conceptual Versus Proof-Backed Outcomes

Conceptual outcomes are allowed for planning, prompt shaping, and bounded experiments. They may describe legal recipe combinations, but they must carry a warning that fixture and QA proof is missing.

Proof-backed outcomes require canonical fixtures, hostile content states, stable selectors, viewport evidence, and acceptance checks. A page that looks acceptable in an applied site is not proof-backed unless the corresponding recipe fixture proves the same behavior.

Current proof-backed generation scope:

- `MenuScreenRecipe` within the existing canonical fixture scope only.

Current conceptual but not proof-backed scope:

- `ArticleHeroRecipe` as standalone host or opening slot.
- `DossierReadingRecipe` reading pages with rails/notes/ledger support.
- `FeedListingRecipe` archive and listing pages with filters, rows, and featured variants.
- `SideRailMetadataRecipe` attached to hero, dossier, or feed hosts.
- `TeaserCardBlockRecipe` as related/preview support.

Blocked until proof:

- broad HOMM2-style editorial/site generation from hero/dossier/feed pages
- side-rail-heavy layouts
- feed pages with featured/card hybrids
- promo-heavy pages
- utility/dashboard-density pages
- shell-nav-dominant page families
- any support combination that has not shown host dominance under hostile content

## Open Questions Left For Later Implementation Or QA Passes

- Does `ArticleHeroRecipe` need two canonical handoff variants, one into dossier and one into feed, or is one canonical hero fixture enough for the next tranche?
- For `SideRailMetadataRecipe`, is the long-term host-bound proof minimum dossier plus feed, or dossier plus hero plus feed?
- When a rail becomes filter-heavy, does it remain side-rail metadata support or become a separate scoped filter family?
- Should featured feed rows stay inside `FeedListingRecipe`, or should they require a documented hybrid with `TeaserCardBlockRecipe`?
- Which shell-navigation constraints must become a narrow contract before broad generation can include persistent headers and breadcrumbs?
- What fixture or QA evidence is needed before `PromoFeaturedModuleRecipe`, `UtilityDashboardBlockRecipe`, ecommerce-like catalogs, or dense dashboards can enter generation scope?

## Verification

- Re-read the corrective sections in Pass 2, Pass 3, and Pass 4 covering the ratified content-first pivot.
- Confirmed this playbook agrees with SideRailMetadataRecipe as support-only until host-bound proof exists.
- Confirmed hero, dossier, and feed remain the first regression-critical proof tranche.
- Final consistency pass checked against Pass 2-4 anti-patterns, fixture gates, and proof-status language.
