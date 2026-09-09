# VID-0001 / STORY-0001 — Visual Asset Production

**Working title:** The Flooded Box  
**Phase:** D — Asset Production  
**Stage:** 12 — Visual Asset Production  
**Status:** IN PROGRESS — still/reference batch generated; motion clips pending  
**Date:** 2026-09-09  
**Magnific project:** VID-0001 — The Flooded Box

## User-approved image generation policy

Credit-based generation is authorized.

Model priority:
1. **Google Nano Banana 2 Lite** — references, simple keyframes, lower-cost iteration.
2. **Google Nano Banana 2** — complex generations only, especially hand/object interaction and two-character continuity.

Production framing: 9:16.  
Use 1K explicitly when the selected model exposes a resolution selector.

## Generated reference assets

| Production asset | Purpose | Model | Cost |
|---|---|---|---:|
| REF-CHAR001 | Older Brother continuity reference | Google Nano Banana 2 Lite | 60 credits |
| REF-CHAR002 | Younger Sister continuity reference | Google Nano Banana 2 Lite | 60 credits |
| REF-ENV001 | Basement geography/environment reference | Google Nano Banana 2 Lite | 60 credits |
| REF-PROP002 | Exact sibling-drawing reference | Google Nano Banana 2 Lite | 60 credits |

Reference subtotal: **240 credits**

## Generated scene keyframes

| Scene | Production asset | Model | Resolution control | Cost |
|---|---|---|---|---:|
| SC-01 | KF-SC01-A / AST-VID0001-SC01 keyframe | Google Nano Banana 2 Lite | model default | 60 |
| SC-02 | KF-SC02-A / AST-VID0001-SC02 keyframe | Google Nano Banana 2 Lite | model default | 60 |
| SC-03 | KF-SC03-A / AST-VID0001-SC03 keyframe | Google Nano Banana 2 | 1K | 75 |
| SC-04 | KF-SC04-A / AST-VID0001-SC04 keyframe | Google Nano Banana 2 Lite | model default | 60 |
| SC-05 | KF-SC05-A / AST-VID0001-SC05 keyframe | Google Nano Banana 2 | 1K | 75 |
| SC-06 | KF-SC06-A / AST-VID0001-SC06 keyframe | Google Nano Banana 2 | 1K | 75 |
| SC-07 | KF-SC07-A / AST-VID0001-SC07 keyframe | Google Nano Banana 2 | 1K | 75 |

Keyframe subtotal: **480 credits**

## Credit accounting

Magnific credit balance before this Stage 12 image batch: **41,772**  
Magnific credit balance after this Stage 12 image batch: **41,052**  
Total Stage 12 image spend so far: **720 credits**

## Storage

All 11 generated image creations were moved into the Magnific project:

**VID-0001 — The Flooded Box**

The repository stores production IDs/model choices/status, not private Magnific creation identifiers.

## Visual review gate

The generated images are rendered in Magnific for human review.

Do not mark a still as production-approved until it passes the relevant checklist in `image-prompts.md`, especially:
- correct ages and face identities,
- CHAR-001 watch on left wrist when visible,
- CHAR-002 dry clothing,
- console camera-left,
- memory box camera-right before pickup,
- stairs rear/right,
- exact sibling drawing continuity,
- plausible hands/anatomy,
- shallow water,
- no generated text/logos,
- no exaggerated crying/hugging.

## Motion asset planning

Magnific video planning was run against all seven scene keyframes and the locked storyboard.

Recommended image-to-video model:
**Kling 2.1**

Planner rationale:
- strong image-to-video keyframe adherence,
- realistic human movement,
- controlled camera behavior.

The planner requires confirmation before paid video generation that:
1. the seven keyframes map sequentially one-to-one to SC-01 through SC-07;
2. raw clips should remain silent for external voice/music/SFX mixing in Remotion.

Until those confirmations are recorded, no video-generation credits should be spent.

## Stage 12 completion criteria

Stage 12 is complete only when:
- reference/keyframe stills are visually accepted or corrected,
- required generated motion clips are produced/accepted or explicitly replaced with approved still + Remotion treatments,
- every SC-01 through SC-07 has an approved visual source,
- final visual-source decisions are mapped for Stage 15 Remotion composition.
