# VID-0001 / STORY-0001 — Sound Design Production

**Working title:** The Flooded Box  
**Phase:** D — Asset Production  
**Stage:** 14 — Sound Design Production  
**Status:** COMPLETE  
**Date:** 2026-09-09  
**FPS:** 30  
**Target duration:** 25.0s / 750 frames

## Sound strategy

The mix should feel grounded and intimate rather than cinematic-for-cinema's-sake.

Priority order:
1. AUD-01 narration intelligibility
2. causal Foley that explains the still-image edit
3. continuous shallow-water ambience
4. restrained emotional music

Do not use trailer booms, risers, impact whooshes, sentimental swells, or SFX on every cut.

Silence and dynamic reduction are intentional.

---

# Approved audio source set

## AUD-01 — Voiceover
Existing approved Stage-13 asset.

- Text: “He had time to save only one.”
- Video time: 0.0–2.0s
- Frames: 0–59
- Provider: Magnific MCP / ElevenLabs Turbo v2.5
- Voice: Grayson Kingsley
- Duration: 2.0s

## AUD-02 — Water ambience
Original procedural Foley created for VID-0001.

- File: `AUD-02-water-ambience.mp3`
- Master: `AUD-02-water-ambience.wav`
- Duration: 25.0s
- Sample rate: 44.1kHz
- MP3: 192 kbps stereo
- SHA-256: `b5c2e5893126e4aecb96126cfb36dd9db7ef146b24a9dde86c22e5ea6d482116`

Purpose:
continuous shallow indoor water movement without dramatic flood spectacle.

## AUD-03 — Wet cardboard rip
Original procedural Foley created for VID-0001.

- File: `AUD-03-wet-cardboard-rip.mp3`
- Duration: 0.9s
- MP3: 192 kbps stereo
- SHA-256: `ae47aeb1ef68fe17856afdd5740853f333fcd19584525c393fe63717cb19c39d`

Purpose:
SC-02 interruption cue that redirects attention from console to memory box.

## AUD-04 — Paper catch / rustle
Original procedural Foley created for VID-0001.

- File: `AUD-04-paper-catch-rustle.mp3`
- Duration: 0.65s
- MP3: 192 kbps stereo
- SHA-256: `dca7c69deb4fa0aeabd0dd7180c7f6d72313bb133e4fa98c38782ab887d8eb22`

Purpose:
make SC-03's drawing reveal readable even though the visual source is a still image.

## AUD-05 — Wet footsteps
Original procedural Foley created for VID-0001.

- File: `AUD-05-wet-footsteps.mp3`
- Duration: 3.8s
- MP3: 192 kbps stereo
- SHA-256: `7a79a0703eaea08d705f51d6b9731be5b5a09a31064a87fc8e9f5dc8039a9e14`

Purpose:
create believable movement toward the stairs during SC-05 without requiring generated video.

## AUD-06 — Box handling
Original procedural Foley created for VID-0001.

- File: `AUD-06-box-handling.mp3`
- Duration: 2.2s
- MP3: 192 kbps stereo
- SHA-256: `8858c50d07062240a52ef2afb1eaa0c68508ec249a0a58f5760647e46798cdb0`

Purpose:
support the weight/handling of the cardboard memory box in SC-05.

## AUD-07 — Music bed: “Reverie”
Generated in Magnific.

Provider:
**Magnific MCP → ElevenLabs Music Generation**

Prompt intent:
restrained documentary-style emotional underscore with minimal opening, warmer felt-piano/soft-string emotion after the decision, no vocals, no trailer booms, no risers, no heroic climax.

Generation result:
- Magnific title: **Reverie**
- requested duration: 25s
- returned duration: **44s**
- generation cost: **500 Magnific credits**

Do **not** regenerate only because the generator returned 44s.

Use a trimmed source segment in Remotion:
- video start: 8.0s / frame 240
- video end: 25.0s / frame 750
- source start offset: approximately 8.0s
- source segment used: approximately source 8.0s–25.0s

This aligns the intended warmer portion of the generated track with SC-04 onward and avoids music under the opening narration.

---

# Deterministic cue map

