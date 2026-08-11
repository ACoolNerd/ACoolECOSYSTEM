# ACoolECOSYSTEM Video Automation — Master Repository Manifest

**Status:** Production blueprint
**Snapshot date:** 2026-08-11
**Primary use cases:** Kind Home Loans mortgage education + luxury platform content automation

## Mission

Build one reusable video automation operating system that can ingest approved source material, generate scripts and storyboards, produce branded video compositions, render multiple aspect ratios, run compliance checks, publish to web/social destinations, and preserve every source/version/approval for auditability.

The same engine supports two adapters:

1. **Kind Home Loans** — mortgage education, loan-program explainers, loan officer content, FAQ, process videos, social shorts, landing-page video modules.
2. **Luxury Platform** — cinematic product stories, collection launches, designer/trade education, catalog videos, product-detail-page video, campaign reels, brand films, and B2B trade-portal content.

---

# 1. Repository Map

## A. `ACoolNerd/ACoolECOSYSTEM` — Governance + Master Manifest

**Role:** system-of-systems registry and architecture source of truth.

Owns:
- repository manifest
- shared schemas
- environment naming standards
- security/compliance policy
- CI/CD conventions
- source attribution requirements
- versioning strategy
- cross-project release notes

Do not store client secrets, API keys, raw customer PII, or unapproved mortgage claims here.

## B. `ACoolNerd/KindQuote` — Kind Home Loans Experience + Mortgage Content Adapter

**Role:** Kind-facing application adapter and mortgage-content catalog.

Evolve from the current Nuxt starter into the Kind Home Loans content/video application layer.

Owns:
- loan program registry
- source URLs and source snapshots
- approved product descriptions
- script briefs
- compliance metadata
- CTA configuration
- loan-officer profile bindings
- embed/player components
- campaign pages
- API routes that request video jobs from the orchestration layer

**Current public program families observed on Kind Home Loans:**
- FHA
- Conventional
- Jumbo
- Reverse Mortgage
- True Stated
- Refinance Mortgage
- VA Loans
- Zero Down

**Additional California program families observed:**
- Non-QM 40 Year Loan
- Bank Statement Program
- Income Loan Program

Program availability, eligibility, rates, fees, licensing, timelines, and disclosures must be dynamically verified before publication.

## C. `ACoolNerd/ACoolPROMPT` — Script + Storyboard Intelligence

**Role:** reusable prompt library and structured-generation contracts.

Owns:
- master explainer-video prompt
- 15s / 30s / 60s / 90s / 3min script templates
- cinematic brand-film prompt
- mortgage FAQ prompt
- loan-program comparison prompt
- luxury product-story prompt
- designer-trade portal prompt
- shot-list generator
- B-roll request generator
- voiceover formatting
- caption-safe copy rules
- disclosure insertion rules
- multilingual prompt variants

Outputs must be structured JSON/YAML rather than free-form text whenever possible.

## D. `ACoolNerd/ACoolAGENT` — Automation Orchestrator

**Role:** job orchestration and agent workflow.

Owns:
- source ingestion jobs
- source freshness checks
- script-generation jobs
- asset request jobs
- voiceover/transcription jobs
- render queues
- human approval states
- publish queues
- retries/idempotency
- audit events
- webhook handlers

Suggested state machine:

`DRAFT -> SOURCED -> SCRIPTED -> COMPLIANCE_REVIEW -> APPROVED -> RENDERING -> QA -> PUBLISH_READY -> PUBLISHED -> ARCHIVED`

No mortgage content should bypass `COMPLIANCE_REVIEW` and `APPROVED`.

## E. `ACoolNerd/video-course-starter-kit` — Video Library + Playback Portal

**Role:** hosted video library, gated training, internal academy, and reusable player experience.

Existing Mux-oriented architecture makes this a strong base for:
- video uploads
- encoding/playback
- thumbnails
- gated training modules
- internal sales enablement
- designer/trade education
- loan-officer education
- partner onboarding

Modernize database/auth dependencies as needed before production.

## F. `ACoolNerd/goviralbro` — Social Repurposing + Distribution

**Role:** turn approved master videos into channel-native derivatives.

Owns:
- 9:16 vertical shorts
- 1:1 square
- 4:5 feed
- 16:9 YouTube/web
- hooks/titles/descriptions
- caption files
- thumbnail variants
- safe-zone checks
- campaign calendar payloads
- UTM tagging
- publication metadata

