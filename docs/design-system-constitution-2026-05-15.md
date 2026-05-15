# HOMM2 Design-System Constitution - 2026-05-15

## Status

Pass 1 normative artifact for the HOMM2 design-system documentation program.

This document defines the system boundary for later recipe-family, content-contract, fixture, generation-playbook and QA passes. It is intentionally bounded. It does not prove that the system can generate every kind of site, and it does not replace recipe-level contracts or viewport evidence.

## Source Of Authority

Primary program source:

- `docs/design-system-documentation-program-2026-05-15.md`

Repo framing and evidence checked for this pass:

- `README.md`
- `docs/design-system-research-plan-2026-05.md`
- `docs/text-system-guidelines-2026-05.md`
- `docs/screen-recipe-contracts-2026-05-14.md`
- `docs/responsive-recipe-slice-summary-2026-05-15.md`
- `docs/responsive-recipe-evidence-2026-05-15.md`
- `docs/responsive-recipe-contracts-2026-05-15.md`
- `docs/responsive-recipe-implementation-mapping-2026-05-15.md`
- `docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
- `docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md`
- `docs/responsive-recipe-followup-pass6-2026-05-15.md`

Useful upstream foundation reference also checked:

- `/root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-FOUNDATION.md`

Normative order for future work:

1. This constitution defines identity, invariants, variation surface and rejection rules.
2. Recipe-family docs define which screen jobs exist and which family applies.
3. Content contracts define per-family budgets, downgrade order and acceptance checks.
4. Fixtures prove the contracts against realistic and hostile content.
5. Applied sites consume the system only after the relevant recipe and fixture coverage exists.

If documents disagree, prefer the more specific, newer contract for implementation detail, but do not violate this constitution's identity and boundary rules without explicitly updating it.

## North Star

The north star remains:

> Interface belongs to the world.

The HOMM2 system is a browser-first, production-facing fantasy interface system where UI feels like a material part of an authored world: framed, placed, readable, stateful and consequence-aware.

The current identity label is **Heraldic Menu**:

- old-kingdom fantasy interface language;
- modern readability;
- game-menu / chapter-select rhythm;
- material surfaces instead of generic cards;
- one clear primary route through each first screen.

The system should feel like a usable artifact, not a decorated webpage. Visual atmosphere is valuable only when it strengthens hierarchy, state, navigation or reading.

## Applicability Boundary

### This System Is For

Use this system for sites or screens that need most of the following:

- world-embedded fantasy, mythic, fairy-tale, game, quest, archive or ritual framing;
- menu-first or chapter-select navigation;
- authored screen composition where hierarchy matters more than neutral content throughput;
- artifact-like reading, progression, state or commitment surfaces;
- warm material UI: parchment, stone, brass/gold, wood, inset fields and rare magic accents;
- screen recipes with explicit first-viewport obligations and responsive downgrade rules;
- generated or semi-generated themed sites that can be reviewed against documented contracts.

Good candidate screen jobs include:

- primary menu / world-entry screens;
- chapter, route or journey selection;
- archive, dossier, record and comparison reading;
- stateful route boards;
- consequence, initiation or final-choice thresholds;
- operational reference/manual pages for the design system itself.

### This System Is Not Yet For

Do not claim this system is ready for:

- arbitrary marketing sites with no world, narrative or artifact premise;
- neutral SaaS dashboards where speed, density and conventional controls outweigh atmosphere;
- data-heavy enterprise applications without a separate density/accessibility contract pass;
- ecommerce catalogs, forms, tables or search-heavy flows unless a matching recipe family exists;
- production medical, financial, legal or safety-critical experiences without a separate accessibility and compliance audit;
- any site whose success depends on prompt output alone without fixtures, contracts and QA.

The documentation program's honest model is:

`prompt + documented recipe family + contracts + fixtures + QA`

not:

`prompt alone`

## Invariant System Rules

These rules are stable unless this constitution is explicitly revised.

### 1. World-Embedded Interface

UI must read as part of the world, not as a generic web interface with fantasy paint.

Required behavior:

- surfaces have material roles;
- screens feel placed, framed or staged;
- ornament has hierarchy, state or navigation purpose;
- images and atmospheric layers support structure rather than replacing it.

Reject:

- ordinary SaaS card grids with fantasy colors;
- stock landing-page composition dressed with decorative borders;
- image atmosphere that hides weak interface hierarchy.

### 2. Material Grammar Has Meaning

Core material roles are invariant:

- parchment: reading, records, longform, archive and explanation;
- stone / wood / dark inset: structure, shell, containment and world mass;
- gold / brass: value, primary action, selected route and reward emphasis;
- mana / magic glow: rare focus, consequence, threshold or supernatural state;
- wax / seals / medallions: commitment, status, ownership or ceremony.

A theme may rename or recolor these roles, but it may not flatten them into arbitrary decorative styling.

### 3. One Primary Recipe Per Screen

Every production screen must have one primary recipe. Supporting patterns may appear only if they do not outrank that recipe's required layers.

Required behavior:

- choose the screen job before composing the page;
- required recipe layers define the hierarchy floor;
- optional layers support, summarize or move before the primary task weakens;
- page-local CSS may stage and proportion the recipe, but may not invent a different dominance order.

### 4. One Loud Thing Per Scene

Each screen gets one dominant visual or interaction carrier.

Examples:

- MenuScreenRecipe: command slab and title/context group;
- DossierReadingRecipe: parchment reading field;
- RitualThresholdRecipe: consequence frame and ceremonial action;
- RouteBoardRecipe: current/next route state group.

Reject equal-strength panels, rails, glows, cards or CTAs competing for first attention.

### 5. Recipe Contracts Beat Page-Local Rescue

Responsive behavior is a system contract, not late page polish.

Invariant floors from the current contracts:

- primary task visible in the first viewport at `1440 x 900` and `390 x 844`;
- no horizontal overflow except explicitly scrollable documentation/code examples;
- primary controls keep a `44px` preferred hit height;
- compact secondary controls never drop below `40px`;
- scan labels stay at `12px` or larger;
- no negative letter spacing to force fit;
- compact mode removes, summarizes or moves content before shrinking labels;
- emergency mode preserves the primary task and one orientation cue.

These floors apply before visual preference, thematic ambition or page-local composition.

### 6. Density Is A Mode, Not A Breakpoint Hack

The system recognizes spacious, standard, compact and emergency density modes.

Required behavior:

- density changes visible content count, summaries, frame depth and optional layers;
- compact does not mean micro-text;
- emergency preserves task and orientation, not atmosphere;
- explicit fixture/test selectors such as `data-recipe-density` are valid system API, not temporary demo hooks.

### 7. Frame Rank Is A Contract

Frames must have rank: primary, secondary or tertiary.

Required behavior:

- one primary frame per production screen or recipe state unless a recipe explicitly allows a grouped primary state;
- secondary frames support orientation or state;
- tertiary frames carry annotation, atmosphere or optional detail;
- page-local CSS may not promote tertiary route boards, rails or notes to primary visual intensity.

### 8. Text Must Fit Its Component Role

Text is part of the system architecture.

Invariant text behavior:

- display and intro copy may be literary, but scan-first UI must be brief;
- command labels read like choices, not paragraphs;
- rails, metadata and plaques use compressed wording;
- over-budget titles or labels require editing, summarization or a documented downgrade path;
- no normal component should depend on `10px` text or emergency wrapping to survive.

The main rejection rule from the text pass holds: rich copy that is too long, too loud or too large for its carrier is a system failure, not a decorative success.

### 9. Art Is Bounded Support

Images, illustration and atmospheric scenery may enhance sense of place, but they are not allowed to solve structural problems.

Required behavior:

- art appears through named bounded slots where possible;
- images may crop, fade, move or disappear before primary tasks weaken;
- generated images do not count as responsive evidence;
- visual references may inform hierarchy and density patterns, not be copied as style templates.

### 10. Documentation Must Stay Operational

The design-system docs must help builders decide and reviewers reject.

Required behavior:

- name the recipe, slots, budgets, downgrade order and acceptance checks;
- distinguish production recipes from documentation/manual recipes;
- state unresolved questions instead of implying false completeness;
- use concrete contract failures over vague aesthetic judgment.

## Theme-Adaptable Surface

The system supports thematic variation, but only inside the boundary below.

Allowed theme-level adaptations:

- palette within semantic roles: crown/gold, mana/magic, parchment/reading, stone/shell, danger/warning, reward/value;
- faction, setting or brand names for the same material roles;
- surface texture, illustration style, background scenery and world props;
- icon and motif sets, provided they remain object-like and legible;
- copy voice, language and lore density within text budgets;
- recipe-specific density defaults, if the required first-screen obligations still pass;
- bevel, border, shadow and ornament intensity within frame-rank limits;
- title treatments and typeface pairing, if readability floors and hierarchy survive;
- applied-site content sequence after the primary recipe is selected.

Not theme-adaptable without a new contract or constitution update:

- replacing material hierarchy with generic flat cards;
- making mana/glow the default treatment for ordinary content;
- using gold for every important-looking thing until value hierarchy disappears;
- changing first-screen obligations, tap floors, label floors or downgrade order;
- treating page-local CSS as the owner of collapse logic;
- promoting an applied page smoke target into canonical proof;
- removing accessible full labels when visible compact labels are shortened;
- adding broad new site categories without recipe-family and fixture coverage.

## Anti-Drift Rules

Future work must reject drift early. These rules are reviewable.

1. Start every new production screen from a recipe family, not from a visual mood board.
2. If no existing recipe fits, create or document the missing family before building the page as production.
3. Keep `tokens.css` as the semantic override surface and `components.css` as reusable behavior; keep scene files page-local.
4. Promote repeated local fixes into shared hooks only when the recipe contract justifies them.
5. Do not use local breakpoint rescue to override recipe downgrade order.
6. Do not let `reference.html`, `index.html` or an applied site become the unspoken source of truth.
7. Do not count a pretty screenshot as contract evidence unless content variance and viewport obligations were checked.
8. Treat external visual research as pattern evidence for hierarchy, density and documentation shape, not as a style source to copy.
9. Keep documentation/manual behavior separate from production game/app recipes.
10. If generated work needs many exceptions, mark the recipe or theme as under-specified instead of normalizing the exceptions.
11. If a future pass changes invariant rules, update this constitution and name the reason.

## Failure Modes To Reject

Reject generated or hand-authored work when any of these appear:

- primary action, reading start or consequence decision is not visible in the required first viewport;
- support rails, route boards, metadata or lore outrank the main task;
- multiple equal-strength command slabs or ceremonial CTAs compete;
- mobile layout is just desktop stacked into a long first screen;
- desktop layout is a stretched mobile lane with no meaningful hierarchy;
- labels shrink below `12px`, controls below `40px`, or letter spacing goes negative to force fit;
- overflow is hidden or clipped and presented as a layout fix;
- primary labels are truncated without an accessible full label;
- images, glow, bevel or decorative chrome carry structure that should belong to recipe slots;
- every card, button or rail gets the same gold/glow/ornament intensity;
- compact mode preserves atmosphere but loses task clarity;
- text inside controls reads like prose instead of command or state;
- a documentation/manual table behavior leaks into production screens;
- a one-off applied-page fix is treated as system maturity;
- the work claims broad applicability without recipe family, fixture and QA evidence.

## Sandbox, Canonical Fixtures And Applied Sites

### Sandbox

This repo is the upstream design-system sandbox and public reference surface.

Its job is to hold:

- art direction and material grammar;
- tokens and reusable CSS hooks;
- reference/manual pages;
- canonical fixtures;
- bounded evidence and contract documents.

The sandbox may contain applied branches such as `fairy-journeys.html`, but those branches do not automatically become normative.

### Canonical Fixtures

Canonical fixtures are the regression source for recipe behavior.

Current stabilized fixture:

- `fixtures/menu-screen-recipe.html`

Current canonical status:

- MenuScreenRecipe has a stabilized responsive contract layer;
- `fixtures/menu-screen-recipe.html` is the canonical regression target;
- `standard`, `compact`, `emergency` and `stress` states exist;
- viewport evidence passed for `1440 x 900`, `390 x 844` and `360 x 740`;
- data attributes such as `data-recipe-density` and `data-frame-rank` are durable fixture/test APIs.

Fixture purpose:

- prove contract behavior under clean and hostile content;
- expose missing budgets or downgrade rules;
- stabilize selectors for future browser/QA automation.

Fixture non-purpose:

- act as a full applied site;
- prove every recipe family;
- prove universal responsive behavior;
- replace review of future themed sites.

### Applied Sites

Applied sites consume the sandbox intentionally. The repo README identifies `../YourInsideQuest` as the live applied product target, with this sandbox remaining upstream.

Applied-site rule:

- an applied page may reveal system gaps;
- an applied page may serve as a smoke target;
- an applied page is not the source of truth unless promoted into a canonical fixture by a bounded pass.

Current example:

- `fairy-journeys.html#menu-shell` is a bridge smoke target for MenuScreenRecipe compatibility, not the canonical regression fixture.

