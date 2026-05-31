# Solarpunk Deep Design Coherence Pass 04

Date: 2026-05-31

## Current Visual Diagnosis

The Pass 03 page is much closer to the target than the first critique, but the first viewport still reads as assembled parts: a pale greenhouse scene, a large vellum hero card, separate water-tinted status panel, three small state chips, and leftover infrastructure labels. The pieces are individually plausible, but they do not yet share one dominant material hierarchy.

Screenshot evidence from `tmp/visual-capture/solarpunk-pass-04-before/`:

- Desktop `desktop-1440x900.png`: the hero card and status panel are visually separate floating cards. The status panel has a cool water-glass identity while the hero card is sun-vellum, so the right side reads like a second component family rather than an attached instrument board.
- Mobile `mobile-390x844.png` and `narrow-360x740.png`: the citadel becomes a backdrop behind the card, the three chips compete with the title, and the status panel begins below the action row as a separate block. Usability is acceptable, but the first screen still stacks motifs instead of presenting one object.
- Code evidence: `.solar-system-strip span`, `.infra-label`, `.solar-status-panel`, and the citadel pieces all introduce distinct visual treatments. Water appears as a broad panel tint in `.solar-status-panel`, while green and water are also present in chips, scene, nav, and observatory readouts.

## Direction

Name: **Sunwell Instrument Board**

One-line direction: the hero is a single HOMM2 civic instrument board: sun-vellum ledger on the left, brass command rail, attached readout block on the right, and a restrained greenhouse relief behind it.

## Coherence Rules

1. Brass, vellum, and warm shadow dominate every first-screen component; water appears only as focus lines and flow marks.
2. Status is grouped as one attached instrument cluster, not scattered chips plus independent rows.
3. The scene is a low-relief civic setting, not a collection of labelled badges; object shapes carry the meaning.
4. Green remains a small living-state mark only, never a broad fill or background mass.
5. Repeated bevels, inner rules, and cast shadows should make buttons, plaques, cards, and readouts feel made from the same kit.

## Remove Or Suppress

- Suppress remaining infrastructure labels in the hero scene; they compete with the object grammar.
- Reduce the three hero chips to fewer board readouts with the same brass/vellum material logic.
- Reduce broad water washes on the status panel.
- Soften independent colour identities in scene pieces so the world reads as one brass/vellum relief with small water/green accents.

## Keep

- HOMM2 frame language: clipped panels, plaques, bevels, inner strokes, tactile buttons.
- The specific civic nouns: seed ledger, charge vane, cistern route, seed beds.
- A recognizable greenhouse/citadel relief in the first viewport.
- Full mobile action row and no horizontal overflow.

## Implementation Plan

1. Adjust `solarpunk.html` text/structure only where needed: reduce hero chips and rename the status cluster as an attached board.
2. Tune `css/solarpunk.css` first-screen palette toward vellum/brass/warm shadow dominance.
3. Restyle hero card and status panel as one material family with aligned board-like treatment.
4. Suppress visible infra labels and simplify scene contrast to a unified low-relief setting.
5. Re-run smoke, visual capture, screenshot inspection, and `git diff --check`.

## Acceptance Checks

- Desktop first viewport reads as one instrument-board composition, not separate hero/status/scene badges.
- Mobile and narrow captures keep both action buttons visible and show the status panel heading/top cue without horizontal overflow.
- Green is limited to state marks; water is a secondary focus accent.
- `node tools/regression-smoke.js` passes.
- `node tools/visual-capture.js --target /solarpunk.html` reports zero horizontal overflow offenders for desktop, mobile, and narrow.
- `git diff --check` passes.

## Implementation Notes

Implemented a bounded first-screen coherence pass:

- Reduced hero readout chips from three to two and made them match the instrument-board material logic.
- Renamed the status block to `Instrument board` and restyled it as sun-vellum/brass hardware instead of a separate water-glass card.
- Suppressed visible infrastructure labels so the greenhouse relief, aqueduct, seed drawers, and masts carry the scene meaning without badge noise.
- Muted broad water/green tints in the hero scene; water now appears mainly as the cistern/channel signal and green as the seed-bed state mark.
- Kept applied pages stable by touching only `solarpunk.html`, `css/solarpunk.css`, and this pass report.

## Verification Results

`node tools/regression-smoke.js`

- Exit code: 0
- Result: `HOMM2 regression smoke OK`
- Checked: 7 targets across 3 viewports
- Solarpunk rows:
  - desktop: overflow 0, primaryTop 280
  - mobile: overflow 0, primaryTop 306
  - narrow: overflow 0, primaryTop 306

`node tools/visual-capture.js --target /solarpunk.html --out tmp/visual-capture/solarpunk-pass-04 --selector .solar-world-frame --selector .solar-hero-card --selector .solar-status-panel --selector .solar-citadel --selector .solar-actions`

- desktop 1440x900: overflow offenders 0
- mobile 390x844: overflow offenders 0
- narrow 360x740: overflow offenders 0

Screenshots:

- `tmp/visual-capture/solarpunk-pass-04/desktop-1440x900.png`
- `tmp/visual-capture/solarpunk-pass-04/mobile-390x844.png`
- `tmp/visual-capture/solarpunk-pass-04/narrow-360x740.png`

`git diff --check`

- Exit code: 0
- Result: no whitespace errors

## Remaining Risk

The CSS-native greenhouse relief is more coherent after this pass, but it is still abstract. If another pass is warranted, the highest-value next move is not more CSS motifs; it is a small asset pass for one painterly HOMM2-style greenhouse/instrument-board background with the current reduced palette.
