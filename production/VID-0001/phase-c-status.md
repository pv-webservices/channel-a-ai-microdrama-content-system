# Phase C Status — VID-0001

**Video:** VID-0001  
**Story:** STORY-0001  
**Working title:** The Flooded Box

- [x] Stage 8 — Character Consistency
  - CHAR-001 — Older Brother
  - CHAR-002 — Younger Sister
- [x] Stage 9 — Storyboard Generation
  - 7 scenes
  - 25.0 seconds
  - 750 frames at 30 fps
  - stable Scene IDs SC-01 through SC-07
  - stable Asset IDs AST-VID0001-SC01 through AST-VID0001-SC07
- [ ] Stage 10 — Image Prompt Generation
- [ ] Stage 11 — Video Prompt Generation

## Current authority

- Script authority: `script.md`
- Character authority: `characters.md`
- Scene/timing/geography authority: `storyboard.md`

Future image/video prompts must preserve Character IDs, screen geography, props, scene timing, and continuity rules from these documents.

## Image generation provider preference

When Stage 10 reaches actual image generation, use the user's connected Magnific workflow with:
- Google Nano Banana 2.0
- 1K resolution
- unlimited-generation option requested by user

If that exact generation route is unavailable or errors at generation time, stop and ask the user rather than silently substituting another image model.
