# Analytics Schema

Do not fabricate missing values. Leave unavailable fields blank.

- **video_id** — Internal `VID-####` identifier.
- **platform** — Publishing platform.
- **publish_date** — Actual publish date; ISO `YYYY-MM-DD` preferred.
- **title** — Published title or primary caption label.
- **content_pillar** — Primary pillar from `brand/content-pillars.md`.
- **story_type** — Internal structural label for comparable grouping.
- **emotional_category** — Primary emotional category.
- **hook_type** — Opening mechanism from Hook Writer taxonomy.
- **duration_seconds** — Final published runtime in seconds.
- **visual_style** — Controlled internal visual-style label.
- **voice_style** — Narrator, dialogue, hybrid, or controlled internal subtype.
- **views** — Platform-reported views.
- **reach** — Platform-reported reach when available.
- **impressions** — Platform-reported impressions when available.
- **three_second_views** — Count reaching three seconds when available.
- **three_second_retention** — Rate reaching three seconds when available.
- **scroll_away_rate** — Scroll/swipe-away metric where platform provides it.
- **average_watch_time** — Platform-reported average watched time; keep unit consistent.
- **average_percentage_viewed** — Platform-reported average percentage viewed.
- **completion_rate** — End-reach rate when available or consistently calculated.
- **replays** — Replay count/rate only under a documented convention.
- **likes** — Likes.
- **comments** — Comments.
- **shares** — Shares.
- **saves** — Saves/bookmarks where available.
- **followers_gained** — Followers attributed to the video where available.
- **subscribers_gained** — Subscribers attributed to the video where available.
- **profile_visits** — Profile/channel visits attributed where available.
- **traffic_source** — Primary or encoded traffic-source information.
- **notes** — Definitions, caveats, anomalies, or context.

## Consistency rules
- Pick one convention for rate fields and keep it consistent.
- Do not mix raw replay counts and replay rates without a documented convention.
- Platform definitions can differ; do not compare similar names blindly.
- Add fields only when the channel can collect them reliably.
