# Upstream GitHub Stack — Video Automation

**Snapshot:** 2026-08-11

Use these projects as upstream references/dependencies where appropriate. Do not blindly fork everything; keep our business logic in ACool-owned repositories and pin/test upstream versions.

## 1. Programmatic Video

### `remotion-dev/remotion`
https://github.com/remotion-dev/remotion

Primary recommendation for reusable React/TypeScript video compositions, batch rendering, brand systems, and data-driven video generation.

Use for:
- mortgage explainers
- social derivatives
- luxury product films
- animated charts/timelines
- disclosure/end-card components
- multi-aspect-ratio composition rendering

**Licensing:** review the current Remotion license/company-license requirements before production use.

### `remotion-dev/template-tiktok`
https://github.com/remotion-dev/template-tiktok

Reference for short-form captioning and vertical-video patterns.

### `remotion-dev/template-prompt-to-motion-graphics-saas`
https://github.com/remotion-dev/template-prompt-to-motion-graphics-saas

Reference architecture for prompt-driven motion-graphics applications.

### `remotion-dev/template-render-server`
https://github.com/remotion-dev/template-render-server

Reference for an API/server-based render service.

## 2. Media Processing

### `FFmpeg/FFmpeg`
https://github.com/FFmpeg/FFmpeg

Use for transcoding, trimming, concatenation, loudness normalization, audio extraction, caption burn-in, thumbnails, format conversion, and delivery QA.

Pin the installed FFmpeg build/version in production images so renders stay reproducible.

## 3. Speech Recognition / Captions

### `openai/whisper`
https://github.com/openai/whisper

Use as an optional/local speech-to-text engine for transcription, multilingual recognition, translation, and caption workflows.

Keep STT behind a provider interface so a managed API or another approved engine can be substituted.

## 4. Workflow Automation

### `n8n-io/n8n`
https://github.com/n8n-io/n8n

Optional workflow automation layer for integration-heavy business flows, webhooks, notifications, approval handoffs, CMS triggers, and publication workflows.

Do not make n8n the source of truth for regulated mortgage claims. `ACoolAGENT` remains the canonical job/audit layer.

Review current n8n licensing and deployment terms before choosing hosted/self-hosted production architecture.

## 5. Live Production

### `obsproject/obs-studio`
https://github.com/obsproject/obs-studio

Canonical upstream for the existing `ACoolNerd/NETWORK_obs-studio` fork/reference.

Use for recording, live streaming, virtual camera, interviews, webinars, product reveals, and presentation capture.

## 6. Hosted Video / Learning Reference

### `muxinc/video-course-starter-kit`
https://github.com/muxinc/video-course-starter-kit

Upstream reference for the existing `ACoolNerd/video-course-starter-kit` repository and its Mux-oriented upload/playback pattern.

Before production, modernize dependencies and choose the final database/auth architecture.

---

# What We Should Build Ourselves

Keep these ACool-owned and tenant-aware:
- brand system
- mortgage source registry
- compliance rules
- prompt contracts
- approval state machine
- video schemas
- render request API
- luxury catalog/video bindings
- publication metadata
- analytics events
- audit history

# What We Should Not Fork Without Need

Do not fork large upstream projects merely to 'have a copy'. Prefer:
1. package/dependency where supported,
2. pinned version,
3. local adapter,
4. upstream link and license record,
5. fork only when we truly need maintained custom changes.

This prevents security drift and long-term maintenance debt.
