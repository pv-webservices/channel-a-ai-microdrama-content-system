# VID-0001 / STORY-0001 — Remotion Motion Plan

**Working title:** The Flooded Box  
**Phase:** C — Pre-production  
**Stage:** 11 — Remotion Motion Planning  
**Status:** COMPLETE — migrated from retired video-prompt workflow  
**Target:** 1080x1920 / 9:16  
**FPS:** 30  
**Total duration:** 25.0s / 750 frames  
**Visual rule:** image/graphic sources only; no AI video generation

## Motion philosophy
The still images carry character identity, props, action state and emotion. Remotion supplies deterministic editorial motion:
- scale,
- X/Y translation,
- reaction holds,
- hard cuts,
- justified fades,
- captions,
- audio-driven emphasis.

Do not fabricate limb, face or object animation from a still. If another temporal state is essential, create an additional approved still keyframe.

## Scene motion map

| Scene | Frames | Asset | Motion | Numeric intent | Entry | Story purpose | Extra still required now? |
|---|---:|---|---|---|---|---|---|
| SC-01 | 0–59 | AST-VID0001-SC01 | slow-push-in | preset 1.000→1.045 | cut | intensify binary choice without cropping console/box | No |
| SC-02 | 60–149 | AST-VID0001-SC02 | custom | scale 1.010→1.045; X 0→12; Y 0→0 | cut | bias attention toward console grip while box stays readable | No |
| SC-03 | 150–239 | AST-VID0001-SC03 | custom | scale 1.020→1.065; X 0→0; Y 8→-6 | cut | emphasize drawing catch/reveal | No |
| SC-04 | 240–314 | AST-VID0001-SC04 | reaction-hold | preset 1.015→1.035 then hold | cut | let the decision read; audio carries internal shift | No |
| SC-05 | 315–434 | AST-VID0001-SC05 | custom | scale 1.010→1.045; X 10→-10; Y 0→-4 | cut | move attention toward stairs while retaining abandoned console | No |
| SC-06 | 435–614 | AST-VID0001-SC06 | slow-push-in | preset 1.000→1.045 | cut | allow sister’s realization to read | No |
| SC-07 | 615–749 | AST-VID0001-SC07 | slow-push-in | preset 1.000→1.045 | cut | close on drawing + shared understanding | No |

## Scene notes

### SC-01
Keep both choices visible for all 60 frames. VO supplies urgency; do not fake a running entrance.

### SC-02
The still already captures console grip/interruption. Use the slight lateral move only to guide attention, not to imply literal hand motion.

### SC-03
The still captures the drawing just above water. Combine the controlled push with cardboard-rip/paper SFX in Stage 14; no paper animation is required.

### SC-04
Use reaction-hold. Do not animate eyes or facial expression. SC-03 → SC-04 → SC-05 communicates recognition and choice through editing.

### SC-05
The still captures the post-choice carry state. The controlled pan/push creates forward momentum. Do not crop the abandoned console too early.

### SC-06
Use a patient push-in. The still must show sister, box, and preferably the console sightline. Audio creates the realization beat; no facial animation.

### SC-07
Use the most restrained ending push-in. End immediately after emotional comprehension; no story-master outro.

## Additional-still rule
Current first pass does **not** require additional stills.

During Remotion preview, request another image only if:
- SC-01 lacks a readable binary choice,
- SC-03 drawing is not legible,
- SC-05 fails to communicate the console was left behind,
- SC-06 gaze/relationship logic is unclear,
- SC-07 drawing/payoff is unclear.

Any additional image must use the existing character/prop/environment references and approved image-model policy.

## Caption constraints
- SC-01: upper third preferred; never cover console/box.
- SC-03: never cover drawing or hand.
- SC-05: never cover box/drawing/hands.
- SC-06: never cover faces or console sightline.
- SC-07: never cover drawing or either face.

## Transition rule
All scenes use `entryTransition: cut` in the first candidate. A fade may be introduced later only with explicit editorial justification.

## Stage 11 self-check
- [x] image/graphic sources only
- [x] 750-frame total preserved
- [x] every scene has executable Remotion motion
- [x] custom transforms are numeric
- [x] no actor/object animation is fabricated
- [x] no AI video model/provider dependency
- [x] additional-still fallback is explicit
- [x] caption exclusions preserved
