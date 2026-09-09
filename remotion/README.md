# Remotion video renderer

This directory is the code-based assembly/render layer for Channel A. It does not replace the editorial workflow or human approvals.

## Setup

```bash
npm install
npm run studio
```

## Render

```bash
npm run render:vid-0001
```

The default composition is **1080×1920, 30fps, 38 seconds**, matching the current VID-0001 production timing. Put generated source media under `public/assets/<video-id>/` and keep rendered outputs under `renders/` (ignored by Git).

## Architecture

- `index.ts` — Remotion entry point.
- `Root.tsx` — composition registry and render dimensions.
- `compositions/` — reusable video compositions.
- `data/` — per-video render props; content production artifacts remain authoritative.

Remotion is an assembly and rendering tool in Phase 1, not an autonomous publishing pipeline. Story, retention, visual, audio and final QC approvals remain governed by the existing Skills and workflows.
