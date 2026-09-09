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

For traceability, keep each active VID-#### chain together when practical.

## Remotion handoff
Once source assets are approved, the video must also have:
- remotion-plan.md
- render-validation.md for each candidate that reaches the gate
- a matching remotion/data/VID-####.json (or equivalent typed props)

Generated binary media belongs under public/assets/VID-#### during local composition and renders/ for rendered candidates. Binary media and renders are ignored by Git by default; production documents should reference stable Asset IDs so files can be restored/recreated.

## Source of truth
Story documents remain authoritative for narrative intent. The Remotion manifest is authoritative for the exact candidate-edit timing. Any meaningful timing change must be documented so storyboard, composition plan and render remain traceable.