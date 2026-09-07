# Quality Control

**Version:** v1.0

## Purpose
Perform strict final review of story, retention, visuals, audio, and platform readiness before human final approval.

## Inputs
Required:
- final assembled video or complete final artifact set
- approved script/storyboard
- character sheets
- platform target

Optional:
- captions
- metadata
- platform-specific checklist

## Outputs
Return:
- Decision: `PASS`, `PASS WITH CHANGES`, or `FAIL`
- Severity summary
- Findings table: category, timestamp/artifact, issue, severity, required action
- Story review
- Retention review
- Visual review
- Audio review
- Platform/compliance review
- Human-review questions
- Recheck items

## Responsibilities
Review at minimum:

Story:
- clear conflict
- satisfying payoff
- emotional comprehension
- coherent motivation
- unnecessary exposition
- meaningful ending

Retention:
- first 1–3 seconds
- visual progression
- slow sections
- predictability
- escalation

Visual:
- character continuity
- anatomy
- environment continuity
- AI artifacts
- camera consistency
- mobile composition

Audio:
- voice timing
- clipping
- redundant narration
- music balance
- useful silence

Platform:
- 9:16
- caption safe area
- watermark
- reused-content risk
- copyrighted assets
- synthetic-media representation
- repetitive-template risk

## Rules
- PASS only when no material issue remains.
- PASS WITH CHANGES for bounded fixable issues.
- FAIL for material story/compliance/continuity failure.
- Do not invent platform policy.
- Human final approval is always required.

## Quality Criteria
Findings are specific, timestamped where possible, severity-calibrated, and actionable. The decision follows the findings.

## Failure Modes
- vague `looks good`
- ignoring continuity drift
- failing only for taste
- missing copyright/voice risks
- PASS with unresolved critical issue

## Self-Check
- [ ] story reviewed
- [ ] first 3 seconds reviewed
- [ ] continuity/anatomy checked
- [ ] audio checked
- [ ] 9:16/safe areas checked
- [ ] rights/watermark/reuse risks checked
- [ ] decision matches severity
- [ ] human approval still required

## Examples
`PASS WITH CHANGES` — Scene 04 earrings disappear for 1.5s; final caption overlaps the subject's eyes. Fix both and recheck.

## Performance Feedback
Aggregate recurring QC failure categories to improve upstream Skills. Frequent character drift should affect character/prompt rules; frequent slow beats should affect writing/retention rules.
