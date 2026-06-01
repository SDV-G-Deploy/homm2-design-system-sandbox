# HOMM2 x Solarpunk Pass 01 Evidence Critique - 2026-05-31

## Executive verdict

The current solarpunk layer is structurally healthier than a plain green repaint, but it still reads as a recolored HOMM2 night menu with a solar disc and vocabulary labels added on top. It does not yet make solarpunk feel like a working civic ecology, greenhouse system, water craft, or solar infrastructure.

The strongest failure is not only palette. The page keeps the original dark castle light model, original framed-card dominance, original display scale, and original fantasy-menu component states, then renames materials to sun-vellum, solar brass, canopy, and water lens. That means the page says "living infrastructure" in copy, but most visual evidence says "dark castle UI with warm highlights."

For Pass 02, "stronger" should mean a new operating model for the flavour: sunlight as directional structure, civic ecology as visible systems, water and glass as functional interaction states, solar craft as material hardware, and HOMM2 object grammar as the frame language that contains those systems. Green must remain a living-system signal, not the default world fill.

## Evidence captured

### Commands run

- Read core files with targeted line-numbered excerpts:
  - `README.md`
  - `index.html`
  - `solarpunk.html`
  - `reference.html`
  - `fairy-journeys.html`
  - `css/solarpunk.css`
  - `css/tokens.css`
  - `css/components.css`
  - `docs/design-system-constitution-2026-05-15.md`
  - `docs/design-system-operator-index-2026-05-15.md`
  - `docs/solarpunk-autonomous-run-ledger-2026-05-31.md`
- Captured current solarpunk page:
  - `node tools/visual-capture.js --target /solarpunk.html --out tmp/visual-capture/solarpunk-pass-01/solarpunk --viewport desktop:1440x900 --viewport mobile:390x844 --selector body --selector .solar-world-frame --selector .solar-hero-card --selector .solar-status-panel --selector .solar-citadel --selector .solar-actions`
- Captured current index page:
  - `node tools/visual-capture.js --target /index.html --out tmp/visual-capture/solarpunk-pass-01/index --viewport desktop:1440x900 --viewport mobile:390x844 --selector body --selector .hero-frame --selector .hero-copy --selector .material-ledger --selector .scene-nav`
- Captured reference operator page:
  - `HOMM2_CAPTURE_PORT=4211 HOMM2_CAPTURE_CDP_PORT=9351 node tools/visual-capture.js --target /reference.html#operator-mode --out tmp/visual-capture/solarpunk-pass-01/reference --viewport desktop:1440x900 --selector body --selector '#operator-mode' --selector .reference-shell`
- Ran smoke:
  - `timeout 25s env HOMM2_SMOKE_PORT=4205 HOMM2_CDP_PORT=9345 node tools/regression-smoke.js`

### Screenshot paths

- `tmp/visual-capture/solarpunk-pass-01/solarpunk/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-pass-01/solarpunk/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-pass-01/index/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-pass-01/index/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-pass-01/reference/desktop-1440x900.png`

### Pages and viewports inspected

- `/solarpunk.html`: desktop `1440x900`, mobile `390x844`
- `/index.html`: desktop `1440x900`, mobile `390x844`
- `/reference.html#operator-mode`: desktop `1440x900`

### Metrics of note

- `/solarpunk.html` desktop: `.solar-world-frame` top 125, bottom 855; `.solar-hero-card` top 262, bottom 790; no horizontal overflow.
- `/solarpunk.html` mobile: `.solar-world-frame` top 151, bottom 1206; `.solar-hero-card` top 296, bottom 884; `.solar-status-panel` top 912, bottom 1183; no horizontal overflow.
- `/index.html` desktop: `.hero-frame` top 124, bottom 939, internal scrollWidth 1225 vs clientWidth 1178; body no horizontal overflow.
- `/index.html` mobile: `.hero-frame` top 145, bottom 1401; `.scene-nav` scrollWidth 532 vs clientWidth 332 with intentional horizontal nav scrolling.
- Smoke result: `HOMM2 regression smoke OK`, 7 targets across 3 viewports, exit 0.

## Top failures

### P0 - Solarpunk is described more than embodied

Evidence:
- `solarpunk.html:56-65` says "Solar guild hall", "living light", "solar brass", "water and sky", and "living infrastructure".
- The first viewport screenshot shows a dark panel, a glowing disc, a castle silhouette, and two conventional command buttons. The civic/ecological machinery is mostly hidden behind copy and labels.
- `css/solarpunk.css:136-140` and `css/solarpunk.css:573-576` still build the major frames from timber, solar-shadow, canopy-dark gradients rather than from sunlit civic material.

