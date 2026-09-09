# Render Validation Workflow

Render Validation is a technical gate between Remotion assembly and editorial Quality Control.

## Required checks
- output exists and opens
- expected 9:16 dimensions
- expected fps
- expected duration within approved tolerance
- no missing/offline source assets
- no black/error frames caused by failed media
- no unintended frozen frames
- no accidental source-audio leakage from generated clips
- voice/dialogue timing matches approved slots
- captions appear at intended times and stay in safe area
- scene boundaries match the composition plan
- first frame is intentional and readable on mobile
- final frame/end cut is intentional
- no clipping or obvious mix failure

## Decision
Return PASS, PASS WITH CHANGES, or FAIL.

PASS means the render is technically ready for editorial QC. It does not mean the story/video is finally approved.

PASS WITH CHANGES means bounded technical fixes are required followed by re-render and recheck.

FAIL means the candidate should not proceed to editorial QC.

## Output
Use templates/render-validation-template.md and save the result with the video production artifacts.