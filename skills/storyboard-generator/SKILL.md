# Storyboard Generator

**Version:** v1.0

## Purpose
Convert an approved script into scene-by-scene production instructions while preserving clarity and continuity.

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
- Scene number
- Timestamp estimate
- Duration
- Shot type
- Character ID(s)
- Action
- Facial expression/emotion
- Environment
- Camera movement
- Visual composition
- Lighting
- Transition
- Voiceover/dialogue
- Sound effects
- Background audio
- AI-generation notes
- Continuity dependencies

## Responsibilities
- Convert beats into generatable shots.
- Preserve screen geography and prop continuity.
- Give meaningful new visual information.
- Keep key faces/actions mobile-readable.
- Separate camera movement from subject movement.

## Rules
- Reference stable Character IDs.
- Do not redesign a character inside a scene.
- Avoid movement for its own sake.
- Do not let transitions hide comprehension.
- Timestamp totals should approximately match target duration.

## Quality Criteria
A production agent can generate each shot without guessing who, where, what action, emotion, continuity, or handoff is required.

## Failure Modes
- vague "cinematic shot"
- no start/end implication
- conflicting camera directions
- excessive cuts
- missing continuity notes
- narration-only scenes
- total durations far from target

## Self-Check
- [ ] durations sum near target
- [ ] every scene advances story
- [ ] all characters use IDs
- [ ] camera and subject motion are distinct
- [ ] continuity dependencies are explicit
- [ ] audio intent is included

## Examples
Scene example: 00:07–00:11, medium close-up, CHAR-001 pauses at a paper crane, restrained confusion, subtle push-in, soft corridor light, paper rustle, preserve wardrobe and prop position.

## Performance Feedback
Later compare scene density, pacing patterns, and drop-off locations. Treat changes as hypotheses unless repeated evidence supports them.
