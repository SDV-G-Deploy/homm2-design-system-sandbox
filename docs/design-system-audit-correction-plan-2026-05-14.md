# HOMM2 Design System Audit + Correction Plan

Date: 2026-05-14

Scope reviewed:

- `css/tokens.css`
- `css/components.css`
- `css/scenes.css`
- `css/fairy-journeys.css`
- `css/reference.css`
- `index.html`
- `fairy-journeys.html`
- `reference.html`
- existing design-system docs in `docs/`
- live GitHub Pages renders for `reference.html` and `fairy-journeys.html`

## Executive verdict

The main mistake was **not aesthetic direction**. The main mistake was **allowing authored screen composition to outrun system discipline**.

The project already has a strong core:

- coherent color grammar
- recognizable heraldic / artifact identity
- bounded image-slot policy moving in the right direction
- improved manual/reference discipline

But the system is still not self-protecting enough to reliably generate multiple different strong sites without re-solving layout, hierarchy, and responsive behavior by taste.

In short:

- the **foundation is valid**
- the **component contract is incomplete**
- the **recipe layer is under-specified**
- the **page-local layer is doing too much system work**

## What remains valid

Preserve these as core:

### 1. Visual direction

Keep:

- heraldic fantasy / artifact UI
- plaque / frame / bevel shape language
- dark wood / night shell as structure
- parchment as reading surface, not wallpaper
- gold as value / command emphasis
- mana as rare focus / consequence accent

Reason:

This direction is already distinct and avoids generic SaaS-with-fantasy-paint failure.

### 2. Token philosophy

Keep:

- primitive -> scale -> semantic layering in `tokens.css`
- semantic surface aliases
- explicit shape tokens and bevel vocabulary
- authored spacing / measure tokens

Reason:

The token file already behaves like a real system contract, even if some rules need tightening.

### 3. Bounded image-slot policy

Keep:

- generated assets only inside named slots
- CSS owns hierarchy, layout, labels, states, and fallback
- no readable text inside generated assets

Reason:

This is the right long-term Images 2.0 stance. The problem is not the policy; the problem is that hierarchy and recipe contracts are not yet strong enough around it.

### 4. Reference as primary source of truth

Keep:

- `reference.html` as the design-system manual
- decision-table direction
- menu-shell contract documentation
- art-slot + fallback rules

Reason:

The reference page is now moving in the right direction. It should be expanded as the operational source of truth, not replaced.

## What the real system mistake was

### 1. Shared components were defined before shared recipes were truly closed

Evidence:

- `components.css` contains useful primitives such as `.menu-screen-shell`, `.command-slab`, `.menu-side-rail`, `.menu-save-slot`, and `.menu-route-index`.
- `fairy-journeys.html` still requires substantial page-local choreography in `css/fairy-journeys.css`.
- The page works partly as a design system specimen and partly as a hand-authored scene.

Impact:

- the system can express a look, but not yet reliably produce a screen recipe
- future pages will still depend on design intuition more than contracts

Correction:

Treat **screen recipes** as a first-class system layer between components and page-local composition.

### 2. Hierarchy rules are described, but not enforced strongly enough

Evidence:

- docs repeatedly say one dominant action should lead
- live Fairy page still shows too many first-screen competitors
- on mobile, rails, quick controls, route index, title, and command slab still all ask for attention

Impact:

- the system has a direction, but not a strong hierarchy governor
- screens can remain atmospheric while becoming unreadable or overly ceremonial

Correction:

Add explicit hierarchy contracts:

- one dominant command zone
- one secondary support layer
- one optional tertiary layer
- everything else must defer or move below the fold

### 3. Page-local composition still carries system responsibilities

Evidence:

- `css/fairy-journeys.css` defines not only scene choreography, but also many practical control-density, title-scale, and layout-pressure decisions
- the page-local file still solves problems that should belong to recipes or responsive contracts

Impact:

- new screens will repeat the same mistakes differently
- composition bugs will appear as “page issues” even when the real fault is upstream

Correction:

Move recurring rules out of scene files into:

- recipe contracts
- responsive rules
- text limits
- frame-weight rules

### 4. Responsive behavior is treated as patching, not as contract

Evidence:

- mobile issues were discoverable by screenshot, but the system did not prevent them
- there is no strict first-screen budget for menu-like screens
- there is no strong rule for what collapses first on mobile

Impact:

- mobile remains a late-stage negotiation
- richly framed screens keep overgrowing before being compressed

Correction:

Define responsive contracts per recipe, not per page.

### 5. Typography is directionally right but still under-governed

Evidence:

- global display and heading tracking remain negative in `tokens.css`
- compact command surfaces and plaques still depend on manually tuned text behavior
- docs warn about mobile text pressure, but the contract is not fully encoded

Impact:

- type can still become ceremonially heavy before it stays usable
- the serif voice is strong, but the rules are too permissive

Correction:

Reduce or narrow shared negative tracking and formalize per-surface text limits:

- command labels
- plaque labels
- rail metadata
- reading fields
- ceremonial headings

### 6. Language lanes are still partially implicit

Evidence:

- product pages use Russian, while system/reference docs use English
- that split is sensible, but not fully formalized as a reusable rule

Impact:

- future pages may drift into mixed-language UI
- labels can feel authored in one place and placeholder-like in another

Correction:

Define a simple language contract:

- product UI: Russian
- design system / internal docs: English
- no mixed ceremonial/product labels inside one product screen

## What is missing at the system level

These are the missing contracts blocking scale:

### Missing 1. Recipe layer

The system needs explicit reusable recipes such as:

