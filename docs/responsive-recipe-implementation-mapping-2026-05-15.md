# HOMM2 Sandbox - Responsive Recipe Implementation Mapping

Date: 2026-05-15

Status: implementation-mapping artifact for the next bounded pass.

Source of truth: `responsive-recipe-contracts-2026-05-15.md`.

Supporting context checked:

- `responsive-recipe-evidence-2026-05-15.md`
- `screen-recipe-contracts-2026-05-14.md`
- current hooks in `css/tokens.css`, `css/components.css`, `reference.html` and `fairy-journeys.html`

Purpose:

Turn the Pass 2 responsive recipe contracts into concrete design-system and documentation implementation guidance, without starting a broad CSS rewrite or treating demo-page polish as the goal.

## Mapping Taxonomy

Use five mapping surfaces. A contract item may use more than one surface, but one surface should be the owner.

| Surface | Owns | Does not own |
| --- | --- | --- |
| CSS custom properties / token surface | Global floors, shared min sizes, first-screen budget aliases, line-count clamps, frame-intensity knobs, default visible-row limits that CSS can consume. | Authoring truth such as whether a screen is a ritual, exact copy, or whether a command is semantically primary. |
| Component / recipe API or DOM contract | Required slot classes, optional slot classes, accessible labels, rank attributes/classes, summary elements, compact full-label carriers. | Page-specific grid proportions, story order, scenery choreography. |
| Container-query / state-class behavior | Automatic spacious/standard/compact presentation and explicit forced density states. | Content strategy that only authors can decide, such as shortening over-budget titles. |
| Documentation-only authoring rule | Character bands, maximum authored command counts, recipe selection guidance, misuse rules and production-vs-manual separation. | Mechanical behavior needed to keep pages within floors. |
| Fixture / regression requirement | Content-variance cases, viewport checks, DOM/a11y checks and screenshot targets. | Visual finishing of `reference.html` or `fairy-journeys.html`. |

Implementation rule for the next pass: add the smallest shared hooks that page-local CSS can adopt. Do not rewrite every screen layout.

## Existing System Hooks To Preserve

The repo already has a useful starting point:

- `css/tokens.css` defines `--tap-target-min`, `--tap-target-compact`, `--label-legible-min` and first-screen aliases.
- `css/components.css` defines menu anatomy classes, `--recipe-collapse-rank`, `--recipe-collapse-order` notes and compact tap floors.
- `reference.html` already documents responsive contract rows.
- `fairy-journeys.html` already carries the important MenuScreenRecipe slot classes.

Next pass should extend these hooks instead of replacing them.

## Global Contract Floors

Mapping:

- `44px` primary control height: CSS token and component floor. Keep `--tap-target-min: 44px`; apply it to primary command/action carriers.
- `40px` compact secondary control height: CSS token and component floor. Keep `--tap-target-compact: 40px`; only secondary controls and route/archive rows may use it.
- `12px` scan label floor: CSS token and regression check. Keep `--label-legible-min: 12px`; remove page-local exceptions below it as fixtures are touched.
- No negative tracking: documentation-only rule plus lint/inspection check. Do not create a token for negative tracking.
- Horizontal overflow ban: fixture/regression requirement, with an exception list for code blocks and documentation tables before transformation.
- Primary task visible at `1440 x 900` and `390 x 844`: fixture/regression requirement backed by per-recipe DOM selectors.
- Emergency mode preserves one primary task and one orientation cue: recipe API plus state behavior.

Recommended CSS token additions:

```css
:root {
  --recipe-title-lines-standard: 2;
  --recipe-annotation-lines-compact: 1;
  --recipe-summary-lines: 1;
  --recipe-frame-primary-opacity: 1;
  --recipe-frame-secondary-opacity: 0.78;
  --recipe-frame-tertiary-opacity: 0.56;
}
```

These are reusable display constraints. They do not replace the authoring budgets.

## Density Modes

Mapping:

