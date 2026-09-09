# VID-0001 / STORY-0001 — Video Prompt Package

**Working title:** The Flooded Box  
**Phase:** C — Pre-production  
**Stage:** 11 — Video Prompt Generation  
**Status:** COMPLETE  
**Aspect ratio:** 9:16 vertical  
**Target duration:** 25.0 seconds  
**FPS reference:** 30  
**Storyboard authority:** `production/VID-0001/storyboard.md`  
**Character authority:** `production/VID-0001/characters.md`  
**Still-keyframe authority:** `production/VID-0001/image-prompts.md`

## Purpose

Convert each approved storyboard shot into an explicit motion specification with:
- stable start state,
- sequential subject movement,
- facial movement,
- object interaction,
- environmental motion,
- separate camera motion,
- clear end state,
- continuity constraints,
- negative motion constraints,
- clean transition handoff.

These prompts are provider-neutral and should be adapted only syntactically for the chosen video-generation system. Story, identity, geography and timing may not be altered to suit a model.

---

# Global Motion Rules

## Character identity
Always preserve the approved reference identity of:
- CHAR-001 — Older Brother
- CHAR-002 — Younger Sister

No face morphing, age drift, hairstyle drift, wardrobe drift or body-proportion drift across a shot.

## Screen geography
- console remains camera-left
- memory box remains camera-right until CHAR-001 lifts it
- stairs remain rear/right
- CHAR-002 enters from rear/right only
- never mirror the room during motion

## Environmental motion
Water should:
- move slowly and shallowly across the floor,
- never become a wave,
- never rise dramatically within one shot,
- never splash unrealistically,
- never create electrical sparks.

## Camera motion
Favor:
- locked camera,
- subtle push-in,
- short controlled follow.

Avoid:
- orbiting,
- whip pans,
- crane-like movement,
- large handheld shake,
- camera teleportation,
- simultaneous dolly + orbit + zoom.

## Facial performance
Keep expressions restrained.

CHAR-001:
urgency → interrupted attention → recognition → quiet resolve → restrained tenderness.

CHAR-002:
concern → realization → quiet gratitude/affection.

No theatrical crying, shouting, broad smiling or exaggerated eyebrow acting.

## Object continuity
PROP-001 memory box:
same size, tape seams, dents and moisture damage.

PROP-002 sibling drawing:
exact same drawing design in SC-03 and SC-07.

PROP-003 console:
same matte-black brand-neutral unit/controller, same orientation, visibly unplugged.

---

# VP-SC01 — Hook / Only One

**Shot ID:** VP-SC01  
**Scene:** SC-01  
**Asset:** AST-VID0001-SC01  
**Duration:** 2.0 seconds  
**Preferred input:** approved KF-SC01-A or equivalent reference-led start frame

## Start state
Basement already contains shallow moving water. Console is camera-left. Memory box is camera-right. Stairs are rear/right. CHAR-001 is just entering the center lane from slightly forward/off-center.

## Subject movement
0.0–0.7s:
CHAR-001 takes one urgent step into the center.

0.7–1.3s:
He brakes abruptly between the two objects.

1.3–2.0s:
His head and eyes make one quick assessment from left to right without turning his whole body dramatically.

## Facial movement
Focused urgency only. Brows tighten slightly. Mouth remains mostly closed.

## Object interaction
None yet.

## Environmental motion
Shallow water continues a slow directional flow across the concrete foreground.

## Camera motion
Mostly locked. At most a tiny natural stabilization drift; no intentional push-in required.

## Temporal progression
Enter → stop → assess.

## End state
CHAR-001 is fully stopped in center, both console and box remain readable, and his body is ready to move toward camera-left at the next cut.

## Pacing
Fast and immediate.

