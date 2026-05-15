# HOMM2 Sandbox - Responsive Recipe Contracts

Date: 2026-05-15

Purpose:

Define the responsive contract layer for HOMM2 screen recipes: first-screen obligations, content budgets, downgrade behavior and acceptance checks. This pass turns the 2026-05-15 evidence pass into bounded contracts. It does not polish `reference.html` or `fairy-journeys.html` as finished pages.

Relationship to `screen-recipe-contracts-2026-05-14.md`:

- The screen-recipe file defines recipe intent, hierarchy, allowed layers and broad collapse order.
- This file defines the measurable budgets each recipe must honor when content varies across desktop and mobile.
- Page-local CSS may choose exact proportions only after these budgets and downgrade rules are satisfied.

## Evidence Alignment

The contracts below answer the failure taxonomy from `responsive-recipe-evidence-2026-05-15.md`:

- First-screen overflow: every recipe declares required first-viewport content and what may become a cue, summary, drawer, tab or below-fold section.
- Text variance: every recipe declares title bands, label line limits, metadata caps and summary allowances so long labels do not force micro-text.
- Too many equal-weight frames: every recipe declares frame-rank limits and which layers must not share the primary visual weight.
- Support rails outranking primary commands: production recipes force support rails to summarize or move before primary controls shrink.
- Mobile becoming compressed desktop: mobile obligations use task-first summaries instead of raw desktop stacking.
- Desktop becoming stretched mobile: desktop obligations define meaningful use of width, not just wider single-column content.

Pass 2 priorities encoded here:

1. Density modes are per-recipe: spacious, standard, compact and emergency.
2. Slot budgets cover title length, command count, rail rows, metadata, annotations and label lines.
3. Frame rank is a contract, not page-local preference.
4. Mobile first-screen behavior is explicit per recipe.
5. Production recipes are separate from the documentation/manual recipe.
6. Compact mode reduces visible content before reducing type.

## Normalized Recipe Contract Format

Each responsive recipe contract uses this format:

1. Recipe role: the screen job this contract is allowed to serve.
2. Production status: `production` or `documentation/manual`.
3. Required first-screen result: what must be visible before scroll on desktop and mobile.
4. Slot inventory: required slots and optional slots inherited from the screen recipe layer.
5. Content budgets: measurable caps for title, commands, rails, metadata, annotations, labels and summaries.
6. Density modes: which content remains in spacious, standard, compact and emergency states.
7. Downgrade order: the exact order in which optional content yields.
8. Frame-rank rules: primary, secondary and tertiary surface limits.
9. Desktop behavior: how the recipe uses width without losing hierarchy.
10. Mobile behavior: how the recipe becomes mobile-native without becoming compressed desktop.
11. Acceptance checks: fixture checks required before the recipe is considered stable.

## Global Contract Floors

These floors apply to every recipe:

- Primary controls: 44px preferred hit height.
- Secondary compact controls: 40px minimum hit height.
- Scan labels: 12px minimum.
- Body copy: no responsive shrink below the established type scale for the component.
- Letter spacing: no negative tracking to force fit.
- Horizontal overflow: forbidden except explicitly scrollable examples such as code blocks or wide documentation tables before they transform.
- Primary task: visible in the first viewport at 1440 x 900 and 390 x 844.
- Compact mode: remove, summarize or move content before shrinking labels.
- Emergency mode: preserve the primary task and one orientation cue; everything else may move below the fold.

Title length bands used by all recipes:

- Short: 18 characters or less.
- Standard: 19-42 characters.
- Long: 43-68 characters.
- Over-budget: more than 68 characters; must be shortened by content, not solved only by CSS.

Label line rules:

- Primary action labels: 1 line preferred, 2 lines allowed, never hidden truncation.
- Secondary action labels: 1 line preferred, 2 lines allowed in standard/spacious, 1 line plus accessible full label in compact/emergency.
- Rail labels: 1 line in compact/emergency, 2 lines maximum in spacious/standard.
- Metadata values: 1 line visible; longer values summarize with the full value available below the primary first-screen area.