- Mode names `spacious`, `standard`, `compact`, `emergency`: component/recipe API.
- Default mode selection: container-query behavior.
- Forced mode selection: explicit class or data attribute.
- Emergency mode: explicit state class/attribute, with a narrow container-query fallback only when the primary task would otherwise fail.

Recommendation: hybrid mode selection.

Use container queries for automatic presentation when the recipe shell loses space, and use explicit state for known content pressure or test fixtures:

```html
<section class="menu-screen-shell recipe-density-standard" data-recipe="menu-screen">
<section class="menu-screen-shell recipe-density-compact" data-recipe-density="compact">
<section class="menu-screen-shell recipe-density-emergency" data-recipe-density="emergency">
```

Container queries should set the default physical behavior, such as summary strips and hidden tertiary art. Explicit density should override the default when the fixture intentionally tests long labels, many rows, missing art or production state.

Why hybrid:

- Pass 1 showed local mobile CSS became fragile because it reacted to viewport width but not row/copy pressure.
- Documentation and fixture tests need deterministic compact/emergency states.
- Container queries keep normal pages from needing page-local breakpoint rescue.

## Title, Label, Metadata And Annotation Budgets

Budget mapping:

| Budget | Implementation owner | Recommendation |
| --- | --- | --- |
| Title bands: short / standard / long / over-budget | Documentation-only plus fixture data | Keep character bands in docs. CSS should only enforce max lines and readable measure. Over-budget titles require copy change or explicit summary, not smaller type. |
| Title max lines | CSS custom property and component class | Add recipe-local line clamp variables, e.g. `--recipe-title-max-lines: 2`. |
| Primary action label lines | Component CSS plus a11y check | CSS allows 1 preferred / 2 max. Do not hide primary label text. |
| Secondary action compact labels | Component DOM contract plus a11y strategy | Visible compact label may shorten to 1 line, but full label must remain accessible inside the control or via description. |
| Rail labels | Component CSS plus fixture checks | Clamp visible rails to 1 line in compact/emergency; move extra rail detail into summary or below-fold detail. |
| Metadata value count | Documentation-only and fixture | CSS cannot know which metadata values matter. Authors choose the 1-3 values; components provide row/summary styling. |
| Metadata visible line | CSS custom property | Use a one-line visible value by default; full value moves to detail text, disclosure or below-fold record. |
| Annotation character caps | Documentation-only | Character caps are authoring constraints. CSS can clamp lines, but should not silently solve verbose annotations. |
| Summary allowance/requirement | Component/DOM contract | Add a named summary slot per collapsible support region. |

Recommended DOM hooks:

```html
<div class="recipe-support-summary" aria-describedby="save-slot-full-state">
  <span class="summary-label">Слот A</span>
  <strong>глава 1</strong>
</div>
<p id="save-slot-full-state" class="visually-hidden">
  Слот A, врата, глава 1, тихая отвага.
</p>
```

Add a shared `.visually-hidden` utility if the system does not already have one.

## Downgrade Behavior

Mapping: component/recipe API plus container-query/state-class behavior.

System-wide order from Pass 2 should become a documented set of recipe layer attributes/classes:

| Contract layer | Suggested hook | Default behavior |
| --- | --- | --- |
| Decorative art / aura / glow | `data-recipe-layer="art"` or existing `.menu-art-layer` | Crop, fade or hide first. |
| Long annotations / lore / prose | `.recipe-annotation` | Clamp then move below primary area. |
| Filters / sort / tertiary route details | `.recipe-tertiary-controls` | Move below board or below fold. |
| Secondary metadata / ledger rows | `.recipe-metadata` | Summarize to 1-2 values. |
| Side rails / notes / route boards | existing recipe slot classes plus `.recipe-support-panel` | Convert to summary strip or below-fold section. |
| Save/status and orientation cues | `.recipe-state-cue` | Preserve as one compact strip if state-critical. |
| Primary action / reading field / consequence decision | existing required slots | Last to change; keep floors. |

