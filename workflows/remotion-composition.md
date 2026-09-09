# Remotion Composition Workflow

Use this workflow only after the script is approved and source assets for the target cut are available.

## Inputs
- approved storyboard with stable Scene IDs
- approved visual Asset IDs
- voice/dialogue files where used
- sound-design map/assets
- captions
- first-frame recommendation
- target duration/fps/dimensions/platform

## Procedure
1. Create/update the per-video composition plan.
2. Map every Scene ID to a stable Asset ID; pending scenes remain `assetKind: none` and are not publish-ready.
3. Convert timestamps to exact frames.
4. Keep storyboard timing authoritative unless a documented edit decision changes it.
5. Set `motionPreset`; custom motion requires explicit numeric start/end values.
6. Record editorial `cutIntent` separately from executable `entryTransition` (`cut` or justified `fade`).
7. Add voice/dialogue/SFX/ambience/music as explicit audio cues. Do not rely on source-video audio.
8. Add caption position and emphasis. Protect critical hands/faces/props.
9. Run `npm run validate:manifests`.
10. Before a real candidate, run the same validator with `--require-assets` for that video.
11. Preview in Remotion Studio.
12. Render a candidate to `renders/`.
13. Send the candidate to Render Validation.

## Editing principles
- Story clarity beats motion density.
- Use generated video when meaningful movement matters.
- Use strong stills plus restrained Remotion motion where full video generation adds little.
- Hard cuts are valid and often preferred.
- Silence and reaction holds are intentional tools.
- Never stretch weak material merely to fit narration.

## Required outputs
- `production/<VID>/remotion-plan.md`
- `remotion/data/<VID>.json`
- candidate render path
- Render Validation handoff