## Ready-to-send motion prompt
Animate the approved SC-01 keyframe into a realistic 2-second 9:16 shot. Preserve CHAR-001’s exact face, hair, age, charcoal-gray open hoodie, olive T-shirt, dark jeans, black canvas shoes and black watch on left wrist. Preserve the exact basement geography: unplugged matte-black console camera-left, worn memory box camera-right, stairs rear/right, shallow water only. CHAR-001 takes one urgent step into the center, brakes sharply between the two objects, then makes one quick restrained visual assessment between them. Keep body movement natural and physically grounded. Water moves slowly across the floor. Camera stays essentially locked. End with CHAR-001 fully stopped and poised to reach camera-left.

## Negative motion constraints
No sprinting through frame, no slipping, no jumping water, no dramatic head whipping, no face morphing, no wardrobe morphing, no camera orbit, no console/box movement, no mirrored geography, no sparks.

## Transition handoff
Hard cut to SC-02 with CHAR-001 immediately reaching toward the console.

---

# VP-SC02 — First Instinct

**Shot ID:** VP-SC02  
**Scene:** SC-02  
**Asset:** AST-VID0001-SC02  
**Duration:** 3.0 seconds  
**Preferred input:** approved KF-SC02-A or reference-led first frame

## Start state
CHAR-001 is already oriented toward camera-left. Console is within arm’s reach. Memory box remains visible camera-right.

## Subject movement
0.0–0.8s:
CHAR-001’s near hand moves directly to the console.

0.8–1.5s:
He grips the console edge with clear intent to lift/save it.

1.5–2.2s:
A cardboard-rip trigger occurs off to camera-right; his lifting motion stops.

2.2–3.0s:
His shoulders and eyes begin turning right toward the sound while his hand remains on the console.

## Facial movement
Urgent concentration shifts to interrupted attention.

## Object interaction
Console may shift only a few millimeters under his grip but must not be lifted away or relocated.

## Environmental motion
Water remains shallow and consistent.

## Camera motion
Very subtle controlled push toward hand/console, or locked if the source clip already has sufficient motion.

## Temporal progression
Reach → grip → interruption → attention shifts right.

## End state
One hand remains on console; face/eyes are beginning to turn toward the box.

## Ready-to-send motion prompt
Animate SC-02 as a realistic 3-second 9:16 action shot. Preserve CHAR-001 identity and wardrobe exactly. He immediately reaches camera-left, grips the same unplugged matte-black console with clear intention to save it, then abruptly pauses as he hears wet cardboard tear from camera-right. His hand stays on the console while his shoulders and eyes begin turning toward the box. Keep the memory box visible on the right enough to preserve geography. Use natural hand anatomy and restrained facial response. Shallow water continues moving slowly. Camera may make only a very slight push toward the console hand. End before he fully turns away.

## Negative motion constraints
No full console lift, no console sliding across shelf, no extra fingers, no hand morphing, no watch switching wrists, no dramatic flinch, no camera whip, no mirrored room, no electrical event.

## Transition handoff
Cut on the cardboard-rip sound to SC-03.

---

# VP-SC03 — Memory Reveal

**Shot ID:** VP-SC03  
**Scene:** SC-03  
**Asset:** AST-VID0001-SC03  
**Duration:** 3.0 seconds  
**Preferred input:** exact PROP-002 drawing reference + approved environment/CHAR-001 references

## Start state
Lower corner of PROP-001 is weakened and slightly open. Drawing is partly visible but not yet falling.

## Subject movement
0.0–0.7s:
Wet cardboard seam gives way slightly.

0.7–1.6s:
PROP-002 slides downward from the box under gravity.

1.6–2.3s:
CHAR-001’s hand enters and catches the sheet cleanly just above water.

2.3–3.0s:
He steadies the drawing; motion settles so the two sibling figures become readable.

## Facial movement
If face is visible, only a small recognition reaction; do not force face into insert composition.

## Object interaction
The drawing must move as flexible paper, not rigid cardboard. The box itself stays in place.

## Environmental motion
Water moves slowly below the paper.

## Camera motion
Locked.

## Temporal progression
Box failure → drawing slides → catch → readable hold.

## End state
Exact sibling drawing is safely held above water and clearly visible.

