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
  - cross-frame validation
- [x] Stage 11 — Video Prompt Generation
  - 7 scene motion prompts
  - start/end states
  - temporal motion progression
  - camera/subject/object motion separated
  - negative motion constraints
  - transition handoffs
  - motion-continuity validation

## Phase C status

**COMPLETE**

## Current authority

- Script authority: `script.md`
- Character authority: `characters.md`
- Scene/timing/geography authority: `storyboard.md`
- Still-image prompt authority: `image-prompts.md`
- Motion prompt authority: `video-prompts.md`

## Handoff to Phase D

Proceed to:
12. Visual Asset Production
13. Voiceover Production
14. Sound Design Production

## Image generation provider policy — updated 2026-09-09

Stage 12 image generation is authorized as **credit-based** through Magnific MCP.

Model priority:
1. Google Nano Banana 2 Lite for references, simple frames, iteration and lower-cost generation.
2. Google Nano Banana 2 for complex generations only, especially difficult hand/object interaction, multi-character continuity, or a failed Lite result.

Use 9:16 for production frames. Use 1K explicitly whenever the selected model exposes a resolution selector. Nano Banana 2 Lite does not expose a selectable resolution in the current Magnific catalog, so use its model-default output rather than silently switching models solely for resolution control.

Do not use other image models without user approval.

Video-generation provider is not locked by Phase C; Stage 12 may resolve a provider/model based on the approved video prompts and reference-keyframe requirements.
