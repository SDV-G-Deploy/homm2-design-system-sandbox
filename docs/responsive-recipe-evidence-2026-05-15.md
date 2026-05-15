# HOMM2 Responsive Recipe Evidence

Date: 2026-05-15

Purpose:

Define evidence and failure modes for a Responsive Recipe System. This pass is research only. It does not try to polish reference.html or fairy-journeys.html; those pages are fixtures that reveal where future recipes need stronger contracts.

## 1. What was inspected

Local system files:

- README.md
- reference.html
- fairy-journeys.html
- css/tokens.css
- css/components.css
- css/fairy-journeys.css
- docs/screen-recipe-contracts-2026-05-14.md
- workspace docs matching docs/DESIGN-SYSTEM-HOMM2-*.md
- docs/LAZYDESIGN-RUNBOOK.md

Rendered pages:

- Live reference manual: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html
- Live applied fixture: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html
- Browser screenshots captured at 1440 x 900 and 390 x 844.
- Screenshot evidence saved under ignored local temp path: tmp/responsive-recipe-evidence-2026-05-15/.

LazyDesign / Lazyweb searches:

- fantasy game menu interface parchment command panel
- responsive dashboard application shell first screen density modes
- component recipes slot API density compact comfortable design system documentation
- application shell dashboard responsive sidebar content density compact mode
- mobile responsive game guide tabs content density

Useful Lazyweb matches were pattern sources, not visual templates:

- Apple Human Interface Guidelines: documentation hub pattern with Foundations / Patterns / Components grouping.
- Origami documentation: left-navigation documentation shell with clear main content.
- Windmill design system components: reuse existing library components; document variants instead of inventing one-offs.
- Discord developer portal: dashboard shell with persistent sidebar, grid-size controls and a primary create action.
- Chameleon use-case dashboard: sidebar categories and expandable content groups.
- F1 mobile fantasy / predict screen: segmented product toggle plus tabs for How to Play, Prizes, Rules, Terms and FAQ.
- Royal Match mobile hub: dense game state with currencies, events, progress and one main play route.
- Sololearn / Impulse mobile game hubs: compact status bars, category filters, featured action, and game lists.

General web evidence also reinforced known density guidance: design systems such as Cloudscape, Salt and Material document density as a deliberate scale, with comfortable defaults, compact data-heavy modes, and accessibility floors for targets and readability.

## 2. Strong reference patterns

### Recipe documentation starts with decision routing

The strongest documentation references do not start with every component. They first help the builder decide which pattern applies. The HOMM2 reference page is already moving this way with the Operational Front Door and screen recipe decision table.

Pass 2 should keep this as the entry shape:

- pick one recipe;
- define required slots;
- define optional slots;
- define misuse cases;
- define responsive obligations before local composition begins.

### Slots need budgets, not just names

Lazyweb documentation references and general design-system docs repeatedly separate anatomy, slots, allowed content, variants and constraints. For HOMM2, naming .menu-side-rail or .menu-save-slot is not enough. Each slot needs a budget:

- max rows;
- max label lines;
- allowed metadata count;
- downgrade behavior;
- whether it may appear above the fold on mobile.

### Density is a recipe mode, not a breakpoint hack

Dashboard and application-shell references treat density as a deliberate mode: comfortable for reading, compact for scanning, and sometimes spacious for first-use or hero-like states. HOMM2 needs the same, but recipe-specific:

- spacious: visual ceremony and room for atmosphere;
- standard: default authored composition;
- compact: fewer optional rows, shorter labels, reduced frame depth;
- emergency: preserve the primary task and move support layers below the fold.

Compact mode must not mean micro-text. It means fewer visible things.

### Strong first screens have one primary command lane

Game hub and dashboard references keep a first-screen contract: status and support information may exist, but one primary route remains obvious. In the Fairy fixture, the desktop page succeeds when the golden primary command dominates the center. It becomes fragile on narrow screens because the same first viewport also tries to carry nav, title, five menu commands, save slot, route plaques and status rail.

Pass 2 should encode one primary command lane per recipe and make all support lanes conditional.

### Mobile game hubs use summary-first support

Mobile game hub references commonly show currencies, energy, timers and progress, but they summarize aggressively. The important pattern is not the art style; it is compression by summarization:

