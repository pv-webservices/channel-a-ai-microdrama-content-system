# Project Source of Truth

## Mission

Build a scalable AI-first short-form storytelling system capable of repeatedly producing original, emotionally engaging and visually distinctive micro-dramas.

## Product definition

The output is fictional short-form cinematic storytelling designed primarily for YouTube Shorts and Instagram Reels. The project does not depend on human actors, cameras, physical locations, or manual filming.

The system should favor:
- visible action over explanation,
- coherent character motivation,
- emotional clarity,
- meaningful variation,
- controlled cinematic visuals,
- retention-aware pacing,
- provider independence,
- human quality review.

It should reject quote-video thinking, shallow moral lectures, repetitive content-farm structures, and fake real-person events.

## Current scope

**Phase 1 — Manual Validation**

In scope:
- reusable Skills,
- production templates,
- manual/semi-assisted workflow,
- structured example production,
- experiments,
- analytics schema,
- compliance/originality policy,
- version-controlled learnings.

Out of scope:
- autonomous generation pipelines,
- paid API integrations,
- automated publishing,
- automated Skill mutation,
- background trend scraping,
- automated analytics ingestion.

## Primary success metrics

When real channel data exists, track:
- views
- reach
- impressions
- 3-second views
- 3-second retention
- scroll-away rate where available
- average percentage viewed
- average watch time
- completion rate
- replay rate
- likes
- comments
- shares
- saves
- follower/subscriber conversion
- followers gained
- subscribers gained
- profile visits
- traffic source
- platform
- video duration
- hook type
- story type
- emotional category
- visual style

**Do not invent performance benchmarks.** Baselines and targets must come from actual published channel data or explicitly sourced research.

## Quality principles

1. **Story before slogan.** Every video needs a situation, conflict, progression and earned ending.
2. **Visible behavior first.** Narration should not duplicate what the viewer can already see.
3. **Retention without deception.** Hooks may withhold answers, not fabricate promises.
4. **Continuity is production-critical.** Character IDs and stable identity specifications are mandatory after approval.
5. **Sound is narrative.** Silence, ambience, impacts and music direction should reinforce beats.
6. **Mobile readability.** Composition must work at small vertical viewing sizes.
7. **Originality is structural.** Cosmetic substitutions do not create a new story.
8. **Analytics require sample discipline.** One outlier is not a channel learning.
9. **Human approval is a control gate.** Phase 1 has no auto-publishing.
10. **Provider independence.** Core documents describe capabilities, not vendors.

## Standard stage contract

```text
INPUT → PROCESS → OUTPUT → QUALITY CHECK → NEXT STAGE
```

## Development phases

### Phase 1 — Manual Validation
Goal: find repeatable storytelling formats.
- Human approval at all major stages.
- Build an initial library of roughly 20–50 videos before major automation decisions.
- Establish baselines from real channel data.
- No auto-publishing.

### Phase 2 — Assisted Production
Automate repetitive preparation and production tasks while retaining human topic selection and final-content approval.

Potential candidates:
- project folder scaffolding,
- artifact format validation,
- prompt compilation,
- shot-list formatting,
- draft metadata generation.

### Phase 3 — Production Automation
Potentially automate:
- generation orchestration,
- file handling,
- video composition,
- metadata preparation,
- analytics collection.

Final human approval remains required.

### Phase 4 — Performance Feedback
Use sufficient historical analytics to recommend changes to:
- hooks,
- stories,
- lengths,
- pacing,
- visual styles,
- content pillars.

Skill changes remain version controlled.

## Initial Skill priority

Production-ready first:
1. idea-discovery
2. concept-scorer
3. hook-writer
4. microdrama-writer
5. retention-optimizer
6. storyboard-generator
7. character-consistency
8. image-prompt-generator
9. video-prompt-generator
10. voiceover-writer
11. quality-control

Functional first versions:
- sound-design-planner
- caption-title-generator
- first-frame-optimizer

## Governance

Authoritative policy files:
- `docs/originality-policy.md`
- `docs/platform-compliance.md`
- `docs/ai-content-guidelines.md`
- `docs/naming-conventions.md`
- `docs/versioning-strategy.md`

When convenience prompts conflict with a Skill or policy document, the Skill/policy wins.
