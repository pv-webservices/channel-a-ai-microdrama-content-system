# Remotion Post-production Layer

This directory is the deterministic composition and rendering layer for Channel A.

Remotion begins after the storyboard and source assets are approved. It does not replace Idea Discovery, writing, retention review, character design, visual generation, voice generation, final QC or human approval.

## What Remotion owns
- frame-accurate scene sequencing
- image/video placement
- restrained motion for still images
- transitions and holds
- captions and mobile-safe placement
- voice/dialogue/SFX/ambience/music cue placement
- first-frame and ending treatment
- reusable motion components
- final candidate rendering

## Data contract
Each video should have a remotion/data/VID-####.json manifest containing dimensions, fps, total frames, Scene IDs, Asset IDs, optional source paths, motion presets, captions and audio cues.

Scene IDs must match the storyboard. Asset IDs must match approved production assets.

Local source files should live under public/assets/VID-####/. Paths in the manifest are relative to public/ unless they are remote HTTP(S) URLs.

Generated source-video audio is muted by default in the composition so the approved audio plan remains authoritative.

## Missing asset behavior
If an Asset ID has no assetPath, the composition renders a production slate for that scene instead of pretending a final asset exists. This keeps timing review possible while making missing media obvious.

## Setup
Run:
- npm install
- npm run typecheck
- npm run studio

## Candidate render
VID-0001: npm run render:vid-0001

Candidate outputs belong under renders/ and must pass workflows/render-validation.md before Quality Control.

## Architecture
- index.ts — Remotion entry point
- Root.tsx — composition registry and metadata calculation
- types.ts — stable per-video composition contract
- compositions/ — reusable compositions/components
- data/ — per-video render manifests

## Editing principle
Use Remotion to make approved assets clearer, more precise and more cinematic—not to hide weak storytelling under effects. Hard cuts, holds and silence are valid choices.

## Scalability
Root.tsx uses calculateMetadata so duration, fps and dimensions can come from per-video props. The same MicroDramaShort composition can therefore support different short durations without duplicating the core composition.