# VID-0001 / STORY-0001 — Voiceover Production

**Working title:** The Flooded Box  
**Phase:** D — Asset Production  
**Stage:** 13 — Voiceover Production  
**Status:** COMPLETE  
**Date:** 2026-09-09

## Voice mode

Minimal narrator.

No character dialogue.

## Approved narration

| Audio ID | Time | Speaker | Line | Duration | Intent |
|---|---|---|---|---:|---|
| AUD-01 | 0.0–2.0s | Narrator | “He had time to save only one.” | 2.0s | Establish immediate time pressure and the binary choice |

## Performance direction

- restrained documentary delivery
- serious but not melodramatic
- clear emphasis on the choice
- no trailer-style booming performance
- no added words
- no artificial pause that extends past SC-01
- no narration after the hook

## Generated asset

Provider route:
**Magnific MCP → ElevenLabs Turbo v2.5 → Grayson Kingsley**

Voice:
- Grayson Kingsley
- ElevenLabs catalog voice
- Voice ID: 957

Generation settings:
- speed: 1.05
- stability: 0.55
- similarity boost: 0.70
- speaker boost: enabled

Generation result:
- duration: **2.0 seconds**
- cost: **3 Magnific credits**
- stored in Magnific project: **VID-0001 — The Flooded Box**

The repository records the stable production Audio ID rather than a temporary/private Magnific asset URL.

## Intentional silence

After AUD-01 ends at 2.0 seconds, narration remains silent for the rest of the 25-second story.

This is intentional. Story meaning after the hook comes from:
- image sequencing,
- Remotion motion,
- water ambience,
- cardboard/paper/footstep SFX,
- restrained music,
- character reactions.

## Remotion handoff

Map:
- **AUD-01**
- kind: voiceover
- start: frame 0
- duration: 60 frames at 30 fps
- scene: SC-01
- target asset path when materialized locally: `assets/VID-0001/audio/AUD-01-voiceover.mp3`

Do not stretch AUD-01 beyond 60 frames. If trimming is required for technical sync, preserve intelligibility and do not change the approved wording.

## Voiceover Writer Self-Check

- [x] every spoken word adds story value
- [x] speech fits the 2-second hook window
- [x] no redundant description after the hook
- [x] intentional silence is preserved
- [x] no character dialogue is introduced
- [x] no unauthorized voice imitation
- [x] exact user-requested voice is used
- [x] production Audio ID assigned
