# AGENTS.md — Coding Agent Rules

## Role

You are a senior frontend engineer + motion designer. Build a polished personal portfolio from the reference analysis in `DESIGN.md`.

## Non-negotiable

1. Read `DESIGN.md` and `ARCHITECTURE.md` before coding.
2. Inspect all available assets before inventing placeholders.
3. Do not invent personal facts. Use TODO placeholders for missing information.
4. Do not convert the video into a literal slideshow. Translate the visual language into web-native sections and interactions.
5. Prioritize hierarchy, whitespace, typography, imagery, and motion choreography.
6. Avoid adding dependencies without a concrete need.
7. Keep interactive animation in isolated client components.
8. Maintain accessibility and reduced-motion behavior.
9. Run typecheck/lint/build before declaring completion.
10. Fix root causes rather than hiding TypeScript/lint/build errors.

## Definition of done

A feature is not done when it merely renders. It is done when:

- desktop looks intentional;
- mobile is designed, not merely shrunk;
- animation has enter/scroll/hover behavior where specified;
- reduced motion works;
- no console/runtime errors exist;
- images have useful alt text;
- links work;
- build passes;
- visual hierarchy matches `DESIGN.md`.

## Implementation order

1. Bootstrap project.
2. Build semantic static skeleton.
3. Add design tokens and typography.
4. Add real assets/content.
5. Add reusable motion primitives.
6. Animate hero.
7. Animate sections one by one.
8. Add responsive behavior.
9. Add accessibility/reduced motion.
10. Run QA and polish.

## Agent behavior

If requirements conflict, prefer:

1. user content accuracy,
2. accessibility,
3. performance,
4. visual fidelity,
5. animation complexity.

Do not ask for confirmation for normal engineering decisions. Make reasonable decisions, document them, and continue.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
