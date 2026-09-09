# Render Validator

**Version:** v1.0

## Purpose
Verify that a Remotion candidate render is technically complete and faithful to the approved composition plan before editorial Quality Control.

## Inputs
Required:
- candidate rendered video
- Remotion composition plan
- target technical specification

Optional:
- approved storyboard
- voice/caption timing maps
- known render warnings

## Outputs
Return:
- Decision: PASS, PASS WITH CHANGES, or FAIL
- technical specification check
- timestamped render defects
- sync findings
- missing/offline asset findings
- safe-area findings
- required re-render actions

## Responsibilities
Check dimensions, fps, duration, media availability, scene boundaries, frozen/error frames, audio leakage, voice timing, caption timing, first frame, final frame and basic audio integrity.

## Rules
- This Skill is a technical gate, not final editorial QC.
- Do not PASS a render with missing media or broken timing.
- Do not fail for subjective story taste.
- Every fix that changes timing must be reflected in the composition plan.

## Quality Criteria
Findings are reproducible, timestamped where possible, and distinguish render defects from upstream creative issues.

## Failure Modes
- reviewing only resolution
- missing silent/offline assets
- ignoring source-video audio leakage
- treating editorial preference as technical failure
- PASS without checking duration and scene timing

## Self-Check
- [ ] dimensions/fps/duration checked
- [ ] scene boundaries checked
- [ ] asset failures checked
- [ ] audio leakage/sync checked
- [ ] captions/safe area checked
- [ ] first/final frame checked
- [ ] decision matches findings

## Examples
PASS WITH CHANGES — Scene 06 begins three frames early relative to the approved reveal cue; shift its Sequence start and re-render. No other technical issue found.

## Performance Feedback
Aggregate recurring render defects to improve the Remotion Composer Skill and reusable composition components. Technical reliability findings should not be interpreted as audience-performance findings.