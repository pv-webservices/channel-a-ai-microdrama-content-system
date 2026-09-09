# Remotion Post-production Layer

This directory is the deterministic composition and rendering layer for Channel A. It begins after storyboard/source approval and does not replace writing, character design, generation, final QC, or human approval.

## Executable data contract
Each `remotion/data/VID-####.json` manifest contains dimensions, fps, total frames, scenes, Asset IDs, motion presets, captions, and audio cues.

Important distinctions:
- `cutIntent` — editorial meaning of the cut, e.g. `match-cut`, `cut-on-fold`, `cut-on-glance`.
- `entryTransition` — executable visual behavior. Currently supported: `cut`, `fade`.
- `motionPreset` — executable motion. Supported: static, slow push/pull, left/right pan, reaction hold, and custom.
- `caption.position` — executable top/middle/bottom safe placement.
- `caption.emphasis` — emphasized phrase rendered within the caption.

Images and graphics with an `assetPath` render through `Img`; videos render through `OffthreadVideo` and are muted by default. Missing/unmapped assets render a production slate so incomplete media is obvious.

## Setup and validation

```bash
npm ci
npm run validate
```

Individual checks:

```bash
npm run validate:manifests
npm run typecheck
npm run remotion:check
```

For a production-ready visual mapping:

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
```

## Preview and render

```bash
npm run studio
npm run render:vid-0001
```

Candidate outputs belong under `renders/` and must pass `workflows/render-validation.md` before Quality Control.

## Local source assets
Place local source files under `public/assets/VID-####/`. Manifest paths are relative to `public/` unless they are HTTP(S) URLs. Binary assets and renders remain ignored by Git.

## Architecture
- `index.ts` — Remotion entry point
- `Root.tsx` — composition registry and metadata calculation
- `types.ts` — typed manifest contract
- `compositions/` — reusable components
- `data/` — per-video manifests

## Editing principle
Use code to make approved assets precise and reproducible, not to hide weak storytelling under effects. Hard cuts, holds, and silence remain first-class choices.
