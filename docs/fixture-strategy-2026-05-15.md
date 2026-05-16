# HOMM2 Fixture Strategy - 2026-05-15

## Status

Pass 4 artifact for the design-system documentation program.

This document defines which fixtures the HOMM2 system needs so recipe contracts can be regression-tested against dense, ugly, realistic content instead of idealized compositions. It is a fixture strategy, not a broad implementation pass and not a viewport QA pass by itself.

## Sources Checked

Primary:

- docs/design-system-documentation-program-2026-05-15.md
- docs/design-system-constitution-2026-05-15.md
- docs/recipe-family-map-2026-05-15.md
- docs/content-contracts-and-budgets-2026-05-15.md

Proven baseline:

- docs/responsive-recipe-slice-summary-2026-05-15.md
- docs/responsive-recipe-contracts-2026-05-15.md
- docs/responsive-recipe-implementation-mapping-2026-05-15.md

Supporting:

- README.md
- docs/screen-recipe-contracts-2026-05-14.md
- docs/text-system-guidelines-2026-05.md
- docs/design-system-research-plan-2026-05.md
- reference.html

## Purpose

The fixture layer exists to prove four things that documentation alone cannot prove:

1. hostile content does not break first-screen obligations
2. downgrade order holds under realistic density pressure
3. shared selectors and summary states are stable enough for later QA
4. applied pages do not silently become the source of truth

## Fixture Philosophy

### What a fixture is for

A fixture is a bounded proof surface for one recipe family or one tightly-scoped support pattern. It should intentionally carry realistic content pressure, explicit density states, and stable selectors. It is not a marketing demo and not a themed page.

### What a fixture is not for

- not for broad scene polish
- not for proving multiple unrelated recipe families at once
- not for replacing applied pages
- not for hiding over-budget content behind unrealistic short copy

### Stress-data philosophy

Fixtures should bias toward ugly but plausible content:

- long titles and labels
- inconsistent metadata lengths
- translated or compound labels
- too many candidate rows or cards
- mixed importance across repeated items
- hostile mobile pressure
- optional art that competes with content unless demoted

The design system only earns trust if it survives this kind of pressure without dropping into micro-text, equal-weight clutter, or accidental generic-card UI.

## Canonical, Bridge, Applied And Documentation Surfaces

### Canonical fixtures

Canonical fixtures are the source of proof for a recipe family.

Requirements:

- live under fixtures/
- own one named family or one tightly-bounded support pattern
- include stable recipe, density and frame-rank selectors before they are treated as proof
- encode clean, compact, emergency and stress states when relevant
- use content intentionally chosen to test the family contract

### Bridge smoke targets

Bridge targets are real or semi-real pages that expose pressure from mixed sections and surrounding shell context.

Use:

- to catch integration pressure
- to check that shared hooks do not obviously break applied pages

Do not use:

- as the contract source of truth
- as a substitute for canonical fixtures

Current bridge example:

- fairy-journeys.html#menu-shell for MenuScreenRecipe compatibility only

### Applied pages

Applied pages consume the design system. They may reveal missing recipe coverage, but they do not become proof until a bounded pass promotes a matching pattern into fixtures/.

### Documentation surfaces

reference.html and other manual surfaces explain the system, but their table/card behavior remains isolated from production fixtures.

## Fixture Classes

Each critical family should eventually have at least these fixture classes, though not every family needs them all in the first pass:

1. clean happy-path fixture
2. dense editorial fixture
3. long-label or long-meta stress fixture
4. mobile-pressure fixture
5. mixed-media or promo-pressure fixture when art or featured content is part of the family

## Family-To-Fixture-Class Matrix

This matrix is the practical backlog cut. It distinguishes what the family eventually needs from what the next tranche must implement first.

| Family | Clean | Dense Editorial | Long-Label / Long-Meta Stress | Mobile Pressure | Mixed-Media / Promo Pressure | First-Tranche Minimum |
| --- | --- | --- | --- | --- | --- | --- |
| ArticleHeroRecipe | Yes | Optional | Yes | Yes | Yes | clean + hostile-title + hostile-meta + emergency |
| DossierReadingRecipe | Yes | Yes | Yes | Yes | Optional | clean + hostile-rail + hostile-notes + emergency |
| FeedListingRecipe | Yes | Yes | Yes | Yes | Yes when featured rows exist | clean + dense + compact + featured-mix |
| TeaserCardBlockRecipe | Yes | Light | Yes | Yes | Yes | clean + mixed-rank + hostile-copy |
| SideRailMetadataRecipe | Yes | Light | Yes | Yes | Optional | clean + long-label + compact + filter-variant |

Operational reading:

- ArticleHeroRecipe, DossierReadingRecipe and FeedListingRecipe need the strongest first tranche because they carry the highest first-screen and density risk.
- TeaserCardBlockRecipe and SideRailMetadataRecipe still need hostile variants, but one bounded support fixture each is enough before they become blocking regression surfaces.

## Core Fixture Contract

Every canonical fixture should explicitly declare:

