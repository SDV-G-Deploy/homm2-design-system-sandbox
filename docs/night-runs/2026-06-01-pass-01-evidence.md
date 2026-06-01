# Pass 01 - Evidence and Visual Debt Map

Status: complete

Started: 2026-06-01 00:16 UTC
Completed: 2026-06-01 00:24 UTC

## Scope

- Inspected: `index.html`, `fairy-journeys.html`, `reference.html`, `solarpunk.html`
- Inspected CSS: `css/components.css`, `css/solarpunk.css`, `css/fairy-journeys.css`, `css/reference.css`
- Requested file `css/base.css` does not exist in this repo. Shared header/nav behavior currently lives in `css/components.css` with page overrides in page CSS.
- No broad implementation in this pass. Only durable documentation artifacts were added.

## Viewport Evidence

Screenshots and metrics were captured with `node tools/visual-capture.js`.

Artifacts:
- `tmp/night-runs/pass-01/index/`
- `tmp/night-runs/pass-01/solarpunk/`
- `tmp/night-runs/pass-01/fairy/`
- `tmp/night-runs/pass-01/reference/`

### Header + first-screen footprint

| Surface | Desktop 1440 | Mobile 390 | Narrow 360 | Notes |
| --- | --- | --- | --- | --- |
| `index.html` | header 78px; first section top 7px after sticky scroll alignment | header 198px; first section top 120px | header 198px; first section top 0px after scroll | Mobile header is materially taller than the solarpunk proof and dominates the first viewport. |
| `solarpunk.html` | header 78px; first section top 93px | header 111px; first section top 33px | header 111px; first section top 0px after scroll | Best current first-screen efficiency. Fewer nav links and smaller command load. |
| `fairy-journeys.html` | shell header 115px; first section top 86px | shell header 240px total visible block; first section top 114px | shell header block remains 240px tall in flow | Mobile utility shell is the heaviest applied-page offender. |
| `reference.html` | hero header block 530px; first section starts at 562px | hero header block 266px; first section starts at 290px | hero header block 259px; first section starts at 283px | The reference front door spends too much vertical budget before the actual system proof begins. |

### Overflow / breakage check

- No horizontal overflow was detected on the captured surfaces.
- Current debt is hierarchy and viewport budget, not overflow.

## Top 5 Issues By Impact

### 1. P0 - Mobile top-of-page budget is spent on navigation chrome instead of primary proof

