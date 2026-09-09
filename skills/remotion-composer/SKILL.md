# Remotion Composer

**Version:** v1.0

## Purpose
Translate an approved storyboard and approved media/audio assets into a deterministic, frame-accurate Remotion composition for the final short-form video.

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
- frame ranges for every scene
- motion treatment per scene
- transition plan
- caption timing/placement plan
- audio cue map
- required props/data manifest changes
- reusable component changes only when justified
- render command/path
- unresolved asset or timing blockers

## Responsibilities
- Convert seconds to exact frame ranges.
- Preserve approved story order and causal clarity.
- Choose restrained motion treatment for stills.
- Sequence video clips without accidental source-audio leakage.
- Synchronize voice, captions, SFX, ambience and music intent.
- Keep critical actions clear of captions.
- Preserve 9:16 mobile hierarchy and safe areas.
- Reuse motion components instead of inventing one-off effects without reason.

## Rules
- Remotion does not rewrite the story.
- Do not fabricate missing media; report blockers.
- Do not change approved scene order silently.
- A timing change affecting story comprehension must be documented upstream.
- Motion must serve attention, emotion or comprehension.
- Hard cuts are preferred over decorative transitions when uncertain.
- Never add copyrighted music or unapproved media.
- Generated renders remain outputs, not source-of-truth production documents.

## Quality Criteria
The composition is traceable to storyboard Scene IDs and source Asset IDs, frame-accurate, mobile-readable, emotionally paced, audio-aware, reproducible and ready for render validation.

## Failure Modes
- turning Remotion into a generic effects layer
- excessive zoom/pan on every still
- arbitrary transition packs
- captions covering faces/hands/key props
- dialogue/music competition
- hidden timing drift from storyboard
- source clip audio accidentally mixed
- untraceable asset filenames
- rendering before required assets exist

## Self-Check
- [ ] all scenes mapped
- [ ] frame totals match target
- [ ] every asset is approved and traceable
- [ ] still motion is restrained
- [ ] caption safe area checked
- [ ] audio cues are timecoded
- [ ] first and final frames are intentional
- [ ] unresolved blockers are explicit
- [ ] render is handed to Render Validator

## Examples
Scene 05: 270 frames at 30fps. Use the approved hand-fold visual sequence. No decorative transition. Keep captions absent during the critical fold. Paper SFX leads the reveal; camera treatment remains a subtle push-in only if the source is a still.

## Performance Feedback
Track render-level editing patterns only after multiple comparable videos. Examples include whether denser cuts, caption styles or still-motion treatments correlate with retention. Do not credit Remotion effects for performance when hook/story/asset quality also changed.