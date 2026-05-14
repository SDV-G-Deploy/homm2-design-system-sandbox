# HOMM2 Sandbox — Design-System Research Review Plan (2026-05)

Source: browser-first research review of the live GitHub Pages pages and repository code.

Reviewed scope:
- `index.html`
- `fairy-journeys.html`
- `reference.html`
- shared CSS system: `css/tokens.css`, `css/components.css`, `css/scenes.css`, `css/reference.css`, `css/fairy-journeys.css`

Live pages reviewed:
- https://sdv-g-deploy.github.io/homm2-design-system-sandbox/
- https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html
- https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html

---

## Executive summary

The current direction is strong and distinct:
**Heraldic fantasy game-menu / artifact UI**.

The sandbox already avoids generic SaaS-with-fantasy-paint problems. It has real world-embedded atmosphere, clearer material logic, and a recognizable menu-first identity.

The main weakness is not taste but system maturity:
visual ambition is currently ahead of component discipline.

Right now the project behaves partly like a design system and partly like a collection of hand-authored CSS scenes. The next phase should therefore focus on:

1. turning the visual language into a stricter reusable system
2. compressing mobile hierarchy and first-screen focus
3. converting `reference.html` from showcase into real operational documentation
4. reducing equal-strength competing UI layers on page compositions

---

## Direction to preserve

Preserve and strengthen:
- heraldic fantasy
- artifact-like UI surfaces
- plaque / frame / bevel shape language
- parchment as reading material
- gold as value / primary action
- mana as rare focus / consequence accent
- game-menu / chapter-select feeling over normal web landing-page patterns

Do not drift into:
- generic SaaS card UI
- soft rounded-pill product language
- decorative fantasy chrome without hierarchy
- glow-heavy pseudo-magic on every surface
- over-illustrated scenes where atmosphere beats action clarity

---

## Core diagnosis

### 1. Component contract is behind the visual system

**Evidence**
- Token architecture exists and is directionally good.
- Shared and page-specific CSS still contain many local one-off values and duplicated visual rules.
- Some rules that should be system components still live as scene-specific compositions.

**Impact**
- New pages will be slower to build.
- Consistency will depend on taste and memory rather than documentation and reusable primitives.
- The system risks growing as a set of exceptions.

**What to change**
- Harden the split between `tokens`, `components`, and page-local composition CSS.
- Promote stable visual patterns into reusable components.
- Remove duplicated base typography / panel logic from scene files.

---

### 2. Page hierarchy is not compressed enough, especially on mobile

**Evidence**
- The main sandbox hero emphasizes atmosphere before action.
- `fairy-journeys.html` has too many first-screen competitors: menu stack, plaques, rails, save slot, header nav.
- Mobile scroll cost is too high before the next meaningful section.

**Impact**
- Users get atmosphere before task clarity.
- The pages feel ceremonial before they feel navigable.
- Action hierarchy weakens despite strong art direction.

**What to change**
- Force one obvious primary action per first screen.
- Demote or defer secondary navigational patterns.
- Compress vertical theatre on mobile.

---

### 3. Reference page is still a showcase, not a real manual

**Evidence**
- Useful visual content exists, but navigation, API clarity, usage rules, and implementation guidance are limited.
- Some token labels and displayed values are not fully trustworthy.
- Foundations and components are not yet separated cleanly enough for production use.

**Impact**
- Developers still need to reverse-engineer page CSS.
- The system is hard to extend safely.

**What to change**
- Rebuild `reference.html` into a true design-system manual with TOC, anchors, component inventory, states, do/don't guidance, and responsive examples.

---

## Prioritized execution plan

## Phase 1 — Fix documentation and system architecture first

### Task 1. Rebuild `reference.html` into an operational manual
**Priority:** P0

Turn the reference page into the primary source of truth for the system.

Required outcomes:
- add a sticky or persistent table of contents
- add anchorable section ids
- separate the page into:
  - Foundations
  - Components
  - Patterns
  - Page recipes
  - Accessibility
- document component states and intended use
- add do/don't guidance where ambiguity exists
- add responsive examples for major component groups
- correct any mismatches between token definitions and displayed labels/specimens
- remove inline specimen styling where it weakens source-of-truth reliability

**Acceptance checks**
- A new screen can be planned from `reference.html` without reading page CSS.
- A coder can answer: which component to use, which states exist, and what may be overridden locally.

---

### Task 2. Refactor the CSS architecture into stricter system layers
**Priority:** P0

Codify the split between reusable system logic and page composition logic.

