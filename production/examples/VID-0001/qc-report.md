# VID-0001 Final QC Report

**Review basis:** rendered 38s vertical master, captions, audio mix, metadata, and approved production documents.
**Decision:** PASS WITH CHANGES

## Severity summary
- Critical: 0
- High: 0
- Medium: 1
- Low: 1

## Findings
| Category | Timestamp / artifact | Issue | Severity | Required action |
|---|---|---|---|---|
| Audio | Full export | Connected ElevenLabs plugin is installed/enabled, but generation actions are not exposed to the current chat runtime. Final candidate therefore uses temporary local synthetic TTS. | Medium | Replace temporary voice with ElevenLabs render before publication when callable, then re-run final audio QC. |
| Visual | Scenes 01–07 | Scene clips use restrained cinematic motion on approved still keyframes rather than full temporal character animation. | Low | Accept for the Phase-1 motion-comic validation style, or later replace selected scenes with full generative action clips. |

## Story review
PASS. Conflict, misunderstanding, proof, payoff, and resolution remain intact. No moral lecture was added.

## Retention review
PASS. Runtime remains approximately 38s. The hook appears immediately. Scene 04 stays compressed with no unnecessary walking transition.

## Visual review
PASS WITH LIMITATION.
- 9:16 composition retained.
- Character wardrobe and identity remain broadly consistent.
- Paper-crane actions remain readable.
- Donation card is secondary to the crane-box visual proof.
- No intentional watermark added.

## Audio review
PASS WITH CHANGE.
- Dialogue timing follows the approved voiceover artifact.
- Corridor ambience, cart texture, art-room tone, paper trim/folds, reveal music, and final crease are implemented.
- Restrained tonal music begins only after the payoff.
- Final normalized master targets -16 LUFS / -1.5 dBTP; technical peak measured approximately -1.4 dB.
- Voice quality remains provisional until ElevenLabs replacement.

## Captions
PASS.
- Burned captions included in one master.
- Separate SRT supplied.
- Captions remain inside a conservative vertical safe area.

## Platform/compliance
- 1080x1920 vertical: PASS
- H.264 video / AAC audio: PASS
- 30 fps: PASS
- Runtime: ~38.1s
- Copyrighted commercial music: none
- Identifiable real-person voice imitation: none
- Fictional story: PASS
- Human final approval: still required

## Human-review questions
1. Is restrained still-image motion acceptable for the first validation batch?
2. Does the crane reveal read clearly on a phone?
3. After ElevenLabs replacement, does Nia sound natural and restrained rather than melodramatic?

## Recheck items
1. Replace temporary voice with ElevenLabs audio when the tool becomes callable.
2. Re-run final audio QC.
3. Human final approval before publishing.