Current `--recipe-collapse-rank` values can remain as an implementation note, but next pass should prefer readable rank hooks over numeric-only semantics.

## Frame-Rank Enforcement

Mapping: component/recipe API, CSS token surface and fixture visual checks.

Recommended rank API:

```html
<div class="command-slab recipe-frame-primary">
<aside class="menu-side-rail recipe-frame-secondary">
<div class="menu-route-index recipe-frame-tertiary">
```

or:

```html
<div class="command-slab" data-frame-rank="primary">
```

Use one convention consistently. Class names are easier for existing CSS; data attributes are easier for test queries. The next pass can support both with one selector group.

Frame-rank token guidance:

- Primary rank may use full bevel depth, stronger border contrast and command gold.
- Secondary rank may use reduced opacity, quieter border contrast and fewer glow effects.
- Tertiary rank may use flat or low-depth treatment.
- Do not let page-local CSS promote tertiary route boards, rails or notes to primary intensity.

Regression requirement: each screenshot check must identify exactly one primary frame for MenuScreenRecipe, DossierReadingRecipe and RitualThresholdRecipe. RouteBoardRecipe may have one primary row group, not every row.

## Desktop And Mobile First-Screen Obligations

Mapping: fixture/regression requirement plus recipe DOM selectors.

Desktop checks should verify width is used intentionally:

- MenuScreenRecipe: center command mount dominant, with at most one strong support rail.
- DossierReadingRecipe: reading field plus one support spine, not two equal rails.
- RitualThresholdRecipe: consequence/action area has room; width does not invite competing panels.
- RouteBoardRecipe: current/next comparison is the scan path.
- ReferenceManualRecipe: decision routing remains the primary manual task.

Mobile checks should verify mobile-native summary behavior:

- The first viewport contains the recipe primary task, not a stacked copy of every desktop slot.
- Support rails become summary strips or below-fold sections before primary labels shrink.
- A next-section cue or state cue remains visible.
- No fixture passes by clipping overflow or hiding labels.

Recommended test selectors:

```
[data-recipe="menu-screen"] .command-slab
[data-recipe="menu-screen"] .recipe-state-cue, .menu-save-slot
[data-recipe="dossier-reading"] .parchment-object
[data-recipe="ritual-threshold"] .btn-ceremonial
[data-recipe="route-board"] [data-route-state="current"]
[data-recipe="route-board"] [data-route-state="next"]
```

Existing pages do not need all attributes immediately. The next pass can add them first to the canonical fixture and docs examples.

## Production Vs Documentation Recipe Split

Mapping: documentation-only rule plus documentation CSS/component isolation.

Keep `ReferenceManualRecipe` separate from production recipes.

Implementation guidance:

- Production recipes live in shared component/recipe classes: menu shell, dossier, ritual and route board.
- Documentation/manual behavior lives in `reference.html` and `css/reference.css`: decision routing, responsive tables, record cards, code examples and manual prose budgets.
- Do not export documentation table-to-card rules into game/app recipes.
- Do not use production frame-rank ornament as a substitute for documentation hierarchy.
- The reference page should document the mapping and show compact examples, but it should not become the canonical game-screen regression fixture.

## Per-Recipe Mapping Guidance

### MenuScreenRecipe

Map to:

- CSS tokens: control floors, title max lines, support summary line count, frame-rank intensity.
- Component/DOM contract: required `.menu-screen-shell`, `.menu-frame-shell`, `.menu-center-mount`, `.command-slab`; optional rails/save/route/art; one `.recipe-state-cue`; one `.recipe-support-summary` per collapsible rail.
- Container/state behavior: compact and emergency convert route index and side rails into summaries before command labels change.
- Documentation-only: title character bands, command-count caps, row-count caps and annotation character caps.
- Fixture/regression: command counts 1/3/5; rail rows 0/2/4/6; route rows 3/5/8/12; 390 x 844 and 360 x 740 first-screen checks.

Specific implementation recommendation:

