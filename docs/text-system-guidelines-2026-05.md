# HOMM2 Sandbox — Text System Guidelines (2026-05)

Source: focused text/typography review of the live sandbox pages with special attention to mobile layout pressure, oversized headings, wrapping, and copy-to-component fit.

Reviewed pages:
- `index.html`
- `fairy-journeys.html`
- `reference.html`

This document defines how text should behave inside the Heraldic Menu / artifact UI direction.

## Status note

A first text-system implementation pass has already been applied to the live sandbox.
That pass improved wording density, reduced heading pressure, and lowered the chance of mobile text breakage.

However, this document should not be read as "the system is solved."

Important limitation:
- the current repo is **text-polished**, but not yet **text-safe by system design**
- future copy edits can still break layouts if they ignore the rules below
- component constraints are partly documented, but not yet fully encoded as reusable guardrails everywhere

Use this file as an operating brief for future wording and typography work, not as proof that the problem is permanently closed.

---

## Short direction

Text in this system should feel:
- authored
- ceremonial in small doses
- readable before decorative
- compact enough for framed/game-like controls
- consistent in tone and language

The main failure mode to avoid is this:
**copy that sounds rich, but is too long, too loud, or too large for the container that carries it.**

In this direction, text must support the frame hierarchy — not burst through it.

---

## Core diagnosis

### 1. Headings are still slightly too large for the current mobile composition

**Evidence**
- `--text-display: clamp(48px, 7.2vw, 104px)` and `--text-h2: clamp(36px, 4.9vw, 68px)` are generous for a system that uses framed, layered, menu-like surfaces.
- In `fairy-journeys.css`, the main menu title still reaches `clamp(40px, 5.2vw, 70px)` and the intermediate breakpoint raises it again with `clamp(42px, 6vw, 76px)`.
- On mobile, large serif titles compete with rails, plaques, and descriptive copy instead of anchoring them.

**Impact**
- The first screen feels heavier than it should.
- Text creates layout pressure before the user reaches action clarity.
- The page risks looking “almost polished” instead of disciplined.

**Fix**
- Slightly reduce the global display and H2 scale.
- Keep the dramatic serif voice, but tighten it for framed UI.
- Favor stronger hierarchy over sheer size.

**Acceptance check**
- On mobile, hero/title text feels grand but no longer dominates the whole viewport.
- Headings anchor sections instead of acting like visual slabs.

---

### 2. Secondary copy inside menu controls is too long for a game-menu pattern

**Evidence**
Examples in `fairy-journeys.html`:
- `начать личный сказочный путь с первой развилки`
- `вернуться к лесу дорог и текущему следу`
- `открыть журнал символов и внутренних имён`
- `вернуться к сравнению режимов`
- `мудрец, трикстер, хранитель и тень`

These are not terrible sentences, but they are too descriptive for compact framed controls on mobile.

**Impact**
- Buttons feel text-heavy.
- The menu loses command sharpness.
- Layout becomes vulnerable to wrapping and uneven row heights.

**Fix**
- Shorten secondary lines inside primary menu controls.
- Treat menu buttons more like command labels than mini-paragraphs.
- Keep the richer worldbuilding for adjacent panels, not the core command stack.

**Acceptance check**
- Secondary button text usually fits in 1–2 short lines on mobile.
- Menu buttons read like choices, not descriptions.

---

### 3. Some problems should be solved by copy editing, not just CSS squeezing

**Evidence**
Several text blocks are structurally too verbose for their container type, especially in:
- menu buttons
- plaques
- rails
- small metadata strips

**Impact**
- CSS alone can only hide the pressure.
- Reducing font size too much will make the UI feel cramped or cheap.

**Fix**
Use this decision rule:
- if text belongs to a command → shorten the copy first
- if text belongs to reading content → keep the copy, tune the container
- if text belongs to status/meta → compress wording aggressively

**Acceptance check**
- No component relies on tiny text to survive.
- Each component carries only the amount of text appropriate to its role.

---

### 4. Russian tone is mostly strong, but wording density should become more selective

**Evidence**
The tone is coherent and atmospheric, but many labels aim for full poetic expression even in compact UI zones.

**Impact**
- Tone stays strong, but precision weakens.
- Important actions become less immediate.

**Fix**
Adopt a tonal split:
- **display / scene intro:** literary and atmospheric
- **commands / nav / plaques:** shorter, cleaner, more game-like
- **reference/manual text:** clear, instructional, compact

**Acceptance check**
- Atmosphere remains in titles and intros.
- Action labels become faster to scan.

---

### 5. Mobile text rhythm needs stricter limits

**Evidence**
Small labels and supporting lines are already being reduced with local CSS patches like `font-size: 11px`, `overflow-wrap: anywhere`, and tighter gaps.
That helps, but it also signals the system is operating near its limit.