## Ready-to-send motion prompt
Generate a realistic 3-second 9:16 SC-03 motion shot using the exact approved memory box and sibling drawing references. The softened lower corner of the same worn cardboard box gives way slightly. The exact white-paper crayon drawing of two siblings holding hands slides downward naturally under gravity. CHAR-001’s hand enters once and catches the sheet just before it reaches the shallow water. The paper flexes naturally, then settles enough for the drawing to be clearly readable. Keep box dents, tape seams and proportions unchanged. Camera remains locked and close. Water moves subtly below. End with the drawing safely held and visible.

## Negative motion constraints
No different drawing artwork, no paper duplication, no extra hands/fingers, no floating upward paper, no box morphing, no dramatic splash, no camera move, no readable new text appearing.

## Transition handoff
Cut from readable drawing to CHAR-001’s eyeline decision in SC-04.

---

# VP-SC04 — Decision / Reaction Hold

**Shot ID:** VP-SC04  
**Scene:** SC-04  
**Asset:** AST-VID0001-SC04  
**Duration:** 2.5 seconds  
**Preferred input:** approved KF-SC04-A  
**Fallback:** use still + Remotion reaction-hold if video generation introduces face/eyeline drift

## Start state
CHAR-001 holds PROP-002 near chest/right side. His gaze begins on the drawing.

## Subject movement
0.0–0.7s:
Eyes focus on drawing.

0.7–1.4s:
Eyes shift briefly toward the memory box.

1.4–2.1s:
Eyes move camera-left toward the console.

2.1–2.5s:
Small exhale/settling of shoulders; decision resolves.

## Facial movement
Hesitation softens into quiet resolve. No tear formation, no mouth opening, no smile.

## Object interaction
Drawing remains stable in hand.

## Environmental motion
Background water movement minimal and secondary.

## Camera motion
Locked or extremely subtle push-in of only a few percent.

## Temporal progression
Drawing → box → console → resolve.

## End state
CHAR-001 looks toward the console with a settled decision, ready to release it and lift the box.

## Ready-to-send motion prompt
Animate the approved SC-04 keyframe for 2.5 seconds in 9:16 while preserving CHAR-001’s exact face and wardrobe. He holds the exact sibling drawing near his chest/right side. His eyes move in a restrained sequence: first the drawing, then briefly the memory box, then camera-left toward the console. His expression changes only subtly from hesitation to quiet resolve; shoulders settle slightly at the end. Keep mouth mostly closed, no tears, no dramatic brow movement. Drawing stays stable. Camera is locked or makes only a tiny slow push-in. End on a clear leftward eyeline.

## Negative motion constraints
No face morphing, no blinking glitches, no exaggerated emotional shift, no crying, no head snap, no drawing change, no wardrobe change, no camera orbit.

## Transition handoff
Hard cut to SC-05 once the decision is clear.

---

# VP-SC05 — The Choice

**Shot ID:** VP-SC05  
**Scene:** SC-05  
**Asset:** AST-VID0001-SC05  
**Duration:** 4.0 seconds  
**Preferred input:** approved KF-SC05-A or reference-led start frame

## Start state
CHAR-001 has released the console. Memory box is still camera-right. Drawing is in/against the box.

## Subject movement
0.0–1.0s:
CHAR-001 bends/repositions naturally and places both arms around PROP-001.

1.0–2.0s:
He lifts the box once, using believable weight and body mechanics.

2.0–2.8s:
He secures PROP-002 against the top/side of the box.

2.8–4.0s:
He turns toward rear/right stairs and takes the first controlled step away.

## Facial movement
Quiet resolve; attention now on protecting the box and moving out.

## Object interaction
Box deforms only minimally as real corrugated cardboard. Drawing stays secure. Console remains untouched at camera-left.

## Environmental motion
Subtle wet footsteps and shallow water displacement near shoes only.

## Camera motion
Short controlled pan/follow to the right, keeping console visible behind for part of shot. No large dolly.

## Temporal progression
Gather → lift → secure drawing → turn/leave.

