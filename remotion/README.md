# Remotion Video Construction Layer

This directory is the deterministic video-construction and rendering layer for Channel A. It begins after storyboard/still-image approval and does not replace writing, character design, image generation, final QC, or human approval.

**Active Channel-A productions are image/graphic only. AI video-generation models and generated source-video assets are prohibited.**

## Smoke-test vs active manifests
`remotion/smoke/default.json` exists only so repository CI can prove the Remotion composition loads before any active video reaches Stage 15. It does **not** consume a VID-#### ID.

Active production manifests live under:

```text
remotion/data/VID-####.json
```

## Executable data contract
Each active manifest contains dimensions, fps, total frames, scenes, Asset IDs, motion presets, captions, and audio cues.

Important distinctions:
- `cutIntent` — editorial meaning of the cut.
- `entryTransition` — executable visual behavior: `cut` or `fade`.
- `motionPreset` — static, slow push/pull, left/right pan, reaction hold, or custom.
- `caption.position` — top/middle/bottom safe placement.
- `caption.emphasis` — emphasized phrase within the caption.

Active visual assets use `assetKind: image` or `assetKind: graphic` and render through `Img`. `assetKind: none` is allowed only while a scene is incomplete. The manifest validator rejects `video` asset kinds.

## Setup and validation

```bash
npm ci
npm run validate
```

If no active VID manifest exists yet, manifest validation reports that state and CI continues using the neutral smoke manifest.

For a production-ready VID-0001 mapping:

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
npm run render:vid-0001
```

Candidate outputs belong under `renders/` and must pass `workflows/render-validation.md` before Quality Control.

## Local source assets
Place local source images/graphics under `public/assets/VID-####/`. Manifest paths are relative to `public/` unless they are HTTP(S) URLs. Binary assets and renders remain ignored by Git.

## Architecture
- `index.ts` — Remotion entry point
- `Root.tsx` — composition registry and neutral default props
- `types.ts` — typed image-only manifest contract
- `compositions/` — reusable components
- `smoke/` — repository validation props only
- `data/` — active per-video manifests

## Editing principle
Use code to turn approved still assets into precise, reproducible motion design—not to hide weak storytelling under effects. Hard cuts, slow pushes/pulls, pans, reaction holds, additional still keyframes, captions and silence remain first-class choices.