Do not let this repository rewrite regulated mortgage claims. It can shorten/reformat only from approved source copy.

## G. `ACoolNerd/NETWORK_obs-studio` — Capture + Live Production

**Role:** OBS-based studio and live-production integration.

Owns:
- studio scenes
- camera layouts
- screen-share templates
- remote guest scenes
- lower thirds
- branded stingers
- live webinar presets
- recording profiles
- virtual camera workflows

Use for loan-officer explainers, interviews, webinars, luxury product reveals, designer interviews, and live shopping/trade presentations.

## H. `ACoolNerd/ACoolBUSINESS` — Luxury Platform Adapter

**Role:** business-facing luxury brand/video integration.

Owns:
- luxury content taxonomy
- product/collection schemas
- designer/trade audience segments
- product-video bindings
- collection launch briefs
- campaign approval flows
- commerce CTA mapping
- brand voice rules
- B2B trade portal video modules
- cinematic content calendar

This adapter should call the same ACoolPROMPT + ACoolAGENT + renderer pipeline as Kind, while keeping brand assets and claims isolated by tenant.

---

# 2. Recommended Shared Rendering Stack

## Primary renderer: Remotion

Use Remotion for code-defined, reusable, brand-safe compositions.

Recommended composition families:
- `MortgageProgramExplainer`
- `MortgageFAQShort`
- `LoanOfficerIntro`
- `MortgageProcessTimeline`
- `MortgageComparison`
- `LuxuryBrandFilm`
- `LuxuryProductFeature`
- `LuxuryCollectionLaunch`
- `DesignerTradeExplainer`
- `TestimonialStory`
- `VerticalSocialShort`
- `WebHeroLoop`

## Media processing: FFmpeg

Use FFmpeg for:
- transcode
- normalize
- trim
- concatenate
- loudness normalization
- audio extraction
- thumbnails
- burned captions when required
- alternate codecs
- delivery validation

## Speech/transcription

Use a swappable provider interface for:
- speech-to-text
- word-level timestamps
- voiceover generation
- pronunciation dictionaries

Never hard-code one provider into business logic.

## Storage/playback

Use object storage for source/render assets and a streaming provider such as Mux for production playback where appropriate.

---

# 3. Core Monorepo Package Contract

Even though the business is distributed across repositories, use compatible package boundaries:

```text
packages/
  brand-system/
  video-schema/
  content-schema/
  compliance-rules/
  source-registry/
  render-client/
  publish-client/
  analytics-events/
  ui-video-player/
```

Recommended canonical objects:

```ts
VideoBrief
SourceRecord
ClaimRecord
DisclosureRecord
BrandProfile
AudienceProfile
ScriptDocument
Storyboard
AssetManifest
RenderJob
ApprovalRecord
PublishJob
AnalyticsEvent
```

---

# 4. Kind Home Loans Content Pipeline

## Source-first rule

Every generated mortgage statement must point to an approved source record.

Minimum source metadata:
- source URL
- page title
- retrieved date
- content hash
- program name
- state/market scope
- approver
- expiration/review date

## Program explainer factory

For each approved program, generate:
- 3-minute full explainer
- 90-second explainer
- 60-second social explainer
- 30-second short
- 15-second hook
- FAQ clips
- process clip
- myth-vs-fact clip
- who-it-may-fit clip
- documentation checklist clip
- CTA end card
- 16:9 version
- 9:16 version
- 4:5 version
- 1:1 version
- captions/subtitles
- transcript
- thumbnail brief
- SEO title/description
- approved disclosure block

## Compliance guardrails

The generator must not invent or infer:
- current mortgage rates
- APR
- points
- closing costs
- guaranteed approval
- guaranteed timelines
- eligibility
- loan limits
- down payment requirements
- income requirements
- credit score requirements
- state availability
- licensing scope
- government endorsement

If a current value is not supplied by an approved source/API, output `REQUIRES_CURRENT_DATA` rather than generating a number.

Every video must support configurable NMLS/licensing disclosures and Equal Housing Opportunity treatment when required by the approved compliance policy.

---

# 5. Luxury Platform Content Pipeline

## Content families