| Audio ID | Kind | Video time | Frames | Mix intent |
|---|---|---|---|---|
| AUD-01 | voiceover | 0.0–2.0s | 0–59 | full intelligibility; highest priority |
| AUD-02 | ambience | 0.0–25.0s | 0–749 | continuous water; duck under VO and decision beat |
| AUD-03 | sfx | 4.2–5.1s | 126–152 | prominent wet cardboard rip; motivates SC-03 cut |
| AUD-04 | sfx | 6.25–6.90s | 188–207 | small paper slide/catch transient |
| AUD-06 | sfx | 10.5–12.7s | 315–380 | box lift/rub/creak, restrained |
| AUD-05 | sfx | 10.7–14.5s | 321–434 | wet footsteps toward stairs |
| AUD-07 | music | 8.0–25.0s | 240–749 | restrained emotional bed, source-offset from ~8s |

---

# Scene-by-scene audio direction

## SC-01 — 0.0–2.0s
- AUD-01 narrator dominant.
- AUD-02 water audible but clearly below voice.
- **No music.**
- No impact sound at frame 0.

## SC-02 — 2.0–5.0s
- Water becomes more exposed after narration ends.
- AUD-03 wet-cardboard rip enters around 4.2s.
- Rip should be the most attention-directing sound in the scene.
- No music.

## SC-03 — 5.0–8.0s
- Water continues.
- AUD-04 paper catch/rustle around 6.25s.
- Keep the paper sound tactile and close, not exaggerated.
- No music until the end of this section.

## SC-04 — 8.0–10.5s
- AUD-07 enters quietly using source offset ~8.0s.
- Briefly narrow/duck AUD-02 so the emotional decision feels more focused.
- No heartbeat, boom, or riser.

## SC-05 — 10.5–14.5s
- AUD-06 box handling starts with the lift.
- AUD-05 wet footsteps begins just after box handling.
- Water stays present.
- Music remains understated and below Foley.

## SC-06 — 14.5–20.5s
- Remove unnecessary foreground Foley.
- Water + warmer section of AUD-07 carry the realization.
- No dialogue.
- Do not swell music when sister looks at brother.

## SC-07 — 20.5–25.0s
- Water remains soft.
- Music stays warm but restrained.
- Do not add a “final emotional hit.”
- Final ~0.7s should breathe: reduce musical motion/level and let room/water remain.
- Cut out immediately; no outro sound.

---

# Recommended first-pass levels

These are starting points, not mastering targets.

- AUD-01 voiceover: 1.00
- AUD-02 water ambience: ~0.28 overall; lower during VO and SC-04
- AUD-03 cardboard rip: ~0.65
- AUD-04 paper catch: ~0.45
- AUD-05 footsteps: ~0.40
- AUD-06 box handling: ~0.36
- AUD-07 music: ~0.14–0.24 depending scene

Final balance must be judged from the candidate render, not from isolated assets.

---

# Required Remotion audio support

Stage 15 should support:

1. **source start offset**
   - needed for AUD-07 because the generated music asset is 44s while only source ~8s–25s is intended.

2. **volume envelopes / ducking**
   - duck AUD-02 under AUD-01
   - narrow water during SC-04
   - allow AUD-07 to enter quietly and reduce again at the ending

3. **overlapping cues**
   - Foley, ambience, voice and music intentionally overlap.

If the current `AudioCue` contract cannot express source offsets/envelopes, Stage 15 should extend it explicitly rather than baking destructive edits into undocumented files.

---

# Original Foley generation record

AUD-02 through AUD-06 were created procedurally for this production with deterministic seed **1001** and then encoded to 192 kbps MP3.

They are original project assets and do not depend on stock-audio licensing.

The MP3 package produced during Stage 14 is:
`VID-0001-Stage-14-Foley-MP3.zip`

Repository production artifacts reference stable Audio IDs/hashes rather than ephemeral chat paths.

---

# Sound Design Planner Self-Check

- [x] major cues have narrative purpose
- [x] narration priority protected
- [x] ambience exists across the full environment
- [x] silence/no-music opening is intentional
- [x] no constant risers/booms
- [x] causal Foley supports still-image storytelling
- [x] cue timings are explicit
- [x] frame ranges are explicit
- [x] music generation mismatch is documented
- [x] no AI video source audio is used
- [x] Remotion placement requirements are explicit

**Stage 14 is COMPLETE.**