Required outcomes:
- keep `tokens.css` as the canonical token contract
- move reusable visual structures into `components.css`
- reduce duplicated base type / shared panel / shared rail logic in scene files
- keep `scenes.css`, `fairy-journeys.css`, and `reference.css` focused on page composition and page-specific exceptions only
- identify reusable primitives such as:
  - `SceneHeader`
  - `ParchmentPanel`
  - `ArchiveRail`
  - `StatusRail`
  - `PlaqueButton`
  - `RitualPanel`
  - framed navigation groups

**Acceptance checks**
- New pages can be assembled mostly from reusable classes.
- Shared typography and panel anatomy no longer appear duplicated across page CSS files.

---

## Phase 2 — Improve page hierarchy and mobile behavior

### Task 3. Fix first-screen hierarchy on `index.html`
**Priority:** P1

The hero must communicate the world and still surface action immediately.

Required outcomes:
- raise the main CTA so it is visible in the first viewport on desktop and mobile
- reduce excessive hero vertical mass
- preserve the atmosphere but demote non-essential artifact density above the fold
- keep ledger/supporting elements secondary to the primary action

**Acceptance checks**
- On `1440px` and `390px`, the primary action is visible without scrolling.
- The first screen reads as world + action, not atmosphere-only.

---

### Task 4. Simplify first-screen competition on `fairy-journeys.html`
**Priority:** P1

Choose one dominant navigation pattern.

Required outcomes:
- keep the game-menu stack as the main first-screen action pattern
- demote, defer, collapse, or restyle competing plaque/menu systems
- treat the top nav as utility navigation, not a competing primary layer
- simplify or compress rails on smaller screens
- ensure the first screen has one obvious focal command

**Acceptance checks**
- On desktop and mobile, users can identify the main path in a few seconds.
- The first screen no longer feels like multiple equal-strength menus stacked together.

---

### Task 5. Fix `fairy-journeys.html` mobile readability and control hierarchy
**Priority:** P1

Required outcomes:
- improve utility-nav readability on mobile
- improve quick-control legibility / tappability
- compress vertical spacing so the next major section arrives sooner
- maintain the menu-first, game-like feeling without micro-text fatigue
- fix active section highlighting logic so navigation accurately reflects the current section

**Acceptance checks**
- Mobile controls feel intentional and readable at `390px`.
- The next meaningful section appears much earlier than in the current build.
- Active nav state works reliably.

---

## Phase 3 — Strengthen systemic clarity and dramaturgy

### Task 6. Formalize material grammar and frame hierarchy
**Priority:** P1

Required outcomes:
- define stricter roles for parchment, gold, mana, stone, and atmospheric decoration
- establish frame-weight hierarchy:
  - background frame
  - content frame
  - command frame
  - ritual frame
- reduce cases where multiple framed elements compete equally for attention

**Acceptance checks**
- Within 5 seconds, the eye can distinguish title, main action, and secondary metadata on each screen.
- Mana accents read as focus/consequence, not wallpaper.

---

### Task 7. Clarify page dramaturgy and section roles
**Priority:** P2

Required outcomes:
- ensure upper-page actions read as entry/start/explore
- ensure lower ritual actions read as commit/confirm/threshold
- reduce duplicated climaxes across the same page
- make route/map sections read primarily as progression, not equal-weight commentary + manifesto + route list

**Acceptance checks**
- Each page feels sequential, not compositionally argumentative.
- Upper and lower CTAs have clearly different jobs.

---

## Implementation rules

- Prefer browser-verified improvements over code-only assumptions.
- Check at minimum: `390px`, `768px`, `1024px`, `1440px`.
- No critical horizontal overflow.
- Distinctiveness must support clarity.
- Avoid solving hierarchy by flattening everything into generic web UI.
- When a fix can become reusable, move it into the system layer instead of leaving it page-local.

---

## Recommended execution order

1. Rebuild `reference.html` into a real manual
2. Refactor CSS architecture into clearer reusable layers
3. Fix `index.html` first-screen hierarchy
4. Simplify `fairy-journeys.html` first-screen competition
5. Improve `fairy-journeys.html` mobile control readability and active-nav behavior
6. Formalize material grammar and frame hierarchy
7. Tighten dramaturgy / section role separation

---

## Linked focused task lists

For the currently documented Fairy Journeys page-specific cleanup backlog, see:
- `docs/fairy-journeys-codex-task-list-v2.md`

This research plan supersedes that file at the strategic level; the Fairy Journeys task list should now be treated as one page-specific branch inside the broader design-system refactor.
