# Remotion Scene Motion Planner

**Version:** v1.0

## Purpose
Convert an approved storyboard and planned/approved still keyframes into deterministic Remotion motion instructions. This Skill replaces AI video-prompt generation.

## Inputs
Required:
- approved storyboard scene
- Scene ID / Asset ID
- Character/prop continuity rules
- target duration and fps
- planned or approved still image

Optional:
- additional still keyframes
- caption exclusion zones
- audio cue intent
- composition limitations

## Outputs
For every scene return:
- Scene ID
- duration and frame count
- visual Asset ID(s)
- motion preset
- optional custom numeric motion
- start scale / end scale
- start X/Y / end X/Y
- cut intent
- entry transition
- caption exclusion
- whether an additional still keyframe is required
- Remotion handoff note

## Responsibilities
- Turn narrative emphasis into executable still-image motion.
- Keep transforms subtle enough to preserve image quality.
- Use hard cuts/holds when motion adds no value.
- Identify beats that require another still rather than pretending a single image can animate an action.
- Preserve faces, hands, props and screen geography.
- Keep all motion reproducible in code.

## Rules
- **Never call, recommend, or prepare prompts for an AI video-generation model.**
- Active visual sources are still images/graphics only.
- Default `entryTransition` is `cut`.
- Use `fade` only with explicit editorial justification.
- Prefer built-in presets before custom motion.
- Custom motion must use numeric start/end values.
- Avoid zooming far enough to crop a required prop or face.
- Do not fabricate character/body/object movement inside a still.
- If temporal change is essential, request one or more additional still keyframes.
- Default canvas is 9:16.

## Quality Criteria
A Remotion developer can implement the scene without interpreting vague cinematic language and without requiring any generated video source.

## Failure Modes
- describing actor animation that cannot exist in a still
- recommending image-to-video generation
- excessive zoom/pan
- motion that crops story-critical objects
- contradictory X/Y directions
- decorative transitions without story reason
- missing frame counts
- no fallback when one still is insufficient

## Self-Check
- [ ] image/graphic sources only
- [ ] frame count matches storyboard
- [ ] motion preset is executable
- [ ] custom values are numeric when used
- [ ] key faces/props stay visible
- [ ] extra keyframe requirement is explicit when needed
- [ ] no AI video model dependency
- [ ] clean cut handoff exists

## Example
SC-04, 75 frames: use the approved reaction still. `motionPreset: reaction-hold`; `entryTransition: cut`; keep eyes and drawing clear. Do not synthesize an eye-turn with a video model. Let adjacent stills and sound establish the decision.

## Performance Feedback
Track whether motion choices improve clarity and whether extra still-keyframe requests reduce confusing scenes. Change defaults only after repeated production evidence.
