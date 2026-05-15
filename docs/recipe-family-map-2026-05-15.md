# HOMM2 Recipe Family Map - 2026-05-15

## Status

Pass 2 artifact for the HOMM2 design-system documentation program.

This document maps the recipe families needed for larger HOMM2-style sites. It is a buildout map, not a content model, site map or broad CSS plan. Its job is to tell later contract, fixture and generation-playbook passes which families exist, which are critical first, which can inherit from the proven MenuScreenRecipe slice, and which still need fresh contract work before production-scale generation.

## Sources Checked

Primary sources:

- `docs/design-system-documentation-program-2026-05-15.md`
- `docs/design-system-constitution-2026-05-15.md`

Proven responsive slice:

- `docs/responsive-recipe-slice-summary-2026-05-15.md`
- `docs/responsive-recipe-contracts-2026-05-15.md`
- `docs/responsive-recipe-implementation-mapping-2026-05-15.md`

Additional framing:

- `README.md`
- `docs/design-system-research-plan-2026-05.md`
- `docs/screen-recipe-contracts-2026-05-14.md`
- `docs/text-system-guidelines-2026-05.md`

## Operating Rules For This Map

- Every production screen starts from one primary recipe family.
- Recipe families are screen-job contracts, not page names.
- A family may use supporting patterns, but supporting patterns do not become co-primary.
- Existing MenuScreenRecipe hooks are reusable only where the same density, frame-rank, summary and first-screen logic applies.
- A family is not safe for broad generation until it has content budgets, downgrade order, fixture expectations and viewport acceptance checks.
- Applied pages are smoke targets unless promoted into canonical fixtures by a bounded pass.

## Proven Baseline: MenuScreenRecipe

MenuScreenRecipe is the only family with a closed responsive slice.

Current canonical proof:

- canonical fixture: `fixtures/menu-screen-recipe.html`
- fixture states: `standard`, `compact`, `emergency`, `stress`
- durable test APIs: `data-recipe-density`, `.recipe-density-*`, `data-frame-rank`, `.recipe-frame-*`
- shared hooks: `.recipe-support-summary`, `.recipe-state-cue`, `.recipe-support-panel[data-recipe-collapse="summary"]`, `.visually-hidden`
- first-screen proof: viewport evidence for `1440 x 900`, `390 x 844` and `360 x 740`

Bridge / applied surface:

- `fairy-journeys.html#menu-shell` is a compatibility smoke target only.
- It may reveal pressure from a real themed page, but it is not the source of truth.

Inheritance rule:

Other families may inherit MenuScreenRecipe's density names, frame-rank API, tap/label floors, summary surfaces and compact/emergency downgrade philosophy. They may not inherit MenuScreenRecipe's command counts, slot hierarchy or proof status unless their own contracts and fixtures exist.

## Family Summary Table

| Family | Screen / Job Served | Timing | Primary Mode | System Status | Inherits From Proven Slice | Fresh Contract Needed Before Scale |
| --- | --- | --- | --- | --- | --- | --- |
| MenuScreenRecipe | World entry, primary menu, chapter select, route entry | Critical first | Navigation | Proven canonical slice | Baseline | No for this family; yes for new variants |
| SiteShellNavigationRecipe | Persistent header, local nav, breadcrumb/section routing around a recipe screen | Critical first | Navigation | Partially grounded bridge pattern | Tap floors, compact labels, frame rank, state cue | Yes |
| ArticleHeroRecipe | Story, record, chapter or feature opening that must orient before reading/listing | Critical first | Reading / orientation | New family, visually grounded only | Title bands, one-loud-thing rule, frame rank | Yes |
| DossierReadingRecipe | Longform article, archive entry, record, comparison dossier | Critical first | Reading | Contracted but not fixture-proven | Parchment object, archive rail, density modes, text floors | Yes |
| FeedListingRecipe | Archive index, story feed, chapter list, search/browse results | Critical first | Listing | New family | Route row state hooks, summary strips, label floors | Yes |
| TeaserCardBlockRecipe | Repeated teasers inside feeds, related links, compact section previews | Critical first as support | Listing | New support family | Frame rank, metadata clamps, accessible compact labels | Yes |
| SideRailMetadataRecipe | Archive rails, status rails, metadata stacks, filters, companion context | Critical support | State / orientation | Partially grounded support pattern | `.archive-rail`, `.menu-side-rail`, summaries, secondary/tertiary rank | Yes |
| RouteBoardRecipe | Current/next route progression, locked/visited state boards | Critical when sites have progression | State / orientation | Contracted but not fixture-proven | `.menu-route-index`, `.route-badge`, current/next selectors | Yes |
| PromoFeaturedModuleRecipe | Featured story, campaign module, highlighted artifact, cross-link invitation | Later unless site depends on promotion | Promo | New family | Frame-rank and one-loud-thing limits | Yes |
| RitualThresholdRecipe | Commitment, irreversible choice, final CTA, warning or initiation | Later for editorial; critical for decision products | State / utility | Contracted but not fixture-proven | Action floors, frame rank, compact/emergency logic | Yes |
| UtilityDashboardBlockRecipe | Dense tools, settings, filters, account/status dashboards, admin-like blocks | Later | Utility | Not covered by current system | Only global floors and material roles | Yes, high risk |
| ReferenceManualRecipe | Design-system docs/manual pages | Critical for docs, not production sites | Utility / reading | Contracted manual recipe | Table-to-record logic stays manual-local | Yes for manual expansion, no production inheritance |