- counters replace explanatory prose;
- secondary event cards become rows;
- deep content moves into tabs or below the first task;
- primary play / continue action stays larger than support actions.

For HOMM2 this means side rails should be allowed to become compact strips or summary rows before primary command labels shrink.

### Documentation pages can use tables, but mobile tables must become cards

The live reference manual shows the risk clearly. The decision table is useful on desktop, but the mobile screenshot shows horizontal pressure in the top chips and the table content begins quickly after the hero. The CSS already switches recipe tables to one-column rows under 560px, but the rendered first screen still shows long manual language competing with the front-door task.

Pass 2 should define a documentation recipe separately from production recipes: tables become stacked record cards on mobile; table headers are replaced by inline labels; long code lists are shortened or moved to examples below the first viewport.

## 3. Anti-patterns to avoid

- Do not copy fantasy/game visuals from external references. Extract hierarchy, state density and navigation behavior only.
- Do not treat desktop three-column composition as a mobile stacking recipe by default.
- Do not let every framed object have the same weight. Frames need rank.
- Do not use glow, gold fill or heavy bevel depth to make support information feel important.
- Do not solve content variance by lowering labels below the system floor.
- Do not use overflow-x hidden or clipping as evidence that the layout is healthy.
- Do not let page-local CSS decide what collapses first. That decision belongs to the recipe.
- Do not create one-off mobile fixes for each fixture; fixtures should expose missing recipe rules.

## 4. Failure taxonomy

### First-screen overflow

Symptom:

- Required first-screen tasks are technically present but pushed below the first viewport.

Evidence:

- In the Fairy mobile screenshot, the primary command is visible, but the save slot and status rail sit lower in a tall stacked menu. The system currently relies on copy being short and local mobile rules being tuned.
- In the OpenClaw browser DOM pass, the fixed host viewport showed .menu-stage much taller than the viewport, and the status rail outside the first visible area. The headless 390 x 844 screenshot shows the same pressure visually.

Recipe implication:

- A recipe must define which elements must fit in the first viewport and which elements are allowed to become a cue, summary, tab, drawer or below-fold section.

### Text variance

Symptom:

- Longer labels, translated strings, or extra metadata rows force wrapping that increases control height and pushes required content down.

Evidence:

- fairy-journeys.html uses short labels such as Start path, Continue, Archive, and compact route annotations. The current stability depends on this copy length.
- css/fairy-journeys.css drops some mobile support labels to 10px and 11px in the status and save slot zones. That is a sign the recipe needs content budgets, not more local shrinking.

Recipe implication:

- Pass 2 needs title length bands, label line caps, metadata count caps and a defined truncation/summarization path.

### Too many equal-weight frames

Symptom:

- Multiple framed panels, rails and cards appear with similar contrast, border depth and density, so the eye has no clear first stop.

Evidence:

- The desktop Fairy screen has a strong center, but status rail, command rail, route plaques, save slot and command slab all use framed object grammar. If any support rail gains more copy or glow, it can outrank the central command mount.
- Existing docs already warn against equal-weight multi-column decisions in reference.html and screen-recipe-contracts-2026-05-14.md.

Recipe implication:

- Recipes need frame rank: primary frame, secondary support frame, tertiary cue. Ornament and surface depth must be tied to rank.

### Support rails outranking primary commands

Symptom:

- Status, lore, metadata, filters or route indexes become larger, brighter or earlier than the primary action.

Evidence:

- The Fairy page places status and command rails around the center on desktop, then stacks them on mobile. The current order is acceptable only because command rail entries are hidden on mobile and the primary slab remains first.
- Lazyweb dashboard references show persistent sidebars, but creation/play/primary route still stays visually privileged.

Recipe implication:

- Support rails need strict rank and downgrade rules. They may summarize, collapse or move below the fold before the primary command loses size.

### Mobile becoming compressed desktop

Symptom:

- The same desktop information architecture is simply stacked, producing a long first screen with small text, many controls and no mobile-specific task rhythm.

Evidence:

- The Fairy mobile screenshot still carries header navigation, crest, title, lead, five menu commands, save slot and then status rail. It reads as a compressed desktop composition, even though it is more stable than earlier versions.
- The reference mobile screenshot shows documentation chips and long manual copy taking early space before the reader reaches actionable recipe details.

