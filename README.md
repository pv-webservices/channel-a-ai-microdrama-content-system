# AI Micro-Drama Content System

A production-oriented system for creating original, faceless AI-assisted emotional micro-dramas for YouTube Shorts and Instagram Reels.

The repository separates editorial intelligence from deterministic post-production. Story, characters, prompts and asset generation remain governed by Skills and approval gates; Remotion is the code-based composition and rendering engine.

## Current stage
Phase 1 — Manual Validation with Remotion-assisted post-production.

No autonomous publishing, paid-provider dependency, silent Skill mutation or end-to-end unattended pipeline is enabled.

## End-to-end architecture

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

## Why Remotion sits after asset production
Remotion is not the story generator and should not decide the emotional premise. It becomes authoritative after approved source assets exist. It controls deterministic editing: exact frame ranges, image/video placement, controlled still-image motion, transitions, captions, overlays, voice/dialogue placement, ambience/SFX/music timing, first-frame treatment, ending treatment and final video rendering.

Use generated video for movement that materially advances the story. Use high-quality stills plus restrained Remotion motion when full video generation would add cost/retries without adding narrative value.

## Standard stage contract
INPUT → PROCESS → OUTPUT → QUALITY CHECK → NEXT STAGE

## Repository map
- brand/ — channel strategy, visual direction and voice direction
- skills/ — stage-specific operating instructions, including Remotion Composer and Render Validator
- templates/ — artifact contracts including composition and render-validation templates
- prompts/ — reusable prompt starters
- production/ — active and example production artifacts
- remotion/ — code-based composition, per-video props and reusable render components
- workflows/ — end-to-end, Remotion, review and publishing procedures
- analytics/ — measured performance schema and validated learnings
- experiments/ — controlled test framework
- automation/ — future architecture only
- docs/ — compliance, originality, naming and versioning policy

## Remotion setup
1. Run npm install.
2. Run npm run typecheck.
3. Run npm run studio to inspect compositions.
4. Put local source media under public/assets/VID-####/ using stable Asset IDs.
5. Keep the corresponding remotion/data/VID-####.json aligned with the approved Remotion composition plan.
6. Render the candidate.
7. Run Render Validation before editorial Quality Control.

VID-0001 can be rendered with npm run render:vid-0001. Without source-media paths its composition intentionally shows traceable scene slates; once approved media paths are added, the same data contract renders the media.

## Skill ownership
Each Skill has a bounded responsibility. Remotion Composer owns composition decisions; Render Validator owns technical render checks; Quality Control owns final editorial/platform review. No one stage silently replaces upstream approval.

## Analytics discipline
Raw performance is stored without invented values. One successful or failed video is not enough to rewrite a Skill. Prefer repeated comparable samples or controlled experiments.

## Human approval
Human approval remains mandatory at concept selection, script approval and final pre-publish review.

See PROJECT.md for source-of-truth governance and workflows/content-production.md for the canonical 21-stage process.