## End state
CHAR-001 is moving toward the stairs with the box. Console remains behind and readable.

## Ready-to-send motion prompt
Create a realistic 4-second 9:16 SC-05 shot preserving CHAR-001, PROP-001, PROP-002, PROP-003 and the exact basement geography. CHAR-001 releases the console, gathers the worn cardboard memory box with both arms, lifts it once using believable weight and body mechanics, secures the exact sibling drawing safely against the top/side, then turns toward the rear/right stairs and takes the first step away. The unplugged black console remains behind at camera-left in its original position. His lower jeans/shoes may show slight wetness only. Use a short controlled follow/pan toward the stairs while keeping the abandoned console visible long enough to register. End with the box secure in his arms and movement continuing toward the stairs.

## Negative motion constraints
No box floating into arms, no extra limbs, no drawing falling, no console moving, no mirrored stairs, no dramatic running, no deep splashes, no camera orbit, no wardrobe changes.

## Transition handoff
Cut to SC-06 at the stair threshold.

---

# VP-SC06 — Sister Realization

**Shot ID:** VP-SC06  
**Scene:** SC-06  
**Asset:** AST-VID0001-SC06  
**Duration:** 6.0 seconds  
**Preferred input:** approved KF-SC06-A or equivalent reference-led start

## Start state
CHAR-001 stands foreground/center-right holding the box. CHAR-002 is just entering/appearing on the drier rear/right stairs.

## Subject movement
0.0–1.2s:
CHAR-002 steps into view and pauses.

1.2–2.6s:
Her eyes move past CHAR-001 toward camera-left at the abandoned console.

2.6–4.0s:
Her gaze returns to the dry memory box in CHAR-001’s arms.

4.0–5.2s:
She looks up toward CHAR-001.

5.2–6.0s:
Both hold a short silent reaction beat.

CHAR-001 remains mostly still throughout, with only natural breathing and a small settling of posture.

## Facial movement
CHAR-002:
concern → realization → quiet gratitude.

CHAR-001:
restrained, calm, slightly protective.

## Object interaction
CHAR-001 keeps stable hold on box. No drawing removal yet.

## Environmental motion
Water remains active only in lower basement area. CHAR-002 stays on dry stair edge.

## Camera motion
Mostly locked. Optional extremely subtle push-in after CHAR-002’s realization.

## Temporal progression
Enter → see console → see box → meet brother’s eyes → hold.

## End state
CHAR-002 understands the choice and is visually connected to CHAR-001, ready to step closer in SC-07.

## Ready-to-send motion prompt
Create a realistic 6-second 9:16 SC-06 payoff shot using the approved CHAR-001, CHAR-002, basement and prop references. CHAR-001 stands foreground/center-right holding the same memory box. CHAR-002, fully dry in her mustard sweatshirt and charcoal leggings, steps into view from the rear/right stairs and pauses. Her gaze sequence must be clear and restrained: first she looks past CHAR-001 toward the abandoned console at camera-left, then down/forward to the dry box in his arms, then up to CHAR-001’s face. Her expression changes naturally from concern to realization to quiet gratitude. CHAR-001 remains silent and mostly still, with only natural breathing. Keep the height difference and sibling resemblance stable. Camera stays almost locked with only a tiny late push-in. End on shared silent understanding.

## Negative motion constraints
No crying, no hug, no broad smile, no sister clothing becoming wet, no age morphing, no console relocation, no box relocation, no camera orbit, no dramatic zoom, no extra people.

## Transition handoff
Cut to SC-07 as CHAR-002 moves close enough to take the drawing.

---

# VP-SC07 — Silent Resolution

**Shot ID:** VP-SC07  
**Scene:** SC-07  
**Asset:** AST-VID0001-SC07  
**Duration:** 4.5 seconds  
**Preferred input:** approved KF-SC07-A or equivalent reference-led start

## Start state
CHAR-001 and CHAR-002 are near the drier stair edge. CHAR-001 holds the box. PROP-002 is accessible at the top.