## Family Details

### 1. MenuScreenRecipe

Job:

- world entry;
- primary menu;
- chapter select;
- route-entry screen with one dominant command mount.

Timing: critical first and already stabilized.

Primary mode: navigation.

Current proof:

- canonical fixture exists;
- density states are versioned;
- browser viewport evidence exists;
- shared hook layer exists in `css/tokens.css` and `css/components.css`.

Can inherit:

- none; this is the baseline.

Needs fresh contract pass:

- not for the current family;
- yes for any variant that changes the central command slab into a multi-column menu, search-heavy menu, ecommerce category menu or neutral app shell.

Operational note:

Future families should treat MenuScreenRecipe as the proof of the method: recipe contract -> implementation mapping -> shared hooks -> canonical fixture -> viewport evidence. It does not prove article, feed, utility or promo families.

### 2. SiteShellNavigationRecipe

Job:

- persistent top utility nav;
- local section nav;
- breadcrumb / chapter context;
- small route shortcuts that surround a primary recipe screen.

Timing: critical first.

Primary mode: navigation.

Status: partially grounded by `fairy-journeys.html`, README guidance and research-plan concerns about first-screen competition. No canonical fixture exists.

Likely inherits:

- `--tap-target-min` and `--tap-target-compact`;
- `--label-legible-min`;
- compact label plus accessible full-label strategy;
- `data-frame-rank` and `.recipe-frame-*`;
- `.recipe-state-cue` for current section or save/status orientation;
- MenuScreenRecipe's rule that shell navigation stays secondary to the screen's primary recipe.

Fresh contract needed: yes.

Contract questions:

- When may shell nav appear above the first viewport task?
- How many utility links survive compact and emergency modes?
- Does a shell nav use parchment, stone, inset or flat text treatment?
- How does active-section state avoid becoming another primary command slab?

Generation rule:

Do not let shell navigation become the screen recipe. It supports MenuScreenRecipe, DossierReadingRecipe, FeedListingRecipe and RouteBoardRecipe.

### 3. ArticleHeroRecipe

Job:

- orient a reader to a story, record, chapter, feature or editorial unit before the body or feed starts.

Timing: critical first for larger editorial sites.

Primary mode: reading / orientation.

Status: new family. Current docs provide title bands, material grammar and first-screen obligations, but no article-hero-specific slot contract.

Likely inherits:

- title length bands from responsive contracts;
- one-loud-thing rule from the constitution;
- frame-rank API;
- art bounded-support rule;
- density modes and downgrade order for atmosphere first, metadata second, primary orientation last.

Fresh contract needed: yes.

Contract questions:

- Is the primary frame the hero title/context group or the first reading field?
- How much art can remain visible before the first readable block is delayed?
- Which metadata values are required above fold: date, author, chapter, faction, state?
- When does an article hero collapse directly into DossierReadingRecipe?

Build dependency:

