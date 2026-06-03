# Package Card Promotion - 2026-06-03

## Verdict

PASS - promote the narrow commercial package-card helper:

- `.v2-package-grid`
- `.v2-package-card`
- `.v2-package-card-primary`

This is a component promotion, not a pricing-model promotion. The helper owns only the repeated card anatomy and responsive grid behavior.

## Evidence Surfaces

Compared two distinct commercial surfaces:

- `sites/package-ledger/index.html` - one-off bounded service packages.
- `sites/service-tier-ledger/index.html` - monthly service / retainer tiers.

Both repeat the same anatomy:

- three comparable commercial cards;
- eyebrow label;
- title;
- price or price/period line;
- short scope paragraph;
- one emphasized middle card;
- desktop three-column grid;
- mobile single-column stack;
- no direct per-card action.

The prior independent audit deferred Package Ledger cards because only one commercial surface existed. Service Tier Ledger now supplies the missing second pressure without introducing a new card variant.

## Promoted Scope

The shared helper owns:

- package card grid gap;
- desktop three-column grid;
- card grid stack, gap, padding, background, border, radius, and inset material;
- primary-card border/elevation emphasis;
- eyebrow, title, price line, and paragraph typography.

## Explicit Non-Scope

The helper does not own:

- package or tier semantics;
- prices, periods, purchase route, start route, included/excluded rules, or upgrade logic;
- surrounding pricing hero, board, proof, guard, or buy/start sections;
- per-card buttons, feature lists, proof marks, or selection states.

Those remain page/content responsibilities until a future surface proves them.

## Files Changed

- `css/v2.components.css` - added the promoted package-card helpers.
- `css/v2.recipes.css` - removed duplicated recipe ownership for package-card helpers.
- `css/v2.responsive.css` - moved desktop package grid behavior to the shared helper.
- `README.md` - recorded the promotion.
- `docs/v2-library-decision-2026-06-02.md` - added the promotion result.

## Acceptance Notes

Do not widen this into a generic card primitive. The name `package-card` is intentionally commercial and comparison-specific. It fits purchasable scope/tier comparison cards with one price line and one short scope paragraph.

## Verification

Passed before closeout:

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 29 targets across desktop/mobile/narrow
- full-page visual capture for Package Ledger and Service Tier Ledger: PASS, 0 offenders at 1440x900, 390x844, and 360x740
- package-card-focused visual capture for both commercial surfaces: PASS, 0 offenders at 390x844 and 360x740

Capture output:

- `tmp/package-card-promotion-2026-06-03/package-ledger/`
- `tmp/package-card-promotion-2026-06-03/service-tier-ledger/`
- `tmp/package-card-promotion-2026-06-03/package-ledger-cards/`
- `tmp/package-card-promotion-2026-06-03/service-tier-ledger-cards/`

## Next Candidate

Do not promote pricing page shells next by default. The next useful commercial audit should look for either:

- a narrow commercial guard/route helper after another purchase flow repeats it; or
- package-card extension needs such as feature rows or per-card actions only after they appear in real surfaces.