Evidence:
- `index.html` uses a sticky two-part header with sigil + six links at [index.html](../../index.html) and shared sizing in [css/components.css](../../css/components.css#L143), [css/components.css](../../css/components.css#L217), [css/components.css](../../css/components.css#L1728).
- `fairy-journeys.html` adds a brand block, five nav pills, and a breadcrumb shell at [fairy-journeys.html](../../fairy-journeys.html#L24) with local height reinforcement in [css/fairy-journeys.css](../../css/fairy-journeys.css#L12), [css/fairy-journeys.css](../../css/fairy-journeys.css#L18), [css/fairy-journeys.css](../../css/fairy-journeys.css#L32), [css/fairy-journeys.css](../../css/fairy-journeys.css#L943), [css/fairy-journeys.css](../../css/fairy-journeys.css#L1291).
- Captured metrics show `index` mobile header at 198px and `fairy` mobile shell block at about 240px before the first-screen content meaningfully breathes.

Impact:
- The first viewport reads as navigation UI rather than a HoMM2 object or solar-civic entry state.
- This directly conflicts with the objective to reduce the oversized top menu/header and weakens the main fantasy threshold moment.

Concrete fix:
- Create a compact shared mobile header contract:
  - demote the brand line to one compact line;
  - reduce default nav pill padding and vertical stack weight;
  - collapse non-primary links behind a single summary/rail pattern on mobile;
  - remove always-visible breadcrumbs from the topmost mobile viewport unless the page is deep utility content.
- Keep the solarpunk proof as the reference baseline for compactness.

Acceptance check:
- On 390px width, the combined sticky header block for `index` and `fairy-journeys` should be visibly closer to the current `solarpunk` header than to their current states.
- The primary first-screen card/title must appear materially higher in the viewport than it does now.
- No nav label clipping or horizontal overflow.

### 2. P1 - The shared nav system is not governed by one clear hierarchy contract

Evidence:
- Shared header/nav primitives live in [css/components.css](../../css/components.css#L143) and [css/components.css](../../css/components.css#L302), but page-level overrides reshape them differently in [css/solarpunk.css](../../css/solarpunk.css#L1043), [css/fairy-journeys.css](../../css/fairy-journeys.css#L18), and [css/reference.css](../../css/reference.css#L71).
- `solarpunk.html` carries only four scene links at [solarpunk.html](../../solarpunk.html#L25), while `index.html` carries six links and `fairy-journeys.html` adds a breadcrumb layer on top of utility nav.
- The reference page uses a different front-door grammar entirely: giant intro header plus separate TOC.

Impact:
- The system does not yet answer a simple question: what is the portable top-level shell for a solar-civic HoMM2 page?
- Without that answer, every page solves header weight locally and the interface drifts.

Concrete fix:
- In the next nav pass, define three explicit top-shell modes and encode them in tokens/components:
  - proof shell;
  - applied article shell;
  - reference/manual shell.
- Each mode should define allowed brand weight, allowed link count, breadcrumb policy, and mobile collapse behavior.

Acceptance check:
- A reader should be able to explain why `index`, `solarpunk`, and `fairy-journeys` differ without calling them arbitrary one-offs.
- Shared selectors should own shell behavior; page CSS should only tune local flavor.

### 3. P1 - Typography direction is still a competent placeholder, not a chosen identity

Evidence:
- Current pages rely on Google Fonts `Cinzel` + `Lora` in `index.html`, `solarpunk.html`, and `fairy-journeys.html`.
- Display labels are heavily uppercase and plaque-driven in [css/components.css](../../css/components.css#L178), [css/components.css](../../css/components.css#L242), and [css/components.css](../../css/components.css#L347).
- The system reads clearly, but the type voice is still close to “fantasy board default” rather than a specifically solar-civic civic archive.

Impact:
- This caps distinctiveness and makes later polish work less effective.
- The current palette and materials are carrying too much of the identity burden alone.

Concrete fix:
- Run a bounded typography pass after nav compression:
  - test 2-3 display/body pairings with Cyrillic support;
  - preserve readable body copy and object-label clarity;
  - reduce blanket uppercase pressure where hierarchy can come from shape, spacing, or contrast instead.

Acceptance check:
- One chosen direction should make the same existing layouts feel more specific before any major component rewrite.
- Cyrillic body copy on `fairy-journeys.html` must remain calm and readable.

### 4. P1 - The reference page front door is too tall and delays the actual system proof

Evidence:
- The intro header in [reference.html](../../reference.html#L22) includes eyebrow, large title, paragraph, and a three-chip mode strip before the user reaches `#component-proof`.
- Base layout in [css/reference.css](../../css/reference.css#L13) and solarpunk skinning in [css/solarpunk.css](../../css/solarpunk.css#L1250) amplify that front-door block.
- Captured metrics show the reference header alone occupies 530px on desktop and 266px on mobile; the first proof section begins at 562px desktop and 290px mobile.

Impact:
- The canonical manual delays the actual components and recipes it is supposed to teach.
- This weakens the repo as an operator/reference surface and makes the top of the page feel more like a manifesto than a tool.

Concrete fix:
- Compress the reference intro into a tighter operator strip:
  - demote or collapse one level of explanatory copy;
  - shrink the mode chips or merge them into a more compact row;
  - bring the TOC and the first component proof much higher.

Acceptance check:
- On mobile, the first component proof should begin substantially earlier than ~290px.
- On desktop, the top of `#component-proof` should no longer feel like a second screen.

### 5. P2 - Solarpunk theming is portable, but token/component ownership is still partly diffuse

Evidence:
- Shared solarization overrides are bundled in [css/solarpunk.css](../../css/solarpunk.css#L1043) and page-specific solarpunk behavior is mixed with applied-page rules in [css/fairy-journeys.css](../../css/fairy-journeys.css#L1).
- The repo already has useful shared primitives, but there are still many local raw values and page-specific shell adjustments around nav/header sizing and spacing.
- The missing `css/base.css` request is also a signal that shared responsibility is not obvious from file structure.

Impact:
- Future passes risk solving the same hierarchy and state problems in several files.
- This makes optimization and long-term maintenance harder than necessary.

Concrete fix:
- After nav and typography, do a token/component consistency pass focused on:
  - top-shell sizing tokens;
  - nav pill density tokens;
  - reference/manual shell tokens;
  - state-color ownership for solar brass, water lens, canopy feedback.

Acceptance check:
- A new contributor should be able to locate shared shell behavior quickly without guessing between multiple CSS files.
- At least one shared token or component contract should replace repeated local values on reference + applied surfaces.

## Next Pass Order

1. Nav / header compression
   - Highest leverage because the first-screen problem is visible across multiple surfaces and already measured.
2. Typography direction + font test
   - Choose the voice after the shell budget is under control; otherwise measurements will drift again.
3. Token / component consistency
   - Extract the winning shell and type decisions into reusable shared contracts.
4. Optimization / polish
   - Remove duplication, tighten spacing, and clean any remaining page-specific hacks after the larger decisions are settled.

## Pass Verdict

Verdict: partial system, not a skin.

Why:
- The work already has real material grammar, state language, and reusable shell primitives.
- The main debt is hierarchy discipline and portability of the top-level shell, not absence of direction.

## Recommendation For Pass 2

Target:
- `index.html`
- `fairy-journeys.html`
- shared shell selectors in `css/components.css`
- only the minimum reference/manual adjustments needed to keep the shell family coherent

Avoid:
- broad hero redesign
- palette-only changes
- decorative solarpunk ornament added before shell compression
