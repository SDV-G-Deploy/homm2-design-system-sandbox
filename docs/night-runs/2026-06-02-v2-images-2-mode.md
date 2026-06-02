# V2 Images 2.0 Mode - 2026-06-02

## Purpose

Formalize how the V2 system creates visual elements, pictures, bitmap details, and image-assisted UI material without weakening the HTML/CSS component system.

## Decision

V2 Images 2.0 is now documented inside docs/v2-asset-production-kit-2026-06-02.md.

The mode keeps the older Images 2.0 / Art Asset Layer idea, but makes it production-oriented:

- CSS owns layout, responsive behavior, states, typography, labels, and accessible text.
- HTML owns semantic content and copy.
- Images own bounded material, object, texture, sprite, or atmosphere slots.
- Every slot needs a name, owner, meaning, fallback, size budget, forbidden-content list, and verification gate.

## Old Pilot Link

The original pilot remains documented in assets/README.md and assets/generated/.

Those assets are historical evidence for:

- bounded generated image slots;
- CSS-only fallback;
- no readable text inside assets;
- route badge and frame-kit experiments.

For new V2 pages, the canonical contract is the V2 Images 2.0 section in the asset production kit.

## Current Canonical Slots

- threshold-ant-guild
- badge-product-map
- instrument-readiness-lens
- seal-archive-reading

## Verification

Docs-only pass.

- git diff --check