## Subject movement
0.0–1.0s:
CHAR-002 reaches gently and pulls PROP-002 from the top of the box.

1.0–2.0s:
She looks down at the drawing.

2.0–3.0s:
She looks up toward CHAR-001.

3.0–3.6s:
CHAR-001 gives one tiny understated shrug.

3.6–4.5s:
CHAR-002 presses/settles the drawing back against the box and steps beside him.

## Facial movement
CHAR-002 shows quiet understanding; only slight softening around eyes/mouth.

CHAR-001 remains restrained; tiny shrug is the main expressive action.

## Object interaction
Drawing must remain the exact same artwork and behave as normal paper.

## Environmental motion
Water sound/visual remains background only. No new flooding action.

## Camera motion
Stable camera with a very restrained late push-in if needed.

## Temporal progression
Take drawing → recognize → look to brother → tiny shrug → stand beside him.

## End state
Siblings stand side-by-side near the stairs, not embracing. Drawing is safe. Emotional story is complete.

## Ready-to-send motion prompt
Create a realistic 4.5-second 9:16 SC-07 final shot using the approved character, box and exact sibling drawing references. Near the dry stair edge, CHAR-002 gently removes the exact crayon drawing from the top of the memory box, looks down at it for a brief beat, then looks up toward CHAR-001. CHAR-001 gives one very small understated shrug, as if the decision was obvious. CHAR-002 then settles the drawing back against the box and steps beside him. They end side-by-side without hugging. Preserve both faces, ages, hair, wardrobe, sibling resemblance and height relationship. CHAR-002 remains fully dry. Keep emotion restrained and natural. Camera stays stable with at most a tiny late push-in. End immediately on the side-by-side pose.

## Negative motion constraints
No embrace, no crying, no broad smiling, no altered drawing, no extra fingers, no paper duplication, no age drift, no wardrobe drift, no sentimental glow, no camera orbit, no outro behavior.

## Transition handoff
Final story frame. Hard cut out immediately after emotional fulfillment.

---

# Motion Continuity Validation

Before approving any generated clip:

- [ ] correct shot duration or enough usable clean duration for planned edit
- [ ] start state matches storyboard/keyframe
- [ ] end state supports the next cut
- [ ] CHAR-001 face/hair/wardrobe stable throughout
- [ ] CHAR-002 face/hair/wardrobe stable throughout
- [ ] CHAR-001 watch stays on left wrist
- [ ] no age drift
- [ ] no duplicated or disappearing limbs
- [ ] no hand/finger morphing during object interaction
- [ ] box proportions/tape/dents stable
- [ ] drawing artwork unchanged
- [ ] console model/orientation unchanged
- [ ] console remains unplugged
- [ ] room is never mirrored
- [ ] stairs remain rear/right
- [ ] water stays shallow and coherent
- [ ] no electrical sparks
- [ ] camera motion matches prompt and does not teleport
- [ ] expressions remain restrained
- [ ] no unintended hug/crying
- [ ] no generated captions/text/logos
- [ ] clip can cut cleanly into next scene

# Shot Production Priority

## Highest motion-complexity / highest retry risk
1. SC-05 — box lift + carry
2. SC-03 — drawing slide + hand catch
3. SC-07 — drawing handoff + two-character reaction
4. SC-06 — two-character gaze sequence

## Moderate complexity
5. SC-02 — console reach + interruption
6. SC-01 — entry + stop

## Lowest complexity / strongest still fallback
7. SC-04 — eyeline decision

If a high-complexity generated clip fails continuity repeatedly, prefer splitting the action into approved keyframes and deterministic Remotion editing rather than accepting identity/anatomy drift.

# Stage 11 Output Summary

Prepared:
- 7 motion prompts, one for each approved scene
- explicit start and end states
- temporally ordered subject/facial/object/environment motion
- separate camera-motion instructions
- negative motion constraints
- transition handoffs
- cross-clip continuity validation
- complexity/retry priority
- SC-04 still + Remotion fallback rule

No video assets were generated during Stage 11.
