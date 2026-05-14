# Art Asset Layer Pilots - 2026-05-14

Date: 2026-05-14

## Scope

This note records what was actually implemented after the Images 2.0 strategy pass.
It complements:

- `docs/deep-design-pass-2026-05-14.md`
- `docs/images-2-strategy-2026-05-14.md`
- `assets/README.md`

## Implemented Pilots

### Pilot 01 - Frame Corner / Edge Layer

Implemented:

- generated frame-corner crops
- horizontal and vertical edge tiles
- optional `.menu-art-layer` integration on the menu shell
- CSS-first fallback preserved underneath

Files:

- `assets/generated/frame-kit/`
- `css/components.css`
- `fairy-journeys.html`
- `reference.html`

Why it matters:

- proves that generated ornament can sit on top of the menu shell without owning layout
- keeps the heraldic fantasy direction while preserving responsive control in CSS

### Pilot 02 - Route Badge Sprite Layer

Implemented:

- bounded transparent sprite sheet: gate, compass, milestone, lantern
- reusable `.route-badge` slot with CSS-owned size, ring, background and state framing
- restrained integration into Fairy route index
- reference-page specimen so the slot is documented, not just mentioned

Files:

- `assets/generated/route-badges/route-badge-sheet.png`
- `css/components.css`
- `css/fairy-journeys.css`
- `css/reference.css`
- `fairy-journeys.html`
- `reference.html`

Why it matters:

- proves that small object-family art can reinforce route progression without turning the screen into an art collage
- keeps labels, layout and interaction logic in HTML/CSS

## Rules Confirmed By Both Pilots

- CSS owns layout, states, localization and responsive behavior.
- Generated imagery enters only through named slots.
- Every art slot needs a usable fallback.
- No readable text is baked into assets.
- Art should reinforce hierarchy, not compete with it.

## Verification Performed

- local render screenshots through headless Chromium
- desktop and mobile checks for Fairy page
- reference-page render check
- asset fetch verification through local server logs
- `git diff --check`

## Current Asset Slots

- `menu-frame-corner`
- `menu-frame-edge-x`
- `menu-frame-edge-y`
- `route-badge-sprite`

## Best Next Layer

Do not jump to large illustrations yet.

Best next candidate:

- compact object-icon sheet for command and archive objects

Only after that:

- subtle parchment or dark-wood material tiles

Still avoid:

- full-screen generated hero art
- baked text in images
- page-specific decorative floods without slot ownership
