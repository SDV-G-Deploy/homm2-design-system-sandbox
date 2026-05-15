# HOMM2 Responsive Recipe Shared Hooks - Pass 4

Date: 2026-05-15

Pass name: Pass 4: shared hooks and fixture wiring

## Scope

This pass lands the smallest durable shared hooks implied by the responsive recipe evidence, contracts and implementation mapping. It is not a broad CSS rewrite and it does not treat `fairy-journeys.html` as the endpoint.

## Target File Set

- `css/tokens.css`
- `css/components.css`
- `fixtures/menu-screen-recipe.html`
- `docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`

`reference.html` and `fairy-journeys.html` are read for compatibility only unless a tiny supporting example becomes necessary.

## Implementation Checklist

- [x] Re-read Pass 1 evidence, Pass 2 contracts and Pass 3 implementation mapping.
- [x] Add shared density tokens and coherent hybrid density selectors.
- [x] Add shared line clamp, summary, metadata and accessible-label hooks that CSS can consume.
- [x] Add readable frame-rank selectors while preserving existing collapse-rank hooks.
- [x] Add compact/emergency support-panel behavior that summarizes rails before primary controls shrink.
- [x] Create `fixtures/menu-screen-recipe.html` as the canonical MenuScreenRecipe regression fixture.
- [x] Wire standard, compact, emergency and stress fixture states with accessible compact labels.
- [x] Inspect touched files after edits.
- [x] Run grep/static sanity checks for new hooks.

## Initial Decisions

- Density API: support both classes (`.recipe-density-compact`) and `data-recipe-density` attributes on recipe roots; the data attribute is canonical for fixtures/tests and the class remains ergonomic for authors.
- Frame rank API: support both readable classes (`.recipe-frame-primary`) and `data-frame-rank` attributes. This preserves CSS ergonomics while giving tests stable selectors.
- Budgets: keep character/count budgets in docs and fixture scenarios. CSS gets line-count clamps, floors, rank intensity, summary surfaces and density behavior only.
- Canonical target: add one isolated MenuScreenRecipe fixture. `fairy-journeys.html#menu-shell` remains a bridge smoke target, not the canonical regression target.

## Landed Changes

- `css/tokens.css` now exposes reusable responsive recipe hook tokens:
  - title, primary label, secondary label, rail label, metadata, annotation and summary line counts;
  - primary, secondary and tertiary frame-rank opacity knobs.
- `css/components.css` now provides shared hook classes/selectors:
  - `.visually-hidden` for compact labels and full state text;
  - `.recipe-title`, `.recipe-label`, `.recipe-annotation`, `.recipe-metadata` and `.recipe-line-clamp`;
  - `.recipe-support-summary`, `.recipe-support-panel[data-recipe-collapse="summary"]` and `.recipe-state-cue`;
  - `.recipe-frame-primary|secondary|tertiary` plus matching `data-frame-rank` selectors;
  - hybrid density selectors for `.recipe-density-compact`, `.recipe-density-emergency`, `data-recipe-density="compact"` and `data-recipe-density="emergency"`.
- `css/components.css` also gives `.menu-screen-shell` a container-query surface and wires compact container fallback behavior for menu support summaries.
- `fixtures/menu-screen-recipe.html` is the canonical MenuScreenRecipe fixture with four authored states:
  - `standard`: primary command, three secondary commands, state rail and five route rows;
  - `compact`: primary command, one fallback command, summarized rail and summarized routes;
  - `emergency`: primary command, fallback command and one orientation cue;
  - `stress`: long labels, five commands, six rail rows and twelve represented route rows downgraded by compact hooks.

## Verification

- Re-read:
  - `docs/responsive-recipe-evidence-2026-05-15.md`
  - `docs/responsive-recipe-contracts-2026-05-15.md`
  - `docs/responsive-recipe-implementation-mapping-2026-05-15.md`
- Inspected touched CSS/HTML after edits with targeted `sed` reads.
- Ran hook grep:
  - `rg -n "recipe-density|data-recipe-density|recipe-support-summary|recipe-frame-primary|data-frame-rank|recipe-title-lines|visually-hidden|recipe-state-cue" css/tokens.css css/components.css fixtures/menu-screen-recipe.html docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
- Ran whitespace/static diff check:
  - `git diff --check -- css/tokens.css css/components.css fixtures/menu-screen-recipe.html docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
- Ran a lightweight Node static validation for the fixture:
  - all `aria-labelledby` / `aria-describedby` references resolve;
  - exactly four fixture states exist;
  - each fixture state has exactly one `data-frame-rank="primary"` command slab;
  - each fixture state carries `data-recipe="menu-screen"` and a valid `data-recipe-density`.

## Deferred

- No broad CSS rewrite.
- No `fairy-journeys.html` polish. It remains an applied bridge smoke target.
- No visual screenshot pass in this bounded implementation pass; the static fixture wiring is ready for a later viewport/screenshot pass.
- No ReferenceManualRecipe table/card work; documentation behavior stays isolated from production recipe hooks.
- No content-budget automation in CSS. Character, row and metadata budgets remain docs/fixture authoring constraints.
