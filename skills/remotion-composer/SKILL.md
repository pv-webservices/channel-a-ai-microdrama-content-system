# Remotion Composer

**Version:** v1.1

## Purpose
Translate an approved storyboard and approved media/audio assets into a deterministic, frame-accurate Remotion composition.

## Inputs
Required:
- approved storyboard with Scene IDs and timing
- approved visual assets with Asset IDs
- target duration, fps, dimensions and platform

Optional:
- voice/dialogue audio
- sound-design assets/map
- caption cues
- first-frame recommendation
- experiment constraints

## Outputs
Return:
- Remotion composition plan
- scene-to-asset map
- frame ranges
- executable motion treatment
- editorial cut intent
- visual entry-transition behavior when justified
- caption timing/position/emphasis plan
- audio cue map
- manifest changes
- render command/path
- unresolved blockers

## Responsibilities
- Convert seconds to exact frames.
- Preserve story order and causal clarity.
- Distinguish `cutIntent` from visual transition effects.
- Choose restrained executable motion for stills.
- Use custom motion only with explicit numeric start/end values.
- Sequence source video muted unless its audio is separately approved.
- Synchronize voice, captions and sound cues.
- Keep critical actions clear of captions using explicit caption positions.
- Preserve 9:16 hierarchy and safe areas.
- Run manifest validation before rendering.

## Rules
- Remotion does not rewrite the story.
- Do not fabricate missing media or paths.
- Do not silently change scene order/timing.
- A match cut is an editorial cut, not permission to add a decorative transition.
- `fade` is used only when explicitly justified; `cut` is the default entry transition.
- Motion must serve attention, emotion or comprehension.
- Never add copyrighted or unapproved media.
- Generated renders are outputs, not the editorial source of truth.

## Quality Criteria
The composition is traceable to storyboard Scene IDs/Asset IDs, frame-accurate, mobile-readable, reproducible, audio-aware and passes repository manifest validation.

## Failure Modes
- treating cut intent as an effects preset
- excessive zoom/pan
- arbitrary fades
- captions covering faces/hands/key props
- emphasis metadata that is not visible in the render
- untraceable asset filenames
- source clip audio leaking into the mix
- rendering with `assetKind: none` as if it were publish-ready

## Self-Check
- [ ] all scenes mapped or explicitly marked pending
- [ ] frame totals match target
- [ ] production-ready render has no pending visual assets
- [ ] motion preset is executable
- [ ] cut intent and visual transition are separated
- [ ] captions have safe positions and valid emphasis
- [ ] audio cues are timecoded
- [ ] first/final frames intentional
- [ ] `npm run validate:manifests` passes
- [ ] render handed to Render Validator

## Examples
SC-05: use `cutIntent: cut-on-fold`, `entryTransition: cut`, and a restrained slow push-in only if the source is a still. Place the realization caption at the top because the hands are the critical lower-frame action.

## Performance Feedback
Evaluate editing patterns only after multiple comparable videos. Do not attribute performance to Remotion effects when hook, story or source-asset quality also changed.
