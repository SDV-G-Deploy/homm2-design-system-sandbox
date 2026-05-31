# HoMM2 x Solarpunk System Audit 0001

Date: 2026-05-31  
Mode: frontend-design-review / browser-first system audit

## Scope

Audited the current HoMM2 x Solarpunk design system as a system, not as one page.

Pages inspected:

- `index.html`
- `solarpunk.html`
- `fairy-journeys.html`
- `reference.html`

Evidence captured:

- `tmp/visual-capture/solarpunk-system-audit-0001/index/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/index/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/solarpunk/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/solarpunk/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/fairy/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/fairy/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/reference/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-system-audit-0001/reference/mobile-390x844.png`

Related docs read:

- `docs/solarpunk-pass-01-evidence-critique-2026-05-31.md`
- `docs/solarpunk-pass-04-deep-design-coherence-2026-05-31.md`
- `/root/.openclaw/workspace/docs/DESIGN-SYSTEM-HOMM2-SOLARPUNK-RESEARCH-2026-05-31.md`

## Executive Verdict

The system has a promising core direction, but it is not yet a mature design system. It currently has one strong proof direction and several applied pages that still behave like themed older pages.

The strongest page is `solarpunk.html`: it now has a real Sunwell / civic instrument-board idea, visible greenhouse infrastructure, sun-vellum, brass hardware, water/cistern state, and living status. The weakest system issue is cross-page coherence: `index.html` and `fairy-journeys.html` still carry the old nocturnal HoMM2 mood, while `reference.html` explains the blend but does not yet demonstrate a full component/state grammar.

The next useful work is not more global color tweaking. The next work is systemization:

1. define the Solarpunk material/state grammar;
2. create 2-3 canonical recipes that embody it;
3. add a small bounded asset layer;
4. convert applied pages only after the canonical patterns are proven.

## Skill Stack To Apply

### 1. `frontend-design-review`

Use for every substantial pass until the system stabilizes.

Purpose:

- browser-first screenshot critique;
- desktop/mobile comparison;
- P0/P1/P2 visual defects;
- anti-generic checks;
- conversion of critique into implementation tasks.

Best use:

- one audit per pass;
- screenshots before implementation;
- no broad redesign without evidence.

### 2. `diagram-maker`

Use next.

Purpose:

- produce a system map: tokens -> materials -> components -> recipes -> pages;
- show how `Fantasy Warm / Premium / Arcane / Solarpunk` relate;
- clarify where Solarpunk may change light/material/state and where HoMM2 grammar must remain fixed.

Deliverable:

- `docs/HOMM2_SOLARPUNK_SYSTEM_MAP_0001.html` or SVG.

### 3. `spike`

Use before changing all pages.

Purpose:

- test throwaway variants without destabilizing the sandbox;
- compare directions quickly.

Recommended spikes:

- `spikes/sunwell-menu.html`: HoMM2 menu as solar civic command board.
- `spikes/greenhouse-dossier.html`: archive/dossier as seed ledger and field manual.
- `spikes/canal-observatory.html`: arcane ritual as water/solar instrument threshold.

Acceptance:

- each spike gets a verdict: kill / keep / merge into system.

### 4. `imagegen`

Use only for bounded assets, not whole-page discovery.

Good asset slots:

- solar-brass carved frame corners;
- frame edge tiles;
- parchment/sun-vellum texture;
- greenhouse glass pane texture;
- route/state badges;
- civic seed crest;
- canal lens / water focus glyph;
- small solar mirror hardware.

Do not use for:

- navigation labels;
- readable UI text;
- full page backgrounds without layout fallback;
- solving hierarchy or information architecture.

### 5. `large-run-protocol`

Use when doing a full pass across all pages.

Recommended pass shape:

1. evidence;
2. spec;
3. spike;
4. implementation;
5. verification;
6. closeout report.

This prevents the system from becoming a pile of one-off improvements.

### 6. `skill-creator`

Use after one more good pass.

Create a project skill:

- `homm2-solarpunk-design-system`

It should contain:

- flavour rules;
- material roles;
- state vocabulary;
- palette ratios;
- asset policy;
- anti-patterns;
- acceptance checks;
- prompt templates for future visual passes.

## Findings

### P0 - Cross-page system coherence is weak

Evidence:

- `solarpunk.html` reads as sunlit civic/greenhouse UI.
- `index.html` still reads as a dark HoMM2 castle scene with solar-ish navigation.
- `fairy-journeys.html` still reads as dark fantasy dossier/quest UI, not Solarpunk.
- `reference.html` is cleaner after declutter, but visually it is a handbook skin rather than a canonical Solarpunk component proof.