- recipe family name
- required slots
- optional slots under test
- density states under test
- first-screen obligations being exercised
- which content is intentionally hostile
- which shared selectors are expected to survive into QA

Minimum stable selectors expected for future canonical fixtures:

- data-recipe or equivalent recipe identity
- data-recipe-density or equivalent forced density state
- frame-rank markers for primary, secondary and tertiary surfaces
- summary or cue hooks for collapsed support content
- accessible full-label or full-text carriers where compact states shorten visible text

## Priority Buildout Order

Pass 4 should not try to fixture everything. The right order is the highest-risk content tranche first.

Ratified sequencing note:

- This priority order is a deliberate content-first pivot from Pass 2's earlier protective-layer-first framing.
- The project is choosing to prove hero, reading and listing pressure first because those host families define the hierarchy that shell navigation and side rails must support.
- SiteShellNavigationRecipe and SideRailMetadataRecipe remain early risk families, but they are not treated as standalone proof blockers ahead of the first host-family tranche.

Priority order:

1. ArticleHeroRecipe
2. DossierReadingRecipe
3. FeedListingRecipe
4. TeaserCardBlockRecipe
5. SideRailMetadataRecipe

Reason:

- ArticleHeroRecipe establishes how large titles, summaries, art and first-screen handoff coexist.
- DossierReadingRecipe is the nearest family to existing proof and should become the next likely full canonical reading fixture.
- FeedListingRecipe is essential for larger archive and portal sites and is highly vulnerable to generic-card drift.
- TeaserCardBlockRecipe depends on feed decisions and should not be fixture-led before feed contracts settle.
- SideRailMetadataRecipe is critical, but as a support family it should be proven against host recipes, not only in isolation.

## Canonical Fixture List

### 1. fixtures/article-hero-recipe.html

Purpose:

- canonical proof surface for ArticleHeroRecipe

Minimum states:

- clean
- compact
- emergency
- hostile-title
- hostile-meta

Primary risks under test:

- overlong title pressure
- summary versus art competition
- metadata overload above fold
- broken handoff into reading or listing

Required hostile content cases:

- one over-budget title above the shared 68-char band
- one long summary that must clamp visually but remain fully recoverable
- mixed metadata lengths with one obviously too-long value
- art present in one state and absent in another

Regression-critical checks:

- title and orientation summary remain readable in compact and emergency
- art yields before the first readable text/handoff disappears
- metadata collapses into a summary strip instead of a cramped stack

Documentation-only notes:

- exact copy choices for eyebrow wording
- whether the handoff is into body-first or feed-first content for a specific themed page

### 2. fixtures/dossier-reading-recipe.html

Purpose:

- canonical proof surface for DossierReadingRecipe

Minimum states:

- clean
- compact
- emergency
- hostile-rail
- hostile-notes

Primary risks under test:

- first readable block displaced by rails or notes
- side matter outranking parchment reading field
- metadata clutter inside ledger or rail summaries
- long archive labels causing narrow-screen failure

Required hostile content cases:

- long archive rail labels
- 3 note cards with uneven text lengths
- dense ledger metadata set
- opening prose that sits near the upper safe bound

Regression-critical checks:

- first readable block starts in the first mobile viewport
- parchment field stays primary under all states
- notes and rails demote before reading measure breaks
- selected/current rail location keeps full accessible text

Documentation-only notes:

- editorial choice of excerpt length beyond the tested hostile bands
- theme-specific archive taxonomy wording

### 3. fixtures/feed-listing-recipe.html

Purpose:

- canonical proof surface for FeedListingRecipe

Minimum states:

- clean
- dense
- indexed-route-rows
- compact
- emergency
- featured-mix

Primary risks under test:

- scan path collapsing into equal-strength card clutter
- filters outranking results
- too many rows above fold
- annotations and metadata creating noisy repeated blocks

Required hostile content cases:

- long row titles
- mixed featured and ordinary rows
- dense filter set with hidden-filter summary
- rows with metadata variance and optional annotation
- indexed route rows with a fixed number track, title track and status badge

Regression-critical checks:

- first results remain the scan path
- filter chrome stays secondary
- repeated rows remain quieter than the selected or featured item
- row indexes stay stable scan aids and do not become oversized step cards
- row metadata collapses by value priority, not by tiny type

Documentation-only notes:

- exact editorial grouping model for a future archive landing
- whether search is in scope for a given applied site

### 4. fixtures/teaser-card-block-recipe.html

Purpose:

- bounded proof surface for TeaserCardBlockRecipe as a support family

Minimum states:

- clean
- compact
- mixed-rank
- hostile-copy

Primary risks under test:

- every teaser becoming co-primary
- card summaries remaining too verbose
- too many equally-detailed cards in one visible block

Required hostile content cases:

- one featured teaser plus three subordinate teasers
- long card titles and uneven metadata lengths
- one state where summaries should disappear for secondary cards

Regression-critical checks:

- only one teaser can approach primary visual weight
- card count reduces before text shrinks
- secondary teaser summaries disappear before titles become illegible

Documentation-only notes:

- exact editorial sequencing of teaser groups on a future themed page

