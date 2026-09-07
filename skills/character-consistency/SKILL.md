# Character Consistency

**Version:** v1.0

## Purpose
Create and enforce stable character identity specifications across storyboards and generation prompts.

## Inputs
Required:
- approved story/script
- list of characters

Optional:
- recurring-character library
- visual style
- age/casting constraints

## Outputs
For each character return:
- Character ID
- Role
- Approximate age
- Stable physical characteristics
- Face/features
- Hairstyle/color
- Body/build
- Default wardrobe
- Allowed wardrobe changes
- Accessories
- Default expressions
- Emotional range
- Distinctive movement/behavior
- Continuity lock
- Prohibited drift
- Concise prompt identity block

Also return a cast-level consistency checklist.

## Responsibilities
- Assign `CHAR-###` IDs.
- Separate identity traits from scene-specific emotion.
- Keep descriptions concise enough to repeat reliably.
- Lock continuity-critical clothing/props.

## Rules
- Do not encode stereotypes as personality.
- Do not change age/face/hair/signature wardrobe without story reason.
- Do not depend on celebrity lookalikes.
- Storyboards/prompts must reference Character IDs.

## Quality Criteria
Characters remain recognizable across shots while showing believable emotional change.

## Failure Modes
- overloaded appearance prose
- contradictory descriptors
- wardrobe drift
- ID reused for a different person
- emotion treated as permanent identity
- celebrity lookalike dependency

## Self-Check
- [ ] every important character has an ID
- [ ] stable traits are separate from scene traits
- [ ] continuity locks are explicit
- [ ] no real-person dependency
- [ ] prompt-ready identity block exists

## Examples
CHAR-001 — NIA, 17, oval face, short tight black curls, small silver studs, faded navy school cardigan, canvas backpack; lock curls/cardigan/backpack/earrings for the full story.

## Performance Feedback
Track visual QC failures such as face, hair, wardrobe, and accessory drift. Refine only traits that improve consistency without bloating prompts.
