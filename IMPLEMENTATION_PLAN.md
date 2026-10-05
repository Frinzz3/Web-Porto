# IMPLEMENTATION_PLAN.md — Animated Personal Portfolio

## Project Status: PHASE 0 RECON COMPLETE -> PHASE 1 INITIALIZATION

- **Target**: High-end editorial, modern, highly-animated personal portfolio inspired by reference video design language.
- **Reference Principles**: Large photographic anchors, bold oversized typography, white rounded floating cards (`18-28px`), soft warm off-white background (`#F3F1EC`), editorial asymmetry, generous whitespace, subtle borders, restrained palette with one accent color (`#D7263D`).
- **Technical Stack**: Next.js (App Router, `src/`), React 19, TypeScript, Tailwind CSS, Motion for React (`motion`), Lucide React.

---

## Phases & Execution Milestones

### Phase 1: Foundation & Setup
- [ ] Bootstrap Next.js with TypeScript, Tailwind CSS, ESLint, App Router inside `src/`.
- [ ] Install `motion` and `lucide-react`.
- [ ] Establish design tokens in `tailwind.config.ts` / `globals.css` (Colors, typography, border radiuses, shadows).
- [ ] Implement typed content schema (`src/data/portfolio.ts`) following `CONTENT_SCHEMA.md` with explicit TODO placeholders.
- [ ] Setup asset directories under `public/images/`.

### Phase 2: Semantic Static Skeleton (Step A & B)
- [ ] Create layout shell and navigation (`src/components/layout/`).
- [ ] Build static Hero section (`src/components/sections/Hero.tsx`).
- [ ] Build static About section (`src/components/sections/About.tsx`).
- [ ] Build static Education section (`src/components/sections/Education.tsx`).
- [ ] Build static Skills section (`src/components/sections/Skills.tsx`).
- [ ] Build static Experience section (`src/components/sections/Experience.tsx`).
- [ ] Build static Organization section (`src/components/sections/Organization.tsx`).
- [ ] Build static Certificates section (`src/components/sections/Certificates.tsx`).
- [ ] Build static Closing / Contact section (`src/components/sections/Closing.tsx`).
- [ ] Assemble static page in `src/app/page.tsx` (Server Component).

### Phase 3: Motion Primitives (Step C)
- [ ] Create `<Reveal />` (y-offset, opacity, spring/cubic-bezier).
- [ ] Create `<Stagger />` and `<StaggerItem />`.
- [ ] Create `<TextReveal />` for headline animation.
- [ ] Create `<ParallaxImage />` / `<ImageReveal />`.
- [ ] Implement strict `prefers-reduced-motion` fallbacks across all primitives.

### Phase 4: Section Choreography (Step D & E)
- [ ] Hero: Image clip-path reveal, staggered display typography, metadata badge entrance.
- [ ] About: Line reveal, portrait subtle parallax, contact chips pop-in.
- [ ] Education: Staggered card entrance, hover micro-interactions (subtle lift + border highlight).
- [ ] Skills: Categorized skill chips with subtle hover tilt and stagger.
- [ ] Experience & Organization: Sticky editorial narrative, subtle active item highlight.
- [ ] Certificates: Document showcase with subtle perspective entry.
- [ ] Closing: Warm editorial conclusion, scale reset, animated CTA hover states.

### Phase 5: Responsive & Accessibility Polish (Step F)
- [ ] Mobile-first review (390px, 768px, 1024px, 1440px): Ensure intentional mobile composition, no horizontal overflow, readable typography.
- [ ] Accessibility: Semantic HTML5 landmark tags, single H1, correct heading order, visible focus rings, ARIA labels.
- [ ] Performance: Explicit image aspect ratios, Next.js image optimization, zero CLS.

### Phase 6: Validation & Verification
- [ ] Run `npm run lint` - 0 errors.
- [ ] Run `npm run build` - successful production build.
- [ ] Visual verification with browser agent across viewport sizes.
- [ ] Review against `QA_CHECKLIST.md`.
