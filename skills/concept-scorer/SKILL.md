# Concept Scorer

**Version:** v1.0

## Purpose
Score concepts for internal prioritization. This is not a virality predictor.

## Inputs
Required:
- one or more concepts

Optional:
- target duration
- validated channel learnings
- experiment objective

## Outputs
For each concept return 1–10 scores for:
- Hook strength
- Emotional intensity
- Curiosity
- Relatability
- Originality
- Visual potential
- Storytelling clarity
- Payoff strength
- Shareability
- Short-form suitability

Then return:
- Overall concept score (simple average, one decimal)
- Key strengths
- Key risks
- Priority: HIGH / MEDIUM / LOW

## Responsibilities
- Apply one rubric consistently within a batch.
- Explain unusually high/low scores.
- Penalize unclear motivation, exposition burden, weak payoff, and derivative structure.
- Separate current creative judgment from validated channel evidence.

## Rules
- Do not label scores as predicted views or virality probability.
- Do not inflate scores.
- Do not use analytics that do not exist.
- A high score never bypasses human selection.

## Quality Criteria
Useful scoring separates concepts meaningfully, surfaces specific risk, and gives a defensible prioritization basis.

## Failure Modes
- all concepts score 8–10
- vague reasoning
- originality based on cosmetic changes
- double-counting one strength across categories
- false predictive certainty

## Self-Check
- [ ] all ten dimensions are scored
- [ ] overall arithmetic is correct
- [ ] reasoning refers to story mechanics
- [ ] risks are explicit
- [ ] no guaranteed-virality claim

## Examples
Example overall score: 8.1/10 with a HIGH priority recommendation and a specific note that the emotional bond must be established quickly.

## Performance Feedback
Later compare score dimensions with retention, completion, shares, and saves to calibrate interpretation. Do not train the rubric toward one outlier.