ArticleHeroRecipe should be contracted before FeedListingRecipe and DossierReadingRecipe fixtures are expanded, because both need a stable record-header pattern.

### 4. DossierReadingRecipe

Job:

- longform article;
- archive record;
- ledger page;
- comparison dossier;
- reading-first reference surface inside the world.

Timing: critical first.

Primary mode: reading.

Status: production contract exists in `docs/responsive-recipe-contracts-2026-05-15.md`, but no canonical fixture or viewport proof exists.

Likely inherits:

- `.parchment-object`;
- `.archive-rail`;
- `.note-card`;
- `.dossier-ledger-strip`;
- density modes;
- summary pattern for archive rail and ledger;
- global text floors and title bands;
- frame-rank distinction between primary parchment, secondary rail/ledger and tertiary notes.

Fresh contract needed: yes, as a content-budget expansion plus fixture pass.

Contract questions:

- Body opening budgets by paragraph count and prose measure;
- rail row caps under translated or long labels;
- note-card count and placement;
- metadata stack caps;
- first readable block position at `390 x 844` and `360 x 740`.

Generation rule:

Generated longform pages must not be assembled from generic cards. Parchment reading field remains primary; rails and notes summarize or move before the body field weakens.

### 5. FeedListingRecipe

Job:

- archive index;
- article/story feed;
- chapter list;
- browse/search result list;
- categorized record list.

Timing: critical first for larger sites.

Primary mode: listing.

Status: new family. RouteBoardRecipe offers state-row evidence, but a feed is not a route board.

Likely inherits:

- route row compact floors;
- current/next selector idea only when the list has state;
- summary strips for hidden filters or hidden result groups;
- metadata visible-line rule;
- accessible compact labels;
- frame-rank API so the selected/current item can outrank ordinary rows.

Fresh contract needed: yes.

Contract questions:

- Does the first viewport owe a filter/search affordance, the first N results, or a featured result?
- How many results are visible in standard, compact and emergency modes?
- What is the downgrade order between thumbnails, annotations, metadata, filters and pagination?
- When should listing rows become TeaserCardBlockRecipe items?

Generation rule:

Do not use equal-strength ornate cards for every feed item. A feed needs scan path, selected/current emphasis and quiet repeated rows.

### 6. TeaserCardBlockRecipe

Job:

- repeated story teasers;
- related links;
- compact previews;
- small grouped calls into reading/listing screens.

Timing: critical first as a supporting pattern for feeds and articles, but not usually a full-screen primary recipe.

Primary mode: listing.

Status: new support family.

Likely inherits:

- frame-rank opacity and ornament limits;
- metadata visible-line rule;
- annotation line clamps;
- compact full-label strategy for short visible labels;
- material grammar: teaser cards may use parchment or inset treatments, not generic SaaS cards.

Fresh contract needed: yes.

Contract questions:

- Maximum title, summary, metadata and thumbnail budgets;
- whether image slots are required, optional or forbidden per density;
- card count above fold;
- how repeated frames avoid competing with the primary recipe.

Generation rule:

Use this family inside FeedListingRecipe, DossierReadingRecipe and PromoFeaturedModuleRecipe. Do not let a repeated teaser block become a wall of equal primary frames.

### 7. SideRailMetadataRecipe

Job:

- archive spine;
- status rail;
- metadata stack;
- filter summary;
- companion context beside a primary recipe.

Timing: critical support.

Primary mode: state / orientation.

Status: partially grounded. `.menu-side-rail`, `.archive-rail`, `.recipe-support-summary` and `.recipe-state-cue` exist, but there is no independent side-rail contract.

Likely inherits:

- support summary hook;
- compact/emergency summary behavior;
- secondary/tertiary frame rank;
- rail label line rules;
- metadata visible-line rule;
- state cue preservation when state-critical.

Fresh contract needed: yes.

Contract questions:

- Which rails are navigational, which are metadata, and which are status?
- How many rows survive above fold for each host recipe?
- Which side rails may be interactive?
- How does a rail avoid outranking MenuScreenRecipe, DossierReadingRecipe or ArticleHeroRecipe?

Generation rule:

