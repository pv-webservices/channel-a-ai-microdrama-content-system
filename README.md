# AI Micro-Drama Content System

A production-oriented repository for creating original, faceless AI-assisted emotional micro-dramas for **YouTube Shorts** and **Instagram Reels**.

This repository is a content-production operating system, not a prompt dump. It separates strategy, ideation, scoring, hooks, story writing, retention review, character continuity, visual planning, voice, sound, quality control, experiments, analytics, and human approval.

## Current stage

**Phase 1 — Manual Validation**

The project currently supports a manual/semi-assisted workflow. It intentionally does **not** include paid-provider integrations, autonomous generation pipelines, automatic publishing, or automatic Skill modification.

The immediate objective is to validate repeatable storytelling formats and build roughly 20–50 real videos before major automation decisions. This is a guideline, not a rigid gate.

## What the system produces

Typical videos are 20–60 seconds and should feel like compressed cinematic stories rather than quote videos.

A strong micro-drama contains:

`character → situation → conflict → escalation → turning point → payoff/twist → resolution`

Core pillars include karma/consequences, betrayal, relationships, family, parents/children, friendship, sacrifice, unexpected kindness, greed, regret, revenge, second chances, loneliness, difficult choices, moral dilemmas, social behavior, and consequences of actions.

Default production framing: **9:16 vertical**.

## Architecture

```text
Topic / Idea Discovery
        ↓
Concept Evaluation
        ↓
Hook Development
        ↓
Micro-Drama Writing
        ↓
Retention Review
        ↓
Human Script Approval
        ↓
Character Sheets
        ↓
Storyboard
        ↓
Image + Video Prompts
        ↓
Voiceover + Sound Plan
        ↓
Asset Production / Assembly
        ↓
Quality Control
        ↓
Human Final Approval
        ↓
Publishing
        ↓
Analytics + Postmortem
        ↓
Validated Learnings
        ↓
Version-Controlled Skill Improvements
```

Every stage should operate as:

```text
INPUT
  ↓
PROCESS
  ↓
OUTPUT
  ↓
QUALITY CHECK
  ↓
NEXT STAGE
```

## Repository map

```text
brand/        Channel strategy, audience, pillars, visual and voice direction
skills/       Reusable stage-specific operating instructions
templates/    Standard artifact formats
prompts/      Convenience prompt starters; Skills remain authoritative
production/   Working and approved production artifacts
examples/     Reference breakdown folders
analytics/    Raw performance schema and validated learnings
experiments/  Controlled test framework
workflows/    Production and review procedures
automation/   Future architecture only
docs/         Compliance, originality, naming and versioning policies
```

See [PROJECT.md](PROJECT.md) for the source of truth.

## How Skills are used

Every `skills/<skill-name>/SKILL.md` defines:
- Purpose
- Inputs
- Outputs
- Responsibilities
- Rules
- Quality Criteria
- Failure Modes
- Self-Check
- Examples
- Performance Feedback

A Skill owns one stage. It should not silently absorb the job of a neighboring stage.

## How a new video is created

Follow `workflows/content-production.md`:

1. Generate 10–20 diverse concepts.
2. Score them for internal prioritization.
3. Human selects one.
4. Generate multiple hooks.
5. Select the strongest honest hook.
6. Write the micro-drama.
7. Run retention review.
8. Human approves the script.
9. Create Character IDs and sheets.
10. Create storyboard.
11. Create image and video prompts separately.
12. Produce visual/audio assets externally.
13. Assemble.
14. Run strict QC.
15. Human approves the final video.
16. Publish manually.
17. Record analytics.
18. Create a postmortem after enough data exists.

## Experiments

Use `experiments/experiment-template.md`. Prefer changing one major variable at a time. State the hypothesis, control, variant, primary metric, sample size, result, interpretation, decision, and any proposed Skill change.

## Analytics and Skill improvement

`analytics/performance.csv` stores raw per-video performance data without invented values.

`analytics/learnings.md` stores validated observations only. One successful video is not enough to create a channel-level rule. Prefer multiple comparable samples or controlled experiments before changing a Skill.

## Why human approval remains mandatory

Scoring and QC cannot reliably replace editorial judgment about originality, coherent motivation, subtle visual defects, deceptive framing, real-person risk, copyright risk, or whether an emotional payoff actually feels earned.

Human approval is required at concept selection, script approval, and final pre-publish review.

## Example production

`production/examples/VID-0001/` demonstrates the full artifact chain for one original fictional micro-drama. It contains no generated media.

## Security

Use `.env.example` only as a variable-name reference. Never commit real secrets. `.env`, credential files, generated media, caches, renders, and temporary assets are ignored.

## Long-term objective

Later phases may automate repetitive generation, file handling, composition, metadata preparation, and analytics collection. Provider integrations must remain abstract and Skill changes remain version-controlled.
