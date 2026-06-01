# Solarpunk Independent Critic Pass 0001

Date: 2026-05-31
Mode: independent design critic / browser-first review
Scope: HoMM2 x Solarpunk design-system sandbox

## 1. Verdict

The current system is not yet a real HoMM2 x Solarpunk design system; it is one promising sunlit proof page surrounded by older dark HoMM2 screens and a reference manual that describes rules more clearly than the product demonstrates them. It does not mainly fail as a "green HoMM2 skin"; it fails as a portable system because the Solarpunk part is isolated, low-contrast, label-driven, and not yet expressed as reusable component grammar, state behavior, or distinctive assets.

## 2. What Was Inspected

URLs/pages inspected:

- Local equivalents of live deployment pages:
  - `index.html`
  - `solarpunk.html`
  - `reference.html`
  - `fairy-journeys.html`
- Live deployment targets provided for context:
  - `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/`
  - `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/solarpunk.html`
  - `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/reference.html`
  - `https://sdv-g-deploy.github.io/homm2-design-system-sandbox/fairy-journeys.html`
- Existing docs skimmed:
  - `docs/SOLARPUNK_SYSTEM_AUDIT_0001.md`
  - `docs/HOMM2_SOLARPUNK_SYSTEM_MAP_0001.html`
  - requested research doc path was not present in this workspace as `docs/DESIGN-SYSTEM-HOMM2-SOLARPUNK-RESEARCH-2026-05-31.md`

Viewports:

- Desktop: `1440x900`
- Mobile: `390x844`
- Narrow mobile: `360x740`

Tools:

- `node tools/visual-capture.js` for browser screenshots and overflow metrics
- Direct source inspection of `solarpunk.html`, `reference.html`, `index.html`, `fairy-journeys.html`, and CSS token/material usage
- Screenshot review from `tmp/independent-critic/`

## 3. Top 7 Issues

### P0 - Solarpunk is an isolated proof, not a system

Evidence: `solarpunk.html` presents a bright Sunwell / seed-ledger world, while `index.html` and `fairy-journeys.html` still open as dark castle/archive fantasy screens. `reference.html` explains the intended blend but starts as a manual, not as a canonical component gallery. The page-to-page transition feels like changing skins or demos, not moving through one coherent product family.

Impact: The system cannot be judged or reused reliably because the strongest rules do not survive contact with applied pages. A future implementer can copy the old dark grammar and claim it belongs because the sandbox itself still does.

Recommended fix: Promote `solarpunk.html` as a temporary proof only, then build two canonical recipe proofs from the same material/state rules: a Solarpunk menu/entry screen and a Solarpunk dossier/reading screen. Do not recolor all pages until those recipes exist.

Acceptance check: A reviewer can open three pages and identify the same Solarpunk material roles, state vocabulary, command hierarchy, and asset motifs without reading the reference page.

### P0 - The Solarpunk first screen loses HoMM2 depth by becoming a pale vellum wash

Evidence: On desktop `solarpunk.html`, the hero is dominated by cream, pale yellow, and translucent panels; the citadel/greenhouse infrastructure is barely legible behind the card. On mobile, the world art collapses into a soft backdrop and the page becomes a stacked paper card plus status panel. The strongest HoMM2 cues are the beveled nav and buttons, not the scene itself.

Impact: The page reads less like "HoMM2 transformed by civic ecology" and more like a bright parchment theme. The Solarpunk direction is safer and lighter than the dark pages, but it lacks the object weight, threshold drama, and material temperature that make HoMM2 distinct.

Recommended fix: Reintroduce controlled depth: a darker canopy/shadow structural layer, stronger silhouette for greenhouse/canal/solar hardware, and a clearer separation between world, primary plaque, and instrument board. Keep the light, but make it directional and architectural.

Acceptance check: In grayscale, the hero should still show four distinct layers: shell/frame, world infrastructure, primary ledger, and instrument board. The greenhouse/canal/solar hardware should remain identifiable without reading labels.

### P1 - Component grammar is not portable enough

Evidence: Buttons, plaques, ledgers, rails, cards, and status rows vary heavily across pages. `solarpunk.html` has `solar-command`, `solar-status-panel`, `status-row state-*`; `fairy-journeys.html` uses `btn-ceremonial`, `recipe-support-panel`, `hero-meta-cell`; `reference.html` has operator cards and manual tables. These are visually related but not obviously one system.

Impact: The design language depends on one-off page CSS instead of a shared grammar. That makes future pages likely to drift into either old HoMM2 darkness or generic light Solarpunk panels.