Impact:

A user can click through the demo and see four related but not unified experiences. That makes the system feel raw because the rules are not portable yet.

Fix:

Promote `solarpunk.html` as the current canonical proof. Do not try to make every page equally Solarpunk immediately. Instead, create canonical Solarpunk variants of 2-3 recipes, then apply those recipes to existing pages.

Acceptance check:

A reviewer should be able to identify the same material/state grammar across at least three recipes without reading the CSS.

### P0 - The applied pages still use the old night-world model

Evidence:

- `index.html` first viewport is still dominated by dark brown/black, moon-like disc, heavy shadow, and cream-on-dark text.
- `fairy-journeys.html` remains a dark archive adventure page. It has HoMM2 strength, but not the Solarpunk shift.
- The broad `solarized-demo` layer changes navigation and accents, but it does not change the underlying world model.

Impact:

The system can still be interpreted as "old HoMM2 pages with a solar button skin". This is the exact risk Serg called out earlier with "just green gradients and green background".

Fix:

For applied pages, stop using broad skin as the main transformation. Instead, replace first-screen world assumptions:

- dark castle -> sunlit civic conservatory / canal gate / seed archive;
- moon glow -> directional daylight / solar mirror;
- magic blue -> water focus / lens state;
- forest green -> growth or shade state only;
- dark card -> vellum/brass instrument board.

Acceptance check:

Blur the text in screenshots. The page should still read as a regenerative solar/civic world, not a fantasy night scene.

### P1 - Material roles need to become formal component contracts

Evidence:

The current proof has good material names: sun-vellum, solar brass, water lens, canopy/growth. But only `solarpunk.html` uses them as a coherent scene. The reference page has no dedicated material matrix with component/state usage.

Impact:

Without formal contracts, future work will drift back into "green/blue/gold as taste" instead of material meaning.

Fix:

Create a material matrix:

| Material | Used for | Never used for | Physical cue | State cue |
|---|---|---|---|---|
| Sun-vellum | reading, ledger, record | decorative generic card backing | fibre, warm edge, ink | stable/readable |
| Solar brass | command, value, charge | all borders | bevel, hardware, dial rim | active/charged |
| Water lens | focus, inspect, sensing | generic hover glow | translucent edge, reflection | selected/irrigating |
| Canopy shade | environmental depth | default panel fill | cool shadow, leaf marker | shaded/growing |
| Warm shadow | inset/depth | main world color | cut, recess, cast shadow | disabled/locked |

Acceptance check:

Every new Solarpunk component must reference at least one material role and one state role.

### P1 - State vocabulary is promising but too narrow

Evidence:

`solarpunk.html` already has `state-charged`, `state-irrigating`, and `state-growing`. That is good. But this vocabulary is not yet system-wide and does not appear as a documented token/component contract.

Impact:

State is the fastest way to make Solarpunk feel like living infrastructure instead of decoration. Right now it is page-local.

Fix:

Add canonical state tokens/classes:

- `state-charged`
- `state-irrigating`
- `state-growing`
- `state-shaded`
- `state-drought-risk`
- `state-maintenance`
- `state-inspected`
- `state-restored`

Each state needs:

- color role;
- icon/badge idea;
- border/focus treatment;
- text label convention;
- example component.

Acceptance check:

Reference page should show a state matrix with all states on at least two component types: status row and route badge.

### P1 - Reference is clearer, but not yet a useful system manual

Evidence:

The declutter pass improved the first screen and navigation. However, the manual still starts with generic operator cards and long tables. It does not immediately show the Solarpunk material matrix, state matrix, palette ratios, or good/bad examples.

Impact:

A future agent or designer can read the page and still not know exactly how to build a new Solarpunk screen.

Fix:

Reframe `reference.html` into three tiers:

1. Quick build rules.
2. Solarpunk material/state matrix.
3. Full legacy HoMM2 manual below.

Add a first-class section near the top:

- "Solarpunk Rules"
- "Material Roles"
- "State Vocabulary"
- "Good / Bad Patterns"
- "Canonical Recipe Links"

Acceptance check:

A designer should answer these in under 30 seconds:

- what color ratio to use;
- when to use water blue;
- when green is allowed;
- what brass means;
- what components are canonical.

### P1 - The system needs bounded assets

Evidence:

Current greenhouse/citadel and infrastructure are CSS-native. They are clever and lightweight, but still abstract. Prior Pass 04 already notes that the highest-value next move is a small asset pass.

Impact:

