# Naming Conventions

## Active production ID reset
The active production namespace was reset on **2026-09-09** at the user's direction.

Active production now starts fresh at:
- Video: VID-0001
- Story: STORY-0001

Artifacts created before the reset are preserved under `archive/pre-reset-2026-09-09/` and do **not** reserve IDs in the active namespace.

After this reset, active IDs are stable and must not be recycled for unrelated active productions.

## IDs
- Video: VID-0001, VID-0002
- Story: STORY-0001, STORY-0002
- Experiment: EXP-001, EXP-002
- Character: CHAR-001, CHAR-002
- Scene: SC-01, SC-02 within one video
- Asset: AST-VID0001-SC01 or another stable descriptive Asset ID
- Caption cue: CAP-01, CAP-02
- Audio cue: AUD-01, AUD-02
- Learning: LRN-001, LRN-002

## Video project directory
VID-0001/

Recommended artifacts:
- concept.md
- concept-score.md
- hooks.md
- script.md
- retention-review.md
- characters.md
- storyboard.md
- image-prompts.md
- remotion-motion-plan.md
- voiceover.md
- sound-design.md
- remotion-plan.md
- render-validation.md
- metadata.md
- qc-report.md

## Remotion source assets
Local binary assets are not committed by default. When composing locally, use `public/assets/VID-####/` and stable filenames that include or map cleanly to Asset IDs.

Active visual source files are images/graphics only. Do not store generated video clips for active production.

Do not use vague final-final-2 filenames as authoritative identifiers. Production documents should reference Asset IDs so a file can be replaced without breaking editorial traceability.

## Skill names
Keep active Skill directory names stable while the Skill document and Git history record versions. Retired Skill paths should clearly identify themselves as deprecated.

## Dates
Prefer ISO YYYY-MM-DD.

## Files
Use lowercase kebab-case except canonical top-level docs such as README.md and PROJECT.md.
