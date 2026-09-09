# AI Micro-Drama Content System

A production-oriented system for creating original, faceless AI-assisted emotional micro-dramas for YouTube Shorts and Instagram Reels.

The repository separates editorial intelligence, **still-image generation**, and deterministic video construction. Story, characters, image prompts and assets remain governed by Skills and approval gates; **Remotion is the only video-construction and rendering engine for active productions. AI video-generation models are prohibited.**

## Current stage
Phase 1 — Manual Validation with Remotion-based post-production.

**Active production numbering was reset on 2026-09-09. The active sequence starts at VID-0001 / STORY-0001.** Pre-reset development artifacts are preserved under `archive/pre-reset-2026-09-09/` and do not consume active IDs.

No autonomous publishing, silent Skill mutation, end-to-end unattended pipeline, or AI video-generation workflow is enabled.

## Canonical end-to-end architecture

### Phase A — Concept
1. Idea Discovery
2. Concept Scoring
3. Human Concept Selection

### Phase B — Story
4. Hook Development
5. Micro-Drama Script Writing
6. Retention Review
7. Human Script Approval

### Phase C — Pre-production
8. Character Consistency
9. Storyboard
10. Image Prompt Generation
11. **Remotion Motion Planning**

### Phase D — Asset Production
12. **Visual Asset Production — images/graphics only**
13. Voiceover Production
14. Sound Design Production

### Phase E — Remotion Post-production
15. Remotion Composition & Assembly
16. Render Validation

### Phase F — Release & Learning
17. Quality Control
18. Human Final Approval
19. Manual Publishing
20. Analytics Capture
21. Postmortem & Skill Improvement

## Image-only video rule
Active Channel-A productions may use AI image generation but may not use text-to-video, image-to-video, or any other AI video-generation model.

If one image cannot communicate a required temporal beat, generate additional approved still keyframes. Remotion sequences and animates those images using controlled scale, translation, holds, cuts, captions, layering/parallax where implemented, and audio timing.

## Remotion ownership
Remotion becomes authoritative after approved image/graphic source assets exist. It owns exact frame timing, image placement, still-image motion, explicit entry transitions, captions, audio cue placement, first-frame/ending treatment, and candidate rendering.

Editorial cut intent is kept separate from visual effects. Values such as `match-cut` or `cut-on-glance` describe why/where a cut occurs; `entryTransition` describes executable visual behavior such as `cut` or `fade`.

## Standard stage contract

```text
INPUT → PROCESS → OUTPUT → QUALITY CHECK → NEXT STAGE
```

## Runtime setup
Use Node.js 20–24:

```bash
npm ci
npm run validate
```

`npm run validate` performs active Remotion manifest validation when manifests exist, strict TypeScript checking, and Remotion composition discovery using a neutral system smoke-test manifest.

## Active video manifests
A real `remotion/data/VID-####.json` is created when an active video reaches the Remotion handoff. Active production manifests accept image/graphic visual assets only.

Before a production-ready candidate render:

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
npm run render:vid-0001
```

## Repository safety
Pull requests and pushes to `main` run GitHub validation for the locked dependency install, manifests, TypeScript, and Remotion composition discovery.

## Analytics discipline
Raw performance is stored without invented values. One successful or failed video is not enough to rewrite a Skill. Prefer repeated comparable samples or controlled experiments before changing production rules.

## Repository map
- `brand/` — channel strategy, audience, visual and voice direction
- `skills/` — stage-specific Skills including Remotion Scene Planner, Composer and Render Validator
- `templates/` — production artifact contracts
- `prompts/` — reusable prompt starters
- `production/` — active production artifacts
- `archive/` — pre-reset historical/reference artifacts only
- `remotion/` — typed image-based composition engine, smoke validation, active manifests
- `scripts/` — repository/manifest validation utilities
- `workflows/` — canonical production and review procedures
- `analytics/` — measured performance and validated learnings
- `experiments/` — controlled testing framework
- `automation/` — future architecture only
- `docs/` — compliance, originality, naming, versioning and AI-use rules

## Human approval
Human approval remains mandatory at concept selection, script approval, and final pre-publish review.

See `PROJECT.md` for source-of-truth governance and `workflows/content-production.md` for the canonical 21-stage process.
