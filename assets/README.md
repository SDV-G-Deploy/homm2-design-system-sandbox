# Art Asset Layer

This directory holds bounded image-assisted assets for the HOMM2 / Fairy design system.

Rules:

- CSS owns layout, states, copy, localization and responsive behavior.
- Generated imagery is allowed only in named component slots.
- Every asset slot must have a CSS-only fallback.
- No readable text inside generated assets.
- No one-off decorative images without an owning component.

Current pilot slots:

- `menu-frame-corner`
- `menu-frame-edge-x`
- `menu-frame-edge-y`
- `route-badge-sprite`

Current pilot source:

- Generated frame-kit crops live in `generated/frame-kit/`
- Generated route-badge sheet lives in `generated/route-badges/route-badge-sheet.png`
- They are intentionally optional. The menu shell remains usable without them.

Route badge contract:

- The sprite is consumed through `.route-badge` and variant classes such as `.route-badge--gate`.
- CSS owns the badge box, state ring, sizing and fallback background.
- The image contributes only the small heraldic object silhouette; labels stay in HTML.