CSS shapes are reaching their expressive ceiling. Without assets, HoMM2 materiality will stay approximate, and Solarpunk infrastructure will feel diagrammatic.

Fix:

Create a small optimized asset kit:

- 4 corner tiles: solar brass / reclaimed wood;
- 2 edge tiles;
- 1 sun-vellum texture;
- 1 greenhouse glass texture;
- 6 route/state badges;
- 1 civic seed crest;
- 1 water-lens glyph.

Use AVIF/WebP/PNG/SVG depending on asset type. Keep every asset optional with CSS fallback.

Acceptance check:

- no text in images;
- total first-viewport critical assets under a small budget;
- page works if images fail;
- screenshots show stronger materiality without layout shift.

### P2 - Typography tone should split between mythic and civic

Evidence:

The old pages use epic HoMM2 display scale well. `solarpunk.html` uses more specific civic nouns: "Civic seed ledger", "Instrument board", "Charge vane", "Cistern route". This is stronger.

Impact:

Solarpunk should not abandon fantasy, but it needs more civic craft language. Abstract epic lines make it slide back into generic fantasy.

Fix:

Use naming patterns:

- Place/institution: Sunwell Guild Conservatory, Canal Lens Observatory.
- Object: seed ledger, charge vane, cistern route, shade charter.
- Action: open seed vault, tune canal lens, restore route, inspect waterline.
- State: lit, irrigating, growing, shaded, drought risk.

Acceptance check:

If a headline could fit an old dark fantasy page unchanged, it is probably not specific enough for Solarpunk.

### P2 - Palette ratio rules are still not enforced

Evidence:

`solarpunk.html` now has better ratios: light/vellum dominates; brass supports; water/green are states. Applied pages do not follow that ratio yet.

Impact:

The system will keep drifting between night HoMM2 and light Solarpunk unless ratios are explicit.

Fix:

Set target ratios:

- 45-55% sun-vellum / plaster / daylight negative space;
- 15-20% solar brass / clay hardware;
- 10-15% warm shadow / inset depth;
- 8-12% water/glass focus;
- 5-8% leaf/canopy living state;
- 1-3% warning/bloom accents.

Acceptance check:

Every canonical recipe screenshot should roughly obey those ratios in the first viewport.

## Recommended Next Passes

### Pass A - System Map

Skill: `diagram-maker`

Deliverable:

- `docs/HOMM2_SOLARPUNK_SYSTEM_MAP_0001.html`

Content:

- flavour relationship;
- material stack;
- state vocabulary;
- recipe promotion flow;
- applied-page dependency map.

### Pass B - Reference Spec Upgrade

Skill: `frontend-design-review`

Deliverable:

- update `reference.html`;
- add Material Matrix;
- add State Matrix;
- add Good/Bad compact examples;
- add canonical `solarpunk.html` link block.

Acceptance:

- reference first two screens explain the new system without requiring deep scroll.

### Pass C - Asset Kit Brief

Skills: `imagegen` + asset optimization discipline

Deliverable:

- `docs/HOMM2_SOLARPUNK_ASSET_BRIEF_0001.md`
- optional generated assets under `assets/solarpunk/`

No generation before the brief is approved or at least clearly bounded.

### Pass D - Recipe Spikes

Skill: `spike`

Deliverables:

- `spikes/sunwell-menu.html`
- `spikes/greenhouse-dossier.html`
- `spikes/canal-observatory.html`

Acceptance:

- choose one to promote into canonical recipe.

### Pass E - Applied Page Conversion

Only after Passes A-D.

Convert:

- `index.html` from dark gate to Sunwell menu/gate;
- `fairy-journeys.html` from dark quest dossier to greenhouse/seed-route dossier;
- keep `reference.html` as handbook, not hero demo.

## Best Practices For This System

1. Solarpunk changes the world state, not just palette.
2. HoMM2 owns the object grammar: plaques, frames, bevels, ledgers, tactile commands.
3. Green is a living-state signal, not the default background.
4. Water blue is focus/sensing/irrigation, not generic magic glow.
5. Brass is hardware/value/charge, not every border.
6. Vellum is reading and civic record, not a beige card dump.
7. Dark shadow is inset depth, not the dominant world.
8. Every material must have a job.
9. Every state must be legible without relying on hue alone.
10. Assets must be bounded slots with CSS fallback.
11. Reference must teach rules, not merely wear the theme.
12. Applied pages should follow promoted recipes, not broad skin overrides.

## Immediate Recommendation

Do Pass A and Pass B next:

1. build the system map;
2. upgrade `reference.html` with material/state matrices.

That will make the system easier to improve without guessing, and it will give future implementation passes a stable target.

