# Skill Versioning Strategy

Use semantic-style Skill versions:
- **v1.0** — initial production version.
- **v1.1** — small prompt/rule/rubric refinement that preserves the stage contract.
- **v2.0** — major structural or output-contract change.

## Required change record
For analytics/experiment-driven revisions, document:
- previous version,
- new version,
- reason,
- supporting data / experiment,
- expected improvement,
- downside/trade-off.

Git history preserves all changes.

Do not version a Skill simply because one video overperformed. Prefer multiple comparable samples or controlled experiments.
