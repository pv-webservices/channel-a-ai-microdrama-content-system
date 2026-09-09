# AI Micro-Drama Content System

A production-oriented system for creating original, faceless AI-assisted emotional micro-dramas for YouTube Shorts and Instagram Reels.

The repository separates editorial intelligence from deterministic post-production. Story, characters, prompts and asset generation remain governed by Skills and approval gates; Remotion is the code-based composition and rendering engine.

## Current stage
Phase 1 — Manual Validation with Remotion-assisted post-production.

**Active production numbering was reset on 2026-09-09. The next selected story is VID-0001 / STORY-0001.** Pre-reset development artifacts are preserved under `archive/pre-reset-2026-09-09/` and do not consume active IDs.

No autonomous publishing, silent Skill mutation, or end-to-end unattended pipeline is enabled.

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
11. Video Prompt Generation

### Phase D — Asset Production
12. Visual Asset Production
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

## Remotion ownership
Remotion becomes authoritative only after approved source assets exist. It owns exact frame timing, image/video placement, restrained still-image motion, explicit visual entry transitions, captions, audio cue placement, first-frame/ending treatment, and final candidate rendering.

Editorial cut intent is kept separate from visual effects. Values such as `match-cut`, `cut-on-glance`, and `cut-on-fold` describe why/where a cut occurs; `entryTransition` describes executable visual behavior such as `cut` or `fade`.

Generated source-video audio is muted by default. Approved voice/dialogue/SFX/ambience/music cues are mixed separately through the manifest.

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

`npm run validate` performs:
- active Remotion manifest validation when active manifests exist,
- strict TypeScript checking,
- Remotion composition discovery using a neutral system smoke-test manifest.

The neutral smoke manifest is repository infrastructure only and does not consume VID-####.

## Active video manifests
A real `remotion/data/VID-####.json` is created when that active video reaches the Remotion handoff. Before a production-ready candidate render:

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
npm run render:vid-0001
```

Until VID-0001 is selected and its production manifest is created, the repository intentionally has no active VID manifest.

## Repository safety
Pull requests and pushes to `main` run GitHub validation for the locked dependency install, manifests, TypeScript, and Remotion composition discovery. `package-lock.json` is the reproducible dependency source.

## Analytics discipline
Raw performance is stored without invented values. One successful or failed video is not enough to rewrite a Skill. Prefer repeated comparable samples or controlled experiments before changing production rules.

## Repository map
- `brand/` — channel strategy, audience, and visual/voice direction
- `skills/` — stage-specific Skills including Remotion Composer and Render Validator
- `templates/` — production artifact contracts
- `prompts/` — reusable prompt starters
- `production/` — active production artifacts
- `archive/` — pre-reset historical/reference artifacts only
- `remotion/` — typed composition engine, smoke validation, and active per-video manifests
- `scripts/` — repository/manifest validation utilities
- `workflows/` — canonical production and review procedures
- `analytics/` — measured performance and validated learnings
- `experiments/` — controlled testing framework
- `automation/` — future architecture only
- `docs/` — compliance, originality, naming, and versioning

## Human approval
Human approval remains mandatory at concept selection, script approval, and final pre-publish review.

See `PROJECT.md` for source-of-truth governance and `workflows/content-production.md` for the canonical 21-stage process.
