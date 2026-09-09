# Remotion Composition Workflow

Use this workflow only after the script is approved and still-image/graphic source assets for the target cut are available.

## Inputs
- approved storyboard with stable Scene IDs
- approved visual Asset IDs (image/graphic only)
- approved Remotion motion plan
- voice/dialogue files where used
- sound-design map/assets
- captions
- first-frame recommendation
- target duration/fps/dimensions/platform

## Procedure
1. Create/update the per-video composition plan.
2. Map every Scene ID to a stable image/graphic Asset ID; pending scenes remain `assetKind: none` and are not publish-ready.
3. Convert timestamps to exact frames.
4. Keep storyboard timing authoritative unless a documented edit decision changes it.
5. Apply the Stage-11 Remotion motion plan using `motionPreset`; custom motion requires explicit numeric start/end values.
6. Record editorial `cutIntent` separately from executable `entryTransition` (`cut` or justified `fade`).
7. Add voice/dialogue/SFX/ambience/music as explicit audio cues.
8. Add caption position and emphasis. Protect critical hands/faces/props.
9. Run `npm run validate:manifests`.
10. Before a real candidate, run the same validator with `--require-assets`.
11. Preview in Remotion Studio.
12. Render a candidate to `renders/`.
13. Send the candidate to Render Validation.

## Editing principles
- Story clarity beats motion density.
- Every active visual source is an approved still image or graphic.
- Create motion with restrained scale, translation, holds, cuts, justified fades, and optional layered/parallax treatment.
- If a beat cannot be communicated with one still, use additional approved keyframes rather than an AI video generator.
- Hard cuts are valid and often preferred.
- Silence and reaction holds are intentional tools.
- Never stretch weak material merely to fit narration.

## Required outputs
- `production/<VID>/remotion-plan.md`
- `remotion/data/<VID>.json`
- candidate render path
- Render Validation handoff