Recommended fix: Define a small component set with shared names and variants: `WorldFrame`, `PrimaryLedger`, `CommandPlate`, `StateRow`, `SupportRail`, `RouteBadge`, `MaterialSwatch`. Map each to HoMM2 anchor, Solarpunk material, allowed states, and mobile downgrade behavior.

Acceptance check: The same component names/classes appear in at least two recipe proofs, with page-specific styling limited to tokens and layout, not new component semantics.

### P1 - Mobile navigation and first-screen hierarchy are still fragile

Evidence: `fairy-journeys.html` mobile shows the top nav clipped horizontally, with the `SOLARPUN...` item cut off. `index.html` mobile exposes only part of the nav set above the fold. The visual-capture metrics report no document overflow, so this is a clipped/scroll-hidden usability issue rather than a layout overflow issue. Mobile first screens also strip away much of the side art/rail logic, leaving mostly large type plus stacked metadata.

Impact: Mobile users lose global orientation and the HoMM2-like spatial model. The pages become long parchment documents instead of navigable framed worlds.

Recommended fix: Replace mobile header nav with a deliberate compact pattern: two primary links plus a menu button, segmented tabs, or an icon rail. Make the first mobile viewport preserve one world cue, one primary ledger, and one state/route cue instead of trying to retain the desktop nav row.

Acceptance check: At `360x740` and `390x844`, all top-level navigation affordances are either fully visible or intentionally hidden behind one explicit control; no label is clipped mid-word. First viewport includes a readable title, one action, and one Solarpunk world/state cue.

### P1 - The reference page is useful documentation but weak product evidence

Evidence: `reference.html` opens with a large muted hero and "Fast operator mode" cards. It communicates process and rules, but it does not immediately show the canonical components in use. On mobile, it becomes a long sequence of similar brown/olive cards with low visual differentiation.

Impact: The reference page currently teaches by prose and lists. A design system page should prove the grammar visually first, then document it. As-is, it can hide unresolved component decisions behind well-written rules.

Recommended fix: Make the top of `reference.html` a compact component proof board: material swatches, command plates, state rows, support rails, and one mini recipe composition. Move long manual sections below that proof board.

Acceptance check: Above the first desktop fold and within the first two mobile viewports, the reference page shows canonical components with names, states, and allowed variants, not only operator instructions.

### P2 - Color/material roles are too close in value and too label-dependent

Evidence: The palette relies heavily on sun-vellum, brass, warm shadow, and muted canopy. Water and leaf states exist, but they are subtle; "Cistern flowing", "Irrigating", and "Growing" are mostly communicated through text and thin side accents. The page often reads beige/gold before it reads civic ecology.

Impact: The Solarpunk layer can be missed or misread as a premium parchment theme. State semantics are weak because color and material cues are not doing enough independent work.

Recommended fix: Give each living state a distinct physical cue, not just a color: water gets lens rings/channel lines/reflections; growing gets seed-bed ticks/leaf marks; charged gets brass hardware/dial marks; shaded gets canopy edge/cool cast shadow. Reduce generic gold linework where it is not value/charge/command.

Acceptance check: Remove the state text from `Charge vane`, `Cistern route`, and `Seed beds`; a reviewer should still be able to infer charged / flowing / growing from form, color, and local marks.

### P2 - Asset distinctiveness is still mostly CSS geometry

Evidence: The current world pieces are simple discs, beams, towers, triangles, grids, and translucent blocks. They establish layout but do not yet feel like a unique HoMM2 x Solarpunk artifact set. The frame-kit PNGs exist, but the visible Solarpunk page is still carried mainly by CSS primitives and text labels like `Seed vault`, `Canal lens`, and `Solar masts`.

Impact: The direction remains easy to imitate with generic gradients and rectangles. Distinctiveness needs reusable artifacts: carved brass, vellum fibre, greenhouse glass, water lens glyphs, civic seed crest, route badges.

Recommended fix: Add a small bounded asset layer and use it in components, not as full-page background art. Prioritize frame corners/edges, command-plate bevel texture, water-focus glyph, seed/civic crest, and state badges.

Acceptance check: With page copy hidden, the system still has recognizable HoMM2 x Solarpunk motifs in frames, commands, rails, and state badges.

### P2 - Copy and IA are doing too much of the design work

