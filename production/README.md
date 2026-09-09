# Production Workspace

Canonical artifact areas:
- ideas/
- scripts/
- storyboards/
- characters/
- visual-prompts/
- video-prompts/
- voiceovers/
- sound-design/
- captions/
- approved/
- published/
- examples/

## Active production namespace

Active production numbering was reset on 2026-09-09.

The next selected production starts at:

```text
VID-0001
STORY-0001
```

Pre-reset work is stored under `archive/pre-reset-2026-09-09/` and is reference-only. Archived IDs do not consume active IDs and cannot satisfy current approval, Render Validation, QC, analytics, or publishing gates.

For traceability, keep each active VID-#### chain together when practical.

## Remotion handoff
Once source assets are approved, the video must also have:
- remotion-plan.md
- render-validation.md for each candidate that reaches the gate
- a matching remotion/data/VID-####.json (or equivalent typed props)

Generated binary media belongs under public/assets/VID-#### during local composition and renders/ for rendered candidates. Binary media and renders are ignored by Git by default; production documents should reference stable Asset IDs so files can be restored/recreated.

## Source of truth
Story documents remain authoritative for narrative intent. The Remotion manifest is authoritative for the exact candidate-edit timing. Any meaningful timing change must be documented so storyboard, composition plan and render remain traceable.