## Production Recipes

### MenuScreenRecipe

Recipe role:

Primary menu, chapter select, world-entry or route-entry screen with one dominant command mount.

Production status:

`production`

Required first-screen result:

- Desktop 1440 x 900: title/context mark, central command slab, primary command lane, immediate save/status state when present, and support rails only if they do not compete with the center.
- Mobile 390 x 844: title/context mark, primary command, at least one secondary route/action, one immediate state strip or next-section cue.

Slot inventory:

- Required: `.menu-screen-shell`, `.menu-frame-shell`, `.menu-center-mount`, `.command-slab`.
- Optional: `.menu-side-rail`, `.menu-save-slot`, `.menu-route-index`, `.menu-art-layer`.

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Title | long allowed, max 2 lines | standard preferred, long max 2 lines | standard max 2 lines | short/standard only, max 2 lines |
| Primary commands | 1 dominant | 1 dominant | 1 dominant | 1 dominant |
| Secondary commands | 4-5 | 3-4 | 1-2 | 0-1 |
| Command label lines | 2 max | 2 max | 1 preferred, 2 max for primary | 1 preferred, 2 max for primary |
| Side rail rows | 5 max | 4 max | summary strip or 2 rows max | cue only or below fold |
| Save/status rows | 3 max | 2 max | 1 compact strip | 1 compact strip if state-critical |
| Route index rows | 8 max | 5 max | 3 max below primary area | below fold or next cue |
| Metadata caps | 3 values | 2 values | 1 value | 1 state word/value |
| Annotation caps | 40 chars per row | 28 chars per row | 18 chars per row | none above fold |
| Summary allowance | optional | optional | required for rails | required for all support |

Density modes:

- Spacious: may show art, side rail, save slot and route index if the command slab remains the only primary frame.
- Standard: command slab plus save/status state; one support rail may sit beside it.
- Compact: command slab plus one state strip; route index and side rails summarize.
- Emergency: command slab plus one orientation cue; all support moves below the fold.

Downgrade order:

1. Art layer crops, fades or disappears.
2. Route index becomes a short current/next summary or moves below the fold.
3. Side rail becomes a compact state strip.
4. Save slot condenses to one state row.
5. Secondary commands reduce to one clear fallback.
6. Primary command slab keeps legibility and hit size.

Frame-rank rules:

- Primary frame: command slab and title/context group.
- Secondary frame: save/status state or one support rail, not both at equal weight.
- Tertiary frame: route index, annotations and atmospheric cues.
- Forbidden: glowing or bevel-heavy rails that visually outrank the command slab.

Desktop behavior:

Use width to separate command, state and route context, but keep the center mount dominant. Side rails may flank the center only when their row count and ornament remain secondary.

Mobile behavior:

Mobile is not stacked desktop. The first viewport contains the command lane first, then one summarized state cue. Route boards and rails become summaries before command labels shrink.

Acceptance checks:

- Test command counts at 1, 3 and 5.
- Test rail rows at 0, 2, 4 and 6.
- Test route rows at 3, 5, 8 and 12.
- Verify primary command and one orientation cue fit at 390 x 844 and 360 x 740.

### DossierReadingRecipe

Recipe role:

Reading-first archive, record, ledger or comparison screen.

Production status:

`production`

Required first-screen result:

- Desktop 1440 x 900: dossier heading, first readable record/prose block, archive/spine orientation and compact metadata if present.
- Mobile 390 x 844: dossier heading, start of readable content and one archive/spine orientation cue.

Slot inventory:

