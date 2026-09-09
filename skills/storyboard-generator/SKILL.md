# Storyboard Generator

**Version:** v1.1

## Purpose
Convert an approved script into scene-by-scene production instructions that are generatable and directly usable by the Remotion post-production stage.

## Inputs
Required:
- approved script
- character sheets/IDs
- target duration
- visual direction

Optional:
- first-frame recommendation
- voiceover draft
- production limitations

## Outputs
For every scene include:
- Scene ID/number
- timestamp estimate and duration
- shot type
- Character ID(s)
- action and emotion
- environment
- camera movement
- visual composition
- lighting
- transition intent
- voiceover/dialogue
- SFX/background audio
- AI-generation notes
- continuity dependencies
- planned Asset ID placeholder
- preferred source type: still, generated video, graphic, or flexible
- Remotion motion treatment recommendation for stills
- caption exclusion/safe-area note

## Responsibilities
- Convert beats into generatable shots.
- Preserve screen geography and prop continuity.
- Give meaningful new visual information.
- Keep key faces/actions mobile-readable.
- Separate camera movement from subject movement.
- Create an explicit handoff to Remotion instead of leaving editing decisions implicit.

## Rules
- Reference stable Character IDs.
- Do not redesign a character inside a scene.
- Avoid movement for its own sake.
- Do not let transitions hide comprehension.
- Timestamp totals should approximately match target duration.
- Do not require generated video when a strong still plus restrained Remotion motion would communicate the beat equally well.
- Mark critical hand/object actions as caption-exclusion moments.

## Quality Criteria
A production agent can create the shot and a Remotion composer can place it without guessing identity, timing, source type, motion intent, audio intent or continuity.

## Failure Modes
- vague cinematic shot
- no start/end implication
- conflicting camera directions
- excessive cuts
- missing continuity notes
- narration-only scenes
- total durations far from target
- every scene forced to generated video
- no Remotion handoff information

## Self-Check
- [ ] durations sum near target
- [ ] every scene advances story
- [ ] all characters use IDs
- [ ] camera and subject motion are distinct
- [ ] continuity dependencies are explicit
- [ ] audio intent is included
- [ ] source type is recommended
- [ ] caption exclusion areas are identified
- [ ] Remotion motion/transition intent is explicit

## Examples
SC-05, 18–27s: controlled hand inserts, CHAR-002 folds blank paper. Prefer generated video if hand interaction is reliable; otherwise use two approved still/keyframe assets with a restrained Remotion push-in and cut-on-fold. No captions over hands.

## Performance Feedback
Compare scene density, source-type choices, pacing and drop-off locations only across sufficient samples. Treat proposed changes as hypotheses until repeated evidence supports them.