Impact:
- The page asks the user to believe the solarpunk premise through text. Visually it still resolves as HOMM2 castle UI with warmer highlights and a greenhouse outline.
- This directly conflicts with the run ledger guardrail: solarpunk must enter through light, civic infrastructure, restoration ecology, solar craft, water sensing, glass/greenhouse systems, and optimistic utility.

Concrete fix:
- Build a visible scene-system layer before restyling components: terraces, aqueduct channels, solar mirrors, greenhouse ribs, seed archive drawers, civic signage, repair/irrigation gauges, and water-routing lines.
- Replace generic status rows with object-like infrastructure controls: charge dial, cistern level, shade vane, seed-bed health, drought risk seal.

Acceptance check:
- In a screenshot with all text blurred, a reviewer should be able to identify "solar civic greenhouse/water infrastructure inside HOMM2 object grammar", not just "fantasy castle card with green/yellow tones."

### P0 - The light model is still nocturnal castle light

Evidence:
- `css/solarpunk.css:122-140` gives the hero frame a dark diagonal base: timber to solar-shadow to canopy-900.
- `css/solarpunk.css:302-317` makes the primary card a dark translucent night panel.
- `css/solarpunk.css:209-220` creates a round solar disc, but the disc behaves like the old moon: isolated, decorative, and not shaping cast shadows, transparency, or panel readability.
- Desktop screenshot: the brightest object is a disc behind the UI; the primary reading surface remains dark and castle-like.

Impact:
- Solarpunk loses its core affect: daytime utility, visible craft, clean air, civic maintenance, greenhouse transparency, and productive sunlight.
- The page still uses the old fantasy-night contrast trick: cream text on dark surface with gold accents.

Concrete fix:
- Define a directional daylight model: sun angle, cast shadows, translucent greenhouse glazing, warm exterior planes, cooler water-reflected focus zones, and dark insets used only for depth/slots.
- Move the primary card away from "night glass over castle" toward sunlit vellum or enamelled civic plaque with dark ink, reserving deep green-black for instrument wells and under-canopy shadows.

Acceptance check:
- First viewport should read as sunlit even at thumbnail scale. Shadows should agree with the sun position, and water/glass should catch light differently from vellum/brass/wood.

### P0 - Palette ratios flatten the flavour into warm dark + green accents

Evidence:
- Core solarpunk tokens in `css/solarpunk.css:3-19` include sun-vellum, solar, leaf, canopy, water, clay, timber, and shadow, but the rendered desktop is dominated by dark shadow/canopy and timber.
- Body background is light, but the first meaningful frame is mostly dark: `css/solarpunk.css:136-140`.
- The applied skin repeats the same pattern across existing pages: `css/solarpunk.css:679-704` sets new semantic values, then `css/solarpunk.css:815-830` makes many components share the same dark translucent background.

Impact:
- Solar, water, and living green do not get distinct spatial roles. They are accents and glows, not a palette system.
- The user's complaint that the design reads like gradients/backgrounds remains valid because the ratios are not tied to semantic material jobs.

Concrete fix:
- Specify target palette ratios for Pass 02 before implementation:
  - 45-55% sunlit vellum, limestone, pale plaster, or sky-lit negative space.
  - 15-20% greenhouse glass and water blues used for focus/sensing, not generic decoration.
  - 12-18% solar brass/clay hardware for value, charge, route selection, and craft.
  - 8-12% canopy/leaf for living-system state, shade, growth, or success.
  - 8-12% deep shadow for inset wells, frame cuts, and HOMM2 depth.
- Add contrast pair tokens for each role instead of relying on alpha blends over dark frames.

Acceptance check:
- A palette audit of the first viewport should show light/vellum as the main field, dark as support, and green as state/ecology. If dark/canopy dominates, the pass fails.

### P1 - Material system is named, but not physically specific

Evidence:
- `solarpunk.html:119-139` lists Sun-vellum, Solar brass, Canopy shade, and Water lens.
- `css/solarpunk.css:499-544` renders the material map as swatches and small cards, not as working material behavior.
- `css/solarpunk.css:533-544` defines swatches as 10px strips, which documents color but does not prove material.

Impact:
- The page has material labels without material rules. "Solar brass" behaves like old gold; "water lens" behaves like old magic/focus; "canopy" behaves like dark green background.
- HOMM2 object grammar depends on material meaning. If the new materials do not have jobs and physical behavior, the flavour is cosmetic.

Concrete fix:
- Define material behaviors:
  - Sun-vellum: readable civic records, dark ink, pressed plant fibres, warm edge wear, stamped route marks.
  - Solar brass: bevelled hardware, dial rims, active charge, primary selection, directional highlights.
  - Greenhouse glass: translucent panes, rib structures, water condensation, parallax behind UI.
  - Water lens: focus ring, selected/inspected state, sensor readout, reflective caustic edge.
  - Canopy shade: environmental cooling/state, not default panel fill.