### 5. fixtures/side-rail-metadata-recipe.html

Purpose:

- bounded unit proof surface for SideRailMetadataRecipe as a support family
- validates row budgets, summary behavior and support-action demotion in isolation
- does not by itself make the family regression-ready

Minimum states:

- clean
- compact
- emergency
- long-label
- filter-variant

Primary risks under test:

- rails overtaking host recipe hierarchy
- long labels or values creating rail clutter
- mobile summary state becoming too vague
- filter-like rails drifting away from metadata support

Required hostile content cases:

- long label and long value pairs
- hidden-row count summaries
- action links that must demote below the primary surface
- a filter-heavy variant that tests whether the pattern still belongs to this family

Regression-critical checks:

- mobile default becomes summary/cue instead of full stacked rail
- summary text announces hidden content meaningfully
- rail actions remain support actions
- isolated proof must not be treated as complete until host-bound states show the rail staying secondary inside real host recipes

Host-bound proof required before regression-ready:

- at least one dossier-hosted or equivalent reading-host state
- at least one feed-hosted or hero-hosted state
- those host-bound states are the canonical proof that the rail does not overtake the primary recipe above fold

Documentation-only notes:

- exact taxonomy of status versus metadata versus filter rails

## Which Fixtures Are Regression-Critical First

Regression-critical in the immediate next tranche:

- fixtures/article-hero-recipe.html
- fixtures/dossier-reading-recipe.html
- fixtures/feed-listing-recipe.html

Support fixtures that matter soon but can trail:

- fixtures/teaser-card-block-recipe.html
- fixtures/side-rail-metadata-recipe.html

Reason:

The first three fixtures exercise title pressure, reading pressure, and listing pressure. Those are the fastest path to exposing whether Pass 3 budgets are real enough to survive hostile content. The support families should still be documented now, but they do not block the same amount of generation risk on their own.

## Which Fixtures Stay Documentation-Only For Now

Documentation-only for this pass means planned and specified, but not yet required as blocking regression targets:

- teaser-card variants beyond one mixed-rank hostile block
- extra isolated side-rail variants beyond the bounded unit fixture, especially variants not attached to a host reading, listing or hero context
- promo-heavy variants until PromoFeaturedModuleRecipe is contracted
- utility/dashboard-density fixtures

These should not be treated as unimportant. They are simply lower-value proof targets than the first hostile hero, dossier and feed fixtures.

## Deploy And Public Preview Expectations

Canonical fixtures should be deployable through the existing static Pages flow as first-class public paths, just like the current menu fixture.

Expectations:

- fixture paths live in repo content and ride the normal Pages deploy
- fixture URLs should be stable enough to reference from docs and QA notes
- fixture markup may be visually plain compared to themed pages; proof matters more than atmosphere polish
- deployment is useful for review and sharing, but deployed visibility does not by itself prove contract success

## Preview And Verification Strategy

What Pass 4 should specify now:

- which fixtures must exist
- which hostile states they must encode
- which selectors must be stable
- which families are blocking for later QA

What Pass 4 should not claim yet:

- that the fixtures are already implemented
- that browser viewport QA has already passed
- that every hostile state has landed in CSS

## Bridge Smoke Targets Versus Canonical Fixtures

Canonical fixture job:

- prove the contract in isolation with stable selectors and intentional hostile content

Bridge smoke target job:

- reveal integration pressure from shell nav, real page sequencing, mixed section transitions and local composition baggage

Operational rule:

- do not skip canonical fixtures because an applied page “looks fine”
- do not treat bridge smoke failures as proof that the family contract is wrong until the canonical fixture says the same thing

Initial bridge targets to keep using after fixture implementation:

- fairy-journeys.html#menu-shell for MenuScreenRecipe compatibility
- fairy-journeys.html#story-dossier as a dossier-adjacent smoke surface once DossierReadingRecipe fixture work starts
- reference.html recipe documentation blocks as documentation-only comparison surfaces, never as proof

## Handoff To Later QA

The later acceptance QA framework should inherit these fixture priorities, not replace them.

Expected handoff:

- Pass 4 names the canonical fixtures and hostile states
- later implementation lands the fixtures and shared hooks
- later QA verifies them across the viewport matrix and accessibility sanity checks

## Unresolved Questions

- After the required host-bound proof starts, what is the minimum long-term host mix for SideRailMetadataRecipe: dossier plus feed, or dossier plus hero plus feed?
- Does ArticleHeroRecipe need two canonical handoff variants, one into dossier and one into feed, or is one canonical hero enough for now?
- For FeedListingRecipe, should featured-mix be part of the base canonical fixture or a second-phase variant after plain row listing stabilizes?
- When a rail becomes filter-heavy, does it remain SideRailMetadataRecipe or become a separate future fixture family?
- Which support fixture should be the first to graduate from documentation-only into regression-critical after hero, dossier and feed?

## Pass 5 Readiness Note

Do not open the generation playbook as if the system is ready for broad site generation until the first hostile hero, dossier and feed fixtures exist. Pass 5 can plan generation behavior, but its credibility depends on these proof surfaces landing first.
