# HOMM2 Visual Upgrade Pass 005 - Index Hero Composition - 2026-05-19

## Scope

Apply the OpenClaw Visual Upgrade Playbook to `index.html`, using the live short loop:

1. capture current rendered evidence;
2. choose one concrete Visual Director target;
3. make a narrow local patch;
4. recapture desktop/mobile/narrow evidence;
5. run regression smoke.

No HTML, recipe contract, dependency, deploy, Figma, GitHub, or Fairy Journeys content changes were made in this pass.

## Target

The `index.html` first screen had strong world art and headline tone, but the composition was left-heavy:

- the primary copy panel extended slightly below the desktop viewport;
- the parchment `material-ledger` support object sat too low and was mostly a lower-fold object;
- the right side of the hero therefore read as atmosphere before it read as an intentional art-direction proof.

This is a visual hierarchy issue, not a functional defect.

## Files Changed

- `css/scenes.css`

## Change

Adjusted only the Scene 01 hero composition:

- moved `.hero-copy` up and made it slightly tighter;
- reduced the maximum display heading size from `82px` to `76px`;
- strengthened the hero copy panel edge/depth by one step;
- moved `.material-ledger` to the vertical center of the hero grid on desktop;
- strengthened the ledger surface with warmer top light and a deeper cast shadow;
- reset ledger `align-self` back to normal inside existing responsive overrides.

The intent is to make the first viewport read as a composed gate scene with a visible support artifact, not as a large text panel with a late-appearing note.

## Evidence

Before:

- `tmp/visual-capture/index-pass-005-before-2026-05-19/desktop-1440x900.png`
- `tmp/visual-capture/index-pass-005-before-2026-05-19/mobile-390x844.png`
- `tmp/visual-capture/index-pass-005-before-2026-05-19/narrow-360x740.png`
- `tmp/visual-capture/index-pass-005-before-2026-05-19/metrics.json`

After:

- `tmp/visual-capture/index-pass-005-after-2026-05-19/desktop-1440x900.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/mobile-390x844.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/narrow-360x740.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/metrics.json`

Visual-capture command:

```bash
node tools/visual-capture.js \
  --target /index.html \
  --out tmp/visual-capture/index-pass-005-after-2026-05-19 \
  --viewport desktop:1440x900 \
  --viewport mobile:390x844 \
  --viewport narrow:360x740 \
  --selector '.hero-copy' \
  --selector '.material-ledger' \
  --selector '.desk-composition' \
  --selector '.ceremony-shell'
```

## Bounds Delta

Desktop `1440x900`:

- `.hero-copy`: `279-921` before, `252-874` after
- `.material-ledger`: `711-925` before, `447-661` after

Mobile `390x844`:

- `.hero-copy`: `326-1148` before, `301-1121` after
- `.material-ledger`: `1186-1399` before, `1159-1372` after

Narrow `360x740`:

- `.hero-copy`: `316-1208` before, `294-1184` after
- `.material-ledger`: `1246-1459` before, `1222-1435` after

The helper still reports one `.ceremony-shell` internal overflow offender before and after. That is the existing clipped decorative orbit/altar area with `overflow-x: hidden`, not page-level horizontal overflow; document `scrollWidth` stayed equal to `clientWidth` in every captured viewport.

## Verification

Commands:

```bash
git diff --check
HOMM2_SMOKE_PORT=4302 HOMM2_CDP_PORT=9442 node tools/regression-smoke.js
```

Smoke result:

- `HOMM2 regression smoke OK`
- checked 6 targets across 3 viewports
- all smoke targets reported `overflow=0`

Relevant applied smoke lines:

- `Fairy Journeys applied smoke @ desktop: overflow=0, primaryTop=190`
- `Fairy Journeys applied smoke @ mobile: overflow=0, primaryTop=195`
- `Fairy Journeys applied smoke @ narrow: overflow=0, primaryTop=195`
- `Reference manual smoke @ desktop: overflow=0, primaryTop=467`
- `Reference manual smoke @ mobile: overflow=0, primaryTop=537`
- `Reference manual smoke @ narrow: overflow=0, primaryTop=270`

## Critic Review

Verdict: **accepted as a narrow composition lift.**

The after desktop capture reads more intentionally: the ledger is now part of the first-screen composition, the headline remains dominant, and the page keeps the existing HOMM2 material language. Mobile moved slightly upward without introducing page overflow, although the first screen is still intentionally tall and cinematic.

## Remaining Risk

- This pass improves the index hero only; it does not establish a new shared recipe contract.
- The `.ceremony-shell` decorative overflow should get a separate focused pass if the evidence helper is later expected to produce zero internal offenders for every selected decorative scene.
- No live deploy was performed.

## Recommended Next Step

Run Pass 006 on either:

1. `index.html` Scene 02/03 continuity, especially the transition from archive to ceremony; or
2. `reference.html` lower sections, where the playbook can test dense documentation surfaces rather than cinematic composition.
