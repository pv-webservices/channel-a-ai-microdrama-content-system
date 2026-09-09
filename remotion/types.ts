export type AssetKind = 'image' | 'video' | 'graphic' | 'none';
export type MotionPreset =
  | 'static'
  | 'slow-push-in'
  | 'slow-pull-out'
  | 'pan-left'
  | 'pan-right'
  | 'reaction-hold'
  | 'custom';
export type EntryTransition = 'cut' | 'fade';
export type CaptionPosition = 'top' | 'middle' | 'bottom';
export type AudioKind = 'voiceover' | 'dialogue' | 'sfx' | 'ambience' | 'music';

export type CustomMotion = {
  startScale?: number;
  endScale?: number;
  startX?: number;
  endX?: number;
  startY?: number;
  endY?: number;
};

export type SceneSpec = {
  id: string;
  beat: string;
  startFrame: number;
  durationInFrames: number;
  assetId: string;
  assetKind: AssetKind;
  assetPath?: string;
  motionPreset: MotionPreset;
  customMotion?: CustomMotion;
  cutIntent?: string;
  entryTransition?: EntryTransition;
  transitionInFrames?: number;
  captionExclusion?: string;
  notes?: string;
};

export type CaptionCue = {
  id: string;
  startFrame: number;
  durationInFrames: number;
  text: string;
  emphasis?: string;
  position?: CaptionPosition;
};

export type AudioCue = {
  id: string;
  kind: AudioKind;
  startFrame: number;
  durationInFrames: number;
  path: string;
  volume?: number;
};

export type MicroDramaProps = {
  videoId: string;
  title: string;
  subtitle?: string;
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  scenes: SceneSpec[];
  captions: CaptionCue[];
  audioCues: AudioCue[];
};
