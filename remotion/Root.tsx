import React from 'react';
import {Composition, type CalculateMetadataFunction} from 'remotion';
import smokeProps from './smoke/default.json';
import {MicroDramaShort} from './compositions/MicroDramaShort';
import type {MicroDramaProps} from './types';

const defaultProps = smokeProps as MicroDramaProps;

const calculateMetadata: CalculateMetadataFunction<MicroDramaProps> = ({props}) => ({
  durationInFrames: props.durationInFrames,
  fps: props.fps,
  width: props.width,
  height: props.height,
  props,
});

export const RemotionRoot: React.FC = () => (
  <Composition
    id="MicroDramaShort"
    component={MicroDramaShort}
    durationInFrames={defaultProps.durationInFrames}
    fps={defaultProps.fps}
    width={defaultProps.width}
    height={defaultProps.height}
    defaultProps={defaultProps}
    calculateMetadata={calculateMetadata}
  />
);
