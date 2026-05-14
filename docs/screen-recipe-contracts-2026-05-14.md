# HOMM2 Sandbox - Screen Recipe Contracts

Date: 2026-05-14

Purpose:

Make screen recipes the explicit middle layer between shared components and page-local composition.

The system split is now:

- `tokens.css` -> materials, type, spacing, shape, shadows, semantic roles
- `components.css` -> reusable UI objects and bounded art slots
- `screen recipes` -> which components may appear together, in what hierarchy, and what collapses first on mobile
- `page-local composition` -> backdrop, section order, story rhythm, exact proportions, copy sequence

This file is the textual contract. `reference.html` is the visual manual.

## Global recipe rules

1. Pick one primary recipe per screen.
2. Required layers define the hierarchy floor. Optional layers may support, but may not outrank, required layers.
3. Mobile collapse always removes tertiary layers before shrinking primary controls or reading fields.
4. Page-local CSS may arrange recipe parts, but may not invent a different dominance order.
5. Image assets may only appear through named bounded slots and remain atmospheric, not structural.

## MenuScreenRecipe

Purpose:
- Primary menu, chapter select, world-entry or route-entry screen with one dominant command mount.

Required components:
- `.menu-screen-shell`
- `.menu-frame-shell`
- `.menu-center-mount`
- `.command-slab`

Optional layers:
- `.menu-side-rail`
- `.menu-save-slot`
- `.menu-route-index`
- `.menu-art-layer`

Hierarchy order:
1. Title plus command slab
2. Immediate state close to the slab
3. Support rails
4. Tertiary route index
5. Background-only art layer

Mobile collapse order:
1. Route index demotes below the fold or becomes a shorter list
2. Rails compress into summaries
3. Save slot condenses into one compact strip
4. Primary slab remains visible and readable

Forbidden combinations / misuse:
- Do not combine with a full dossier reading field in the same first-screen shell
- Do not run multiple equal-weight command slabs
- Do not let support rails outrank the center mount by size, glow or copy density

## DossierReadingRecipe

Purpose:
- Reading-first archive, record or comparison screen.

Required components:
- `.parchment-object`
- `.archive-rail` or equivalent reading spine

Optional layers:
- `.note-card`
- `.dossier-ledger-strip`
- quiet utility controls outside the reading field

Hierarchy order:
1. Main parchment reading field
2. Archive rail / chapter spine
3. Compact metadata
4. Secondary notes

Mobile collapse order:
1. Notes drop below the reading field
2. Metadata compresses before prose measure does
3. Decorative side matter yields before the main reading column does

Forbidden combinations / misuse:
- Do not replace the reading field with card mosaics
- Do not place a dominant ceremonial CTA above the dossier opening
- Do not flank the parchment with equal-strength rails on both sides

## RitualThresholdRecipe

Purpose:
- Consequence-first threshold for commitment, initiation, warning or final choice.

Required components:
- `.ritual-panel`
- one `.btn-ceremonial`
- one quiet escape action

Optional layers:
- `.ritual-protocol`
- short consequence ledger
- restrained mana or wax cue

Hierarchy order:
1. Threshold title and consequence frame
2. Ceremonial action
3. Quiet escape
4. Supporting consequence cues

Mobile collapse order:
1. Decorative aura reduces first
2. Protocol stacks below the ritual body
3. Primary and escape actions keep full legibility and tap size

Forbidden combinations / misuse:
- Do not present more than one ceremonial action
- Do not combine route-board density with ritual threshold framing
- Do not use mana as general section wallpaper

## RouteBoardRecipe

Purpose:
- Stateful route progression board for current, locked, visited and next paths.

Required components:
- `.menu-route-index` or equivalent board list
- `.route-badge` state marker per path item

Optional layers:
- compact lore annotation
- short progress strip
- quiet filter or sort control

Hierarchy order:
1. Current and next route state
2. Badge state
3. Route label and outcome hint
4. Lore annotations or filters

Mobile collapse order:
1. Annotations shorten first
2. Filters move below the primary list
3. Badge state and current path remain visible

Forbidden combinations / misuse:
- Do not frame every row like a ritual threshold
- Do not let lore outweigh state labels
- Do not embed multiple competing primary CTAs inside the board itself

## What stays page-local

Still page-local by design:

- scene backdrop and atmospheric choreography
- exact stage height and grid proportions
- copy wording, story order and section sequencing
- local density tuning after recipe order is already respected

Must not stay page-local:

- whether a route board outranks a command slab
- whether a ritual screen has one or many ceremonial actions
- whether mobile collapses rails before the primary task
- whether art becomes structural instead of bounded support

## Immediate next pass after recipes

Recipe contracts solve the missing middle layer, but they do not yet fully protect the system.

The next pass should be:

- `Responsive Contract Pass`

That pass should turn recipe-level collapse rules into stricter acceptance checks and, where useful, shared responsive helpers.