- Keep `.command-slab` as the primary frame.
- Add a summary variant for `.menu-side-rail` and `.menu-route-index`, not a new page-specific mobile layout.
- Keep save/status state as a compact `.recipe-state-cue` when state-critical.

### DossierReadingRecipe

Map to:

- CSS tokens: prose measure, title max lines, metadata visible line, annotation line clamp.
- Component/DOM contract: `.parchment-object`, `.archive-rail`, optional `.note-card`, optional `.dossier-ledger-strip`.
- Container/state behavior: notes below field, ledger summary, rail current-location summary.
- Documentation-only: body block counts, metadata value caps, annotation character caps.
- Fixture/regression: first readable block begins in the first mobile viewport.

Specific implementation recommendation:

- Do not add card-mosaic behavior to solve pressure. The parchment field remains primary.
- Add a rail summary pattern that says current location plus count.

### RitualThresholdRecipe

Map to:

- CSS tokens: action floors, consequence line clamp, ritual frame-rank intensity.
- Component/DOM contract: exactly one `.btn-ceremonial`, exactly one quiet escape, optional `.ritual-protocol`, optional consequence summary.
- Container/state behavior: protocol and ledger move below action pair; aura/art reduces first.
- Documentation-only: exactly-one-action rule, consequence copy guidance and legal/product-copy exception.
- Fixture/regression: verify one ceremonial action and visible escape at 390 x 844 and 360 x 740.

Specific implementation recommendation:

- Enforce the one ceremonial action as a DOM/test contract, not CSS.
- Keep escape action visible even in emergency.

### RouteBoardRecipe

Map to:

- CSS tokens: route row compact floor, badge size range, annotation line clamp.
- Component/DOM contract: route rows expose `data-route-state="current|next|locked|visited"`; each row keeps HTML labels beside `.route-badge`.
- Container/state behavior: non-current rows summarize; filters move below board; current/next remain above fold.
- Documentation-only: route row count caps and translated-label authoring guidance.
- Fixture/regression: route rows 3/5/8/12 and translated-length labels.

Specific implementation recommendation:

- Add current/next row hooks before adding broad CSS. Tests need stable selectors.
- Keep badges decorative/state-supportive; route labels remain HTML.

### ReferenceManualRecipe

Map to:

- CSS tokens: documentation table/card spacing may stay in `reference.css`, not global tokens unless reused.
- Component/DOM contract: manual title, decision routing block, recipe records/tables and code/example areas.
- Container/state behavior: tables become record cards; code examples move below first viewport.
- Documentation-only: intro word budgets, decision option caps and manual-vs-production distinction.
- Fixture/regression: mobile first viewport answers which recipe to use.

Specific implementation recommendation:

- Improve docs by documenting this mapping and showing the API, but keep table/card behavior manual-local.

## Canonical Fixture Recommendation

Canonical MenuScreenRecipe regression target should be a new dedicated fixture, not the full `fairy-journeys.html` page.

Recommended file: `fixtures/menu-screen-recipe.html`.

Reason:

- Pass 1 evidence shows `fairy-journeys.html` is valuable because it exposes real pressure: header nav, title, five commands, save slot, route plaques and rails.
- It is also a narrative applied page with dossier and ritual sections, so using it as the canonical MenuScreenRecipe fixture keeps regression scope noisy.
- A dedicated fixture can isolate MenuScreenRecipe and encode deterministic variants for command count, rail count, route count, long labels, missing art and forced densities.

Short-term bridge: continue using `fairy-journeys.html#menu-shell` as the live evidence fixture until `fixtures/menu-screen-recipe.html` exists. Once the fixture exists, `fairy-journeys.html` becomes an applied smoke test, not the canonical regression target.

Minimum canonical fixture states:

- `standard`: 3 secondary commands, 2 rail rows, 5 route rows.
- `compact`: 1-2 secondary commands, summary rail, 3 route rows or route summary.
- `emergency`: primary command, one fallback command or cue, one state/orientation cue.
- `stress`: 5 commands, 6 rail rows, 12 route rows and long/translated labels; expected result is documented downgrade, not all content above fold.