This family is almost always secondary. It may become primary only if the whole screen job is state/orientation, in which case RouteBoardRecipe or UtilityDashboardBlockRecipe may be the better family.

### 8. RouteBoardRecipe

Job:

- current/next route progression;
- locked, visited and next path states;
- stateful journey board.

Timing: critical when a generated site has progression, paths, chapters or quest state; otherwise second wave.

Primary mode: state / orientation.

Status: production contract exists, no canonical fixture yet.

Likely inherits:

- `.menu-route-index`;
- `.route-badge`;
- `data-route-state="current|next|locked|visited"`;
- summary strips for hidden rows;
- compact row floors;
- frame-rank rule where current/next rows form the primary group.

Fresh contract needed: yes, mainly fixture and viewport proof plus expanded content budgets.

Contract questions:

- How many route rows survive in each density?
- What states are required beyond current, next, locked and visited?
- How are filters/sort controls downgraded?
- How do route badges remain supportive instead of becoming visual noise?

Generation rule:

Only use this as the primary recipe when progression state is the screen job. For normal article lists, use FeedListingRecipe.

### 9. PromoFeaturedModuleRecipe

Job:

- featured story;
- highlighted artifact;
- seasonal/campaign module;
- cross-link invitation;
- editorial promo area.

Timing: later unless the site concept depends on promotion.

Primary mode: promo.

Status: new family.

Likely inherits:

- one-loud-thing rule;
- art bounded-support rule;
- gold/brass as value emphasis;
- frame-rank limits;
- action floors when the promo has a CTA.

Fresh contract needed: yes.

Contract questions:

- Is the promo allowed to outrank the current screen's primary recipe?
- What is the title/summary/action budget?
- How does it downgrade when used inside feeds or side rails?
- Which material role distinguishes promo from ritual threshold?

Generation rule:

Promos are dangerous because they tend to become generic marketing blocks. Keep them artifact-like and subordinate unless the whole screen job is explicitly a feature opening.

### 10. RitualThresholdRecipe

Job:

- irreversible choice;
- warning;
- initiation;
- final CTA;
- commitment point.

Timing: later for ordinary editorial sites; critical for products with decisions, commitments or consequence-heavy flows.

Primary mode: state / utility.

Status: production contract exists, no canonical fixture yet.

Likely inherits:

- `.ritual-panel`;
- exactly one `.btn-ceremonial`;
- one quiet escape action;
- action floors;
- frame-rank API;
- compact/emergency downgrade order.

Fresh contract needed: yes, especially fixture proof.

Contract questions:

- Legal/product-copy exception rules;
- maximum consequence copy before the action;
- accessible label requirements for ceremonial and escape actions;
- difference between promo CTA and true threshold.

Generation rule:

Do not use ritual framing for routine navigation. The family is for consequence, not decoration.

### 11. UtilityDashboardBlockRecipe

Job:

- dense filters;
- account/status panels;
- settings;
- comparison widgets;
- admin-like utility blocks;
- operational dashboards.

Timing: later.

Primary mode: utility.

Status: not covered by the current design-system proof.

Likely inherits:

- only global floors: tap targets, label minimums, no negative tracking, no horizontal overflow;
- material roles;
- density mode names;
- frame-rank rule.

Fresh contract needed: yes, high risk.

Contract questions:

- Does the HOMM2 material grammar support the needed density without harming usability?
- Which controls are allowed: tabs, filters, tables, forms, toggles?
- What accessibility and keyboard obligations apply?
- When should the system reject the screen as outside current coverage?

Generation rule:

Do not claim utility/dashboard readiness from MenuScreenRecipe. Treat this as a separate contract family with a higher accessibility and density bar.

### 12. ReferenceManualRecipe

Job:

- design-system documentation;
- operational manuals;
- contract references;
- implementation examples.

Timing: critical for the documentation program, but not a production game/app recipe.

Primary mode: utility / reading.

Status: documentation/manual contract exists. It must remain separate from production recipes.

Likely inherits:

- global floors;
- table-to-record-card approach inside documentation only;
- manual title and decision-routing budgets;
- explicit split between normative docs and examples.

Fresh contract needed: yes for docs expansion; no production site should inherit manual table/card behavior directly.

Generation rule:

