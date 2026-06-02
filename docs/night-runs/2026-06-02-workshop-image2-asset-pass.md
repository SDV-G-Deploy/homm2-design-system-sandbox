# Workshop Image 2.0 Asset Pass - 2026-06-02

## Verdict

The Workshop Schedule Ledger now uses the real OpenClaw Image 2.0 route for its hero/detail visual slot.

The generated bitmap remains bounded to the `hero-detail-workshop-table` slot. It does not carry page meaning, text, controls, labels, prices, metrics, or navigation. HTML and CSS still own the workshop offer, route rows, seat state, reserve rule, layout, and responsive behavior.

## Files Changed

- `sites/workshop-schedule-ledger/index.html`
- `v2/assets.html`
- `assets/v2/hero-detail-workshop-table-image2.webp`
- `assets/v2/source/hero-detail-workshop-table-image2-source.png`
- `assets/v2/hero-detail-workshop-table.png` removed
- `docs/v2-asset-production-kit-2026-06-02.md`
- `docs/v2-closeout-checkpoint-2026-06-02.md`
- `docs/night-runs/2026-06-02-workshop-image2-asset-pass.md`
- `README.md`

## Generation Route

Command route:

```txt
openclaw infer image generate
```

Model:

```txt
openai/gpt-image-2
```

Output:

- source: `assets/v2/source/hero-detail-workshop-table-image2-source.png`
- production: `assets/v2/hero-detail-workshop-table-image2.webp`
- fallback: `assets/v2/hero-detail-workshop-table.svg`

## Final Prompt Shape

```txt
Use case: stylized-concept.
Asset type: bounded website hero detail image for a solar-civic fantasy interface.
Primary request: create a polished workshop planning table still life for a HoMM2-inspired solarpunk design system.
Scene/backdrop: warm parchment ledger desk with brass solar frame details, small civic planning tokens, seed-green glass inlays, subtle water-gauge instrument, daylight workshop atmosphere.
Subject: an organized medieval-fantasy workshop schedule table seen at a slight top-down angle, with empty plaques and object details only.
Forbidden content: no readable text, no letters, no numbers, no labels, no buttons, no navigation, no watermark, no logo, no fake UI screenshot, no people.
```

## Asset Budget

- generated source: 1536x1024, archived as PNG
- production WebP: 960x640, about 120 KB

The previous repo-native PNG output is removed from the production path. The page now prefers WebP and falls back to the SVG source.

## Required Verification

Run:

- `git diff --check`
- `node --check tools/regression-smoke.js`
- `node tools/regression-smoke.js`
- `node tools/visual-capture.js --target /sites/workshop-schedule-ledger/index.html --out tmp/workshop-image2-asset-pass-2026-06-02 --selector body --selector .v2-workshop-hero --selector .v2-workshop-signal`
- `node tools/visual-capture.js --target '/v2/assets.html#hero-detail' --out tmp/workshop-image2-gallery-2026-06-02 --selector body --selector '#hero-detail'`

Manual screenshot checks:

- hero image has no readable text;
- workshop meaning remains in real HTML rows and copy;
- mobile and narrow viewports have no horizontal overflow or clipped nav labels;
- asset gallery card shows the Image 2.0 WebP with SVG fallback.

## Verification Result

- `git diff --check`: passed.
- `node --check tools/regression-smoke.js`: passed.
- `node tools/regression-smoke.js`: passed, 23 targets across 3 viewports.
- Workshop visual capture: passed, 0 offenders at desktop/mobile/narrow.
- Asset gallery `#hero-detail` visual capture: passed, 0 offenders at desktop/mobile/narrow.
- Manual screenshot review: passed for desktop and mobile workshop surface plus gallery card; generated asset has no readable text and does not replace HTML meaning.
