# V2 Asset Production Kit - 2026-06-02

This document defines how to produce non-HTML visual assets for the HoMM2 x Solarpunk V2 system.

Use it together with:

- docs/v2-starter-kit-2026-06-01.md
- docs/v2-acceptance-2026-06-01.md
- docs/v2-css-boundary-2026-06-01.md

## Purpose

V2 needs visual assets, but they must behave like a controlled system layer rather than decorative one-off images.

Assets should strengthen the target phrase:

**solar-civic fantasy interface**

HoMM2 owns the form: framed surfaces, plaques, bevels, ledgers, object UI, threshold drama, readable parchment, and material weight.

Solarpunk owns the condition: civic infrastructure, solar hardware, water sensing, restoration state, living feedback, and daylight systems.

Do not use generated images to compensate for weak page structure, unclear component grammar, or poor mobile layout.

## V2 Images 2.0 Mode

Images 2.0 is the official V2 workflow for adding bitmap or image-assisted visual elements without turning pages into static illustrations.

It continues the older Art Asset Layer pilot in assets/README.md and assets/generated/, but V2 makes the contract stricter:

- CSS owns layout, responsive behavior, states, typography, labels, and accessible text.
- HTML owns semantic content and copy.
- Images own only bounded material, object, texture, sprite, or atmosphere slots.
- Every image slot must be named before production starts.
- Every image slot must have a fallback: SVG fallback, CSS-only fallback, or a documented acceptable blank state.
- No readable text, UI labels, buttons, prices, metrics, or navigation may live inside generated images.
- Generated imagery may strengthen HoMM2 material presence and Solarpunk condition, but must not replace component grammar.

Use Images 2.0 when one of these is true:

- the page needs a real object, seal, scene detail, texture, or sprite that CSS/SVG alone would make too sterile;
- the asset has a clear component or recipe slot;
- the asset can be removed without breaking the page's layout or meaning;
- the image improves first-screen identity, material credibility, or state readability.

Do not use Images 2.0 for:

- page layout;
- text rendering;
- buttons or interactive states;
- decorative filler;
- generic green scenery;
- one-off art that has no owning component or recipe.

### Images 2.0 Production Shape

Each image pass should record these fields before production:

~~~txt
Slot name: [role-subject]
Owning surface: [page/component/recipe]
Asset type: [SVG source / generated PNG / WebP / sprite / texture]
Meaning: [state, route, object, threshold, reading, inspection, restoration]
Fallback: [CSS-only / SVG / blank acceptable / existing component]
Size budget: [target KB and dimensions]
Forbidden content: text, labels, buttons, fake UI, unrelated decoration
Verification: smoke + changed-page visual capture + mobile crop check
~~~

### Canonical V2 Image Slots

Current canonical V2 slots:

- threshold-ant-guild - ANT School first-screen threshold motif.
- badge-product-map - compact product-map route badge.
- instrument-readiness-lens - water-lens readiness instrument.
- seal-archive-reading - dossier/article archive-reading seal, shipped as SVG source plus optimized WebP.
- seal-build-brief - work-surface brief seal, shipped as SVG source plus optimized WebP.
- texture-brief-grid - quiet repeatable brief-output texture, shipped as SVG source plus optimized WebP tile.

Legacy pilot slots from the first Images 2.0 pass remain valid historical evidence, but are not the preferred starting point for new V2 pages:

- menu-frame-corner
- menu-frame-edge-x
- menu-frame-edge-y
- route-badge-sprite

For new work, prefer the V2 slot contract in this document.

## Current Asset Baseline

Existing V2 assets:

- assets/v2/solar-civic-gate.svg - threshold, hero, civic entry, first-screen anchor.
- assets/v2/solar-badge.svg - route badge, status seal, compact identity mark.
- assets/v2/water-lens.svg - inspection, focus, sensing, water-state instrument.
- assets/v2/vellum-grain.svg - readable ledger texture.

These are the first canonical roles. Future assets should extend these roles before inventing unrelated motifs.

## Asset Roles

### 1. Threshold Assets

Use for first-screen identity, page entry, campaign landing, product launch, or venue gateway.

Allowed forms:

- civic gate
- solar arch
- canal threshold
- greenhouse facade
- guild hall entry
- brass-and-vellum signboard

Preferred formats:

- SVG for crisp ornament or flat symbolic structure.
- WebP or PNG for painterly hero detail.

Avoid:

- full-bleed atmospheric scenery that hides the interface purpose;
- dark blurred backgrounds;
- generic fantasy forest or plant imagery;
- purely green gradients.

### 2. Surface Textures

Use for ledgers, records, panels, and quiet material support.

Allowed forms:

- vellum grain
- warm parchment fiber
- aged daylight paper
- subtle brass edge noise
- faint glass/water refraction

