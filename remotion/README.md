# Remotion Post-production Layer

This directory is the deterministic composition and rendering layer for Channel A. It begins after storyboard/source approval and does not replace writing, character design, generation, final QC, or human approval.

## Smoke-test vs active manifests

`remotion/smoke/default.json` exists only so repository CI can prove the Remotion composition loads before any active video reaches Stage 15. It does **not** consume a VID-#### ID.

Active production manifests live under:

```text
remotion/data/VID-####.json
```

After the 2026-09-09 production reset, VID-0001 is intentionally free until the first fresh production reaches the Remotion handoff.

## Executable data contract
Each active manifest contains dimensions, fps, total frames, scenes, Asset IDs, motion presets, captions, and audio cues.

Important distinctions:
- `cutIntent` — editorial meaning of the cut.
- `entryTransition` — executable visual behavior: `cut` or `fade`.
- `motionPreset` — static, slow push/pull, left/right pan, reaction hold, or custom.
- `caption.position` — top/middle/bottom safe placement.
- `caption.emphasis` — emphasized phrase within the caption.

Images and graphics with an `assetPath` render through `Img`; videos render through `OffthreadVideo` and are muted by default. Missing/unmapped assets render a production slate so incomplete media is obvious.

## Setup and validation

```bash
npm ci
npm run validate
```

If no active VID manifest exists yet, manifest validation reports that state and CI continues using the neutral smoke manifest.

For a production-ready VID-0001 mapping later:

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
npm run render:vid-0001
```

Candidate outputs belong under `renders/` and must pass `workflows/render-validation.md` before Quality Control.

## Local source assets
Place local source files under `public/assets/VID-####/`. Manifest paths are relative to `public/` unless they are HTTP(S) URLs. Binary assets and renders remain ignored by Git.

## Architecture
- `index.ts` — Remotion entry point
- `Root.tsx` — composition registry and neutral default props
- `types.ts` — typed manifest contract
- `compositions/` — reusable components
- `smoke/` — repository validation props only
- `data/` — active per-video manifests

## Editing principle
Use code to make approved assets precise and reproducible, not to hide weak storytelling under effects. Hard cuts, holds, and silence remain first-class choices.