- Required: `.parchment-object`, `.archive-rail` or equivalent reading spine.
- Optional: `.note-card`, `.dossier-ledger-strip`, quiet utility controls.

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Title | long allowed, max 2 lines | standard/long max 2 lines | standard max 2 lines | short/standard max 2 lines |
| Body opening | 2-3 blocks | 1-2 blocks | 1 block | first block starts above fold |
| Archive rail rows | 8 max | 6 max | 3 max or summary | 1 orientation cue |
| Note cards | 3 max | 2 max | below fold | below fold |
| Ledger metadata | 5 values | 4 values | 2 values | 1 value |
| Annotation caps | 80 chars | 56 chars | 32 chars | none above fold |
| Label line limits | 2 max rail labels | 2 max rail labels | 1 line rail labels | 1 line cue |
| Summary allowance | optional | optional | required for rail | required for rail/ledger |

Density modes:

- Spacious: reading field with rail, notes and ledger if the prose field remains dominant.
- Standard: reading field plus one orientation rail and compact metadata.
- Compact: reading field plus rail summary; notes and secondary ledger move below.
- Emergency: heading, first content block and one orientation cue only.

Downgrade order:

1. Marginal notes move below the reading field.
2. Decorative side matter disappears.
3. Ledger metadata summarizes.
4. Archive rail condenses to current location plus count.
5. Body field keeps readable measure and type.

Frame-rank rules:

- Primary frame: parchment reading field.
- Secondary frame: archive rail or ledger, only one above-fold support object at strong weight.
- Tertiary frame: notes and annotations.
- Forbidden: note-card mosaics replacing the main reading field.

Desktop behavior:

Use width for a reading field plus one supporting spine. Do not create two equal rails around the parchment.

Mobile behavior:

Start with reading content. Rail and ledger become inline orientation summaries before the first paragraph is pushed down.

Acceptance checks:

- Test with 0, 2 and 4 metadata values.
- Test with 0, 1, 2 and 3 note cards.
- Verify the first readable block starts in the first mobile viewport.

### RitualThresholdRecipe

Recipe role:

Consequence-first threshold for commitment, initiation, warning, final choice or irreversible action.

Production status:

`production`

Required first-screen result:

- Desktop 1440 x 900: threshold title, consequence statement, one ceremonial action and one quiet escape.
- Mobile 390 x 844: consequence statement, ceremonial action and quiet escape visible before scroll unless legally required copy must precede the action.

Slot inventory:

- Required: `.ritual-panel`, one `.btn-ceremonial`, one quiet escape action.
- Optional: `.ritual-protocol`, short consequence ledger, restrained mana/wax cue.

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Title | standard/long max 2 lines | standard max 2 lines | short/standard max 2 lines | short/standard max 2 lines |
| Ceremonial actions | exactly 1 | exactly 1 | exactly 1 | exactly 1 |
| Escape actions | exactly 1 | exactly 1 | exactly 1 | exactly 1 |
| Protocol rows | 4 max | 3 max | 1-2 below action | below fold |
| Consequence ledger | 4 rows max | 3 rows max | 1 summary row | 1 summary row |
| Metadata caps | 3 values | 2 values | 1 value | 0-1 value |
| Annotation caps | 48 chars | 32 chars | 18 chars | none above fold |
| Label line limits | 2 max | 2 max | 2 max for actions | 2 max for actions |
| Summary allowance | optional | optional | required | required |

Density modes:

- Spacious: ritual body, protocol and consequence ledger may be visible.
- Standard: ritual body plus compact consequence ledger.
- Compact: action pair and one consequence summary.
- Emergency: one consequence statement, one primary action, one escape.

Downgrade order:

1. Aura, art and glow reduce.
2. Protocol moves below the ritual body.
3. Consequence ledger details summarize.
4. Secondary explanatory copy shortens.
5. Required actions keep size and label legibility.

Frame-rank rules:

- Primary frame: ritual panel and ceremonial action.
- Secondary frame: quiet escape and consequence statement.
- Tertiary frame: protocol, seal, aura and ledger details.
- Forbidden: multiple ceremonial actions or a route-board-density list inside threshold framing.

