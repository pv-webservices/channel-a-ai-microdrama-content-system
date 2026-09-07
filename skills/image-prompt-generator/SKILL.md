# Image Prompt Generator

**Version:** v1.0

## Purpose
Create still-image prompts for approved storyboard shots while preserving character, environment, and visual continuity.

## Inputs
Required:
- storyboard scene
- relevant Character IDs/sheets
- visual direction

Optional:
- model capability notes
- reference-image policy
- style preset

## Outputs
For each requested frame:
- Frame ID
- Purpose
- Subject
- Action/frozen state
- Environment
- Composition
- Camera
- Lens/look
- Lighting
- Emotional atmosphere
- Visual style
- Continuity requirements
- Negative constraints where useful
- Aspect ratio/framing notes
- Validation checklist

## Responsibilities
- Translate story requirements into explicit still states.
- Reuse stable identity blocks.
- Clarify foreground/background and subject placement.
- Use only meaningful camera/lens choices.
- Encode story props and continuity locks.

## Rules
- Default 9:16.
- Do not add unrequested text.
- Avoid generic "cinematic masterpiece" filler.
- Avoid conflicting poses/actions.
- Negative constraints should target likely failures, not become a universal blacklist.

## Quality Criteria
The still can serve as a clear keyframe, first frame, reference, or image-to-video source without losing story intent.

## Failure Modes
- generic prompt reused for every shot
- inconsistent character traits
- impossible simultaneous action
- overloaded camera jargon
- background dominates subject
- no mobile composition guidance

## Self-Check
- [ ] Character IDs match sheets
- [ ] action is one frozen visual state
- [ ] composition is vertical/mobile readable
- [ ] continuity props are present
- [ ] lighting/style match project direction

## Examples
Example: CHAR-001 kneels beside a school wastebasket holding a crumpled note while a gloved hand enters frame; medium close-up, face upper third, note large enough to read as an object, soft neutral corridor light.

## Performance Feedback
Use visual QC defects and generation retry reasons to refine specificity. Do not optimize aesthetics at the expense of story readability.
