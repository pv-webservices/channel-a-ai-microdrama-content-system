# Quality Control

**Version:** v1.1

## Purpose
Perform strict final editorial review after the candidate render has passed technical Render Validation.

## Inputs
Required:
- render-validation result
- candidate/final assembled video
- approved script/storyboard
- character sheets
- platform target

Optional:
- captions
- metadata
- composition plan
- platform-specific checklist

## Outputs
Return:
- Decision: PASS, PASS WITH CHANGES, or FAIL
- Severity summary
- Findings table: category, timestamp/artifact, issue, severity, required action
- Story review
- Retention/editing review
- Visual review
- Audio review
- Remotion/edit review
- Platform/compliance review
- Human-review questions
- Recheck items

## Responsibilities
Review story clarity/payoff/motivation, first 1–3 seconds, pacing/escalation, visual continuity/anatomy, audio intelligibility/dynamics, Remotion edit choices, mobile composition, caption readability, rights, watermark/reuse risk and platform readiness.

Remotion/edit review includes:
- cuts and transitions preserve comprehension
- still-image motion feels intentional rather than template-like
- captions support rather than compete with emotion/action
- audio cues land on intended beats
- no effect draws more attention than the story
- ending is not padded after payoff

## Rules
- Render Validation must precede final QC.
- PASS only when no material issue remains.
- PASS WITH CHANGES for bounded fixable issues.
- FAIL for material story/compliance/continuity failure.
- Do not invent platform policy.
- Human final approval is always required.

## Quality Criteria
Findings are specific, timestamped where possible, severity-calibrated and actionable. The decision follows the findings.

## Failure Modes
- vague looks good
- duplicating Render Validator while ignoring editorial quality
- ignoring continuity drift
- failing only for taste
- missing rights/voice risks
- PASS with unresolved critical issue
- approving template-like motion that weakens the story

## Self-Check
- [ ] Render Validation passed
- [ ] story and first 3 seconds reviewed
- [ ] continuity/anatomy checked
- [ ] edit pacing and transitions checked
- [ ] audio/caption relationship checked
- [ ] 9:16/safe areas checked
- [ ] rights/watermark/reuse risks checked
- [ ] decision matches severity
- [ ] human approval still required

## Examples
PASS WITH CHANGES — Scene 06 reveal is technically correct but the push-in starts too early and telegraphs the payoff. Delay the motion until the crane enters frame, re-render, revalidate, then recheck QC.

## Performance Feedback
Aggregate recurring editorial QC failures to improve upstream Skills. Separate technical render failures from creative failures so the correct Skill is changed.