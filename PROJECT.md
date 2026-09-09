# Project Source of Truth

## Mission
Build a scalable AI-first short-form storytelling system capable of repeatedly producing original, emotionally engaging and visually distinctive micro-dramas, with Remotion providing a deterministic editing/rendering layer after source assets are approved.

## Product definition
The output is fictional short-form cinematic storytelling designed primarily for YouTube Shorts and Instagram Reels. The project does not depend on human actors, cameras, physical locations or manual filming.

The system favors visible action, coherent motivation, emotional clarity, meaningful variation, controlled cinematic visuals, retention-aware pacing, provider independence, deterministic editing and human quality review.

## Current scope
Phase 1 — Manual Validation with Remotion-assisted post-production.

In scope:
- reusable Skills and templates
- manual/semi-assisted editorial and asset-generation workflow
- code-based Remotion composition/rendering
- explicit render-validation gate
- experiments and analytics schema
- compliance/originality controls
- version-controlled learnings

Out of scope:
- autonomous idea-to-publish execution
- automated publishing
- automated Skill mutation
- background trend scraping
- automated analytics ingestion
- unreviewed cloud/batch rendering at scale

## Primary success metrics
Use real channel data only: views, reach, impressions, 3-second views/retention, scroll-away rate where available, average percentage viewed, average watch time, completion, replay, likes, comments, shares, saves, follower/subscriber conversion, profile visits, traffic source, platform, duration, hook type, story type, emotional category and visual style.

Do not invent performance benchmarks.

## Quality principles
1. Story before effects.
2. Visible behavior before redundant narration.
3. Retention without deceptive hooks.
4. Character continuity is production-critical.
5. Sound and silence are narrative tools.
6. Mobile readability is mandatory.
7. Originality is structural, not cosmetic.
8. Remotion motion must serve attention, emotion or comprehension.
9. Deterministic edit timing must remain traceable to Scene IDs and Asset IDs.
10. Render Validation is technical; Quality Control is editorial.
11. Human approval is a control gate.
12. Analytics require sample discipline.
13. Core storytelling stays provider-independent.

## Canonical production phases
Phase A Concept: stages 1–3.
Phase B Story: stages 4–7.
Phase C Pre-production: stages 8–11.
Phase D Asset Production: stages 12–14.
Phase E Remotion Post-production: stages 15–16.
Phase F Release & Learning: stages 17–21.

Canonical stage definitions live in workflows/content-production.md.

## Remotion governance
- Storyboard timing is the editorial plan.
- The Remotion composition plan is the exact edit specification for a candidate render.
- A timing or order change that affects meaning must be documented rather than hidden in code.
- Approved Asset IDs must map to source paths in the Remotion manifest.
- Generated source-video audio is muted unless explicitly approved for the mix.
- Candidate renders must pass Render Validation before final Quality Control.
- Reusable components are preferred over arbitrary one-off effects.

## Development phases
### Phase 1 — Manual Validation
Validate repeatable storytelling and editing patterns across roughly 20–50 videos before major automation decisions. Human approval remains mandatory.

### Phase 2 — Assisted Production
Automate scaffolding, artifact validation, prompt compilation, manifest preparation, render preparation and draft metadata while humans retain concept/script/final approval.

### Phase 3 — Production Automation
Potentially automate generation orchestration, file handling, Remotion manifest compilation, programmatic rendering, metadata preparation and analytics collection. Final human approval remains required.

### Phase 4 — Performance Feedback
Use sufficient historical analytics to recommend changes to hooks, stories, lengths, pacing, visual styles, Remotion edit patterns and content pillars. Skill changes remain version-controlled.

## Skill priority
Core production Skills now include idea-discovery, concept-scorer, hook-writer, microdrama-writer, retention-optimizer, character-consistency, storyboard-generator, image-prompt-generator, video-prompt-generator, voiceover-writer, sound-design-planner, remotion-composer, render-validator, quality-control, first-frame-optimizer and caption-title-generator.

## Governance
Authoritative policy files remain under docs/. When convenience prompts conflict with a Skill or policy document, the Skill/policy wins.