Future applied sites must map their screens to recipe families, inherit the relevant contracts, and carry only theme-level variation unless a new recipe or fixture pass authorizes broader changes.

## Review Checklist

A generated or new themed site is on-system only if a reviewer can answer yes to these questions:

1. Is the screen's primary recipe named?
2. Is the primary task visible in the required first viewport?
3. Are optional layers downgraded before the primary task weakens?
4. Does each material role still mean something?
5. Is there exactly one dominant frame or state group?
6. Are tap target, label and overflow floors respected?
7. Does compact behavior reduce content before reducing type?
8. Is text density appropriate to the component role?
9. Are theme changes confined to the allowed variation surface?
10. Is evidence tied to a fixture, viewport check or explicit contract rather than taste?

If any answer is no, the work should be revised or marked outside the system's current coverage.

## Deferred Questions

These are intentionally deferred to later passes:

- Which additional recipe families are production-critical beyond the current MenuScreenRecipe slice?
- Which families can inherit the MenuScreenRecipe density/rank hooks, and which need fresh contracts?
- Which content budgets should remain documentation-only versus become CSS tokens or DOM APIs?
- What fixture set is sufficient for dense editorial, listing/feed, side rail and promo-heavy pages?
- What repeatable viewport harness should replace one-off CDP evidence scripts?
- How far can the system stretch toward non-fantasy brands before it becomes a different design system?
- What external visual/design research is needed for future families, especially dense editorial and utility patterns?

## Handoff To Pass 2: Recipe Family Map

Pass 2 should use this constitution as the boundary document.

Required Pass 2 behavior:

- map site/screen jobs to named recipe families before adding implementation detail;
- separate production recipes from documentation/manual recipes;
- classify each family as proven, partially grounded or new/unproven;
- identify which families inherit current MenuScreenRecipe contracts and which require fresh budgets;
- name dependencies between navigation shell, article/reading, listing/feed, side rails, promo modules and utility/dashboard blocks;
- avoid claiming that one stabilized menu slice proves full-system stability.

The key question for Pass 2:

Which recipe families are needed so future themed sites can be generated from documented screen jobs instead of improvised page-by-page composition?

