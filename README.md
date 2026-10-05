# Animated Portfolio — Reference-Based Implementation Plan

## What was extracted from the video

The reference video is a 37-second portfolio presentation at 1024×576. The strongest pattern is not a complicated 3D effect; it is **layout choreography + typography + imagery + cards**.

The design repeatedly uses:

- large photographic anchors;
- bold black/white typography;
- white rounded information cards;
- soft blurred/washed image backgrounds;
- editorial asymmetry;
- short metadata labels;
- repeated visual motifs for opening and closing.

## Strategic recommendation

Do not build this as a video player or slide deck. The web version should be a single scrolling narrative with sections that animate into place.

That gives you:

- real SEO;
- selectable text;
- responsive mobile layout;
- accessible links;
- faster initial load;
- maintainable content;
- more useful interaction than a video clone.

## Stack

**Recommended:** Next.js 16.x + React 19 + TypeScript + Tailwind + Motion for React.

**Escalation:** GSAP/ScrollTrigger only for truly complex scroll choreography.

## Files

- `PROMPT_CODEX_CLAUDE_ANTIGRAVITY.md` — master prompt for coding agents.
- `DESIGN.md` — visual design system and section choreography.
- `ARCHITECTURE.md` — technical architecture and folder structure.
- `AGENTS.md` — coding-agent rules.
- `CONTENT_SCHEMA.md` — content/data contract.
- `QA_CHECKLIST.md` — final verification checklist.

## Suggested bootstrap

```bash
pnpm create next-app@latest my-portfolio --yes
cd my-portfolio
pnpm add motion
pnpm dev
```

The current Next.js create-app defaults include TypeScript, Tailwind, ESLint, App Router, and Turbopack; minimum Node.js documented by Next.js is 20.9.

## Agent workflow

1. Copy the prompt from `PROMPT_CODEX_CLAUDE_ANTIGRAVITY.md` into Codex/Claude Code/Antigravity.
2. Put the supplied assets into `public/images` / `public/documents`.
3. Let the agent generate `IMPLEMENTATION_PLAN.md` and execute the plan.
4. Review the desktop and mobile result.
5. Replace TODO content with real portfolio data.
6. Run production build before deployment.