Use ReferenceManualRecipe to explain the system. Do not use it to build fantasy production screens.

## Dependency Graph And Buildout Order

Text graph:

0. Constitution + global floors
   |
   v
1. MenuScreenRecipe (proven canonical baseline)
   |
   +--> SiteShellNavigationRecipe
   |      |
   |      +--> all production families consume shell/nav support
   |
   +--> SideRailMetadataRecipe
   |      |
   |      +--> DossierReadingRecipe
   |      +--> FeedListingRecipe
   |      +--> RouteBoardRecipe
   |
   +--> ArticleHeroRecipe
   |      |
   |      +--> DossierReadingRecipe
   |      +--> FeedListingRecipe
   |
   +--> RouteBoardRecipe
   |
   +--> RitualThresholdRecipe

2. DossierReadingRecipe + FeedListingRecipe
   |
   +--> TeaserCardBlockRecipe
   |      |
   |      +--> PromoFeaturedModuleRecipe
   |
   +--> larger editorial / portal generation

3. UtilityDashboardBlockRecipe
   |
   +--> only after separate utility density/accessibility contracts

Documentation lane:
ReferenceManualRecipe runs beside the production lane and documents it, but its table/card behavior does not flow back into production recipes.

Recommended buildout order:

1. Keep MenuScreenRecipe as the baseline proof and avoid reopening it except for narrow maintenance.
2. Contract SiteShellNavigationRecipe and SideRailMetadataRecipe because every larger site needs safe surrounding navigation and support context.
3. Contract ArticleHeroRecipe, DossierReadingRecipe and FeedListingRecipe as the first larger-site content tranche.
4. Contract TeaserCardBlockRecipe as a support family once feed/listing budgets are known.
5. Add a RouteBoardRecipe fixture if progression/stateful journeys are in scope for the next generated site.
6. Add RitualThresholdRecipe fixtures when consequence/commitment flows are actually required.
7. Defer PromoFeaturedModuleRecipe until content families can protect it from becoming generic marketing UI.
8. Treat UtilityDashboardBlockRecipe as a separate hardening track, not an automatic extension.

## Critical-First Families

Critical first for larger sites:

- MenuScreenRecipe;
- SiteShellNavigationRecipe;
- ArticleHeroRecipe;
- DossierReadingRecipe;
- FeedListingRecipe;
- TeaserCardBlockRecipe;
- SideRailMetadataRecipe.

Conditionally critical:

- RouteBoardRecipe, when progression/state is part of the concept;
- RitualThresholdRecipe, when decisions or commitments are part of the concept;
- ReferenceManualRecipe, for the documentation program rather than production sites.

Later:

- PromoFeaturedModuleRecipe;
- UtilityDashboardBlockRecipe.

## Inheritance Classification

Can inherit current hooks with moderate risk:

- SiteShellNavigationRecipe;
- SideRailMetadataRecipe;
- RouteBoardRecipe;
- RitualThresholdRecipe.

Can inherit only global floors and philosophy until contracted:

- ArticleHeroRecipe;
- FeedListingRecipe;
- TeaserCardBlockRecipe;
- PromoFeaturedModuleRecipe;
- UtilityDashboardBlockRecipe.

Already proven:

- MenuScreenRecipe.

Manual-only:

- ReferenceManualRecipe.

## Fresh Contract Priority

Corrective ratification after the Pass 1-4 audit:

- Pass 2 originally identified SiteShellNavigationRecipe and SideRailMetadataRecipe as the earliest protective layers because they guard first-screen competition and support-panel creep.
- Pass 3 and Pass 4 intentionally pivoted the immediate next tranche to content-first hardening.
- That pivot is now ratified: the project needs stable hero, reading and listing contracts first so shell and side-rail support patterns can be proven against real host recipes instead of becoming abstract standalone blockers.

Highest priority fresh contract passes:

1. ArticleHeroRecipe: establishes record/chapter opening behavior and first-screen orientation budgets.
2. DossierReadingRecipe: expands the already contracted reading family into budgets and fixtures.
3. FeedListingRecipe: unlocks larger archive and portal sites and exposes repeated-row pressure early.
4. TeaserCardBlockRecipe: depends on feed/listing decisions but still belongs in the first content tranche.
5. SideRailMetadataRecipe: remains an early protective support family, but its proof depends on host reading/listing or hero surfaces.

