# HOMM2 Acceptance QA Framework - 2026-05-15

## Status / Scope

Pass 6 documentation-only artifact for the HOMM2 design-system documentation program.

This document defines how generated HOMM2-style pages are evaluated before they can be treated as on-system. It is an acceptance framework, not a fixture implementation pass, CSS/API/DOM expansion, applied-page rewrite, or full accessibility audit.

Acceptance QA inherits the ratified content-first sequencing from Pass 3 through Pass 5. It does not reopen the earlier protective-layer-first debate. The first regression-critical host tranche remains:

1. ArticleHeroRecipe
2. DossierReadingRecipe
3. FeedListingRecipe

SideRailMetadataRecipe remains support-only. Bounded host-bound proof now exists for dossier and feed hosts, but applied pages and bridge targets still cannot replace canonical proof or the broader acceptance matrix.

## QA Inheritance From Pass 1-5

QA must evaluate generated work against the existing documentation chain:

- Pass 1 defines the system boundary: generated work is not on-system unless it is based on recipe families, contracts, fixtures and QA rather than prompt output alone.
- Pass 2 defines recipe-family status: MenuScreenRecipe is the proven baseline; hero, dossier and feed are critical first-tranche hosts; side rails are support unless a later pass changes their status.
- Pass 3 defines content budgets, downgrade order, density modes and accessible full-text obligations for the content-first tranche.
- Pass 4 defines canonical fixture primacy, hostile state expectations and the distinction between canonical, bridge, applied and documentation surfaces.
- Pass 5 defines generation gates and explicitly separates conceptual assembly from proof-backed generation.

Acceptance QA therefore asks two questions in order:

1. Is the generated page conceptually valid under the recipe map and content contracts?
2. Is the generated page proof-backed by canonical fixture evidence for the relevant family and support composition?

A page can pass the first question and fail the second. That output may be useful as a bounded experiment, but it is not accepted as on-system.

## Acceptance Tiers / Evidence Classes

Use these labels in QA notes and handoffs.

| Tier | Meaning | May be called on-system? |
| --- | --- | --- |
| conceptual | One primary family is selected, support families are legal, budgets and downgrade order are identified, but fixture proof is missing. | No |
| bounded-experiment | Implemented or mocked page used to test pressure, usually in an applied or bridge context, without canonical proof. | No |
| bridge-smoke | Real or semi-real page reveals integration pressure from shell, route context or mixed sections. | No |
| unit-proof | Isolated support fixture validates narrow behavior such as rail row budgets, hidden-count summaries or compact collapse. | No for host compositions |
| canonical-proof-backed | Canonical fixture exists for the primary family, hostile states are represented, stable selectors exist, viewport and sanity checks pass. | Yes, within that fixture scope |
| host-bound-proof-backed | Support pattern is proven secondary inside a canonical host state, not merely in isolation. | Yes, for that host/support combination |

Current acceptance status:

- MenuScreenRecipe: canonical-proof-backed only within the existing menu fixture scope.
- ArticleHeroRecipe: canonical fixture exists in `fixtures/article-hero-recipe.html` and has bounded `1440x900` + `390x844` closeout evidence in `docs/final-acceptance-closeout-2026-05-15.md`; broader proof status still depends on fuller matrix QA and strict accessibility sanity.
- DossierReadingRecipe: canonical fixture exists in `fixtures/dossier-reading-recipe.html` and has bounded `1440x900` + `390x844` closeout evidence in `docs/final-acceptance-closeout-2026-05-15.md`; broader proof status still depends on fuller matrix QA and strict accessibility sanity.
- FeedListingRecipe: canonical fixture exists in `fixtures/feed-listing-recipe.html` and has bounded `1440x900` + `390x844` closeout evidence in `docs/final-acceptance-closeout-2026-05-15.md`; broader proof status still depends on fuller matrix QA and strict accessibility sanity.
- SideRailMetadataRecipe: bounded host-bound secondary proof now exists for dossier and feed hosts; isolated unit proof, hero-host proof and broad reuse remain separate gates.
- Applied pages such as fairy-journeys.html surfaces: bridge-smoke only unless a bounded later pass promotes matching behavior into canonical fixtures.