For each product/collection:
- cinematic hero film
- 6–10 second loop
- 15-second social teaser
- 30-second product story
- 60-second designer story
- craftsmanship/material explainer
- dimensions/detail reel
- room-scene montage
- trade-program explainer
- collection launch film
- vertical story/reel
- PDP video
- email/GIF derivative

## Luxury visual rules

- fewer cuts, stronger composition
- high-detail macro imagery
- restrained typography
- premium motion curves
- intentional negative space
- material/texture emphasis
- no loud social gimmicks unless explicitly campaign-specific
- maintain brand-safe music/licensing metadata

## B2B trade video modules

Generate dedicated explainers for:
- trade application
- designer pricing model
- order process
- customization options
- lead times
- specification sheets
- sample/material requests
- logistics/white-glove delivery
- project support

All pricing/discount claims must come from approved commerce/configuration data, never static generated copy.

---

# 6. Multi-Tenant Brand Isolation

Every job requires a tenant:

```json
{
  "tenant": "kind-home-loans | luxury-platform",
  "brandProfileVersion": "...",
  "sourceRegistryVersion": "...",
  "templateVersion": "...",
  "approvalPolicyVersion": "..."
}
```

Never mix:
- logos
- fonts
- disclosures
- CTA destinations
- legal copy
- testimonials
- people/profile images
- campaign tracking

between tenants.

---

# 7. GitHub Actions / CI

Each production repo should support:

1. install + lint + typecheck
2. unit tests
3. schema validation
4. source freshness validation
5. prohibited-claim scan
6. render smoke test
7. visual regression frame generation
8. artifact upload
9. approval gate
10. tagged production release

Rendering should be manual/approval-gated by default until cost controls and compliance review are proven.

---

# 8. Environment Contract

Use environment classes:
- `local`
- `preview`
- `staging`
- `production`

Never commit real secrets.

Example variable families:

```text
AI_*
TTS_*
STT_*
MUX_*
STORAGE_*
DATABASE_*
QUEUE_*
RENDER_*
PUBLISH_*
ANALYTICS_*
KIND_*
LUXURY_*
```

---

# 9. Data + Audit Requirements

Persist:
- input source hashes
- prompt version
- model/provider
- generated script
- human edits
- approver
- approval timestamp
- render template version
- render hash
- publication destination
- publication timestamp
- takedown/replacement state

This makes every published video reproducible and reviewable.

---

# 10. Phase Plan

## Phase 1 — Foundation
- formalize schemas
- seed source registry
- create brand profiles
- build Remotion base compositions
- build render CLI/API
- add compliance state machine

## Phase 2 — Kind Home Loans Factory
- load approved program sources
- create all program briefs
- generate first explainer set
- add disclosures
- review/approve
- render multi-format masters

## Phase 3 — Luxury Platform Factory
- load product/catalog data
- import final brand system
- create product/collection compositions
- generate designer-trade video modules
- bind video to catalog/PDP/trade portal

## Phase 4 — Distribution
- connect `goviralbro`
- add channel presets
- schedule approved derivative exports
- attach analytics/UTMs

## Phase 5 — Studio + Live
- integrate OBS scenes
- build live webinar/interview presets
- archive recordings into the same content system

---

# 11. Repositories To Avoid Creating Unless Separation Becomes Necessary

Do **not** create separate repos for every loan program, aspect ratio, social platform, or individual video. Keep these as data/config/template variants.

Only split into a new repository if there is a true security, deployment, ownership, licensing, or scaling boundary.

Potential future dedicated repos if justified:
- `ACoolVIDEO` — shared renderer if ACoolAGENT becomes too broad
- `KindHomeLoans-Video` — dedicated tenant repo if Kind requires isolated deployment/security
- `LuxuryVideoOS` — dedicated tenant repo if the luxury platform becomes independently operated
- `ACoolMEDIA-SDK` — public/private SDK for other ACool brands

---

# 12. Production Definition of Done

A video is production-ready only when:
- sources are current
- script is source-grounded
- compliance review is passed where required
- brand profile is pinned
- assets are licensed/approved
- captions are present
- accessibility QA is complete
- audio loudness is normalized
- safe zones pass for target aspect ratio
- rendered file checksum is stored
- publication metadata is approved
- analytics tags are attached
- source/prompt/template versions are auditable

**Operating principle: generate once, approve once, render everywhere.**
