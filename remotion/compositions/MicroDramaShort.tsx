import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export type MicroDramaProps = {
  videoId: string;
  title: string;
  subtitle?: string;
};

export const MicroDramaShort: React.FC<MicroDramaProps> = ({videoId, title, subtitle}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090909',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: 90,
        textAlign: 'center',
      }}
    >
      <div style={{opacity}}>
        <div style={{fontSize: 34, letterSpacing: 8, marginBottom: 28}}>{videoId}</div>
        <div style={{fontSize: 96, fontWeight: 700, lineHeight: 1.05}}>{title}</div>
        {subtitle ? <div style={{fontSize: 38, marginTop: 30, opacity: 0.7}}>{subtitle}</div> : null}
      </div>
    </AbsoluteFill>
  );
};
