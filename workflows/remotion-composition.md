# Remotion Composition Workflow

Use this workflow only after the script is approved and visual/audio source assets for the target cut are available.

## Inputs
- approved storyboard with stable Scene IDs
- approved image/video assets with Asset IDs
- approved voice/dialogue files
- sound-design map and available audio assets
- caption copy/timing
- first-frame recommendation
- target duration, fps, dimensions and platform

## Procedure
1. Create or update the per-video Remotion composition plan.
2. Map every Scene ID to an Asset ID or explicitly mark it as a generated graphic/text-only scene.
3. Convert timestamps to frames using the target fps.
4. Keep storyboard timing authoritative unless a documented edit decision changes it.
5. Define motion treatment for stills: static, slow push-in, pull-out, pan, reaction hold or custom.
6. Define transitions only when they preserve comprehension; hard cuts remain valid.
7. Add dialogue/voiceover and timecoded sound cues.
8. Add captions with mobile-safe placement and emphasis rules.
9. Preview in Remotion Studio and inspect the first frame, every transition, every reveal and the ending.
10. Render a candidate MP4 to renders/.
11. Send the candidate render to Render Validation.

## Editing principles
- Story clarity beats motion density.
- Use generated video where meaningful movement matters; use Remotion motion on strong stills when a full generated clip adds little.
- Do not animate every layer.
- Do not stretch a weak shot merely to fit narration; revise the timing or asset.
- Silence and holds are intentional editing tools.
- Keep dialogue intelligible above music/SFX.
- Never hide a key hand/object action behind captions.

## Required outputs
- production/<VID>/remotion-plan.md
- remotion/data/<VID>.json or equivalent props
- updated composition code only when reusable components are insufficient
- candidate render path
- handoff to Render Validation