Acceptance check:
- Each named material must have at least one component role, one state role, one contrast pair, and one visible physical cue beyond color.

### P1 - Scene/worldbuilding layer is too shallow

Evidence:
- `solarpunk.html:46-53` gives the hero scene only six decorative spans: disc, dome, two towers, grid, canopy bed.
- The desktop screenshot shows the "citadel" mostly behind panels; on mobile it becomes a low-opacity backdrop behind text.
- The status panel has three text rows: charge, canopy, water lens. It does not show what system is being operated.

Impact:
- The page lacks the world evidence needed to distinguish "solar civic ecology" from "fantasy castle with greenhouse words."
- It also weakens HOMM2 object grammar because HOMM2 screens feel like places with objects, not generic panels over a soft illustration.

Concrete fix:
- Add a stronger middle-ground system: aqueduct/cistern route, seed archive drawers, solar collector mast, greenhouse arcade, shade canopy rigs, maintenance plaques, and visible civic symbols.
- Make the hero actions operate visible world objects: "Open seed ledger" should point to a ledger drawer/seed cabinet; "Tune observatory" should point to a lens or solar array.

Acceptance check:
- The first screen should contain at least three readable infrastructure objects whose purpose is visible without reading the paragraph.

### P1 - Component states are still generic fantasy states

Evidence:
- `css/solarpunk.css:100-108` changes nav hover/current to water borders/glow.
- `css/solarpunk.css:377-389` maps primary to brass gradient and secondary to dark water/canopy.
- `css/solarpunk.css:480-484` maps active seed marker to water tint over canopy.
- There are no explicit semantic state tokens for charged, irrigating, drought, shaded, growing, inspected, harvesting, blocked, or maintenance-required states.

Impact:
- Interactions do not teach the solarpunk system. Hover/current/active are still menu affordances with a new tint.
- This misses the chance to make ecology and civic infrastructure legible through state.

Concrete fix:
- Extend semantic token/state vocabulary:
  - `--state-charged`, `--state-irrigating`, `--state-growing`, `--state-shaded`, `--state-drought-risk`, `--state-maintenance`, `--state-inspected`.
  - Pair each with foreground/background/border/focus/halo tokens.
- Use these states on components: route badges, status rows, dials, archive markers, field cards, and warning seals.

Acceptance check:
- A reviewer should be able to tell whether a component is selected, charged, water-focused, successful/growing, or warning/drought-risk from more than hue alone.

### P1 - Mobile first screen hides the world and delays the primary action

Evidence:
- Mobile `/solarpunk.html` metrics: `.solar-hero-card` top 296, bottom 884; `.solar-actions` top 759, bottom 859; `.solar-status-panel` top 912, bottom 1183.
- The screenshot shows the first action begins near the bottom of the viewport and the second action is partially cut off below the fold.
- `css/solarpunk.css:996-1003` reduces the citadel to an opacity 0.42 backdrop behind the card, so the worldbuilding layer becomes visual noise rather than composition.

Impact:
- The first mobile screen spends too much height on header, plaque, oversized title, and dark panel. It does not expose the civic/ecological system or a complete action set.
- The mobile experience reinforces "theme skin" because the distinct scene layer is the first thing sacrificed.

Concrete fix:
- Mobile should use a tighter first-screen composition: small civic crest/header, compact title, one visible world-object strip, one primary command, one status/instrument cue.
- Move secondary action and long premise copy below the first fold; keep the solar/water object visible as a real control or scene anchor.

Acceptance check:
- At `390x844`, the full primary action, one supporting status cue, and one recognizable infrastructure object must be visible without scrolling.

### P2 - Typography keeps the old epic register when the flavour needs civic craft

Evidence:
- `css/solarpunk.css:330-339` sets hero type at `clamp(44px, 5.5vw, 78px)` with heavy display treatment.
- Mobile uses `clamp(40px, 14vw, 56px)` at `css/solarpunk.css:977-979`.
- The current H1 "Castle warmth, living light." is polished but generic; it does not name a civic system, place, or actionable object.

Impact:
- The page still feels mythic/ceremonial first, solarpunk second. Solarpunk should add optimistic utility, repair, public infrastructure, and ecological specificity.
- Oversized type competes with the very scene details that would make the flavour real.

Concrete fix:
- Use display type for named places/systems rather than abstract value lines: "Sunwell Guild Conservatory", "Civic Seed Ledger", "Canal Lens Observatory".
- Give components practical labels with crafted nouns: charge vane, shade charter, cistern gauge, seed vault, irrigation route.
- Reduce mobile display scale enough to reveal world/object evidence.

