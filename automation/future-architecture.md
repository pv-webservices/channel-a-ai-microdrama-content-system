# Future Automation Architecture

Documentation only — not implemented.

Trend Discovery
→ Idea Generator
→ Concept Scorer
→ Script Generator
→ Retention Review
→ HUMAN CONCEPT / SCRIPT APPROVAL
→ Storyboard + Character Plan
→ Visual Generation
→ Voice Generation
→ Sound Generation
→ Remotion Composition Manifest
→ Remotion Programmatic Assembly + Render
→ Render Validation
→ Automated QC Assistance
→ HUMAN FINAL APPROVAL
→ YouTube / Instagram Publishing
→ Analytics Collection
→ Performance Analysis

## Possible future technologies
- LLM APIs
- AI image/video APIs
- speech generation APIs
- Remotion for deterministic composition and rendering
- FFmpeg for media inspection/transcoding where useful
- YouTube API
- Meta/Instagram publishing APIs
- database/storage
- GitHub Actions
- workflow orchestration

## Architecture rules
- Keep generation providers behind capability adapters.
- Treat Remotion composition manifests as deterministic edit specifications.
- Store secrets outside Git.
- Trace runs to input artifacts, Asset IDs and Skill versions.
- Keep approval gates explicit.
- Separate generation, rendering and publishing permissions.
- Make retries idempotent where practical.
- Never let analytics silently rewrite Skills.