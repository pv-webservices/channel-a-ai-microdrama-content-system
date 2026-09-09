# Phase C Status — VID-0001

**Video:** VID-0001  
**Story:** STORY-0001  
**Working title:** The Flooded Box

- [x] Stage 8 — Character Consistency
  - CHAR-001 — Older Brother
  - CHAR-002 — Younger Sister
- [ ] Stage 9 — Storyboard Generation
- [ ] Stage 10 — Image Prompt Generation
- [ ] Stage 11 — Video Prompt Generation

## Current authority

Character identity is now locked in `characters.md`.

Future storyboard and generation prompts must use Character IDs and preserve the continuity locks.

## Image generation provider preference

When Stage 10 reaches actual image generation, use the user's connected Magnific workflow with:
- Google Nano Banana 2.0
- 1K resolution
- unlimited-generation option requested by user

If that exact generation route is unavailable or errors at generation time, stop and ask the user rather than silently substituting another image model.
