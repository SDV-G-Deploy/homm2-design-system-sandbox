# HOMM2 x Solarpunk Pass 03 - Implementation + Verification

Date: 2026-05-31

## Scope

Applied the Pass 02 direction to the solarpunk proof surface with bounded changes to:

- solarpunk.html
- css/solarpunk.css

The applied demo skin for index/Fairy/reference was left structurally stable; this pass focused on proving the stronger visual language on solarpunk.html first.

## Changes

- Added visible civic object labels to the hero scene:
  - Seed vault
  - Canal lens
  - Solar masts
- Strengthened the greenhouse/citadel layer:
  - more visible glass ribs;
  - stronger aqueduct flow;
  - more grounded seed vault drawers;
  - base/rail linework behind the scene;
  - reduced green canopy dominance.
- Improved state rendering:
  - charged row gets brass/solar rail treatment;
  - irrigating row gets water-flow striping;
  - growing row gets a leaf signal without turning the whole surface green.
- Tightened mobile first viewport:
  - smaller title scale;
  - clamped long premise copy;
  - compact two-button action row;
  - status panel top now appears in the first viewport.

## Verification

Command:

\`\`\`bash
node tools/regression-smoke.js
\`\`\`

Result:

- HOMM2 regression smoke OK
- 7 targets
- 3 viewports
- overflow = 0

Capture:

\`\`\`bash
node tools/visual-capture.js --target /solarpunk.html --out tmp/visual-capture/solarpunk-pass-03 --selector .solar-world-frame --selector .solar-hero-card --selector .solar-status-panel --selector .solar-citadel --selector .solar-actions
\`\`\`

Result:

- desktop 1440x900: overflow offenders 0
- mobile 390x844: overflow offenders 0
- narrow 360x740: overflow offenders 0

Screenshots:

- tmp/visual-capture/solarpunk-pass-03/desktop-1440x900.png
- tmp/visual-capture/solarpunk-pass-03/mobile-390x844.png
- tmp/visual-capture/solarpunk-pass-03/narrow-360x740.png

## Acceptance Notes

- Desktop now contains at least three labelled infrastructure objects without relying on body copy.
- Mobile first viewport contains:
  - recognisable infrastructure scene;
  - complete primary/secondary action row;
  - visible status/instrument panel top.
- Green is no longer the dominant visual mass; it is mostly a living-system/status signal.

## Remaining Design Risk

This is still CSS-native art, not a generated/painterly asset pass. A later asset pass could improve the HoMM2 feeling further with bounded frame/corner/greenhouse texture assets, but that should be done from a separate art-direction brief and asset budget.
