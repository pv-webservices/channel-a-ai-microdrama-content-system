# Project Source of Truth

## Mission
Build a scalable AI-first short-form storytelling system capable of repeatedly producing original, emotionally engaging and visually distinctive micro-dramas.

**Channel-A visual-production rule:** AI generation is used for still images/graphics only. AI video-generation models are prohibited. Remotion is the deterministic motion-design, editing and rendering layer that turns approved images into the finished video.

## Active production reset
At the user's direction, active production numbering was reset on **2026-09-09**.

The active sequence begins:

```text
VID-0001
STORY-0001
```

Earlier development/test artifacts are preserved under `archive/pre-reset-2026-09-09/`. They are historical references only, do not reserve active IDs, and cannot satisfy current production approval/QC/publishing gates.

## Product definition
The output is fictional short-form cinematic storytelling designed primarily for YouTube Shorts and Instagram Reels. The project does not depend on human actors, cameras, physical locations, manual filming, or AI-generated video clips.

The system should favor:
- visible action over explanation,
- coherent character motivation,
- emotional clarity,
- meaningful variation,
- controlled cinematic still imagery,
- retention-aware pacing,
- provider independence for image generation,
- deterministic Remotion motion/editing,
- human quality review.

It should reject quote-video thinking, shallow moral lectures, repetitive content-farm structures, fake real-person events, and effects-heavy editing that does not serve the story.

## Current scope
**Phase 1 — Manual Validation with Remotion-based video construction.**

In scope:
- reusable Skills and templates,
- manual/semi-assisted editorial work,
- AI still-image generation,
- typed Remotion composition/rendering,
- manifest validation and CI safety checks,
- explicit Render Validation and editorial QC gates,
- experiments and analytics schema,
- compliance/originality controls,
- version-controlled learnings.

Out of scope:
- AI video-generation models,
- generated source-video assets,
- autonomous idea-to-publish execution,
- automated publishing,
- automated Skill mutation,
- background trend scraping,
- automated analytics ingestion,
- unreviewed cloud/batch rendering at scale.

## Primary success metrics
When real channel data exists, track:
- views,
- reach,
- impressions,
- 3-second views,
- 3-second retention,
- scroll-away rate where available,
- average percentage viewed,
- average watch time,
- completion rate,
- replay rate,
- likes,
- comments,
- shares,
- saves,
- follower/subscriber conversion,
- followers gained,
- subscribers gained,
- profile visits,
- traffic source,
- platform,
- video duration,
- hook type,
- story type,
- emotional category,
- visual style.

**Do not invent performance benchmarks.** Baselines and targets must come from actual published channel data or explicitly sourced research.

## Quality principles
1. Story before effects.
2. Visible behavior before redundant narration.
3. Retention without deceptive hooks.
4. Character continuity is production-critical.
5. Sound and silence are narrative tools.
6. Mobile readability is mandatory.
7. Originality is structural, not cosmetic.
8. Remotion motion must serve attention, emotion, or comprehension.
9. Scene/Asset/Caption/Audio IDs and frame timing must remain traceable.
10. Editorial cut intent and visual transition effects are separate concepts.
11. AI video-generation models are prohibited for active Channel-A productions.
12. Active visual sources are images or graphics only; video motion is created in Remotion.
13. If one still cannot communicate a temporal beat, generate another approved still rather than a video clip.
14. Render Validation is technical; Quality Control is editorial.
15. Human approval is a control gate.
16. Analytics require sample discipline.
17. Core storytelling remains provider-independent.

## Standard stage contract

```text
INPUT → PROCESS → OUTPUT → QUALITY CHECK → NEXT STAGE
```

## Canonical production phases
- Phase A Concept: stages 1–3
- Phase B Story: stages 4–7
- Phase C Pre-production: stages 8–11
- Phase D Asset Production: stages 12–14
- Phase E Remotion Post-production: stages 15–16
- Phase F Release & Learning: stages 17–21

Canonical stage definitions live in `workflows/content-production.md`.

## Remotion governance
- Storyboard timing is the editorial plan.
- Stage 11 defines executable still-image motion intent.
- The Remotion composition plan is the exact edit specification for a candidate render.
- `cutIntent` records editorial reasoning; `entryTransition` records executable visual transition behavior.
- Active visual Asset IDs map only to images/graphics.
- Approved Asset IDs must map to source paths before a production-ready render.
- Manifest structure must pass `npm run validate:manifests`.
- Candidate renders must pass Render Validation before final Quality Control.
- Reusable components are preferred over arbitrary one-off effects.
- Historical/pre-reset QC or status records cannot satisfy current gates.
- Neutral Remotion smoke-test props are infrastructure and never receive VID-#### IDs.

## Repository engineering gate
Every code/configuration change should pass:

```bash
npm ci
npm run validate
```

`npm run validate` checks active manifest structure when present, strict TypeScript, and Remotion composition discovery via the neutral smoke manifest. GitHub Actions runs the same gate for pull requests and `main`.

Direct JavaScript dependencies are pinned exactly and `package-lock.json` is committed. The lockfile must be generated by npm and never hand-authored.

## Development phases
### Phase 1 — Manual Validation
Validate repeatable storytelling and editing patterns across roughly 20–50 videos before major automation decisions. Human approval remains mandatory.

### Phase 2 — Assisted Production
Automate scaffolding, artifact validation, image-prompt compilation, manifest preparation, render preparation, and draft metadata while humans retain concept/script/final approval.

### Phase 3 — Production Automation
Potentially automate image-generation orchestration, file handling, Remotion manifest compilation, programmatic rendering, metadata preparation, and analytics collection. Do not introduce AI video-generation models. Final human approval remains required.

### Phase 4 — Performance Feedback
Use sufficient historical analytics to recommend changes to hooks, stories, lengths, pacing, visual styles, Remotion edit patterns, and content pillars. Skill changes remain version-controlled.

## Skills
Core Skills include idea-discovery, concept-scorer, hook-writer, microdrama-writer, retention-optimizer, character-consistency, storyboard-generator, image-prompt-generator, remotion-scene-planner, voiceover-writer, sound-design-planner, first-frame-optimizer, caption-title-generator, remotion-composer, render-validator, and quality-control.

## Governance
Authoritative policy files remain under `docs/`. When convenience prompts conflict with a Skill or policy document, the Skill/policy wins.
