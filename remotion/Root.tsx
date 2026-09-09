import React from 'react';
import {Composition} from 'remotion';
import {MicroDramaShort, type MicroDramaProps} from './compositions/MicroDramaShort';

const defaultProps: MicroDramaProps = {
  videoId: 'VID-0001',
  title: 'The Paper Crane',
  subtitle: 'Original AI micro-drama',
};

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MicroDramaShort"
      component={MicroDramaShort}
      durationInFrames={1140}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  </>
);