Recipe implication:

- Mobile recipes should use mobile-native summaries: one primary action group, one immediate state strip, one next-section cue. Optional rails become below-fold sections or compact summaries.

### Desktop becoming stretched mobile

Symptom:

- A layout that is designed as one stacked lane gets expanded across desktop without using width to create meaningful hierarchy.

Evidence:

- The current reference page avoids this in the hero, but table and card sections risk becoming wide rows of equal text blocks. External dashboard shell references use sidebars, toolbars and content regions, not just stretched cards.

Recipe implication:

- Desktop recipes need explicit width behavior: center mount plus support rails for menu screens, reading field plus annotation rail for dossiers, focus panel plus protocol rail for rituals.

## 5. Design decisions for Pass 2

1. Define density modes per recipe: spacious, standard, compact, emergency.
2. Add slot budgets to each recipe, including title length, command count, rail row count, metadata count and label line limits.
3. Add frame-rank rules so primary, secondary and tertiary frames cannot share the same visual weight.
4. Define a mobile first-screen contract for each recipe: required visible elements, allowed summaries, and below-fold downgrade order.
5. Separate production recipes from the documentation/manual recipe. The reference manual needs its own table-to-card and code-list behavior.
6. Treat compact mode as content reduction, not type reduction. The type floor remains 12px for scan labels and 40px for compact controls.
7. Move route boards and rails toward summary-first variants on mobile instead of preserving all desktop rows.
8. Keep page-local CSS limited to staging, backdrop and exact proportions after the recipe contract is satisfied.

## 6. Concrete acceptance checks

### Viewport checks

Run every recipe fixture at:

- 1440 x 900
- 1180 x 820
- 1024 x 768
- 920 x 768
- 768 x 1024
- 390 x 844
- 360 x 740

Required checks:

- No horizontal overflow except explicitly scrollable code/table examples.
- The recipe's primary task is visible in the first viewport.
- The first viewport leaves either the required state cue or a clear next-section cue.
- Primary controls keep at least 44px preferred height.
- Compact secondary controls never drop below 40px.
- Scan labels never drop below 12px.
- Primary command labels and route-state labels do not truncate invisibly.

### Content variance checks

For each recipe, test at least these content variants:

- short title: 18 characters or less;
- standard title: 19-42 characters;
- long title: 43-68 characters;
- one-line command labels;
- two-line command labels;
- support rail with 0, 2, 4 and 6 rows;
- route board with 3, 5, 8 and 12 rows;
- metadata values with short, medium and translated-length strings;
- missing optional art layer;
- no save/status strip;
- dense save/status strip.

Pass condition:

- The recipe chooses a documented density mode or downgrade path.
- The page does not require a new local media query for ordinary text or row-count variance.
- If the first-screen contract cannot be met, the recipe explicitly moves optional content below the fold instead of shrinking primary text.

### Visual hierarchy checks

For each screenshot:

- Name the one loud thing.
- Identify primary, secondary and tertiary frames.
- Verify support rails are smaller, quieter or later than the primary command/reading/focus area.
- Verify gold and glow indicate command, value or state; they are not general decoration.
- Verify mobile does not show more than one primary action cluster above the fold.

### Documentation checks

For recipe docs:

- Every recipe has Purpose, Required slots, Optional slots, Slot hierarchy, Density modes, Budgets, Downgrade order and Acceptance checks.
- Every slot states allowed content and max visible count.
- Every density mode states what changes and what does not change.
- Every acceptance check can be verified by screenshot, DOM measurement or direct code inspection.

## 7. Pass 2 contract priorities

Top five decisions Pass 2 must encode:

1. First-screen budgets are recipe-owned, not page-owned.
2. Slots need content budgets and downgrade paths.
3. Compact mode removes or summarizes support content before shrinking text.
4. Frame rank is a contract: support rails cannot visually outrank primary commands.
5. Mobile recipes are not stacked desktop; desktop recipes are not stretched mobile.

## 8. LazyDesign status

Lazyweb was used as a one-off research source through the local HTTP helper scripts. scripts/lazyweb-check.sh reported TOKEN_OK and PROCESS_ABSENT after the run. No persistent Lazyweb MCP process was left running.
