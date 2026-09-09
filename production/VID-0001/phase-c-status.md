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
- [x] Stage 10 — Image Prompt Generation
  - 4 continuity/reference prompts
  - 7 scene keyframe prompts
  - Nano Banana-ready prompt package
  - cross-frame continuity validation
- [ ] Stage 11 — Video Prompt Generation

## Current authority

- Script authority: `script.md`
- Character authority: `characters.md`
- Scene/timing/geography authority: `storyboard.md`
- Still-image prompt authority: `image-prompts.md`

## Image generation provider constraint

Actual image generation has **not** happened yet.

When visual assets are generated later, use only the user's requested route:
- Magnific MCP
- Google Nano Banana 2.0
- 1K resolution
- unlimited-generation option

Do not silently substitute another image model. If the exact route is unavailable or errors, stop and ask the user.