- MenuScreenRecipe
- DossierReadingRecipe
- RitualThresholdRecipe
- RouteBoardRecipe

Each recipe should define:

- required components
- allowed optional layers
- dominance order
- mobile collapse order
- forbidden combinations

### Missing 2. Frame-weight hierarchy

The system needs named frame roles:

- background frame
- content frame
- command frame
- ritual frame

Without this, multiple framed elements keep competing with equal mass.

### Missing 3. Material role matrix

Need a stricter matrix for:

- wood
- brass/gold
- parchment
- stone
- mana
- wax
- moss

Each needs:

- use for
- do not use for
- allowed emphasis level

### Missing 4. Responsive contract per recipe

Need explicit rules such as:

- dominant command visible in first viewport
- route index demotes before command stack compresses
- side rails downgrade before title and command stack lose clarity
- quick utility commands become a drawer, row, or delayed layer before micro-text is allowed

### Missing 5. Text-role limits

Need hard caps by surface:

- command labels
- secondary command lines
- plaque labels
- rail metadata
- reading prose
- ritual copy

### Missing 6. State matrix beyond buttons

Need explicit shared states for:

- current route step
- locked route step
- completed route step
- active save slot
- disabled command
- warning threshold
- ceremonial irreversible action

### Missing 7. Object-icon taxonomy

The system needs a small shared icon family:

- compass
- scroll
- seal
- key
- lantern
- crest
- route marker
- archive tab

Without this, text plaques will keep carrying too much semantic load alone.

## Layer diagnosis

### Tokens

Status: strong base, needs tightening

Keep:

- color grammar
- shape vocabulary
- semantic alias layer

Fix:

- narrow negative tracking usage
- define more explicit type-role tokens for compact surfaces
- introduce recipe-oriented responsive tokens where useful

### Shared components

Status: promising but incomplete

Keep:

- menu-shell primitives
- route-badge pattern
- framed object logic

Fix:

- push more stable anatomy and state rules into shared layer
- reduce duplicated visual logic still solved in page CSS
- define component ownership more sharply

### Screen recipes

Status: main missing layer

Keep:

- current manual direction in `reference.html`

Fix:

- formalize recipes as reusable contracts
- make them the bridge between components and pages

### Page-local composition

Status: overloaded

Keep:

- backdrop choreography
- exact dramaturgy
- story/content sequencing

Fix:

- remove responsibility for shared hierarchy logic
- remove responsibility for responsive collapse order
- remove responsibility for repeated control-density decisions

## Correction plan

### Pass 1. Recipe Contract Pass

Priority: P0

Goal:

Create the missing recipe layer in `reference.html` and shared docs.

Deliver:

- 3-4 named screen recipes
- required/optional components
- hierarchy order
- mobile collapse order
- forbidden misuse cases

Why first:

Because without recipes, components remain too abstract and pages remain too hand-authored.

### Pass 2. Frame + Material Grammar Pass

Priority: P0

Goal:

Formalize frame-weight hierarchy and material-role matrix.

Deliver:

- frame role table
- material role table
- emphasis rules
- examples of misuse

Why second:

Because this is what stops future screens from becoming equally framed, equally loud, and equally ceremonial.

### Pass 3. Responsive Contract Pass

Priority: P0

Goal:

Define recipe-level responsive rules.

Deliver:

- first-screen budget rules
- downgrade order for rails, route indexes, utility controls
- minimum tap-size and label-legibility rules
- width-based acceptance checks

Why third:

Because mobile should be an upstream system constraint, not a late patch.

### Pass 4. Text Contract Pass

Priority: P1

Goal:

Turn typography guidance into enforceable system rules.

Deliver:

- text-role caps
- compact-surface label rules
- heading restraint rules
- language-lane rules

Why fourth:

Because text is currently polished, but not yet protected.

### Pass 5. Fairy Quest Recomposition Pass

Priority: P1

Goal:

Rebuild `fairy-journeys.html` using the tighter recipe contracts.

Deliver:

- one dominant command slab
- quieter route index
- downgraded rails on mobile
- reduced first-screen competition

Why only now:

Because this page should validate the corrected system, not continue acting as the place where the system is invented ad hoc.

### Pass 6. Route Board Pass

Priority: P1

Goal:

Make the middle Fairy section behave like a route board, not a designed essay.

Deliver:

- stateful route spine
- clearer current/locked/completed logic
- lore as annotation, not competing panel mass

### Pass 7. Object-Icon + Images 2.0 Later Pass

Priority: P2

Goal:

Expand the bounded asset system only after hierarchy and recipes are stable.

Deliver:

- object-icon taxonomy
- refined sprite sets or material studies
- optional new bounded slots only when justified by contracts

## Keep / Fix / Formalize Later

### Keep now

- heraldic fantasy identity
- token layering structure
- bounded image-slot discipline
- reference-manual direction
- menu-shell primitives

### Fix next

- recipe layer
- frame-weight hierarchy
- material role matrix
- responsive contract
- text-role limits
- language lanes

### Formalize later

- object-icon taxonomy
- wider state families
- expanded Images 2.0 material studies
- theme/faction variants

## Final conclusion

The system did not fail because it chose the wrong look.

It stumbled because it tried to scale a strong authored look **before closing the intermediate contracts** that make a design system reusable:

- recipe contracts
- hierarchy rules
- material roles
- responsive downgrade order
- text-role limits

So the correction is not to abandon the current direction.

The correction is to turn the current direction into a stricter instrument.

That means:

1. keep the core identity
2. formalize the missing middle layers
3. only then recompose Fairy and future pages through those contracts

This gives the best chance of producing multiple different strong sites in one coherent system, instead of one strong page plus many fragile variations.
