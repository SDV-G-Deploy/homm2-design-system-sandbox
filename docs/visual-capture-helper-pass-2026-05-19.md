# Visual Capture Helper Pass - 2026-05-19

## Scope

Add a small dependency-free CDP screenshot and bounds helper for future HOMM2 visual upgrade passes.

This pass adds tooling only. No CSS, HTML surface, canonical recipe contract, Figma, GitHub, deploy, dependency, or YourInsideQuest change is made by this pass.

## Added

- `tools/visual-capture.js`
- README usage notes

## Why

The OpenClaw Visual Upgrade Playbook needs reliable evidence. During the Fairy Journeys critic pass, raw `chromium --screenshot` and URL-hash screenshots were useful, but they could mislead visual review when lower-section scroll placement or old headless screenshot behavior was involved.

The helper records both:

- screenshots;
- bounds metrics for selected elements.

That makes it possible to separate:

- real mobile clipping;
- document-level overflow;
- raw screenshot / scroll-placement artifacts.

## Usage

```bash
node tools/visual-capture.js \
  --target /fairy-journeys.html#journey-opening \
  --out tmp/visual-capture/fairy \
  --viewport mobile:390x844 \
  --viewport narrow:360x740 \
  --selector '.fairy-hero-copy .lead' \
  --selector '.fairy-dossier-body' \
  --selector '.fairy-feed-row'
```

Outputs:

- `*.png` screenshots per viewport;
- `metrics.json` with:
  - viewport;
  - target path;
  - scroll selector;
  - document `scrollWidth` / `clientWidth`;
  - target rectangle;
  - per-selector bounds;
  - offenders where an element crosses the viewport or has `scrollWidth > clientWidth + 1`.

## Verification

Required after this pass:

```bash
git diff --check
node tools/visual-capture.js --target /fairy-journeys.html#journey-opening --out tmp/visual-capture/pass-2026-05-19 --viewport mobile:390x844 --viewport narrow:360x740 --selector '.fairy-hero-copy .lead' --selector '.fairy-dossier-body' --selector '.fairy-feed-row'
HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js
```

## Follow-Up

Do not replace `tools/regression-smoke.js` with this helper. Use both:

- `regression-smoke.js` for stable contract checks;
- `visual-capture.js` for visual-pass evidence and targeted bounds debugging.