**Impact**
- Mobile quality depends on case-by-case rescue rules.
- Future copy changes can easily re-break layouts.

**Fix**
Define mobile text constraints explicitly at the system level.

**Acceptance check**
- New or edited copy does not break narrow-screen layouts by default.
- Fewer local emergency text patches are needed.

---

## Text hierarchy rules

### Display / hero title
Use for:
- page-defining scene title
- one major world-facing statement per screen

Rules:
- 1–2 lines on desktop when possible
- 2–3 lines max on mobile
- avoid long dependent clauses
- do not pair oversized display type with long supporting paragraphs directly underneath unless spacing is generous

Preferred role:
- mood + orientation, not full explanation

---

### H2 / section title
Use for:
- major section title
- dossier/route/ritual section anchors

Rules:
- keep under ~8–10 words when possible
- avoid stacking metaphor + qualifier + explanation in the same heading
- should read as a section title, not a paragraph opening

---

### Lead paragraph
Use for:
- explain what this screen/section is doing
- deliver the atmosphere in prose

Rules:
- 2–4 lines on desktop
- 3–5 lines max on mobile
- one idea per sentence
- if it takes more than two long sentences, split or cut

---

### Body text
Use for:
- dossiers
- explanations
- manual/reference content

Rules:
- prioritize readability over style density
- keep one clear thought per block
- do not put body-length logic into command components

---

### Eyebrows / labels / captions
Use for:
- section markers
- category hints
- small metadata

Rules:
- must stay short
- should not wrap to many lines
- if a label wraps awkwardly, rewrite it before shrinking it

---

## Component copy rules

### Menu buttons / command buttons
- primary line: 2–4 words preferred
- secondary line: short clarifier, not lore text
- if the secondary line exceeds ~45–55 characters, rewrite it
- buttons should sound like commands, not summaries

Examples of the desired pattern:
- `Войти в странствие` → good primary command
- supporting line should clarify destination, not retell the premise

---

### Plaques / route index items
- title should be very short
- supporting line should be lighter and optional
- plaques are navigational markers, not content cards

---

### Status rails / command rails
- labels should be compressed aggressively
- values may be slightly richer than labels, but still short
- avoid poetic phrasing in status values unless it adds real meaning

---

### Save slots / metadata strips
- use compressed phrases
- avoid sentence-like wording
- think “record line”, not “marketing copy”

---

### Reference / manual page
- headings must stay crisp and instructional
- component descriptions should explain role, not mood
- prefer short rule sentences over decorative prose

---

## Mobile text rules

1. No component should depend on `font-size: 10px` or smaller for normal reading.
2. Supporting text inside controls should usually fit within 1–2 lines.
3. If text wraps awkwardly in a control:
   - first shorten the copy
   - then adjust component padding/width
   - only then reduce type size
4. Do not use rich atmospheric microcopy inside dense control stacks.
5. Hero titles may be dramatic, but supporting copy must tighten as screens narrow.
6. Avoid solving overflow with emergency wrapping everywhere; fix the wording or the component role.

---

## Copy editing rules

Shorten text when:
- it sits inside buttons
- it sits inside rails / status cells / plaques
- it is repeated across multiple adjacent components
- it explains what the title already explained

Keep richer text when:
- it is a lead paragraph
- it is dossier/reference/manual reading content
- it carries worldbuilding that the layout intentionally presents as reading material

---

## Do / Don't

### Do
- Keep atmosphere in titles and intro prose.
- Keep commands short and game-like.
- Let framed UI breathe by limiting word count.
- Edit wording before shrinking text.
- Match text density to component role.

### Don’t
- Put mini-paragraphs inside menu buttons.
- Let display type become larger than the composition can hold.
- Solve every text problem with tighter fonts and emergency wrapping.
- Make labels poetic when they need to be scannable.
- Treat every component as a place for worldbuilding copy.

---

## Implementation priorities

### P0
1. Reduce oversized heading pressure in `fairy-journeys.html` and shared display/H2 scales.
2. Shorten secondary text in menu buttons, plaques, and small command surfaces.
3. Fix mobile layout breaks by prioritizing copy edits over micro-font shrinkage.

### P1
4. Define cleaner text limits for rails, strips, and metadata surfaces.
5. Tighten lead paragraph length where sections feel text-heavy.
6. Make reference/manual wording more consistently instructional.

### P2
7. Normalize wording tone across all compact UI controls.
8. Remove remaining cases where atmospheric prose leaks into scan-first components.

---

## Suggested execution order

1. Edit copy in `fairy-journeys.html` for command brevity and mobile fit.
2. Adjust heading scale in tokens/shared CSS.
3. Re-check component sizes after copy is shortened.
4. Tighten reference/manual wording where needed.
5. Verify again on mobile before any further decorative polish.
