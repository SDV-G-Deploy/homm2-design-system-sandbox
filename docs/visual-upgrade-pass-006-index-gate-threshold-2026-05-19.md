# HOMM2 Visual Upgrade Pass 006 - Index Gate Threshold Critic/Director - 2026-05-19

## Scope

Run a critique-first Visual Upgrade pass on `index.html` after Pass 005.

This pass intentionally tests a stronger playbook move: Critic identifies the visual weakness first, then Visual Director makes a more visible art-direction patch. No deploy, Figma, dependency, recipe-contract, or HTML changes were made.

## Critic Finding

Pass 005 was technically sound but too conservative. The first screen still read primarily as:

- large text panel;
- parchment ledger;
- atmospheric background.

For a page whose first scene is explicitly `Gate`, the actual gate was too passive. It was a dark silhouette behind the copy, so the first viewport did not strongly sell the threshold/world-entry moment.

Severity: P2 art-direction weakness. It does not block usability, but it weakens the page's main promise.

## Files Changed

- `css/scenes.css`

## Visual Director Change

Strengthened the Scene 01 gate layer while preserving existing content and layout:

- moved the castle/gate mass rightward so it reads as a visible scene object;
- increased gate scale and stone contrast;
- added a mana/gold portal glow inside the arch;
- added matching mana/gold light fields to the hero background;
- warmed the road axis so the foreground points toward the threshold;
- increased moon glow to support the same focal area;
- added mobile-specific gate sizing so the decorative object stays inside measured bounds.

The goal is not to replace the HOMM2 board with a new design. The goal is to make the existing hero more literal and legible as a gate scene.

## Evidence

Baseline after Pass 005:

- `tmp/visual-capture/index-pass-005-after-2026-05-19/desktop-1440x900.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/mobile-390x844.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/narrow-360x740.png`
- `tmp/visual-capture/index-pass-005-after-2026-05-19/metrics.json`

After Pass 006:

- `tmp/visual-capture/index-pass-006-after-2026-05-19/desktop-1440x900.png`
- `tmp/visual-capture/index-pass-006-after-2026-05-19/mobile-390x844.png`
- `tmp/visual-capture/index-pass-006-after-2026-05-19/narrow-360x740.png`
- `tmp/visual-capture/index-pass-006-after-2026-05-19/metrics.json`

Visual-capture command:

```bash
node tools/visual-capture.js \
  --target /index.html \
  --out tmp/visual-capture/index-pass-006-after-2026-05-19 \
  --viewport desktop:1440x900 \
  --viewport mobile:390x844 \
  --viewport narrow:360x740 \
  --selector '.hero-copy' \
  --selector '.material-ledger' \
  --selector '.gate-mass' \
  --selector '.moon' \
  --selector '.ceremony-shell'
```

## Bounds Notes

Pass 006 selected `.gate-mass` as a measured visual object.

After the mobile adjustment:

- desktop: gate bounds `474-1234`, doc `1425/1425`
- mobile: gate bounds `23-374`, doc `375/375`
- narrow: gate bounds `21-345`, doc `345/345`

The helper still reports one `.ceremony-shell` internal overflow offender, unchanged in meaning from Pass 005. It is an intentionally clipped decorative orbit/altar layer. Page-level horizontal overflow remains zero.

## Verification

Commands:

```bash
git diff --check
HOMM2_SMOKE_PORT=4305 HOMM2_CDP_PORT=9445 node tools/regression-smoke.js
```

Result:

- `git diff --check` passed.
- `HOMM2 regression smoke OK`.
- checked 6 targets across 3 viewports.
- all smoke targets reported `overflow=0`.

Relevant smoke lines:

- `ArticleHeroRecipe fixture @ desktop: overflow=0, primaryTop=417`
- `SiteShellNavigationRecipe fixture @ narrow: overflow=0, primaryTop=654`
- `Fairy Journeys applied smoke @ desktop: overflow=0, primaryTop=190`
- `Reference manual smoke @ narrow: overflow=0, primaryTop=324`

## Critic Review

Verdict: **accepted as a stronger playbook demonstration than Pass 005.**

The after screenshot now has a clearer threshold object: the gate/portal is visible, lit, and connected to the road and moon. The hero still preserves the headline as the dominant reading target, but the right half now contributes more than atmospheric darkness plus ledger.

## Remaining Risk

- The gate is still CSS illustration, not a production asset.
- The desktop ledger partially overlaps the gate, which is acceptable for this composition but may be revisited if the page should prioritize the portal over the parchment artifact.
- This pass remains local to `index.html` Scene 01 and does not create a new reusable recipe.

## Recommended Next Step

Use Pass 007 for one of two directions:

1. refine the desktop gate/ledger relationship if the portal should become the primary visual object; or
2. move to `reference.html` to test whether the playbook improves dense system documentation, not only cinematic scenes.