Second priority:

6. SiteShellNavigationRecipe: still protects first-view competition, but follows once the primary host families it surrounds are better contracted.
7. RouteBoardRecipe: needed when progression is a primary site mechanic.
8. RitualThresholdRecipe: needed when consequence actions are real.

Later / separate track:

9. PromoFeaturedModuleRecipe.
10. UtilityDashboardBlockRecipe.
11. ReferenceManualRecipe expansion for documentation consolidation.

## Canonical, Bridge And Applied Surface Rules

Canonical surfaces:

- `fixtures/menu-screen-recipe.html` is canonical for MenuScreenRecipe only.
- Future canonical fixtures should live under `fixtures/` and encode clean, compact, emergency and stress states for the target family.
- A canonical fixture must carry stable recipe, density and frame-rank selectors before it is used as proof.

Bridge surfaces:

- `fairy-journeys.html#menu-shell` is a bridge smoke target for MenuScreenRecipe compatibility.
- Bridge surfaces are useful for finding real pressure from headers, rails, narrative copy and mixed sections.
- Bridge surfaces do not define contracts.

Applied surfaces:

- `fairy-journeys.html` and future themed pages consume the sandbox.
- Applied pages may reveal missing recipe families.
- Applied pages must not become proof unless promoted into a canonical fixture by a bounded pass.

Documentation surfaces:

- `reference.html` and ReferenceManualRecipe explain and route the system.
- Documentation table/card behavior stays isolated from production game/app recipes.

## Verification Performed For This Artifact

- Re-read the program and constitution documents that define this pass and the system boundary.
- Re-read the MenuScreenRecipe slice summary, responsive contracts and implementation mapping to ground inheritance claims in the existing proof.
- Re-read supporting README, research-plan, screen-recipe and text-guideline docs to keep the family map tied to actual system risks: first-screen competition, mobile compression, text pressure, frame rank and documentation/manual separation.
- Checked current hook evidence in `css/tokens.css`, `css/components.css`, `fixtures/menu-screen-recipe.html`, `fairy-journeys.html` and `reference.html` for density, frame-rank, menu, rail, route, parchment and ritual selectors.
- Ran `git diff --check -- docs/recipe-family-map-2026-05-15.md`.

## Unresolved Questions For Next Pass

- ArticleHeroRecipe host-vs-opening-slot rule was formalized later in Pass 5: it may be either a standalone host or an opening slot, depending on the page's primary screen job.
- Which side-rail forms should be contracted first: navigation rail, metadata rail, status rail or filter rail?
- For FeedListingRecipe, does the first viewport prioritize first results, filter/search orientation, featured/current result or category routing?
- Which budgets should become DOM/CSS hooks versus authoring-only rules for titles, summaries, metadata and annotations?
- Which family should get the next canonical fixture after MenuScreenRecipe: DossierReadingRecipe, FeedListingRecipe or the smaller SiteShellNavigationRecipe / SideRailMetadataRecipe support layer?
- How much utility/dashboard density is acceptable before the screen should be rejected as outside current HOMM2 coverage?

## Handoff To Pass 3: Content Contracts And Budgets Expansion

Pass 3 should start with the ratified content-first tranche whose contracts unblock larger site generation and give later support families real hosts to prove against:

1. ArticleHeroRecipe;
2. DossierReadingRecipe;
3. FeedListingRecipe;
4. TeaserCardBlockRecipe;
5. SideRailMetadataRecipe.

Pass 3 should treat SiteShellNavigationRecipe as a near-follow-up integration family, not as a removed concern:

- its protective role still matters;
- it is simply no longer the first standalone contract pass before hero, reading and listing budgets exist.

For each family, Pass 3 should define:

- title, summary, label, metadata and annotation budgets;
- above-the-fold obligations;
- density-mode behavior;
- downgrade order;
- accessibility text obligations;
- which rules are authoring-only versus CSS/DOM hooks.

Pass 3 should explicitly reuse MenuScreenRecipe's proven contract format while avoiding any claim that the menu fixture proves reading, feed, hero, utility or promo behavior.
