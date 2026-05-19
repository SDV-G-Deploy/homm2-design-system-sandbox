# HOMM2 Visual Upgrade Pass 004 - Fairy Art Rail Lift - 2026-05-19

## Scope

Apply the OpenClaw Visual Upgrade Playbook to make one live local improvement to `fairy-journeys.html`.

This pass targets the Pass 002 Critic finding:

> Desktop hero is strong, but the right art/support rail is too dim to carry its assigned world-building role.

No HTML, recipe contract, Figma, GitHub, deploy, dependency, or YourInsideQuest changes were made.

## Files Changed

- `css/fairy-journeys.css`

## Change

Lifted the first-screen right rail and art panel by one visual step:

- stronger but still subordinate rail border/background;
- slightly clearer rail row framing;
- richer art panel border, inner frame, and depth shadow;
- brighter moon and controlled mana/gold light;
- clearer gate, towers, and road texture;
- no new ornament family and no global palette change.

The goal was not to make the right column compete with the headline. It should now read faster as a world-entry support zone while preserving the ArticleHeroRecipe dominance.

## Evidence

Before reference:

- `/root/snap/chromium/common/openclaw-screens/homm2-2026-05-19-visual-upgrade-pass-002-fairy/fairy-hero-desktop-1440x900.png`

After evidence from the new helper:

- `tmp/visual-capture/fairy-art-pass-2026-05-19/desktop-1440x900.png`
- `tmp/visual-capture/fairy-art-pass-2026-05-19/mobile-390x844.png`
- `tmp/visual-capture/fairy-art-pass-2026-05-19/narrow-360x740.png`
- `tmp/visual-capture/fairy-art-pass-2026-05-19/metrics.json`

Visual-capture command:

```bash
node tools/visual-capture.js \
  --target /fairy-journeys.html#journey-opening \
  --out tmp/visual-capture/fairy-art-pass-2026-05-19 \
  --viewport desktop:1440x900 \
  --viewport mobile:390x844 \
  --viewport narrow:360x740 \
  --selector '.fairy-hero-art' \
  --selector '.fairy-hero-rail' \
  --selector '.fairy-hero-copy .lead' \
  --selector '.fairy-hero-actions'
```

Bounds result:

- desktop `1440x900`: offenders `0`
- mobile `390x844`: offenders `0`
- narrow `360x740`: offenders `0`

## Verification

Commands:

```bash
git diff --check
HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js
```

Result:

- `git diff --check` passed.
- `HOMM2 regression smoke OK`.
- Fairy Journeys applied smoke stayed green:
  - desktop: `overflow=0, primaryTop=190`
  - mobile: `overflow=0, primaryTop=195`
  - narrow: `overflow=0, primaryTop=195`

## Critic Review

Verdict: **accepted as a narrow visual improvement.**

The after screenshot makes the art/support column easier to perceive within the first second without taking priority away from the headline, lead, and primary action. The change is appropriately local to Fairy Journeys and does not alter shared recipe behavior.

## Remaining Risk

- This is visual polish, not canonical fixture proof.
- The art panel is still CSS illustration, so deeper art-direction work should be handled separately if Fairy becomes more than an applied smoke surface.
- No live deploy was performed.

## Recommended Next Step

If continuing HOMM2 playbook work, use the same pattern for one of:

1. a Critic pass over `index.html` art-direction scenes;
2. a Visual Director pass over `reference.html` lower-section screenshots using `tools/visual-capture.js`;
3. a fixture-focused pass that promotes only proven behavior into canonical contracts.