## Viewport Matrix

Every regression-critical family must survive these viewport states before broad generation can use it as proof-backed.

| Viewport state | Size | Required for | Acceptance obligation |
| --- | --- | --- | --- |
| Desktop baseline | 1440 x 900 | All canonical fixtures | Primary task visible in first viewport with one orientation/support cue where the contract requires it. |
| Mobile baseline | 390 x 844 | All canonical fixtures | Primary task starts in first viewport; compact/support demotion is visible and intentional. |
| Narrow mobile pressure | 360 x 740 | Regression-critical host fixtures and any support-heavy composition | No horizontal overflow; emergency or compact mode preserves the primary task plus one orientation cue. |
| Short desktop pressure | 1024 x 640 | Host fixtures with art, rails, filters or shell navigation | Shell/support does not push the primary task below fold; art and optional detail demote first. |
| Wide desktop scan | 1728 x 1000 | Feed, dossier and hero fixtures when multi-column support exists | Extra space does not create equal-strength clutter or let rails/cards become co-primary. |

Minimum pass condition for the first host tranche:

- ArticleHeroRecipe: title group, orienting summary and visible handoff survive at desktop baseline and mobile baseline; art yields at narrow and short pressure.
- DossierReadingRecipe: heading and first readable block survive in mobile baseline and narrow pressure; parchment field remains primary at desktop and wide states.
- FeedListingRecipe: heading and scan path survive; mobile baseline shows at least the first 2 items or 1 featured plus 1 ordinary item; filters stay secondary.

Support-only families inherit the host matrix when attached. A side rail cannot be accepted from an isolated viewport pass alone because the risk is whether it stays secondary inside a host.

## Contract Failure Checklist

Mark as a contract failure when any item below is true. Contract failures block on-system acceptance.

- The page does not declare exactly one primary recipe family.
- The chosen primary family does not match the first-screen job.
- The primary task is not visible in the required first viewport for the family and density state.
- A support pattern outranks or visually equals the primary frame.
- The page depends on over-budget copy instead of editing, summarizing or using the documented downgrade order.
- Text is rescued by micro-type, negative tracking, cramped wrapping or hidden overflow instead of contract-compliant reduction.
- Required compact or emergency behavior is missing for a hostile state.
- ArticleHeroRecipe becomes a scenic poster with no visible handoff into body or feed.
- DossierReadingRecipe loses the dominant parchment reading field or pushes the opening reading block below fold.
- FeedListingRecipe becomes an ornate card wall with no scannable row hierarchy.
- SideRailMetadataRecipe is treated as a primary screen recipe, contains page-primary actions, or needs more than the documented above-fold row budget to explain the page.
- Applied or bridge evidence is used as a substitute for canonical fixture proof.
- The output claims broad generation readiness for unproven hero, dossier, feed, side-rail-heavy, promo-heavy, utility, ecommerce, dashboard or compliance-heavy screens.

Normal polish debt is narrower:

- minor spacing imbalance that does not affect hierarchy, fit or first-viewport obligations;
- copy tone that needs editorial improvement while still staying within budgets;
- visual refinement of ornaments, textures or shadows that does not change recipe rank;
- bridge smoke pressure that has not reproduced in a canonical fixture;
- documentation wording cleanup that does not change acceptance gates.

## Visual Drift Checklist

QA should actively look for these drift modes.

### Equal-Strength Clutter

Fail when:

- more than one surface appears to claim primary frame rank;
- repeated cards, rails, promos and CTAs all receive similar ornament, weight and spacing;
- the reviewer cannot name the primary task in one sentence after the first viewport.

Expected correction:

- demote, summarize or move support before changing the primary family;
- reduce support count before shrinking labels;
- preserve one loud thing per scene.

### Shell Takeover

Fail when:

