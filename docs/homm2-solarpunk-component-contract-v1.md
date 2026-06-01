# HoMM2 Solarpunk Component Contract v1

Status: operational v1.1 draft
Scope: `reference.html`, `solarpunk.html`, `index.html`, `fairy-journeys.html`

## Purpose

Use this contract when extending or reviewing the HoMM2 x Solarpunk system.

Direction:

- HoMM2 owns form: frames, plaques, bevels, ledgers, threshold drama, object UI
- Solarpunk owns condition: solar civic infrastructure, water sensing, regenerative state, daylight utility

The goal is not "green fantasy". The goal is a **solar-civic fantasy interface** with portable material/state grammar.

## Material Roles

### Sun-vellum

Use for:

- reading fields
- seed ledgers
- civic records
- primary readable plaques

Must read as:

- bright
- fibrous or stamped
- archival
- stable

Do not use for:

- every card background
- decorative wash without a reading or record function

### Solar brass

Use for:

- primary command plates
- charge/value hardware
- dials
- selected route commitment
- crafted frame accents

Must read as:

- hardware
- charge
- value
- deliberate command emphasis

Do not use for:

- all borders
- generic luxury gold
- passive background glow

### Water lens

Use for:

- inspection
- focus
- canal/cistern state
- secondary action emphasis
- sensing marks

Must read as:

- lens
- reflection
- channel flow
- inspected/focused operation

Do not use for:

- generic magic aura
- default hover treatment everywhere

### Canopy / leaf

Use for:

- growth
- restoration
- shade
- cooling
- healthy living-system feedback

Must read as:

- ecological state
- living feedback
- environmental protection

Do not use for:

- default page fill
- broad green gradients as theme shorthand

### Warm shadow

Use for:

- inset wells
- underside depth
- inactive/maintenance support
- old-world structural contrast

Must read as:

- recess
- housing
- under-canopy depth
- support, not dominance

Do not use for:

- the whole first viewport
- main reading field
- a return to nocturnal castle mood

## Promoted Primitives

These primitives are promoted because they now appear in proof/reference and at least one applied surface.

### WorldFrame

Role:

- primary stage shell for first-screen world + ledger composition

HoMM2 anchor:

- framed threshold scene

Current evidence:

- `reference.html` proof board
- `solarpunk.html` hero world frame

### PrimaryLedger

Role:

- main readable plaque or record field inside the world frame

HoMM2 anchor:

- parchment/ledger object

Current evidence:

- `reference.html` mini composition
- `solarpunk.html` hero card
- `fairy-journeys.html` hero copy / dossier reading field

### CommandPlate

Role:

- primary and secondary command slab

HoMM2 anchor:

- tactile menu/command button

Current evidence:

- `reference.html` component proof
- `solarpunk.html` hero actions
- `fairy-journeys.html` hero actions

### StateRow

Role:

- compact living-system status line with material/state-specific indicator

HoMM2 anchor:

- object UI readout

Current evidence:

- `reference.html` component proof + state section
- `solarpunk.html` instrument board
- `fairy-journeys.html` route state ledger

### RouteBadge

Role:

- small route or state anchor beside copy/navigation

HoMM2 anchor:

- quest marker / route seal

Current evidence:

- `reference.html` recipe sampler
- `fairy-journeys.html` route/feed badges

### SupportRail

Role:

- compressed side summary, archive rail, or support facts that must not outrank the primary ledger

HoMM2 anchor:

- side rail / chapter rail

Current evidence:

- `reference.html` support examples
- `index.html` archive rail
- `fairy-journeys.html` hero rail + archive rail

### MaterialSwatch

Role:

- explicit teaching/demo primitive for material vocabulary

HoMM2 anchor:

- operator/reference documentation, not normal page chrome

Current evidence:

- `reference.html` component proof
- `solarpunk.html` archive/material section

### CivicInstrument

Role:

- small route/charge/water readout block that turns world nouns into usable UI

HoMM2 anchor:

- attached instrument/gauge housing

Current evidence:

- `solarpunk.html` instrument board
- `fairy-journeys.html` route board + state ledger

## Allowed States

Every state should be legible through form/material cue, not label alone.

### Charged

- Material cue: solar brass, dial mark, committed hardware
- Typical hosts: command plate, route badge, state row

### Irrigating

- Material cue: water lens, canal line, flow striping, lens ring
- Typical hosts: state row, route badge, instrument readout

### Growing

- Material cue: leaf mark, seed-bed tick, living green accent
- Typical hosts: state row, route badge, ledger status

### Shaded

- Material cue: canopy edge, cool cast, environmental protection
- Typical hosts: state token, support environmental row

### Drought risk

- Material cue: warm warning, constrained-water signal, urgent civic state
- Typical hosts: warning row, route badge, maintenance notice

### Maintenance

- Material cue: warm shadow, repair queue, inactive-but-recoverable housing
- Typical hosts: support rail, instrument status, archive note

### Inspected

- Material cue: water ring, selected lens, review/focus signal
- Typical hosts: route badge, state row, lens/instrument component

### Restored

- Material cue: vellum + leaf, recovered civic value, completed repair
- Typical hosts: status row, ledger summary, route closeout marker

## Applied Examples

### `solarpunk.html`

Use as:

- strongest proof page
- best current evidence for world frame + ledger + instrument board integration

Shows:

- WorldFrame
- PrimaryLedger
- CommandPlate
- StateRow
- MaterialSwatch
- CivicInstrument

### `reference.html`

Use as:

- teaching/proof page
- canonical source for material matrix, state vocabulary, and promoted primitive naming

Shows:

- component proof board
- material matrix
- state matrix
- recipe guidance

### `fairy-journeys.html`

Use as:

- applied proof for narrative route + dossier + state ledger

Shows:

- PrimaryLedger on a darker ceremonial shell
- CommandPlate
- RouteBadge
- SupportRail
- CivicInstrument in a route-board form

### `index.html`

Use as:

- transitional applied shell

Shows:

- support rail
- world frame usage
- route/state vocabulary

Current caution:

- still darker and less coherent than the proof page; do not treat it as the strongest material balance reference

## Mobile Contract

At `390x844` and `360x740`:

- no document-level horizontal overflow
- no clipped command labels
- no clipped state labels
- first viewport must contain:
- one clear title
- one primary command
- one route/state cue
- support rails must compress to summary before competing with the primary ledger
- metadata may compress, but should not become a wall of equal-weight ornate cards
- state rows may stack or reduce column count, but must remain readable and distinct
- dark support surfaces should compress before bright readable ledgers do

## Forbidden Shortcuts

- green gradients or green backgrounds as proof of Solarpunk
- replacing state semantics with copy alone
- using dark as the default first-screen field instead of inset depth
- generic gold glow without hardware/charge meaning
- route badges used as repetitive decoration with no state/navigation role
- equal-strength ornate support cards that compete with the main ledger
- writing new one-off page classes when an existing promoted primitive already fits
- treating `index.html`'s current darker balance as the target reference for all future pages

## Review Checklist

- Does the screen still read as HoMM2 if colors are muted?
- Does the screen still read as Solarpunk if the words are blurred?
- Are water/leaf/brass/shadow doing distinct jobs?
- Is the primary ledger obviously primary?
- Are support rails secondary on mobile?
- Are states visible in form/material, not just text?
- Did the change promote or reuse a real primitive instead of adding isolated decoration?