Preferred formats:

- SVG or small PNG/WebP tile.
- Repeatable or bounded background asset.

Rules:

- texture must not reduce contrast;
- texture must remain quiet behind Russian and English copy;
- texture should be removable without breaking layout.

### 3. Object UI Motifs

Use for compact UI identity, state rows, route cards, badges, meters, and command areas.

Allowed forms:

- route seal
- guild badge
- water-lens dial
- solar charge mark
- canal gauge
- restoration marker
- brass fastener
- carved corner detail

Preferred formats:

- SVG for icons, seals, badges, and UI marks.
- Transparent PNG/WebP only when painterly material is required.

Rules:

- motif must map to a real state, action, route, or material role;
- no standalone ornament if it does not clarify hierarchy or state;
- object should still read at 24px, 48px, and 96px when used as UI support.

### 4. Instrument Assets

Use for inspection modules, dashboards, metrics, service status, and operational boards.

Allowed forms:

- water lens
- solar charge dial
- irrigation gauge
- readiness meter
- civic signal instrument
- maintenance compass

Preferred formats:

- SVG for scalable instruments.
- PNG/WebP only for rich close-up hero instruments.

Rules:

- instrument visuals must pair with real metric/state content;
- command controls must stay separate from read-only instrument visuals;
- avoid gauges that imply fake precision without data.

### 5. Recipe-Specific Hero Details

Use only after the page recipe is already readable without the asset.

Candidate recipes:

- Product Landing: hero badge, threshold asset, launch seal.
- Service Booking: service object, care route marker, appointment seal.
- Operational Board: instrument cluster, queue status seal.
- Dossier / Article: reading seal, archive mark, vellum edge.
- ANT School / Education: guild route seal, product-map desk, builder commune threshold.

Preferred formats:

- WebP for rich bitmap hero detail.
- PNG with transparency for object cutouts.
- SVG for symbolic route marks.

Rules:

- asset should support the page's first-screen purpose;
- asset should not become the whole design;
- crop must be tested on desktop, 390px mobile, and 360px narrow mobile.

## Style Rules

### Material Palette

Every asset should clearly belong to one or more V2 material roles:

| Role | Asset meaning |
| --- | --- |
| Sun vellum | reading, record, rules, route notes |
| Solar brass | command, charge, hardware, value, commitment |
| Water lens | focus, inspection, sensing, selected state |
| Canopy / leaf | restoration, living feedback, shade, growth state |
| Warm shadow | depth, inactive state, old-world contrast |
| Glass / canal light | civic flow, reflection, sensing, transparent systems |

Green is not a sufficient Solarpunk signal. It must be tied to restoration, canopy, health, or living feedback.

### Shape Language

Prefer:

- framed rectangles;
- carved corners;
- inset plaques;
- circular seals;
- brass brackets;
- lens circles;
- ledger strips;
- restrained HoMM2 object silhouettes.

Avoid:

- floating gradient blobs;
- generic SaaS waves;
- soft bokeh backgrounds;
- borderless illustration cards;
- decorative assets that ignore the V2 frame system.

### Rendering Mood

Allowed:

- daylight fantasy;
- hand-built civic hardware;
- warm old-world material;
- crisp UI symbol with subtle material depth;
- readable, non-photoreal texture.

Avoid:

- cyberpunk neon;
- dark moody fantasy;
- flat eco startup illustration;
- photoreal stock garden imagery;
- over-detailed art that competes with text.

## Prompt Templates

Use these prompts as starting points, then adapt to the page topic.

### SVG / Symbolic Asset Brief

~~~txt
Create a compact UI asset for a solar-civic fantasy interface inspired by HoMM2 material grammar.

Asset role: [threshold / badge / water lens / route seal / instrument / vellum texture]
Use case: [page and component]
Meaning: [state, route, command, inspection, reading, restoration]
Visual form: framed plaque, brass hardware, carved corners, lens geometry, readable object UI.
Materials: sun vellum, solar brass, water glass, warm shadow, restrained canopy green.
Avoid: generic eco icon, green gradient, modern SaaS illustration, dark neon, soft blobs.
Output target: SVG, transparent background where appropriate, readable at [24/48/96] px.
~~~

### Bitmap / Hero Detail Brief

~~~txt
Create a production-ready bitmap detail for a solar-civic fantasy interface.

Asset role: [hero threshold / service object / guild desk / instrument cluster]
Page recipe: [product landing / service booking / operational board / dossier]
Composition: bounded object or scene detail, not full UI layout.
Materials: aged daylight vellum, solar brass, water-glass lens, carved fantasy frame, warm shadow.
Mood: optimistic civic fantasy, practical hand-built infrastructure, readable and material.
Avoid: text, UI labels, generic green scenery, blurry background, photoreal stock style, cyberpunk neon.
Output target: transparent PNG or WebP, [dimensions], safe crop for desktop and mobile.
~~~

