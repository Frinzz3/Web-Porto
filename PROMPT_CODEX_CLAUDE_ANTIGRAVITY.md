# MASTER PROMPT — Codex / Claude Code / Antigravity

Copy the prompt below as the initial project instruction.

---

You are a senior frontend engineer, UI designer, and motion designer.

Build a production-quality personal portfolio website based on the provided video reference and the project documents in this repository.

## CONTEXT

The reference is a personal portfolio presentation video, approximately 37 seconds long. Its visual structure is editorial and collage-like:

- hero cover with a large photo and oversized "portfolio" typography;
- about/profile section with text, portrait and contact strip;
- education cards;
- software skills / logo grid;
- internship/experience cards with photos;
- organization/community experience;
- certificate document showcase;
- closing/thank-you frame using the hero visual language again.

Do NOT reproduce the video as a literal slideshow. Rebuild the visual language as an interactive web experience.

## SOURCE OF TRUTH

Read these files first:

1. `DESIGN.md`
2. `ARCHITECTURE.md`
3. `CONTENT_SCHEMA.md`
4. `AGENTS.md`
5. `QA_CHECKLIST.md`

Treat them as the design and engineering contract.

## TECHNICAL TARGET

Use:

- Next.js 16.x with App Router
- React 19.x
- TypeScript
- Tailwind CSS
- Motion for React (`motion` package)
- ESLint
- Turbopack / Next.js default tooling

Use GSAP + ScrollTrigger only if you can demonstrate that a particular advanced timeline/pin/scrub interaction cannot be implemented cleanly with Motion.

Do not add a CMS, database, authentication, API, or unnecessary UI framework.

## FIRST STEP: RECONNAISSANCE

Before writing major UI code:

1. inspect the repository;
2. inspect all images/documents in `public/` or supplied assets;
3. identify image dimensions/aspect ratios;
4. identify missing content;
5. create TODO placeholders for missing personal data instead of inventing facts;
6. map each section to the visual structure in `DESIGN.md`.

Then write a short implementation plan in `IMPLEMENTATION_PLAN.md` and execute it without waiting for confirmation.

## DESIGN DIRECTION

The website must feel:

- editorial;
- personal;
- premium but not corporate;
- image-led;
- minimal in palette;
- typographically bold;
- animated but controlled.

Use:

- off-white background;
- white surface cards;
- near-black text;
- one accent color;
- large display typography;
- generous whitespace;
- rounded cards;
- subtle borders/shadows;
- soft blurred background imagery where useful.

Do not make it look like a generic Tailwind landing page.
Do not use excessive gradients, glassmorphism, neon effects, or fake 3D.

## PAGE STRUCTURE

Create one main route:

`/`

Sections:

1. Hero
2. About
3. Education
4. Skills
5. Experience
6. Organization
7. Certificates
8. Closing / Contact

Use semantic section IDs for navigation.

## COMPONENT ARCHITECTURE

Create reusable components for:

- page shell
- section label
- image card
- pill/contact chip
- reveal animation
- stagger animation
- parallax image
- experience card

Keep content data separate from presentation code.

Prefer server components for static content. Use client components only where animation or browser interaction is required.

Do NOT mark the entire page as `use client` just to support animations in individual children.

## MOTION SYSTEM

Create one coherent motion language.

Hero:

- image clip-path reveal;
- headline rises in with stagger;
- supporting metadata follows;
- subtle scroll-linked image scale/parallax.

About:

- headline line reveal;
- body fade/translate;
- portrait parallax;
- contact chips stagger.

Education/Skills:

- cards reveal with slight offsets;
- icons/logos stagger;
- hover lift on desktop.

Experience/Organization:

- use sticky editorial composition where useful;
- image stack shifts subtly based on progress;
- active item has stronger opacity/scale;
- avoid scroll hijacking.

Certificates:

- document reveal with subtle perspective/scale;
- optional click-to-expand modal only if it improves usability.

Closing:

- reuse hero image language;
- large closing typography;
- restrained reveal.

Motion must respect `prefers-reduced-motion`.

Avoid layout-affecting animation whenever transform/opacity can do the job.

## RESPONSIVE BEHAVIOR

Desktop is editorial and asymmetric.

Tablet reduces overlaps and sticky interactions.

Mobile becomes an intentional vertical composition:

- no forced desktop collage;
- no hover-dependent UX;
- reduced parallax;
- readable large type;
- comfortable tap targets.

Test at approximately:

- 1440x900
- 1280x800
- 1024x768
- 768x1024
- 390x844
- 360x800

## CONTENT RULES

Never fabricate:

- schools;
- employers;
- awards;
- dates;
- phone numbers;
- email addresses;
- social accounts;
- certificates;
- skills that were not supplied.

Use obvious placeholders/TODOs.

## CODE QUALITY

Use strict TypeScript where practical.

Avoid `any` unless unavoidable and documented.

Do not suppress build errors.

Use stable keys.

Clean up animation subscriptions/controls.

Keep animation primitives small and composable.

Do not duplicate almost-identical components when one reusable component can handle the variation.

## PERFORMANCE

Optimize all portfolio images.

Use `next/image`.

Reserve image dimensions/aspect ratios to prevent CLS.

Lazy load below-the-fold media.

Keep first viewport fast.

Avoid continuous JS animation loops unless there is a measurable reason.

## ACCESSIBILITY

Required:

- semantic HTML;
- proper heading hierarchy;
- meaningful alt text;
- keyboard focus states;
- accessible links/buttons;
- readable content with animations disabled;
- reduced-motion support.

## SEO

Implement:

- metadata title/description;
- Open Graph metadata;
- semantic document structure;
- canonical URL placeholder/configuration;
- sitemap/robots only if appropriate to this project.

## IMPLEMENTATION PROCESS

Follow this order:

### Phase 1 — Foundation

- bootstrap app;
- install dependencies;
- establish fonts and design tokens;
- create content types/data.

### Phase 2 — Static composition

- build all sections without animation;
- confirm the visual hierarchy first.

### Phase 3 — Motion primitives

- create reveal/stagger/parallax primitives;
- add reduced-motion handling.

### Phase 4 — Section choreography

- animate hero;
- animate about;
- animate education and skills;
- animate experience and organization;
- animate certificate;
- animate closing.

### Phase 5 — Responsive polish

- redesign mobile composition;
- remove unnecessary desktop-only effects;
- test keyboard and touch interactions.

### Phase 6 — QA

Run:

- typecheck;
- lint;
- production build;
- browser/manual visual review;
- console error check.

Fix every issue before completion.

## IMPORTANT VISUAL STANDARD

Do not stop after creating a technically correct page.

The output must visually communicate the same qualities as the reference:

- strong hero image;
- oversized type;
- floating white information cards;
- editorial asymmetry;
- soft neutral background;
- compact labels;
- personal photo-driven storytelling;
- clear progression from profile → education → skills → experience → certificate → closing.

The website should feel like a designed portfolio, not a generated résumé template.

## FINAL DELIVERABLE

At the end, report:

1. what was implemented;
2. files/components added;
3. animation system used;
4. responsive behavior;
5. known TODOs/placeholders;
6. commands used to validate the build;
7. any technical tradeoffs.

Do not claim visual parity without inspecting the result.

If browser tooling is available, take a screenshot of the home page at desktop and mobile sizes and use them as the basis for the final visual polish.
