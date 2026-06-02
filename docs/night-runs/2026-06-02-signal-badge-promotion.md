# Signal Badge Promotion - 2026-06-02

## Verdict

Promote one narrow compact signal/badge helper now: `.v2-signal-badge`.

This is not a promotion of hero shells, side instruments, seal panels, meter panels, or large signal wrappers. The promoted contract is only the compact anatomy:

- one visual mark;
- one text group;
- small label in `span`;
- value/state line in `strong`;
- page-local class still owns surface color, border, and emphasis.

## Evidence

| Surface | Current class | Role | Verdict |
| --- | --- | --- | --- |
| `sites/ant-school-landing-v2/index.html` | `.v2-antv2-signal` | Route signal inside first-screen gate | Uses compact icon plus label/value anatomy. |
| `sites/product-map-field-note/index.html` | `.v2-note-instrument` | Map readiness instrument | Uses the same anatomy with a slightly larger icon. |
| `sites/workshop-schedule-ledger/index.html` | `.v2-workshop-badge` | Seat/cohort badge | Uses the same anatomy with stronger local typography. |

## Implementation

Added shared helper:

```css
.v2-signal-badge
```

The helper lives in `css/v2.components.css` and owns:

- grid anatomy;
- icon column sizing through `--v2-signal-badge-icon`;
- 12px compact spacing;
- shared image sizing;
- shared label/value display and base text color.

The page-local classes remain responsible for:

- background and border;
- exact icon size variable;
- local emphasis;
- local typography differences.

## Deferred

Keep these deferred:

- `.v2-charter-signal`;
- `.v2-workshop-signal`;
- `.v2-note-seal`;
- `.v2-brief-instrument`;
- `.v2-agent-seal`;
- hero/gate wrappers and side panels.

They are larger composition shells, not the compact badge primitive.

## Verification Result

- `git diff --check`: passed.
- `node --check tools/regression-smoke.js`: passed.
- `node tools/regression-smoke.js`: passed, 23 targets across 3 viewports.
- ANT School Landing V2 focused visual capture: passed, 0 offenders at desktop/mobile/narrow.
- Product Map Field Note focused visual capture: passed, 0 offenders at desktop/mobile/narrow.
- Workshop Schedule Ledger focused visual capture: passed, 0 offenders at desktop/mobile/narrow.
- Manual screenshot review: passed for all three affected surfaces; compact badges retained their local visual flavor while sharing the same anatomy.