Desktop behavior:

Use width to give the consequence and action room, not to add competing rails. Supporting protocol may sit adjacent only as tertiary material.

Mobile behavior:

The action pair remains easy to hit. Protocol and decorative atmosphere move after the decision.

Acceptance checks:

- Test long irreversible-choice copy.
- Verify exactly one ceremonial action exists.
- Verify the escape action remains visible and legible at 390 x 844 and 360 x 740.

### RouteBoardRecipe

Recipe role:

Stateful route progression board for current, locked, visited and next paths.

Production status:

`production`

Required first-screen result:

- Desktop 1440 x 900: current route, next route, board state legend and enough rows to establish progression.
- Mobile 390 x 844: current route and next available route visible before board details continue below.

Slot inventory:

- Required: `.menu-route-index` or equivalent board list, `.route-badge` state marker per path item.
- Optional: compact lore annotation, short progress strip, quiet filter/sort control.

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Board title | standard/long max 2 lines | standard max 2 lines | standard max 2 lines | short/standard max 2 lines |
| Route rows | 12 max | 8 max | 5 max | current + next only |
| Current/next rows | required | required | required | required |
| Filters/sort | 3 controls max | 2 controls max | below board | below fold |
| Progress metadata | 4 values | 3 values | 1-2 values | 1 value |
| Row annotations | 48 chars | 32 chars | 18 chars | none above fold |
| Badge labels | 1 line | 1 line | 1 line | 1 line |
| Summary allowance | optional | optional | required for hidden rows | required for hidden rows |

Density modes:

- Spacious: full route board with annotations and filters.
- Standard: current/next emphasis plus limited supporting rows.
- Compact: current/next rows plus count summary for remaining routes.
- Emergency: current/next only with state marker and one outcome hint.

Downgrade order:

1. Lore annotations shorten or disappear.
2. Filters/sort move below the board.
3. Progress strip condenses to one value.
4. Secondary route rows hide behind summary.
5. Current/next rows remain visible.

Frame-rank rules:

- Primary frame: current and next route rows.
- Secondary frame: board container and progress summary.
- Tertiary frame: annotations, filters and non-current row ornament.
- Forbidden: every row receiving ritual-level frame depth.

Desktop behavior:

Use width for readable state comparison and filters, but maintain current/next as the dominant scan path.

Mobile behavior:

Show current/next first, then a count or summary of hidden routes. Do not preserve all desktop rows above the primary screen task.

Acceptance checks:

- Test route row counts at 3, 5, 8 and 12.
- Test translated-length route labels.
- Verify badge state remains recognizable at compact width.

## Documentation / Manual Recipe

### ReferenceManualRecipe

Recipe role:

Design-system documentation and manual pages such as `reference.html`. This is not a production game/app screen recipe.

Production status:

`documentation/manual`

Required first-screen result:

- Desktop 1440 x 900: manual title, decision-routing entry, and enough navigation to choose the right recipe.
- Mobile 390 x 844: manual title, short decision-routing entry, and the first actionable recipe choice or clear next-section cue.

Slot inventory:

- Required: page title, decision routing block, recipe record/list, example/code area when needed.
- Optional: hero notes, long explanatory copy, comparison tables, code lists, implementation examples.

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Manual title | long allowed, max 2 lines | long max 2 lines | standard max 2 lines | short/standard max 2 lines |
| Intro copy | 140 words max | 90 words max | 45 words max | 24 words max |
| Decision options | 6 max | 5 max | 4 max | 3 max |
| Table columns | 5 max | 4 max | records/cards | records/cards |
| Record fields | 6 max | 5 max | 4 max | 3 max |
| Code list lines above fold | 0 | 0-4 | 0 | 0 |
| Metadata caps | 4 values | 3 values | 2 values | 1 value |
| Annotation caps | 80 chars | 56 chars | 32 chars | 24 chars |
| Label line limits | 2 max | 2 max | 2 max | 1-2 max |
| Summary allowance | optional | optional | required for tables/code | required |