Acceptance check:
- Copy should identify specific objects and institutions. If headings can be reused unchanged on a generic fantasy landing page, they are too abstract.

### P2 - Reference and applied pages spread the skin before the rules are proven

Evidence:
- README says the same flavour layer is applied to the main sandbox, Fairy Journeys, and reference manual through `solarized-demo` classes.
- `css/solarpunk.css:674-935` applies broad skin overrides to index, Fairy Journeys, and reference.
- The reference screenshot shows a beige/olive wash and dark cards but not a stronger solarpunk system.

Impact:
- Broad application makes the flavour feel like a global recolor rather than a designed extension with proof.
- It also risks normalizing weak tokens before Pass 02 has clarified material/state semantics.

Concrete fix:
- Treat `solarpunk.html` as the proving ground first. Do not broaden the skin until the material/state/light rules have acceptance checks.
- In reference, document the solarpunk flavour as a spec module with ratios, material examples, state matrix, and pass/fail screenshots, not only by wearing the skin.

Acceptance check:
- Reference page should explain and demonstrate the solarpunk system. Applied pages should not be considered proof until a fixture or explicit pass promotes the pattern.

## What "stronger" should mean for Pass 02

Stronger does not mean more green, more gradients, or more decorative plant motifs. It means the flavour changes the system's physical assumptions while preserving HOMM2's object grammar.

Pass 02 should define:

- Palette ratios: light civic fields and sun-vellum must become the main visual mass; green is ecology/state; water is sensing/focus; brass is value/charge; dark remains inset depth.
- Light model: one directional daylight source, readable cast shadows, glass highlights, water reflection, and dark wells only where objects need depth.
- Material system: each material has a role, physical cue, state behavior, contrast pair, and component mapping.
- Scene/worldbuilding layer: greenhouse/cistern/solar/water infrastructure must be visible and operational, not backdrop decoration.
- Component states: introduce ecological/civic states instead of only hover/current/active with water borders.
- Typography/contrast: use specific civic-place/object names and reduce mobile display scale where it blocks world evidence.
- Mobile first-screen composition: preserve one complete primary action, one infrastructure object, and one state cue in the first viewport.

## Concrete Pass 02 input brief

### Principles

1. HOMM2 grammar stays: frames, bevels, plaques, inset fields, ranked surfaces, primary route clarity.
2. Solarpunk enters through function: sunlight, public works, restoration ecology, greenhouse craft, water sensing, solar hardware.
3. Green is not the theme. Green is a living-system/state signal.
4. Dark is not the default. Dark is an inset well, under-canopy shadow, or instrument housing.
5. Every new colour must have a material or state job.
6. Every scene object must either orient, operate, or indicate status.
7. Mobile first screen gets ruthless: action and system evidence beat long premise copy.

### Local files to use

- `docs/solarpunk-autonomous-run-ledger-2026-05-31.md`: run goal and guardrails.
- `docs/design-system-constitution-2026-05-15.md`: non-negotiable HOMM2 identity rules, especially world-embedded interface, material grammar, one loud thing, frame rank, responsive contracts.
- `docs/design-system-operator-index-2026-05-15.md`: proof status and applied-page limits.
- `solarpunk.html`: current flavour proof surface and Pass 02 target.
- `css/solarpunk.css`: current flavour tokens, applied skin, scene CSS, mobile rules.
- `css/tokens.css`: shared token contract that Pass 03 must respect.
- `css/components.css`: shared shapes, type scale, recipes, and component surfaces.
- Screenshot evidence in `tmp/visual-capture/solarpunk-pass-01/`.

### Unanswered questions

- Should Pass 02 define the solarpunk extension as a complete alternate theme, or as a narrower flavour module for selected page families?
- Is the primary setting a guild conservatory, civic seed archive, sunwell town hall, canal observatory, or another named institution?
- How literal should the infrastructure become in HTML/CSS before bitmap assets are needed?
- Should `solarized-demo` remain on index/reference/Fairy during iteration, or should it be temporarily demoted until `solarpunk.html` proves the stronger rules?
- Which state vocabulary matters most for the eventual applied site: restoration progress, journey route health, civic maintenance, ecology risk, or magical focus?

## Recovery checkpoint

This pass created the required artifact:

- `docs/solarpunk-pass-01-evidence-critique-2026-05-31.md`

Screenshots and metrics are under:

- `tmp/visual-capture/solarpunk-pass-01/`

Smoke was run with unique ports after an earlier capture process held the default capture port:

- `timeout 25s env HOMM2_SMOKE_PORT=4205 HOMM2_CDP_PORT=9345 node tools/regression-smoke.js`
- Result: `HOMM2 regression smoke OK`, exit 0.

No production files were edited in this pass. Only this evidence artifact was added.
