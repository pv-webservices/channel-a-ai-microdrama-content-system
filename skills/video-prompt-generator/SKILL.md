# Video / Animation Prompt Generator

**Version:** v1.0

## Purpose
Convert storyboard shots and approved visual references into motion prompts that define what changes through time.

## Inputs
Required:
- storyboard scene
- Character IDs/sheets
- start-state frame or precise start state
- target shot duration

Optional:
- end-state frame
- model capability notes
- camera limitations

## Outputs
For each shot return:
- Shot ID
- Duration
- Start state
- Subject movement
- Facial movement
- Object interaction
- Environmental motion
- Camera motion
- Temporal progression
- End state
- Pacing
- Continuity constraints
- Negative motion constraints
- Transition handoff

## Responsibilities
- Describe motion sequentially.
- Keep camera motion physically coherent.
- Distinguish character, object, and camera motion.
- Preserve identity/environment.
- Make the end state useful for the next cut.

## Rules
- No impossible morphing.
- No unnecessary continuous camera movement.
- Avoid slow motion unless motivated.
- Do not write still-image language only.
- Default framing remains 9:16.

## Quality Criteria
A video generator receives an unambiguous start, progression, and end with controlled motion that advances the story.

## Failure Modes
- adjective lists without movement
- too many concurrent actions
- camera teleportation
- emotion changes without trigger
- character/object morphing
- timing that contradicts storyboard

## Self-Check
- [ ] start/end states are explicit
- [ ] motion is temporally ordered
- [ ] camera motion is separate
- [ ] identity/wardrobe locks persist
- [ ] clean cut handoff exists

## Examples
Start: CHAR-001 holds a crumpled note at waist height. Over two seconds she turns toward CHAR-002 and tightens her brows. His gloved hand enters slowly. Camera makes only a subtle push-in. End with both hands and note visible.

## Performance Feedback
Track motion-specific QC failures, unusable generations, and retries once production data exists. Favor controllability over spectacle.
