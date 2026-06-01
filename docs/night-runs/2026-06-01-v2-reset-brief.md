# HoMM2 x Solarpunk V2 Reset Brief - 2026-06-01

## Verdict

The current design-system sandbox is useful research, but it is not yet a production-grade generator for fast, beautiful new sites.

The main failure is accumulation. Multiple passes improved isolated pieces, but the total system now mixes dark HoMM2 surfaces, pale solarpunk panels, large mobile navigation, weak contrast, text-heavy proof boards, and brittle HTML decoration. The result has ideas, but not enough reusable taste discipline.

V2 should not continue as incremental polish on the current pages. Treat V1/V1.1 as evidence and rebuild a smaller, stricter kit.

## Evidence From Current Mobile Review

- Light text appears on light vellum backgrounds, especially on reference/proof sections.
- The top navigation consumes too much of the first mobile viewport and forces labels into awkward wrapping.
- Several graphical motifs read as weak HTML decoration instead of intentional assets or component hardware.
- Component boards explain the system with prose, but do not yet look strong enough as product UI.
- Solarpunk and HoMM2 signals compete: dark fantasy panels, pale civic surfaces, glass circles, plaques, and prose blocks do not resolve into one crisp interface grammar.
- Russian content exposes missing content budgets: short English labels fit, but longer Cyrillic strings break rows, wrap words badly, and make summaries unreadable on narrow screens.

## Target Direction

**Solar-civic fantasy interface.**

HoMM2 owns the object language:

- framed screens
- plaques and brass controls
- bevels and inset depth
- ledgers and route rows
- threshold drama

Solarpunk owns the operating condition:

- directional daylight
- civic infrastructure
- water focus and inspection states
- living-system feedback
- restorative route/status language

The blend must work without explanatory copy. If the text is blurred, the page should still read as solar-civic fantasy UI through layout, material, state, and assets.

## What To Preserve

- The core phrase and concept: HoMM2 x Solarpunk / solar-civic fantasy interface.
- Material roles: sun-vellum, solar brass, water lens, canopy/leaf, warm shadow.
- Object UI instinct: frames, plates, route ledgers, badges, state rows.
- The useful docs and critique trail from V1/V1.1.
- Existing smoke and visual-capture tooling.

## What To Kill Or Demote

- Large all-purpose mobile nav blocks.
- Pale sections with low-contrast white copy.
- Decorative HTML shapes used as primary art.
- Hero-first system definition.
- Long reference prose as proof of quality.
- Many components before one excellent real screen exists.
- Green/teal/dark-gold accumulation without clear state meaning.

## V2 Product Kit Scope

Build a small kit first, not a sprawling design system.

### Required primitives

1. Mobile shell and navigation
2. Reading-safe vellum panel
3. Brass command plate
4. Route/status row
5. Water inspection module
6. Material badge/chip
7. Framed asset slot

### Required recipes

1. Landing / gateway page
2. Article, dossier, or tool page

### Required asset layer

V2 needs real visual material, not only CSS geometry:

- reusable texture overlays
- brass/stone/vellum frame pieces
- crest or route badge
- water lens detail
- one solar-civic infrastructure motif

Assets can be generated or hand-built, but every asset slot must have a purpose and a fallback.

## Non-Negotiable Gates

- Mobile first: design and accept at 390px before desktop.
- Contrast first: no white or pale text on pale backgrounds.
- Nav budget: top navigation must stay compact and must not dominate the first screen.
- Copy-hidden proof: the visual system must make sense without reading paragraphs.
- Multilingual content budget: every primitive must survive realistic RU and EN labels without broken words, clipped labels, or unreadable summary rows.
- Component budget: no more than 7 primitives in the first V2 slice.
- Asset seriousness: primary graphic elements cannot look like accidental HTML placeholders.
- Screenshot proof: mobile and desktop captures before any claim of improvement.
- Smoke gate: \`node tools/regression-smoke.js\` remains required for touched public pages.

## Recommended Next Pass

Create a separate V2 slice instead of rewriting the current pages in place.

Suggested branch/page:

- branch: \`v2-system-reset\`
- page: \`v2/index.html\`
- CSS: \`css/v2.css\`

First implementation goal:

> One excellent mobile-first gateway screen that proves the system can produce a beautiful, readable, reusable interface.

Acceptance for that first slice:

- 390px screenshot looks intentionally designed, not compressed from desktop.
- Top nav is compact and legible.
- No contrast failures in visible text.
- RU and EN label variants pass without broken words or awkward one-letter wraps.
- At least one asset-backed frame or motif replaces weak CSS-only decoration.
- The page uses only the small V2 primitive set.
- Desktop version follows after mobile is accepted.

## Working Order

1. Build the V2 mobile gateway screen in isolation.
2. Capture mobile screenshot and critique before desktop.
3. Add desktop layout only after the mobile screen works.
4. Extract primitives into the reference page.
5. Prove the same grammar on a second applied page.
6. Only then call it a design system again.

## Decision

Stop treating V1 as almost done.

V1 is the research pile. V2 should be a stricter production kit with fewer pieces, stronger assets, explicit mobile contracts, and hard contrast gates.
