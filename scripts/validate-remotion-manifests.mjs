import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const videoArg = [...args].find((arg) => arg.startsWith('--video='));
const requestedVideo = videoArg ? videoArg.slice('--video='.length) : null;
const requireAssets = args.has('--require-assets');

const allowedAssetKinds = new Set(['image', 'video', 'graphic', 'none']);
const allowedMotion = new Set(['static', 'slow-push-in', 'slow-pull-out', 'pan-left', 'pan-right', 'reaction-hold', 'custom']);
const allowedEntryTransitions = new Set(['cut', 'fade']);
const allowedCaptionPositions = new Set(['top', 'middle', 'bottom']);
const allowedAudioKinds = new Set(['voiceover', 'dialogue', 'sfx', 'ambience', 'music']);

const fail = (message) => { throw new Error(message); };
const assertPositiveInt = (value, label) => {
  if (!Number.isInteger(value) || value <= 0) fail(`${label} must be a positive integer.`);
};
const assertNonNegativeInt = (value, label) => {
  if (!Number.isInteger(value) || value < 0) fail(`${label} must be a non-negative integer.`);
};

const manifestDir = path.resolve('remotion/data');
if (!fs.existsSync(manifestDir)) fail('remotion/data does not exist.');

let files = fs.readdirSync(manifestDir).filter((file) => /^VID-\d{4}\.json$/.test(file)).sort();
if (requestedVideo) files = files.filter((file) => file === `${requestedVideo}.json`);
if (files.length === 0) fail(requestedVideo ? `No manifest found for ${requestedVideo}.` : 'No VID-####.json manifests found.');

for (const file of files) {
  const manifest = JSON.parse(fs.readFileSync(path.join(manifestDir, file), 'utf8'));
  const label = file.replace(/\.json$/, '');

  if (manifest.videoId !== label) fail(`${file}: videoId must equal ${label}.`);
  assertPositiveInt(manifest.width, `${file}: width`);
  assertPositiveInt(manifest.height, `${file}: height`);
  assertPositiveInt(manifest.fps, `${file}: fps`);
  assertPositiveInt(manifest.durationInFrames, `${file}: durationInFrames`);
  if (!Array.isArray(manifest.scenes) || manifest.scenes.length === 0) fail(`${file}: scenes must be a non-empty array.`);
  if (!Array.isArray(manifest.captions)) fail(`${file}: captions must be an array.`);
  if (!Array.isArray(manifest.audioCues)) fail(`${file}: audioCues must be an array.`);

  const sceneIds = new Set();
  let expectedStart = 0;
  for (const scene of manifest.scenes) {
    if (!/^SC-\d{2,}$/.test(scene.id)) fail(`${file}: invalid Scene ID ${scene.id}.`);
    if (sceneIds.has(scene.id)) fail(`${file}: duplicate Scene ID ${scene.id}.`);
    sceneIds.add(scene.id);
    assertNonNegativeInt(scene.startFrame, `${file}/${scene.id}: startFrame`);
    assertPositiveInt(scene.durationInFrames, `${file}/${scene.id}: durationInFrames`);
    if (scene.startFrame !== expectedStart) fail(`${file}/${scene.id}: expected startFrame ${expectedStart}, got ${scene.startFrame}. Scene timelines must be contiguous.`);
    expectedStart = scene.startFrame + scene.durationInFrames;
    if (!allowedAssetKinds.has(scene.assetKind)) fail(`${file}/${scene.id}: unsupported assetKind ${scene.assetKind}.`);
    if (!allowedMotion.has(scene.motionPreset)) fail(`${file}/${scene.id}: unsupported motionPreset ${scene.motionPreset}.`);
    if (scene.entryTransition && !allowedEntryTransitions.has(scene.entryTransition)) fail(`${file}/${scene.id}: unsupported entryTransition ${scene.entryTransition}.`);
    if (scene.transitionInFrames !== undefined) assertPositiveInt(scene.transitionInFrames, `${file}/${scene.id}: transitionInFrames`);
    if (scene.motionPreset === 'custom' && !scene.customMotion) fail(`${file}/${scene.id}: custom motion requires customMotion values.`);
    if (scene.assetKind !== 'none' && (!scene.assetPath || typeof scene.assetPath !== 'string')) fail(`${file}/${scene.id}: ${scene.assetKind} assets require assetPath.`);
    if (requireAssets && scene.assetKind === 'none') fail(`${file}/${scene.id}: production-ready validation requires a mapped asset.`);
    if (typeof scene.assetId !== 'string' || scene.assetId.length < 3) fail(`${file}/${scene.id}: assetId is required.`);
  }
  if (expectedStart !== manifest.durationInFrames) fail(`${file}: scene total ${expectedStart} frames does not equal durationInFrames ${manifest.durationInFrames}.`);

  const captionIds = new Set();
  for (const cue of manifest.captions) {
    if (captionIds.has(cue.id)) fail(`${file}: duplicate caption ID ${cue.id}.`);
    captionIds.add(cue.id);
    assertNonNegativeInt(cue.startFrame, `${file}/${cue.id}: startFrame`);
    assertPositiveInt(cue.durationInFrames, `${file}/${cue.id}: durationInFrames`);
    if (cue.startFrame + cue.durationInFrames > manifest.durationInFrames) fail(`${file}/${cue.id}: caption extends beyond video duration.`);
    if (typeof cue.text !== 'string' || cue.text.trim() === '') fail(`${file}/${cue.id}: caption text is required.`);
    if (cue.position && !allowedCaptionPositions.has(cue.position)) fail(`${file}/${cue.id}: unsupported caption position ${cue.position}.`);
    if (cue.emphasis && !cue.text.toLocaleLowerCase().includes(cue.emphasis.toLocaleLowerCase())) fail(`${file}/${cue.id}: emphasis must be a substring of text.`);
  }

  const audioIds = new Set();
  for (const cue of manifest.audioCues) {
    if (audioIds.has(cue.id)) fail(`${file}: duplicate audio ID ${cue.id}.`);
    audioIds.add(cue.id);
    if (!allowedAudioKinds.has(cue.kind)) fail(`${file}/${cue.id}: unsupported audio kind ${cue.kind}.`);
    assertNonNegativeInt(cue.startFrame, `${file}/${cue.id}: startFrame`);
    assertPositiveInt(cue.durationInFrames, `${file}/${cue.id}: durationInFrames`);
    if (cue.startFrame + cue.durationInFrames > manifest.durationInFrames) fail(`${file}/${cue.id}: audio cue extends beyond video duration.`);
    if (typeof cue.path !== 'string' || cue.path.trim() === '') fail(`${file}/${cue.id}: audio path is required.`);
    if (cue.volume !== undefined && (typeof cue.volume !== 'number' || cue.volume < 0 || cue.volume > 2)) fail(`${file}/${cue.id}: volume must be between 0 and 2.`);
  }

  console.log(`✓ ${file}: ${manifest.scenes.length} scenes, ${manifest.durationInFrames} frames @ ${manifest.fps}fps`);
}
console.log(`Validated ${files.length} Remotion manifest(s)${requireAssets ? ' with production-ready asset requirements' : ''}.`);
