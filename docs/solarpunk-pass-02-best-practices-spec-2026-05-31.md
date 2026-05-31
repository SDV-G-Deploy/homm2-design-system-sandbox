# HOMM2 x Solarpunk Pass 02 - Best Practices + Visual Spec

Date: 2026-05-31

## Goal

Move the current HOMM2 x Solarpunk layer from recolour/skin into a real flavour system: a HOMM2 object interface whose world state is sunlight, repair ecology, civic infrastructure, water sensing, greenhouse craft, and solar hardware.

## External Design Findings

Solarpunk design practice is not just green colour. The repeatable principles are:

- visible renewable infrastructure: solar collectors, water systems, shade rigs, repairable public hardware;
- biophilic integration: plant life as function and habitat, not generic ornament;
- daylight logic: a clear sun source, diffused glass light, shadows, shade, and reflection;
- craft plus technology: brass, wood, glass, vellum, patina, hand-repairable mechanisms;
- Art Nouveau influence: organic curves, linework, panels, floral/leaf motifs, but restrained enough to keep UI readable;
- community/public scale: conservatory, guild, seed archive, canal lens, cistern route, field ledger;
- repair/restoration ecology: systems should look maintained, measured, routed, and restored.

Fantasy UI best practice also matters:

- preserve material hierarchy: frames, plaques, parchment, wood/metal/stone, bevels;
- use colour as meaning and hierarchy, not wallpaper;
- keep strong contrast for buttons, reading surfaces, and state;
- tactile UI works when surfaces have thickness, inner highlights, and cast shadows;
- decorative richness must not reduce comprehension.

## Diagnosis of Current Version

The second deployed pass is materially better than the first green skin, but screenshots still show these issues:

- the hero world layer is too pale; infrastructure reads as a soft backdrop, not a place;
- mobile sacrifices the world layer behind the card and pushes status below the first viewport;
- green is reduced, but water/glass/brass/state cues are still too quiet;
- the scene does not yet have enough labelled civic objects to make the system self-explanatory;
- the reference/applied pages wear the flavour before the solarpunk rules are fully proven.

## Visual Direction

Name: **Sunwell Civic Fantasy**

One-line direction: HOMM2's framed, tactile, old-game UI becomes a sunlit civic conservatory: seed ledgers, canal lenses, brass solar instruments, greenhouse glass, repair plaques, water routing, and living-state readouts.

## Palette Ratios

Use ratios before picking colours:

- 45-55% sun-vellum / aged daylight parchment: reading surfaces, main panels, public documents;
- 15-20% warm shadow / timber: depth, header, instrument housings, inset wells;
- 10-15% solar brass: value, charge, primary commands, plaques, small highlight bars;
- 8-12% water glass: focus, sensing, active/selected states, translucent panels;
- 5-8% living green: growth, canopy, ecological status only;
- 1-3% drought crimson / clay: warnings, risk, emergency state.

Green must not be the page colour. It is a living-system signal.

## Material Roles

| Material | Role | Visible Cue | Component Mapping |
| --- | --- | --- | --- |
| Sun-vellum | civic reading/planning | parchment fibres, warm paper, ink contrast | hero card, archive card, long text |
| Solar brass | charge/value/action | bevel, shine, patina, cast shadow | primary commands, plaques, charge meters |
| Water glass | focus/sensing | translucent cyan, caustic edge, lens border | active nav, secondary command, status panel |
| Canopy shade | depth/cooling | deep green-black, under-canopy shadow | header, inset shells, instrument wells |
| Timber/clay | HoMM2 structure | warm thickness, base rails, grounded shadows | bottom bands, frames, supports |
| Living leaf | ecological state | small markers, route bars, growth dots | growing state, canopy status |

## State Model

States should be semantic and physical:

- charged: brass border + sun highlight + warm shadow;
- irrigating: water border + horizontal flow band;
- growing: leaf marker + small living pulse, never full green surface;
- inspected/focused: water lens outline + blue focus halo;
- shaded/stable: canopy dark well + low-contrast green marker;
- drought-risk: clay/crimson seal + broken water line.

## Composition Rules

Desktop:

- first screen must show a readable world object layer, not only cards;
- hero copy may overlap the world, but should not erase infrastructure;
- status panel should feel like an instrument attached to the scene;
- primary command should look physically connected to seed vault / ledger.

Mobile:

- first viewport must include one recognizable infrastructure object, one complete primary command, and one status/instrument cue;
- reduce long premise copy before sacrificing world evidence;
- do not let the scene become a faint background texture.

## Pass 03 Implementation Tasks

1. Strengthen hero infrastructure contrast and add small object labels/callouts.
2. Add more physical linework: aqueduct flow, solar mirror masts, seed drawers, glass ribs, brass edges.
3. Tighten mobile first viewport: smaller title/lead, compact buttons, visible status top.
4. Make water/brass/leaf states more distinct by border, rail, fill, and shadow, not hue only.
5. Keep applied pages stable; focus this pass primarily on \`solarpunk.html\` and shared solarpunk CSS.

## Acceptance

- \`390x844\`: primary action, a visible infrastructure object, and status panel heading/top cue are visible without scrolling.
- Desktop: at least three visible infrastructure objects can be identified without reading body copy.
- Green is not the dominant background mass.
- \`node tools/regression-smoke.js\` passes.
- Visual capture reports zero horizontal overflow offenders.
