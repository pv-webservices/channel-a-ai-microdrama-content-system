# VID-0001 — Remotion Composition Plan

**Video:** VID-0001  
**Story:** STORY-0001  
**Working title:** The Flooded Box  
**Phase:** E — Remotion Post-production  
**Stage:** 15 — Remotion Composition & Assembly  
**Candidate:** 1  
**Status:** IN PROGRESS — manifest locked; candidate render pending  
**Target:** 1080×1920, 30fps, 750 frames / 25.0s

## Edit source of truth

- storyboard: `storyboard.md`
- image sources: Stage-12 approved AST-VID0001-SC01…SC07
- still motion: `remotion-motion-plan.md`
- voice: AUD-01 from `voiceover.md`
- sound: AUD-02…AUD-07 from `sound-design.md`
- executable manifest: `remotion/data/VID-0001.json`

## Scene assembly

| Scene | Frames | Asset | Motion | Entry |
|---|---:|---|---|---|
| SC-01 | 0–59 | AST-VID0001-SC01 | slow-push-in | cut |
| SC-02 | 60–149 | AST-VID0001-SC02 | custom 1.010→1.045, X 0→12 | cut |
| SC-03 | 150–239 | AST-VID0001-SC03 | custom 1.020→1.065, Y 8→-6 | cut |
| SC-04 | 240–314 | AST-VID0001-SC04 | reaction-hold | cut |
| SC-05 | 315–434 | AST-VID0001-SC05 | custom 1.010→1.045, X 10→-10, Y 0→-4 | cut |
| SC-06 | 435–614 | AST-VID0001-SC06 | slow-push-in | cut |
| SC-07 | 615–749 | AST-VID0001-SC07 | slow-push-in | cut |

No fades in candidate 1.

## Caption

CAP-01:
- frames 0–59
- text: “He had time to save only one.”
- position: top
- emphasis: “only one”
- must not cover console/box/hands

## Audio

- AUD-01: frames 0–59, voiceover, volume 1.00
- AUD-02: frames 0–749, water ambience with ducking envelope
- AUD-03: frames 126–152, cardboard rip
- AUD-04: frames 188–207, paper catch
- AUD-06: frames 315–380, box handling
- AUD-05: frames 321–434, wet footsteps
- AUD-07: frames 240–749, “Reverie”; source starts at frame 240 / 8.0s and follows a restrained volume envelope

## Audio contract extension

Stage 15 adds:
- `sourceStartFrame`
- `volumeEnvelope[]`

These are validated in `scripts/validate-remotion-manifests.mjs` and executed by `MicroDramaShort.tsx`.

## Asset materialization

Binary source media remains outside Git.

Candidate render job materializes:
- seven approved Magnific scene images
- AUD-01 voiceover
- AUD-07 music
- deterministic Stage-14 Foley WAVs regenerated from the recorded seed and verified against WAV SHA-256 hashes

Manifest paths remain stable local production paths under `public/assets/VID-0001/`.

## Candidate render command

```bash
npm run validate:manifests -- --video=VID-0001 --require-assets
npm run render:vid-0001
```

## Gate

Stage 15 is complete only after:
- production manifest validates,
- actual media is materialized,
- Remotion renders `renders/VID-0001.mp4`,
- candidate artifact is preserved,
- basic 1080×1920 / 30fps / ~25s media probe passes.

Then proceed to Stage 16 — Render Validation.