- persistent header, breadcrumb, route navigation, account/status strip or shell chrome owns the first viewport;
- shell navigation pushes hero title, reading start or feed rows below fold;
- a shell-nav-heavy page is treated as covered by hero, dossier or feed contracts.

Expected correction:

- keep shell navigation secondary unless the primary family is actually a navigation/menu family;
- route shell-dominant behavior to a later narrow shell contract.

### Support-Panel Drift

Fail when:

- side rails, notes, filters, metadata, teaser blocks or promo modules become co-primary;
- support panels remain expanded on mobile where the contract expects summary/cue behavior;
- hidden summaries are vague and do not announce current location, active scope or hidden counts.

Expected correction:

- collapse support into summary/cue states;
- move support below the primary task;
- require host-bound proof before accepting the combination.

### Art Takeover

Fail when:

- imagery delays title, reading start, scan path or command access;
- hero art becomes the page purpose instead of supporting orientation;
- mixed-media/feed art causes repeated rows or cards to read as equal-weight posters.

Expected correction:

- crop, fade, move or remove art before weakening text and task visibility;
- keep art in bounded support slots;
- verify the same hostile state at mobile and short desktop pressure.

## Content Stress Checklist

Every canonical fixture or proof-backed generated page must be checked with hostile but plausible content, not only ideal copy.

- Over-budget title above the shared 68-character band is present in at least one relevant hostile state, with a documented editorial or downgrade response.
- Long summaries/decks clamp only where allowed and keep full text recoverable in the reading flow or accessible carrier.
- Mixed metadata lengths collapse by value priority, not by shrinking all fields.
- Long labels and translated/compound labels do not cause horizontal overflow.
- Feed rows include long titles, metadata variance and optional annotations without destroying the scan path.
- Dossier states include long rail labels, dense ledger metadata, uneven notes and an opening prose block near the tested upper bound.
- Hero states include art-present and art-absent variants, hostile metadata and a visible handoff.
- Side-rail states include hidden-row count summaries, long label/value pairs and at least one filter-heavy pressure case that may require reclassification.
- Teaser blocks, when present above fold, prove mixed rank: one featured teaser may approach primary weight; secondary cards must demote.
- Mobile pressure uses real compact/emergency content, not artificially shortened demo copy.

## Accessibility Sanity Checklist

These are mandatory sanity checks before acceptance. They are not a full WCAG, legal, compliance, screen-reader or keyboard audit.

- Semantic heading or landmark structure exposes the primary recipe's title or task.
- Full titles, row names, current locations and selected rail items remain available to assistive technology when visible labels shorten.
- Icon-only status markers, compact rail summaries, hidden filters and hidden row counts have text equivalents.
- Links and buttons have meaningful accessible names after visible label compaction.
- Primary controls preserve the preferred 44px hit height; compact secondary controls stay at 40px or larger.
- Visible scan labels stay at 12px or larger.
- No negative letter spacing is used to force fit.
- Keyboard focus is visible on interactive controls in the checked fixture state.
- Reading order follows the primary recipe before optional support in mobile compact states.
- No unexpected horizontal overflow appears at mobile baseline or narrow pressure.
- Motion, hover-only disclosure or art treatment is not required to understand the primary task.

Any failure that hides the primary task, removes full-text access, breaks focus visibility on required controls, or makes compact summaries meaningless is a blocker. Broader accessibility conformance remains a later audit requirement.

## Fixture And Proof Expectations

Proof-backed acceptance requires canonical fixture evidence first, then generated-page or bridge checks.

Required canonical host fixtures before hero/dossier/feed generation is accepted:

- fixtures/article-hero-recipe.html
- fixtures/dossier-reading-recipe.html
- fixtures/feed-listing-recipe.html

Implementation note:

- The tranche-1 host fixtures now exist.
- A bounded final closeout pass now covers `1440x900` and `390x844` for the tranche-1 host fixtures.
- Broad generation should still wait for a fuller QA matrix pass across all required viewport states, plus strict accessibility sanity cleanup.

Each host fixture must include:

