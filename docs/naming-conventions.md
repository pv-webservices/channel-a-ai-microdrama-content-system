# Naming Conventions

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

IDs are stable. Do not recycle deleted IDs for unrelated content.

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
- video-prompts.md
- voiceover.md
- sound-design.md
- remotion-plan.md
- render-validation.md
- metadata.md
- qc-report.md

## Remotion source assets
Local binary assets are not committed by default. When composing locally, use public/assets/VID-####/ and stable filenames that include or map cleanly to Asset IDs.

Do not use vague final-final-2 filenames as authoritative identifiers. Production documents should reference Asset IDs so a file can be replaced without breaking editorial traceability.

## Skill names
Keep skill directory names stable while the Skill document and Git history record versions.

## Dates
Prefer ISO YYYY-MM-DD.

## Files
Use lowercase kebab-case except canonical top-level docs such as README.md and PROJECT.md.