# 2026-06-01 Reference Operator Compression

Status: complete

## Scope

- Compress reference.html as an operator/manual surface.
- Keep the HoMM2 x Solarpunk grammar fixed: plaques, frames, ledgers, solar brass, water focus and living-state vocabulary.
- Do not redesign applied pages or change the color/type direction from the night run.

## Target

The closeout named reference.html as the highest-value next pass because the page still opened as a tall manual front door. The goal is to make the canonical component proof feel like the first useful object, not a second-screen destination.

## Changes

- Renamed the first-screen title from broad brand framing to Operator Reference.
- Shortened the header copy to direct users to proof first, manual second.
- Compressed the direction chips from long explanatory phrases to compact build/form/condition checks.
- Converted the solarized reference header into a two-column desktop operator plate.
- Removed the extra generated Fantasy Solarpunk layer chip from the first screen.
- Restored a compact three-chip mobile strip instead of hiding the contract entirely.

## Verification

- `git diff --check` - passed
- `node tools/regression-smoke.js` - passed
- `node tools/visual-capture.js --target /reference.html#component-proof --out tmp/night-runs/reference-operator-compression/reference --selector '#component-proof' --selector '.ref-header' --selector '.mode-chip'` - passed
- `node tools/visual-capture.js --target /reference.html --out tmp/night-runs/reference-operator-compression/reference-first-screen --selector '#component-proof' --selector '.ref-header' --selector '.mode-chip'` - passed

First-screen metrics after the pass:

| Viewport | `#component-proof` top | `.ref-header` height | Overflow |
| --- | ---: | ---: | --- |
| Desktop 1440x900 | 305px | 249px | 0 offenders |
| Mobile 390x844 | 251px | 217px | 0 offenders |
| Narrow 360x740 | 249px | 215px | 0 offenders |

Compared with closeout, desktop proof entry moved from about 445px to 305px.

Screenshots:

- `tmp/night-runs/reference-operator-compression/reference-first-screen/desktop-1440x900.png`
- `tmp/night-runs/reference-operator-compression/reference-first-screen/mobile-390x844.png`
- `tmp/night-runs/reference-operator-compression/reference-first-screen/narrow-360x740.png`

## Remaining Risk

The page is now more operator-first, but still has high downstream manual density. A later production-hardening pass should consolidate reference/manual CSS and reduce effect weight after the reference contract is stable.
