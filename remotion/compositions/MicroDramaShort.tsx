import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import type {CaptionCue, MicroDramaProps, SceneSpec} from '../types';

const resolveSource = (path: string) =>
  /^https?:\/\//i.test(path) ? path : staticFile(path.replace(/^\/+/, ''));

const SceneLayer: React.FC<{scene: SceneSpec}> = ({scene}) => {
  const frame = useCurrentFrame();
  const end = Math.max(1, scene.durationInFrames - 1);
  const progress = interpolate(frame, [0, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  let scale = 1;
  let translateX = 0;
  if (scene.motionPreset === 'slow-push-in') scale = 1 + progress * 0.045;
  if (scene.motionPreset === 'slow-pull-out') scale = 1.045 - progress * 0.045;
  if (scene.motionPreset === 'pan-left') translateX = 24 - progress * 48;
  if (scene.motionPreset === 'pan-right') translateX = -24 + progress * 48;

  const mediaStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: `translateX(${translateX}px) scale(${scale})`,
  };

  if (!scene.assetPath || scene.assetKind === 'none' || scene.assetKind === 'graphic') {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: '#090909',
          color: 'white',
          padding: 72,
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{fontSize: 28, letterSpacing: 4, opacity: 0.55}}>{scene.id}</div>
        <div style={{fontSize: 62, fontWeight: 700, lineHeight: 1.08, marginTop: 18}}>{scene.beat}</div>
        <div style={{fontSize: 26, opacity: 0.45, marginTop: 24}}>Asset: {scene.assetId}</div>
      </AbsoluteFill>
    );
  }

  if (scene.assetKind === 'image') {
    return <Img src={resolveSource(scene.assetPath)} style={mediaStyle} />;
  }

  return <OffthreadVideo src={resolveSource(scene.assetPath)} style={mediaStyle} muted />;
};

const CaptionLayer: React.FC<{cue: CaptionCue}> = ({cue}) => (
  <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', padding: '0 72px 250px'}}>
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
      }}
    >
      {cue.text}
    </div>
  </AbsoluteFill>
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
        <Audio src={resolveSource(cue.path)} volume={cue.volume ?? 1} />
      </Sequence>
    ))}
  </AbsoluteFill>
);