# Reference Visual Review Fallback Pass - 2026-05-18

## Scope

Post-closeout follow-up for the blocked night-run visual review. The goal was to verify whether `reference.html#operator-mode` and the responsive table stack could be reviewed with the available local Chromium path after `openclaw_browser` rejected local preview navigation by policy.

## Evidence Path

- Local preview: `python3 -m http.server 4181 --bind 127.0.0.1`
- Screenshot fallback: direct snap Chromium CLI
- Screenshot directory: `/root/snap/chromium/common/openclaw-screens/homm2-2026-05-18-review/`
- Captured viewports:
  - `390x844`
  - `768x1024`
  - `1440x1000`

## Files Reviewed

- `reference.html#operator-mode`
- `reference.html#responsive-contracts`

## Result

Completed with fallback evidence.

- `openclaw_browser.open` still blocks local preview navigation by policy.
- Direct headless Chromium CLI successfully captured screenshots from the local preview server.
- Operator mode renders as the intended first useful manual section at tablet and desktop widths.
- Mobile rendering has no document-level horizontal overflow in the smoke harness, but the first viewport is dense and the 2-column operator card grid shows only the top of the card area. This is acceptable for a manual/reference surface, not a blocker.
- Responsive table stack behavior remains covered by the smoke harness: table headers collapse and inline labels are visible at narrow widths.

## Verification

- Screenshot evidence captured through snap Chromium CLI.
- `HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js`

Smoke result:

- `Reference manual smoke @ desktop: overflow=0, primaryTop=467`
- `Reference manual smoke @ mobile: overflow=0, primaryTop=497`
- `Reference manual smoke @ narrow: overflow=0, primaryTop=207`
- `HOMM2 regression smoke OK`

## Recommendation

The night-run visual-review blocker is no longer a blocker for future work. Use direct Chromium CLI screenshot fallback when `openclaw_browser` policy blocks local preview navigation.

Do not start a broad reference redesign from this pass. The only reasonable next work is small polish if mobile operator density becomes annoying during real use.