Evidence: The most Solarpunk signals are often nouns in copy: `Civic seed ledger`, `Sunwell guild conservatory`, `Charge vane`, `Cistern route`, `Seed beds`, `Fantasy Solarpunk`. The applied pages use strong narrative language but their structural UI remains closer to the earlier fantasy archive model.

Impact: If the words change, the design loses much of its Solarpunk meaning. That is a weak system because content authors can accidentally break the visual contract.

Recommended fix: Convert key nouns into componentized affordances: seed ledger as a document recipe, canal lens as a focus component, charge vane as a gauge/command readiness pattern, civic guild as a shell/crest system.

Acceptance check: Replace hero/body copy with neutral placeholder text; the page should still read as civic ecological HoMM2 from layout, materials, and state components.

## 4. What To Preserve

- The central idea that Solarpunk changes condition, infrastructure, and living state while HoMM2 keeps frames, plaques, bevels, ledgers, and object UI.
- `solarpunk.html` as the strongest current proof direction: sun-vellum, civic ledger, instrument board, water/charge/growth states.
- The restrained use of green. The system is right not to flood everything with leaf color.
- The HoMM2-style command weight: beveled buttons still feel tactile and game-adjacent.
- The reference page's rule clarity. The prose is more mature than the component proof; keep the rules, but make visuals lead.
- The screenshot/regression tooling. The capture script caught that there is no document overflow, which helps isolate mobile nav clipping as a component decision.

## 5. What To Kill Or Reduce

- Kill the assumption that more pale vellum equals more Solarpunk.
- Reduce global gold/brass linework where it is not command, charge, value, or hardware.
- Reduce page-specific component classes that encode the same role under different names.
- Reduce hero copy as the main carrier of worldbuilding.
- Kill clipped mobile nav labels; make navigation intentionally compact.
- Reduce old nocturnal HoMM2 dominance on applied pages before calling them Solarpunk examples.
- Avoid full-page CSS scenery that is too low-contrast to act as evidence.

## 6. Best Next Implementation Pass

1. Create a canonical component proof section at the top of `reference.html`: material swatches, command plates, state rows, support rail, route badge, and one mini composition.
2. Extract Solarpunk state components: charged, irrigating, growing, shaded, inspected, drought risk, maintenance, restored.
3. Build one Solarpunk menu/entry recipe using the same component grammar, not a recolored `index.html`.
4. Build one Solarpunk dossier/reading recipe using seed ledger / field manual semantics, not the dark royal archive semantics.
5. Redesign the mobile header/navigation contract across pages; no clipped labels at `360x740` or `390x844`.
6. Strengthen `solarpunk.html` hero contrast and infrastructure silhouettes while preserving the sunlit direction.
7. Add a bounded asset kit: solar-brass frame/plate texture, greenhouse glass, water lens glyph, seed crest, route/state badges.
8. Run browser screenshot acceptance on desktop, mobile, and narrow mobile, then write a short before/after visual verdict.

## 7. Appendix: Screenshot Paths And Evidence Notes

Captured screenshots:

- `tmp/independent-critic/index/desktop-1440x900.png`
- `tmp/independent-critic/index/mobile-390x844.png`
- `tmp/independent-critic/index/narrow-360x740.png`
- `tmp/independent-critic/solarpunk/desktop-1440x900.png`
- `tmp/independent-critic/solarpunk/mobile-390x844.png`
- `tmp/independent-critic/solarpunk/narrow-360x740.png`
- `tmp/independent-critic/reference/desktop-1440x900.png`
- `tmp/independent-critic/reference/mobile-390x844.png`
- `tmp/independent-critic/reference/narrow-360x740.png`
- `tmp/independent-critic/fairy/desktop-1440x900.png`
- `tmp/independent-critic/fairy/mobile-390x844.png`
- `tmp/independent-critic/fairy/narrow-360x740.png`

Metrics:

- `tmp/independent-critic/*/metrics.json` recorded `0` horizontal overflow offenders for all inspected pages and viewports.
- Important nuance: mobile nav clipping still appears visually on `fairy-journeys.html` despite no document overflow, which points to a deliberate clipped/scrolling header pattern rather than accidental page-width overflow.

Evidence notes:

- `solarpunk.html` source contains good semantic seeds: `solar-status-panel`, `state-charged`, `state-irrigating`, `state-growing`, `solar-command`, `sun-vellum-object`, `material-map`.
- Those semantics are not yet mirrored as shared components on `index.html`, `fairy-journeys.html`, or the top of `reference.html`.
- The requested research doc was not found at the exact workspace path provided; review proceeded with the available audit/system-map files and browser evidence.
