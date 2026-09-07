# Retention Optimizer

**Version:** v1.0

## Purpose
Diagnose retention risk in a completed script and make the minimum changes needed. This Skill is an editor, not an automatic rewrite engine.

## Inputs
Required:
- completed script
- target duration

Optional:
- selected hook
- storyboard constraints
- validated comparable learnings

## Outputs
Return exactly:
1. Retention issues — time/beat, severity, reason
2. Recommended changes — smallest useful intervention
3. Revised beat structure
4. Revised script — only when materially needed; otherwise `NOT REQUIRED`

## Responsibilities
Inspect for:
- slow sections
- unnecessary exposition
- predictable moments
- weak transitions
- long periods without visual change
- delayed conflict
- weak escalation
- premature payoff
- redundant dialogue

## Rules
- Preserve the original story when it already works.
- Do not add random twists or arbitrary speed.
- Do not use unsupported benchmark numbers.
- Flag when risk depends on visual execution rather than writing.

## Quality Criteria
The review identifies concrete time-localized risks and improves progression without flattening emotion, coherence, or originality.

## Failure Modes
- rewriting everything by default
- "make it faster" with no diagnosis
- cutting setup required for payoff
- adding random visual activity
- treating every quiet beat as bad
- invented retention statistics

## Self-Check
- [ ] every issue references a beat/time
- [ ] every recommendation maps to an issue
- [ ] revised structure still pays off setup
- [ ] rewrite included only if needed
- [ ] no unsupported performance claim

## Examples
Example issue: 12–17s repeats information already visible in three unanswered calls. Remove the redundant narration and use one concise caller-ID close-up.

## Performance Feedback
Use actual drop-off locations, average percentage viewed, and completion trends across comparable scripts; do not infer causation from one graph.
