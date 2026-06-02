# V2 Library Decision Pass - 2026-06-02

## Purpose

Decide whether the current V2 system should become an npm package/formal component library or remain a controlled production recipe kit.

## Decision

Keep V2 as a repo-native production recipe kit.

Do not extract an npm package yet.

## Evidence

- Shared CSS layers are already split and usable.
- `css/v2.recipes.css` remains the largest active workshop layer.
- Recent production pages still add page-local classes:
  - `.v2-antv2-*`
  - `.v2-note-*`
  - `.v2-brief-*`
- The system has component-like patterns, but not stable package APIs.
- Static GitHub Pages deployment remains dependency-free and effective.

## Next Pass

Run a promotion audit:

- compare recent production surfaces;
- identify 1-2 repeated patterns;
- move only stable patterns into shared components;
- verify every touched page with smoke and visual capture.

## Verification

Docs-only pass.

- `git diff --check`

