# Stage 15 Completion — VID-0001

**Video ID:** VID-0001  
**Story ID:** STORY-0001  
**Working title:** The Flooded Box  
**Stage:** 15 — Remotion Composition & Assembly  
**Status:** COMPLETE  
**Date:** 2026-09-09

## Candidate

**VID-0001-stage15-candidate-1**

The first complete video candidate was rendered by Remotion from:
- seven approved still images
- Stage-11 motion plan
- CAP-01
- AUD-01 voiceover
- AUD-02…AUD-06 Foley
- AUD-07 “Reverie” music

No AI-generated video source was used.

## Render result

- rendered frames: 750 / 750
- width: 1080
- height: 1920
- fps: 30
- video codec: H.264
- audio codec: AAC
- duration: 25.045333s
- file size: 20,372,393 bytes
- MP4 SHA-256: `aa3550a9a82d6ebc2bb82378b4c7cf7fd7b145439be11beaf96e2efd754daef2`
- artifact archive SHA-256: `f7dc4b19854dd9366fa4b09baae3e888335c4d529c6743fc96d135aa7fdab51b`

## Technical changes introduced

Stage 15 extended the Remotion audio contract with:
- `sourceStartFrame`
- `volumeEnvelope`

The manifest validator enforces both fields.

## Source hygiene

The one-off workflow used short-lived signed Magnific source URLs only to materialize approved media for candidate #1. That workflow is removed before merge so those URLs are not part of the persistent `main` branch.

Persistent production artifacts use stable local Asset IDs and local paths.

## Handoff

Proceed to:
**Stage 16 — Render Validation**