### Texture Brief

~~~txt
Create a subtle repeatable texture for a HoMM2 x Solarpunk UI surface.

Surface role: [sun vellum / brass edge / water lens / glass overlay]
Use case: background behind readable text or framed UI surface.
Contrast requirement: must stay quiet and preserve text readability.
Pattern: subtle material grain, no visible seams, no dominant illustration.
Output target: small tile or bounded image, optimized PNG/WebP/SVG.
~~~

## Format Contract

### SVG

Use for:

- UI marks;
- seals;
- badges;
- ornament;
- icons;
- scalable instruments;
- simple repeatable textures.

Requirements:

- no embedded raster payload unless there is a clear reason;
- no text as outlines for UI labels;
- viewBox must be present;
- file should work on light and dark V2 surfaces or have documented intended surface.

### PNG

Use for:

- transparent object cutouts;
- painterly details that need alpha;
- assets where WebP alpha support is not enough for the target environment.

Requirements:

- transparent background when used as an object layer;
- provide @2x if the asset is meant to be sharp on high-density displays;
- optimize before committing.

### WebP

Use for:

- rich hero/detail bitmap assets;
- compressed textures;
- non-critical illustrative details.

Requirements:

- keep source/crop notes in the asset backlog or page doc;
- test mobile crop;
- avoid large files when CSS/SVG can do the job.

## Naming Contract

Use lower-case, role-first names:

~~~txt
assets/v2/[role]-[subject].[ext]
assets/v2/[role]-[subject]@2x.[ext]
assets/v2/[role]-[subject]-mobile.[ext]
~~~

Examples:

~~~txt
assets/v2/threshold-ant-guild.webp
assets/v2/badge-product-map.svg
assets/v2/instrument-water-readiness.svg
assets/v2/texture-vellum-fiber.webp
assets/v2/seal-service-route.svg
~~~

Avoid names based on mood only, such as green-bg, nice-hero, magic-forest, or solar-image.

## Optimization Gate

Before committing bitmap assets:

- remove unused variants;
- compress PNG/WebP;
- keep hero/detail assets intentionally bounded;
- prefer SVG for small UI motifs;
- verify image dimensions match the component slot;
- document any asset over 250 KB with a reason.

Suggested checks:

~~~sh
find assets/v2 -maxdepth 1 -type f -printf '%k KB %p\n' | sort -nr
~~~

If image tooling is available, prefer:

~~~sh
cwebp input.png -q 82 -o output.webp
oxipng -o 4 input.png
~~~

Do not block a pass if the tooling is unavailable, but record the missing optimization step.

## Visual QA Gate

Run these checks when adding or changing assets on a page:

- node tools/regression-smoke.js
- node tools/visual-capture.js on every changed V2 page
- desktop screenshot
- 390px mobile screenshot
- 360px narrow mobile screenshot
- no horizontal overflow
- no clipped labels
- first screen still communicates the page purpose
- asset does not reduce text contrast
- asset does not replace HoMM2 frames, ledgers, or component structure
- Solarpunk reads through infrastructure/state/material, not only color

## First Asset Backlog

### Priority 1

- threshold-ant-guild - ANT School / builder commune threshold asset.
- badge-product-map - route/status seal for product-map based pages.
- instrument-readiness-lens - water-lens metric motif for service and control pages.
- texture-vellum-fiber - richer but still readable vellum tile for ledgers.

Current status: `threshold-ant-guild.svg`, `badge-product-map.svg`, and `instrument-readiness-lens.svg` are implemented as the first SVG asset pass and applied in `sites/ant-school-landing-v2/index.html`.

`seal-archive-reading.svg` and optimized `seal-archive-reading.webp` are implemented as the first SVG-to-WebP production asset pass and applied in `sites/product-map-field-note/index.html`.

### Priority 2

- seal-service-route - compact booking/service route seal.
- badge-agent-brief - build brief or agent-ready state mark.
- instrument-canal-gauge - civic flow / queue / water state instrument.
- corner-solar-brass - carved corner/fastener ornament for framed surfaces.

### Priority 3

- threshold-canopy-clinic - service booking hero detail for local care/repair pages.
- archive-reading-seal - dossier/article page seal. Implemented as `seal-archive-reading.svg` + `seal-archive-reading.webp`.
- control-board-dial - operational board instrument detail.
- guild-desk-object - education/workshop object cutout for ANT-like pages.

## Integration Rule

Add assets only when they serve one of these outcomes:

- clearer page identity;
- stronger first-screen hierarchy;
- more portable component grammar;
- better state readability;
- stronger HoMM2 material presence;
- clearer solar-civic Solarpunk condition.

If the asset only makes the page feel more decorated, skip it.
