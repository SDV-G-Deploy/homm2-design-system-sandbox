# Reference Visual Review Pass - 2026-05-18

## Scope

Run one bounded manual visual QA pass over `reference.html#operator-mode` and the stacked reference tables at mobile/tablet widths before allowing any further polish work.

## Planned Evidence

- Mobile operator-mode screenshot at `390x844`
- Tablet operator/front-door screenshot at `768x1024`
- Tablet responsive-contracts screenshot at `768x1024`

## Verification Method

- Host-local Chromium screenshots against the repo's static preview
- Visual review of operator cards, sticky/stacked navigation, decision table stacking, and responsive-contract table stacking

## Result

Blocked

- `openclaw_browser` on `target="host"` rejected navigation to the local preview URL with `browser navigation blocked by policy`.
- `target="sandbox"` was unavailable in this environment.
- Direct host-local Chromium screenshot attempts did not produce materialized PNG files, so no visual evidence could be reviewed from this wake.

## Recommendation

Run the same bounded visual review only after a local-preview-capable browser path is available. Do not continue reference polish ahead of that evidence.
