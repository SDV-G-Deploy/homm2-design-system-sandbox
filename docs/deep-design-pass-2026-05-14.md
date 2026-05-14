# Deep Design Pass - HOMM2 / Fairy Quest

Date: 2026-05-14

## Scope And Evidence

Reviewed local docs and pages:

- `/root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-FOUNDATION.md`
- `/root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-REFERENCE-BOARD.md`
- `/root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-LAZYDESIGN-LESS-ROUND.md`
- `homm2-design-system-sandbox/index.html`
- `homm2-design-system-sandbox/reference.html`
- `homm2-design-system-sandbox/fairy-journeys.html`
- `YourInsideQuest/fairy-journeys.html`

Rendered evidence captured locally through Chromium/CDP and screenshots at desktop/mobile:

- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/index-desktop.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/index-mobile.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/reference-desktop.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/reference-mobile.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/fairy-sandbox-desktop.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/fairy-sandbox-mobile.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/fairy-quest-desktop.png`
- `homm2-design-system-sandbox/tmp/deep-design-pass-2026-05-14/fairy-quest-mobile.png`

Key measured evidence from local render:

- Sandbox index desktop: hero actions visible at y 728-790 in 900px viewport.
- Sandbox index mobile: hero actions visible at y 737-846 in 844px viewport, but the second action lands on the lower edge.
- Reference desktop: first manual section starts at y 538, color primitives at y 771, full page around 9248px high.
- Fairy sandbox desktop: first menu stage around 1505px high; game menu starts around y 851 and save slot is below first viewport.
- YourInsideQuest mobile: first menu stage around 1305px high; game menu stack runs y 530-888 in an 844px viewport, so the fifth menu item falls past the fold.
- YourInsideQuest mobile: utility nav items render at 10px text; side/status/command rails are pushed below first viewport inside the same framed screen.

## Concise Visual-Direction Summary

The right direction is still strong: **heraldic fantasy game-menu / artifact UI**. The system should feel like a warm old fantasy interface object: dark wood and night shell, brass/gold command plaques, parchment only as an inner reading surface, inset slots for state, and a single authored screen plate rather than a web stack of cards.

The next risk is not lack of fantasy. The risk is **system drift**: the best applied work now lives as scene-specific CSS in `YourInsideQuest`, while the upstream system still lacks enough reusable contracts to protect future screens from either generic SaaS layout or over-decorated one-off scenes.

## Top Findings

### P0 - No blocking visual failure found

Evidence: all inspected pages render, preserve the HoMM2-inspired direction, avoid critical horizontal overflow at 390px, and expose primary navigation.

Impact: no emergency rebuild is needed.

Fix: proceed with system hardening and hierarchy refinement, not a broad redesign.

Acceptance check: keep current material direction intact while improving component contracts and first-screen hierarchy.

### P1 - The strongest applied menu grammar is not yet a shared system contract

Evidence: `YourInsideQuest/css/fairy-journeys.css` contains the mature applied shell vocabulary around `.homm2-main-menu-stage`, `.menu-frame-shell`, `.side-column`, `.menu-center-mount`, `.menu-plate-shell`, and `.menu-plate-body`. Those patterns are much more specific than the shared component layer. The sandbox components document buttons and generic page shell, but not the full menu-screen anatomy.

Impact: new pages will copy/paste or reinvent the best work. The system remains dependent on taste and memory rather than reusable rules.

Fix: promote stable primitives into the sandbox system: `MenuScreenShell`, `FrameBeam`, `SideColumnRail`, `CenterMenuMount`, `CommandSlab`, `SaveSlot`, `RouteIndex`. Keep exact applied proportions page-local.

Acceptance check: a new menu-like screen can be assembled from shared classes without reading `YourInsideQuest/css/fairy-journeys.css`.

### P1 - Fairy sandbox first screen is too tall for command clarity

Evidence: local render puts `.menu-stage` at roughly 1505px high on desktop; `.game-menu-stack` starts around y 851 in a 900px viewport; the save slot begins below the fold. Side rails stretch across the whole tall stage, making the first screen feel like a cathedral of equal-weight UI.

Impact: it reads as impressive atmosphere before it reads as an actionable chapter-select menu. The player does not get a clean 3-second command hierarchy.

Fix: compress the sandbox menu scene. Move the command stack up, reduce title/copy vertical mass, make side rails shorter and visually attached to the central plate, and keep the save slot or route index subordinate.

Acceptance check: at 1440x900, the primary command, at least two secondary commands, and save/status context are visible without scrolling.

### P1 - YourInsideQuest mobile still over-stages the first screen

Evidence: mobile render shows `.menu-stage` at about 1305px high; the menu stack runs y 530-888, so the fifth item falls below the 844px viewport. Status and command rails start after y 1127 and y 1260. The utility nav uses 10px labels.

Impact: the page keeps the game-menu feeling, but mobile asks too much vertical patience before the route/map content appears. Utility controls look like miniaturized desktop chrome rather than confident mobile controls.

Fix: for mobile, shorten the first menu to the true core commands, collapse or defer the route index, and move status/command rails outside the first framed plate or convert them to a compact drawer/summary strip. Raise utility nav text to a minimum practical size and reduce plaque count above the fold.

Acceptance check: at 390x844, the primary action and the main secondary choices fit in the first viewport, and the next major section begins much sooner than y 1446.

### P1 - Reference page is improved, but still not self-protecting enough

Evidence: local `reference.html` has a TOC and manual sections, but the page is still long: around 9248px desktop and much taller on mobile. The first component examples appear after a substantial token/manual lead-in. `reference.css` says no new design decisions should live there, yet specimen-specific patterns still define strong visual behavior.

Impact: a developer can still get lost between "showcase" and "contract". The manual is moving in the right direction, but it does not yet prevent misuse of materials, density, mobile rhythm, or page-local overrides.

Fix: add a compact front-door decision table: material role, component to use, allowed states, common misuse, and responsive rule. Split "specimens" from "contract" visually and structurally. Add do/don't examples for command plaques, route boards, side rails, and parchment fields.

Acceptance check: from the top 900px of `reference.html`, a developer can answer: what screen recipe am I building, which components apply, and what must stay page-local.

### P2 - Typography rules are not fully resolved

Evidence: token layer uses negative tracking for display and headings: `--tracking-display: -0.048em`, `--tracking-h2: -0.035em`, `--tracking-h3: -0.018em`. The design direction asks for formal, plaque-friendly typography, but text rhythm docs also warn against broken readability rhythm.

Impact: on mobile and dense plaques, tight tracking can make the serif feel squeezed and less object-like. It also creates a system-level rule conflict for future work.

Fix: remove negative tracking from shared tokens or document a narrow exception for very large display text only. Keep plaque labels at stable, non-negative tracking.

Acceptance check: CSS has no negative letter-spacing in reusable tokens/components, or the exception is explicitly documented and not used in compact controls.

### P2 - Language strategy is still not fully authored

Evidence: YourInsideQuest uses mostly Russian but keeps `Mirror` in top nav and menu command. Sandbox pages mix English system labels with Russian product copy. Some labels read like implementation artifacts rather than in-world UI.

Impact: the fantasy interface feels less authored. In a game-menu screen, language inconsistency is more visible because every command is ceremonial.

Fix: define language lanes. Recommendation: product UI in Russian; English only for design-system/reference pages and internal dev labels. Replace `Mirror` with `Сравнение`, `Витрина`, or remove it from product navigation.

Acceptance check: core navigation, menu commands, slots, route labels, and ritual actions follow one language strategy.

### P2 - Route/map dramaturgy is still weaker than the menu shell

Evidence: both Fairy pages have strong menu command slabs, but the middle section still reads as route map plus manifesto plus side notes. The heading `Четыре дороги к своему имени` is strong, but surrounding panels compete with the route spine.

Impact: after the first menu, the user's mental model shifts from "choose a chapter" to "read a designed essay". That weakens the game-board feeling.

Fix: make the middle section a physical route board first: numbered path spine, clear current position, locked/available states, compact lore notes as annotations, not equal panels.

Acceptance check: when scanning the section, the eye follows route steps before reading supporting lore.

### P3 - The system needs a stronger object-icon plan

Evidence: the current direction relies heavily on text plaques, Roman numerals, sigils, and CSS materials. External HoMM2 references and the local docs both emphasize resources/artifacts as small physical objects.

Impact: the interface is distinctive, but repeated text plaques can become visually monotonous and reduce the artifact/inventory feeling.

Fix: define a small object-icon taxonomy: compass, scroll, seal, key, lantern, crest, route marker, archive tab. Keep them simple, not copied from HoMM2 assets.

Acceptance check: command plaques can use consistent object silhouettes at 24-40px without losing legibility.

## System Gaps

The HOMM2 design system still lacks these self-protecting contracts:

- **Menu-screen recipe:** explicit `backdrop -> outer shell -> title cartouche -> command slab -> inset rails -> footer/status` implementation classes.
- **Frame-weight hierarchy:** named rules for background frame, content frame, command frame, ritual frame, and when each is allowed.
- **Material role matrix:** parchment, stone, wood, brass, gold, mana, wax, and moss need "use for / do not use for" rules in the reference.
- **Responsive contract:** first-screen max heights, minimum tap sizes, mobile nav behavior, and when to collapse rails.
- **Copy/language grammar:** product language vs design-system language, short command naming, slot naming, route naming.
- **Object icon taxonomy:** reusable artifact/resource-like symbols with size, silhouette, and color rules.
- **State matrix beyond buttons:** selected, locked, completed, current route step, save slot active, disabled command, warning/threshold.
- **Sync lanes between repos:** tokens, shared components, applied shell, and page-local composition should be explicitly separated.
- **Visual QA harness:** screenshot checks for 1440, 1180, 1024, 920, 768, 390, and 360 widths before claiming a pass is done.
- **Typography exception policy:** negative tracking, ceremonial display scale, and compact plaque labels need stricter limits.

## Fairy Quest Specific Issues

These belong to the Fairy Quest / Fairy Journeys screen, not the shared system:

- The first screen still carries too many jobs: title screen, status panel, command menu, save slot, route index, utility commands, and product navigation.
- `Начать путь` / upper launch action and final `Принять имя` ritual are clearer in YourInsideQuest than the sandbox, but they still need distinct copy lanes: enter/explore above, commit/accept below.
- Mobile command stack is too tall when all five menu items remain visible. `Mirror` is useful for development, weak for product.
- Side rails on mobile arrive after the main stack but still live inside the same giant framed object. This makes the first screen feel unfinished until well below the fold.
- Route index should not compete with the main command slab. It should become a quieter map index or appear after the first viewport.
- The route/map section needs board-game progression logic: current step, next step, locked/available, and a stronger spine.
- Quick controls are useful, but on mobile they should be either hidden behind a compact control button or made into a proper icon+label command row.

## Lazyweb Takeaways

- **fheroes2:** modernized HoMM2 works because it improves resolution, information display, and interaction quality while preserving the original grammar. Lesson: upgrade clarity, not nostalgia pixels.
- **HoMM2 town screens:** the screen is a place that changes with state. Lesson: Fairy Quest should feel like one authored menu object, not separate panels.
- **HoMM2 artifacts/resources:** small objects carry meaning faster than labels. Lesson: build object-icon taxonomy instead of relying only on text plaques.
- **Spriters Resource archive:** asset categories show how much of HoMM2 identity comes from object families. Lesson: define families, do not copy sprites.
- **Songs of Conquest official site:** fantasy strategy copy is action-loop based: explore, build, wage, claim. Lesson: Fairy Quest route language should emphasize progression verbs.
- **Songs of Conquest UI guide:** resource bars and side action buttons work when persistent status is compact and structured. Lesson: side rails should summarize, not compete.
- **Medieval quest-board pattern:** parchment works best as pinned slips or inner fields on wood, not full-screen beige wallpaper. Lesson: keep parchment as object, not background.
- **Old fantasy/game references generally:** marketing spectacle is dangerous. Extract command hierarchy, maps, resource/status grammar, and material logic, not promo-hero layout.

## Images 2.0 Decision

**Use later, not now.**

Why: the immediate problems are hierarchy, component contracts, responsive behavior, language, and route dramaturgy. Generated imagery would not fix those. The current system already has enough material direction to continue with code and documentation.

Use Images 2.0 later for material studies and paintover prompts after the component contracts are clearer:

1. `A single HoMM2-inspired fantasy game menu frame, dark carved wood side columns, aged brass rails, parchment inset fields, no text, no copied game assets, modern readable proportions, frontal UI material study.`
2. `Four plaque button variants for a heraldic fantasy interface, raised brass and dark wood construction, beveled corners, subtle pixel-era stepped shadows, no labels, no icons, neutral background.`
3. `A fairy-tale quest-board interface material study: dark wooden board, pinned parchment route slips, wax seals, brass route markers, restrained illumination, no readable text, no character art.`
4. `Compact artifact icon set direction for a fantasy self-discovery menu: compass, scroll, key, seal, lantern, crest, route stone, archive tab, 32px readable silhouettes, warm limited palette, not pixel art.`
5. `Campaign title cartouche variants for a fantasy menu screen, brass frame, parchment center, small crest zone, dark wood backing, ceremonial but compact, no readable text.`

## Recommended Next Pass

1. **Shared system pass:** extract the stable menu-shell anatomy from YourInsideQuest into sandbox components and reference docs. Shared rule: component names, material roles, states, and responsive constraints. Page-local: exact proportions and product copy.

2. **Reference manual pass:** turn `reference.html` into a faster operational manual. Add decision table, component inventory with class names, states, responsive examples, and do/don't rows for menu shell, plaques, rails, route board, and parchment fields. Shared system rule.

3. **Fairy Quest first-screen pass:** reduce first-screen competition. Keep one dominant command slab, demote route index, shorten mobile stack, and make side rails compact summaries. Page-local composition change using shared components.

4. **Language pass:** define Russian product language with English restricted to design-system/reference/development contexts. Replace or remove `Mirror` in YourInsideQuest. Page-local copy rule, with a shared language guideline.

5. **Route-board pass:** rebuild the middle section as a route progression board with numbered path, current/locked/completed states, and quieter lore annotations. Shared route component if reusable; page-local content and sequence.

6. **Responsive QA pass:** verify 1440, 1180, 1024, 920, 768, 390, and 360 widths with screenshots. Acceptance checks: no horizontal overflow, primary action visible, side rails subordinate, text fits plaques, next section appears early enough on mobile.

7. **Images 2.0 material-study pass later:** only after the system contracts are stable. Use generated studies for frame corners, plaque variants, object icons, and route-board materials, not for layout decisions.