## Accessible Label Strategy

When compact mode shortens visible labels, the full accessible label should live with the interactive element whenever possible.

Rules:

- For links/buttons: keep the visible compact label in the accessible name and append the full label/context in a visually hidden child. This satisfies label-in-name expectations.
- For controls whose full explanation is long: use `aria-describedby` pointing to a nearby visually hidden or below-fold detail element.
- For non-interactive metadata summaries: use visible summary text plus a hidden full-value element or a below-fold detail record referenced by `aria-describedby`.
- Do not rely on `title` attributes as the only full-label carrier.
- Do not make icon-only compact labels unless the control has a stable visible text label elsewhere in the same control group and a full accessible name.

Recommended utility:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
```

Example:

```html
<a class="game-menu-button" href="#story-dossier">
  <span class="game-menu-glyph" aria-hidden="true">III</span>
  <span>
    <strong>Архив</strong>
    <span class="visually-hidden"> сказки: символы и имена</span>
  </span>
</a>
```

## Bounded Next-Pass File Set

Very small implementation set:

1. `css/tokens.css`
   - Add only reusable responsive-recipe variables that CSS can consume: title line counts, summary line counts and frame-rank intensity defaults.
2. `css/components.css`
   - Add shared density/rank hooks, `.visually-hidden`, summary-strip helpers and current/next route selectors.
3. `fixtures/menu-screen-recipe.html` or, if the project avoids a fixture directory in the next pass, `menu-screen-recipe-fixture.html`
   - Add the canonical MenuScreenRecipe regression target with standard/compact/emergency/stress states.
4. `reference.html`
   - Link the implementation mapping into the documentation layer and show the recipe density/rank/accessible-label API.
5. `docs/responsive-recipe-implementation-mapping-2026-05-15.md`
   - Keep this artifact as the checkpoint and update it only if implementation discovers a contradiction.

Do not include `css/fairy-journeys.css` in the first implementation file set unless the fixture proves one small adoption change is necessary. That keeps the pass from becoming a page-polish rewrite.

## Verification Plan For Next Pass

Required checks:

- Re-run viewport set from Pass 2: 1440 x 900, 1180 x 820, 1024 x 768, 920 x 768, 768 x 1024, 390 x 844 and 360 x 740.
- Run content variance for MenuScreenRecipe fixture: 1/3/5 commands, 0/2/4/6 rail rows, 3/5/8/12 route rows and long labels.
- Assert tap and label floors by DOM/computed-style inspection.
- Assert no horizontal overflow except explicit documentation code/table examples.
- Assert compact labels retain full accessible names or descriptions.

## Verification Performed For This Artifact

- Re-read the full Pass 2 contract source in `responsive-recipe-contracts-2026-05-15.md`.
- Cross-checked Pass 1 evidence for the decisions that depend on known failure modes: first-screen overflow, text variance, equal-weight frames, support rails outranking primary commands, compressed-desktop mobile behavior and stretched-mobile desktop behavior.
- Cross-checked `screen-recipe-contracts-2026-05-14.md` for layer ownership and existing recipe hierarchy.
- Inspected current token/component hooks in `css/tokens.css` and `css/components.css` before recommending incremental additions.
- Inspected `fairy-journeys.html` and `reference.html` enough to choose a canonical fixture strategy without turning this pass into page polish.

## Unresolved Questions For Next Pass

- Should the dedicated fixture live under `fixtures/`, `examples/` or a root-level HTML file? Recommendation: `fixtures/` if GitHub Pages paths and build/deploy rules allow it.
- Should density state use classes, data attributes or both? Recommendation: support both selectors initially, document data attributes as the durable API.
- Should frame rank use classes or data attributes? Recommendation: support class names for CSS ergonomics and data attributes for tests.
- Which existing page-local sub-12px labels should be fixed first after the shared hooks land? Recommendation: only the labels touched by the canonical fixture adoption, then defer broader cleanup to a separate pass.
