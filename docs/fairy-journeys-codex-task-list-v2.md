# Fairy Journeys — Codex-ready task list v2

Source: browser-first design audit of `fairy-journeys.html` at desktop `1440px` and mobile `390px`.

## Goal
Strengthen `fairy-journeys.html` as a clear HOMM2-inspired fantasy menu screen by reducing first-screen competition, clarifying action hierarchy, tightening language consistency, and improving mobile control readability without flattening the heraldic / menu-first atmosphere.

## Constraints
- Preserve the **Heraldic Menu / HOMM2-inspired** direction.
- Do not drift into generic SaaS card UI, soft pill shapes, or over-rounded controls.
- Keep the page feeling like a **game menu / chapter-select interface**, not a conventional landing page.
- Prefer fixes in reusable tokens/components where possible; avoid one-off CSS patches unless the issue is page-specific.
- Verify changes on at least `390px`, `768px`, `1024px`, and `1440px` widths.
- No critical horizontal overflow.
- Distinctiveness must support clarity; do not add decorative complexity while solving hierarchy issues.

## Prioritized tasks

### 1. Rebuild the first-screen action hierarchy
**Priority:** P1

- Audit the first screen and reduce the number of equal-strength navigation/action groups visible above the fold.
- Keep exactly **one clearly dominant primary action** on first view.
- Demote secondary actions (`Continue`, `Archive`, `Companions`) so they read as supporting choices rather than competing primaries.
- Treat the top header navigation as utility navigation, not as a third primary menu layer.
- Either push `Основные разделы путешествия` lower, collapse it visually, or restyle it as a quieter route index.

**Visual intent:**
The player should understand the screen in 3 seconds: what this is, what the main action is, and what the secondary paths are.

**Likely files:**
- `fairy-journeys.html`
- `css/fairy-journeys.css`
- optionally `css/components.css` if menu hierarchy patterns become reusable

---

### 2. Normalize language strategy across the page
**Priority:** P1

- Remove accidental mixed-language UI where English and Russian currently coexist without a clear rule.
- Choose one system and apply it consistently:
  - mostly Russian UI with rare intentional English labels, or
  - structured bilingual game UI with clearly defined roles for English terms.
- Review labels such as `New Journey`, `Continue`, `Archive`, `Companions`, `Settings / Closeout`, `journey log`, `threshold mode`, `Command rail`, `Save slot`.
- Keep only language switches that reinforce worldbuilding or system meaning.

**Visual intent:**
The interface should feel authored and immersive, not like a sandbox with placeholder mixed terminology.

**Likely files:**
- `fairy-journeys.html`

---

### 3. Improve mobile utility-nav and micro-control readability
**Priority:** P1

- Increase mobile readability of the top utility nav and quick command controls.
- Raise tiny utility labels from the current micro scale to a more confident mobile size.
- Rebalance padding and vertical rhythm so controls feel intentional, not compressed leftovers.
- Review the quick command row (`load`, `map`, `lore`, `quit`) and decide whether it should:
  - remain compact but more legible, or
  - become a stronger icon+label plaque pattern.

**Visual intent:**
Compact game-like controls are fine, but they must still feel tappable, legible, and premium on a phone.

**Likely files:**
- `css/fairy-journeys.css`
- possibly `css/components.css` if utility controls are shared patterns

---

### 4. Tighten hero typography against surrounding control density
**Priority:** P2

- Rebalance the hero title/copy block against the nearby command/menu structures.
- Keep the dramatic display feel, but stop the H1 from competing with every neighboring framed control group.
- Check whether the right move is:
  - slightly reducing display scale, or
  - keeping the scale and more aggressively demoting nearby blocks.
- Refine spacing between intro copy, primary action area, and secondary navigational blocks.

**Visual intent:**
The hero should set the mood and frame the interface, not act like a competing decorative slab.

**Likely files:**
- `css/fairy-journeys.css`
- possibly `css/tokens.css` if type scale adjustments should become systemic

---

### 5. Separate “launch” vs “commit” dramaturgy
**Priority:** P2

- Clarify the difference between the upper-screen start action and the lower-screen final acceptance ritual.
- Ensure the upper CTA reads as **enter/explore/start**, while the lower CTA reads as **confirm/accept/commit**.
- Reduce any accidental duplication between `Начать странствие` and the final `Назвать свой путь` choice.
- Use copy, spacing, and visual emphasis to make these two beats feel sequential rather than competing climaxes.

**Visual intent:**
The page should feel like a journey with phases, not like two unrelated primary endings.

**Likely files:**
- `fairy-journeys.html`
- `css/fairy-journeys.css`

---

### 6. Make the middle route section read more like a route and less like parallel commentary
**Priority:** P2

- Strengthen the primary reading path in the `Четыре дороги к своему имени` section.
- Demote supporting lore notes (`Сказочная логика`, `UI правило`) so they do not compete equally with the route list.
- Use numbering, spacing, and alignment to emphasize progression through the four stops.
- Reduce the feeling that the section is simultaneously route map, manifesto, and side note panel with equal weight.

**Visual intent:**
The middle section should read as a chapter map first, commentary second.

**Likely files:**
- `css/fairy-journeys.css`
- `fairy-journeys.html`

## Acceptance checks

### Hierarchy
- On `1440px` and `390px`, the first screen has one obvious primary action.
- Secondary actions are visible but clearly subordinate.
- Utility navigation no longer competes with main progression choices.

### Language consistency
- The UI follows one explicit language strategy.
- No accidental English/Russian mixing remains in core navigational labels.

### Mobile quality
- Utility nav and quick controls are readable and tappable on `390px`.
- The page retains a menu-first game feel without micro-text fatigue.

### Dramaturgy
- Upper CTA reads as start/entry.
- Lower CTA reads as confirmation/commitment.
- The two do not feel redundant.

### Middle section clarity
- The four-stop route reads as a progression path first.
- Supporting lore content is quieter and no longer competes with the route spine.

### Responsive verification
- Verify at `390px`, `768px`, `1024px`, and `1440px`.
- No critical horizontal overflow.
- No major spacing collisions or broken framed-panel compositions.

## Suggested implementation order
1. Task 1 — first-screen hierarchy
2. Task 2 — language normalization
3. Task 3 — mobile utility controls
4. Task 5 — launch vs commit separation
5. Task 6 — middle route clarity
6. Task 4 — hero typography rebalance

## Notes for Codex
- Prefer small, compositional changes with browser verification after each chunk.
- Do not “solve” clarity by stripping the fantasy framing out of the page.
- If a fix can become a reusable menu/panel hierarchy pattern, move it into shared CSS instead of leaving it page-local.
