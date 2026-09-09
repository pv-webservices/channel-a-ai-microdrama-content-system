import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import type {AudioCue, CaptionCue, MicroDramaProps, SceneSpec} from '../types';

const resolveSource = (path: string) =>
  /^https?:\/\//i.test(path) ? path : staticFile(path.replace(/^\/+/, ''));

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const getMotion = (scene: SceneSpec, progress: number) => {
  let scale = 1;
  let translateX = 0;
  let translateY = 0;

  if (scene.motionPreset === 'slow-push-in') scale = 1 + progress * 0.045;
  if (scene.motionPreset === 'slow-pull-out') scale = 1.045 - progress * 0.045;
  if (scene.motionPreset === 'pan-left') translateX = 24 - progress * 48;
  if (scene.motionPreset === 'pan-right') translateX = -24 + progress * 48;
  if (scene.motionPreset === 'reaction-hold') {
    scale = interpolate(progress, [0, 0.28, 1], [1.015, 1.035, 1.035], clamp);
  }
  if (scene.motionPreset === 'custom') {
    const custom = scene.customMotion ?? {};
    scale = interpolate(progress, [0, 1], [custom.startScale ?? 1, custom.endScale ?? 1], clamp);
    translateX = interpolate(progress, [0, 1], [custom.startX ?? 0, custom.endX ?? 0], clamp);
    translateY = interpolate(progress, [0, 1], [custom.startY ?? 0, custom.endY ?? 0], clamp);
  }

  return {scale, translateX, translateY};
};

const SceneLayer: React.FC<{scene: SceneSpec}> = ({scene}) => {
  const frame = useCurrentFrame();
  const end = Math.max(1, scene.durationInFrames - 1);
  const progress = interpolate(frame, [0, end], [0, 1], clamp);
  const {scale, translateX, translateY} = getMotion(scene, progress);
  const transitionFrames = Math.min(Math.max(scene.transitionInFrames ?? 6, 1), end);
  const opacity =
    scene.entryTransition === 'fade'
      ? interpolate(frame, [0, transitionFrames], [0, 1], clamp)
      : 1;

  const mediaStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity,
    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
  };

  if (scene.assetKind === 'none' || !scene.assetPath) {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: '#090909',
          color: 'white',
          padding: 72,
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
          opacity,
        }}
      >
        <div style={{fontSize: 28, letterSpacing: 4, opacity: 0.55}}>{scene.id}</div>
        <div style={{fontSize: 62, fontWeight: 700, lineHeight: 1.08, marginTop: 18}}>{scene.beat}</div>
        <div style={{fontSize: 26, opacity: 0.45, marginTop: 24}}>Asset: {scene.assetId}</div>
        {scene.cutIntent ? (
          <div style={{fontSize: 22, opacity: 0.35, marginTop: 12}}>Cut intent: {scene.cutIntent}</div>
        ) : null}
      </AbsoluteFill>
    );
  }

  return <Img src={resolveSource(scene.assetPath)} style={mediaStyle} />;
};

const captionContainerStyle = (position: CaptionCue['position']): React.CSSProperties => {
  if (position === 'top') {
    return {justifyContent: 'flex-start', alignItems: 'center', padding: '250px 72px 0'};
  }
  if (position === 'middle') {
    return {justifyContent: 'center', alignItems: 'center', padding: '0 72px'};
  }
  return {justifyContent: 'flex-end', alignItems: 'center', padding: '0 72px 250px'};
};

const EmphasizedCaption: React.FC<{cue: CaptionCue}> = ({cue}) => {
  const emphasis = cue.emphasis?.trim();
  if (!emphasis) return <>{cue.text}</>;

  const index = cue.text.toLocaleLowerCase().indexOf(emphasis.toLocaleLowerCase());
  if (index < 0) return <>{cue.text}</>;

  const before = cue.text.slice(0, index);
  const match = cue.text.slice(index, index + emphasis.length);
  const after = cue.text.slice(index + emphasis.length);

  return (
    <>
      {before}
      <span style={{fontWeight: 950, display: 'inline-block', transform: 'scale(1.055)', margin: '0 0.04em'}}>
        {match}
      </span>
      {after}
    </>
  );
};

const CaptionLayer: React.FC<{cue: CaptionCue}> = ({cue}) => {
  const frame = useCurrentFrame();
  const entranceFrames = Math.min(5, Math.max(1, cue.durationInFrames - 1));
  const opacity = interpolate(frame, [0, entranceFrames], [0, 1], clamp);
  const scale = interpolate(frame, [0, entranceFrames], [0.985, 1], clamp);

  return (
    <AbsoluteFill style={captionContainerStyle(cue.position ?? 'bottom')}>
      <div
        style={{
          maxWidth: 900,
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 800,
          fontSize: 64,
          lineHeight: 1.05,
          textAlign: 'center',
          textShadow: '0 3px 18px rgba(0,0,0,0.85)',
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <EmphasizedCaption cue={cue} />
      </div>
    </AbsoluteFill>
  );
};

const cueVolume = (cue: AudioCue, frame: number) => {
  const points = cue.volumeEnvelope;
  if (!points || points.length === 0) return cue.volume ?? 1;
  if (frame <= points[0].frame) return points[0].volume;
  const last = points[points.length - 1];
  if (frame >= last.frame) return last.volume;

  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    if (frame >= a.frame && frame <= b.frame) {
      return interpolate(frame, [a.frame, b.frame], [a.volume, b.volume], clamp);
    }
  }
  return cue.volume ?? 1;
};

const AudioLayer: React.FC<{cue: AudioCue}> = ({cue}) => (
  <Audio
    src={resolveSource(cue.path)}
    startFrom={cue.sourceStartFrame ?? 0}
    volume={(frame) => cueVolume(cue, frame)}
  />
);

export const MicroDramaShort: React.FC<MicroDramaProps> = ({scenes, captions, audioCues}) => (
  <AbsoluteFill style={{backgroundColor: '#090909'}}>
    {scenes.map((scene) => (
      <Sequence key={scene.id} from={scene.startFrame} durationInFrames={scene.durationInFrames}>
        <SceneLayer scene={scene} />
      </Sequence>
    ))}

    {captions.map((cue) => (
      <Sequence key={cue.id} from={cue.startFrame} durationInFrames={cue.durationInFrames}>
        <CaptionLayer cue={cue} />
      </Sequence>
    ))}

    {audioCues.map((cue) => (
      <Sequence key={cue.id} from={cue.startFrame} durationInFrames={cue.durationInFrames}>
        <AudioLayer cue={cue} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
