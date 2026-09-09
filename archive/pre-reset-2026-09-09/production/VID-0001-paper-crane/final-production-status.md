# VID-0001 Current Production Status

**Video:** VID-0001 — The Paper Crane
**Canonical state:** REMOTION MIGRATION INCOMPLETE — NOT PUBLISH READY
**Target runtime:** 38 seconds
**Target format:** 1080x1920, 9:16, 30 fps

## Editorial / pre-production state
The concept, script, retention review, character plan, storyboard, visual prompts, voice direction and sound-design decisions exist. Historical pre-Remotion production work is archived separately.

## Current Remotion state
- `remotion/data/VID-0001.json` contains the complete 1140-frame scene/caption timing plan.
- All seven scenes currently use `assetKind: none`; approved binary visual assets are not mapped.
- `audioCues` is currently empty; approved voice/SFX/ambience/music files are not mapped.
- Stage 15 Remotion Composition & Assembly is not complete.
- Stage 16 Render Validation is NOT RUN.
- Stage 17 Quality Control under the canonical pipeline is NOT RUN.

## Next gate
1. Restore or regenerate approved source visuals/audio.
2. Map every approved source to its stable Asset ID and manifest path.
3. Run `npm run validate:manifests -- --video=VID-0001 --require-assets`.
4. Render with `npm run render:vid-0001`.
5. Complete `render-validation.md`.
6. Only after Render Validation passes, run final editorial QC.
7. Human final approval remains mandatory before publishing.

Historical pre-Remotion records are retained separately for provenance.