- stable recipe identity selector;
- stable density-state selector;
- primary/secondary/tertiary frame-rank markers;
- summary or cue hooks where support collapses;
- accessible full-label or full-text carriers where visible text shortens;
- clean, compact, emergency and hostile states named in Pass 4;
- viewport evidence for the matrix states required by this framework;
- QA notes that list contract failures, visual drift findings and accessibility sanity results.

SideRailMetadataRecipe proof must be staged:

1. Isolated unit proof may validate rail row budgets, hidden-count summaries, compact collapse and support-action demotion.
2. Host-bound proof must show the rail staying secondary inside at least one dossier or equivalent reading host.
3. Host-bound proof must also show the rail staying secondary inside at least one feed-hosted or hero-hosted state.

Only the host-bound states can prove that a side rail is regression-ready as support. An isolated side-rail fixture remains useful, but it cannot make side-rail-heavy generation on-system.

Bridge and applied expectations:

- Bridge smoke targets may be checked after fixture implementation to catch shell, sequencing and mixed-section pressure.
- Applied pages may reveal gaps and should be logged as pressure evidence.
- Neither bridge nor applied pages can override canonical fixture results or replace missing fixture states.

## Blocker Vs Follow-Up Debt Rules

Use this model when deciding whether a generated page can be accepted.

### Blockers

Block acceptance when:

- the page fails any contract-failure checklist item;
- the viewport matrix fails for the required family/state;
- a canonical fixture is missing for the primary family being claimed as proof-backed;
- support behavior lacks host-bound proof where support hierarchy is the risk;
- SideRailMetadataRecipe is promoted beyond support-only status;
- the page claims proof-backed status from applied or bridge evidence only;
- hostile content was not tested for a regression-critical family;
- compact/emergency states preserve visual atmosphere but lose the primary task;
- mandatory accessibility sanity checks fail in a way that hides task, text, focus, labels or orientation.

### Follow-Up Debt

Track as follow-up debt when:

- the page is conceptually valid but missing fixture proof and is clearly labeled conceptual or bounded-experiment;
- a bridge smoke target shows integration pressure not yet reproduced in the canonical fixture;
- minor visual polish is needed without hierarchy or first-viewport failure;
- a support fixture has isolated unit proof but still needs host-bound proof;
- a documentation note needs clarification without changing the acceptance gate;
- broader accessibility, keyboard, contrast or compliance audit remains pending beyond this sanity framework.

### Classification Rule

If accepting the page would teach future generation the wrong system rule, it is a blocker. If the issue can be fixed later without changing recipe selection, proof status, first-screen hierarchy, content budgets or accessible task access, it may be follow-up debt.

## Open Questions For Later Implementation Or Audit Passes

- Which exact automation harness should capture and store viewport evidence for the matrix states?
- Should ArticleHeroRecipe require separate canonical handoff variants into dossier and feed, or can one host fixture cover both until pressure says otherwise?
- What is the long-term minimum host mix for SideRailMetadataRecipe: dossier plus feed, or dossier plus hero plus feed?
- When filter-heavy rail behavior appears, what threshold reclassifies it into a future scoped filter family?
- Which shell-navigation constraints must become a narrow contract before broad generation includes persistent headers and breadcrumbs?
- Which accessibility audit pass should follow this sanity framework before production use in regulated, safety-critical or compliance-heavy contexts?

## Verification

- Re-read Pass 3 acceptance-relevant sections for budgets, downgrade order, first-screen obligations and accessible full-text obligations.
- Re-read Pass 4 acceptance-relevant sections for canonical fixture primacy, hostile states, bridge/applied limits and SideRailMetadataRecipe host-bound proof.
- Re-read Pass 5 readiness gates and conceptual-versus-proof-backed status language.
- Confirmed this framework preserves the ratified content-first first-tranche proof logic.
- Confirmed SideRailMetadataRecipe remains support-only; bounded dossier/feed host-bound proof may exist without automatically promoting the family to broad-ready status.
- Confirmed canonical fixtures remain primary proof, with applied pages and bridge targets limited to pressure evidence.
