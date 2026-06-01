# Pass 03 - Typography Direction and Font Test

Status: complete

Started: 2026-06-01 01:06 UTC
Completed: 2026-06-01 01:15 UTC

## Scope

- Reviewed ledger, Pass 01 evidence, and Pass 02 nav compression.
- Shortlisted practical font directions with Cyrillic support and low implementation risk.
- Implemented the smallest safe shared font/token pass.

## Shortlist

### 1. Vollkorn + PT Serif

Fit:
- strongest "civic archive" direction of the shortlist
- keeps HoMM2 gravitas without reading like generic fantasy display type
- body copy stays calm and readable in Cyrillic

Performance:
- two families
- moderate payload
- Google Fonts request supports display weights plus body roman/italic
- keeps `display=swap`

Risk:
- slightly denser texture than the previous pairing, so tracking must tighten with it

Verdict:
- chosen

### 2. Prata + PT Serif

Fit:
- elegant ceremonial display with reliable reading text
- strong plaque/title presence

Performance:
- lighter display payload because Prata is effectively one-weight

Risk:
- too brittle for small labels and utility nav because this system uses the display family in many compact UI slots

Verdict:
- not chosen

### 3. Literata only

Fit:
- very readable and editorial
- easiest performance story with one family

Performance:
- potentially simplest request and strongest consistency

Risk:
- loses too much of the HoMM2 threshold drama and command-plaque distinctiveness

Verdict:
- not chosen

## Chosen Direction

Chosen direction: **civic archive serif**

Rule:
- display / plaques / nav / ritual labels use `Vollkorn`
- body / ledger reading / explanatory copy use `PT Serif`

Why:
- HoMM2 still owns formal weight through plaques, ledgers, and mounted commands
- solarpunk needs less pseudo-medieval ornament and more readable civic record energy
- this pairing shifts the system away from “default fantasy board” and toward “solar registry / archive instrument”

## Files Changed

- `css/tokens.css`
- `index.html`
- `fairy-journeys.html`
- `solarpunk.html`
- `reference.html`

## Token / Font Changes

- Replaced page-level Google Fonts requests with:
  - `Vollkorn` for display weights `500-800`
  - `PT Serif` for body roman/italic and bold
- Updated token families:
  - `--font-display: "Vollkorn", Georgia, serif;`
  - `--font-body: "PT Serif", Georgia, serif;`
- Tightened typography tokens to suit the denser, more archival serif texture:
  - slightly smaller caption/body/lead
  - reduced uppercase tracking
  - slightly tighter body/prose leading

## Verification

- `git diff --check` clean
- `node tools/regression-smoke.js` passed
- screenshots/metrics captured under:
  - `tmp/night-runs/pass-03/index/`
  - `tmp/night-runs/pass-03/fairy/`
  - `tmp/night-runs/pass-03/solarpunk/`
  - `tmp/night-runs/pass-03/reference/`
- no horizontal overflow detected on changed surfaces

## Readability Check

Validated focus areas:

- nav and plaque labels stayed within viewport bounds on desktop/mobile/narrow
- `fairy-journeys.html` Cyrillic hero and lead remained readable after the body/font token change
- `reference.html` intro and manual copy remained stable while the denser serif reduced the "generic template" feel
- compact shell from Pass 02 did not re-expand under the new font contract

## Remaining Risk

- `Vollkorn` is a stronger texture than `Cinzel`, so future component passes should avoid adding tracking back indiscriminately.
- Some tiny uppercase utility labels may benefit from one later normalization pass if Serg wants even cleaner instrument-panel clarity.

## Next Recommendation

Run Pass 04 as a token/component consistency pass:

- extract any repeated nav/header values that still exist outside shared tokens
- check whether display-vs-body roles are applied consistently across proof and applied pages
- avoid introducing a third type family