Density modes:

- Spacious: decision routing plus table summaries and examples below the first viewport.
- Standard: decision routing plus compact recipe table or record list.
- Compact: tables transform to stacked record cards with inline labels.
- Emergency: title plus three-choice routing; examples and long code lists move below.

Downgrade order:

1. Long manual prose shortens.
2. Code lists move below the first viewport.
3. Tables become stacked record cards.
4. Table headers become inline labels.
5. Secondary examples collapse behind summaries.
6. Decision routing remains visible.

Frame-rank rules:

- Primary frame: decision-routing block.
- Secondary frame: selected recipe record or recipe table/card list.
- Tertiary frame: examples, code snippets and long notes.
- Forbidden: documentation chips, long hero copy or code lists outranking the recipe decision task.

Desktop behavior:

Use width for readable documentation navigation and comparison. Keep tables useful, but prevent wide rows of equal-weight text from replacing decision routing.

Mobile behavior:

Tables become record cards. Long code lists and manual explanations move below the first recipe decision. Mobile should answer "which recipe do I use?" before it teaches every implementation detail.

Acceptance checks:

- Verify no horizontal overflow at 390 x 844 except intentionally scrollable code.
- Verify recipe tables become stacked records under the mobile threshold.
- Verify the first mobile viewport contains a route into the recipe system, not only long explanatory copy.

## Cross-Recipe Downgrade Matrix

When multiple layers compete, downgrade in this system-wide order unless a recipe above is stricter:

1. Decorative art, aura, glow, heavy bevel and atmospheric layers.
2. Long annotations, lore and explanatory prose.
3. Filters, sort controls and tertiary route details.
4. Secondary metadata and ledger rows.
5. Side rails, notes and route boards as full panels.
6. Save/status and orientation cues, summarized but preserved if state-critical.
7. Primary action, reading field or consequence decision.

Primary content may not be downgraded until every earlier layer has already summarized, moved or disappeared.

## Shared Acceptance Checks

Viewport checks:

- 1440 x 900
- 1180 x 820
- 1024 x 768
- 920 x 768
- 768 x 1024
- 390 x 844
- 360 x 740

For each viewport:

- No horizontal overflow except explicitly scrollable documentation examples.
- Primary task visible in the first viewport.
- First viewport includes either required state cue or clear next-section cue.
- Primary controls keep at least 44px preferred height.
- Secondary compact controls never drop below 40px.
- Scan labels never drop below 12px.
- Primary labels do not disappear through clipping or hidden truncation.

Content variance checks:

- Short title: 18 characters or less.
- Standard title: 19-42 characters.
- Long title: 43-68 characters.
- One-line and two-line command labels.
- Support rail rows: 0, 2, 4 and 6.
- Route rows: 3, 5, 8 and 12.
- Metadata values: short, medium and translated-length strings.
- Missing optional art layer.
- No save/status strip.
- Dense save/status strip.

## Handoff For Next Pass

Next pass should implement or audit shared helpers against these contracts, not create new visual polish:

- Map each recipe slot to CSS helper classes or component-level variants for summary, compact and emergency behavior.
- Update applied fixtures only where they violate the contract layer.
- Add screenshot QA at the shared viewport set.
- Add content-variance fixtures for title, rail, route and metadata budgets.
- Keep `ReferenceManualRecipe` separate from production recipes so documentation-specific table/card behavior does not leak into game screens.

Unresolved questions for the next pass:

- Which contract budgets should become tokenized CSS custom properties versus documentation-only authoring rules?
- Should compact/emergency mode be selected by container query, explicit class, or both?
- Which fixture should become the canonical MenuScreenRecipe regression target after `fairy-journeys.html` stops being only an evidence fixture?
- Where should accessible full labels live when compact mode summarizes visible labels?
