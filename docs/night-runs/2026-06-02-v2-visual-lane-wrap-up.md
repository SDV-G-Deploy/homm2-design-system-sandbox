# V2 Visual Lane Wrap-Up - 2026-06-02

## Verdict

V2 Images 2.0 is now a working visual production lane for the recipe kit.

It is not a general image library yet. It is a controlled set of named slots with source assets, optimized outputs, fallback rules, docs, smoke, and screenshot verification.

## Proven Visual Types

| Type | Slot | Files | Applied proof |
| --- | --- | --- | --- |
| Seal | `seal-build-brief` | `assets/v2/seal-build-brief.svg`, `assets/v2/seal-build-brief.webp` | `sites/build-brief-desk/index.html` |
| Repeatable texture | `texture-brief-grid` | `assets/v2/texture-brief-grid.svg`, `assets/v2/texture-brief-grid.webp` | `sites/build-brief-desk/index.html` |
| Transparent object cutout | `object-brief-desk` | `assets/v2/object-brief-desk.svg`, `assets/v2/object-brief-desk.png` | `sites/build-brief-desk/index.html` |
| Compact sprite sheet | `sprite-route-status` | `assets/v2/sprite-route-status.svg`, `assets/v2/sprite-route-status.webp` | `sites/build-brief-desk/index.html` |
| Frame corner bitmap | `frame-corner-solar-brass` | `assets/v2/frame-corner-solar-brass.svg`, `assets/v2/frame-corner-solar-brass.webp` | `sites/build-brief-desk/index.html` |
| State meter strip | `state-meter-readiness` | `assets/v2/state-meter-readiness.svg`, `assets/v2/state-meter-readiness.webp` | `sites/build-brief-desk/index.html` |

The system gallery at `v2/assets.html` displays the current canonical inventory with role, format, fallback, and use.

## Boundaries That Held

- Images do not replace HTML, labels, state, layout, or accessibility.
- Every slot has a name before it is applied.
- SVG source stays in the repo with optimized PNG/WebP output where useful.
- Assets stay small and bounded; the largest current V2 bitmap is `object-brief-desk.png` under 100 KB.
- Visual proof includes smoke plus desktop/mobile/narrow screenshots on changed surfaces.

## Current Canonical Next Candidates

1. `production surface proof` - a new page built from the kit to test portability.
2. `bounded hero/detail bitmap` - a restrained object or scene detail, not a full-page illustration.
3. `ledger divider ornament` - thin repeatable divider for route lists and archive ledgers.

Recommended next pass: `production surface proof`.

Reason: the visual lane now has enough asset types; the next useful proof is whether a fresh page can select and combine them without new one-off CSS.

## Verification Snapshot

Latest completed checks after the frame corner pass:

- `git diff --check` - OK
- `node tools/regression-smoke.js`
  - 20 targets
  - desktop, mobile, narrow
  - result: OK
- Visual captures:
  - Build Brief output: offenders `0` on desktop/mobile/narrow
  - `v2/assets.html#frame-corner`: offenders `0` on desktop/mobile/narrow
- Live checks:
  - `/v2/assets.html` - HTTP 200
  - `/v2/assets.html#frame-corner` - HTTP 200
  - `/sites/build-brief-desk/` - HTTP 200
  - latest frame-corner report - HTTP 200

## Open Risk

The lane is stable as a production recipe kit, but it still depends on discipline:

- do not add image slots without a real page role;
- do not promote gallery-only patterns into shared components;
- do not use generated/bitmap assets for text, UI controls, or semantic state;
- keep visual additions small enough to verify with screenshot gates.
