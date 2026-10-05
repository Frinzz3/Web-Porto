# QA_CHECKLIST.md

## Functional

- [ ] All nav/anchor links work.
- [ ] Email/social links use correct URLs.
- [ ] External links have sensible target/rel behavior.
- [ ] Images load with no 404s.
- [ ] No broken asset imports.
- [ ] Production build passes.
- [ ] TypeScript check passes.
- [ ] ESLint passes.

## Visual

- [ ] Hero matches the intended composition.
- [ ] Typography scale feels editorial, not template-like.
- [ ] Cards have consistent radius/border/shadow.
- [ ] Photos are not stretched.
- [ ] Sections have deliberate vertical rhythm.
- [ ] Mobile composition is intentionally redesigned.

## Motion

- [ ] Hero reveal feels smooth.
- [ ] Section reveals trigger once or in a controlled way.
- [ ] Parallax is subtle.
- [ ] No animation causes visible layout shift.
- [ ] No animation causes horizontal overflow.
- [ ] No animation blocks scrolling.
- [ ] `prefers-reduced-motion: reduce` disables non-essential motion.

## Performance

- [ ] Above-the-fold image is optimized.
- [ ] Below-the-fold images are lazy loaded.
- [ ] No large unoptimized source images shipped unnecessarily.
- [ ] Animation uses transform/opacity where possible.
- [ ] No persistent `requestAnimationFrame` loop unless necessary.

## Accessibility

- [ ] One clear H1.
- [ ] Heading hierarchy makes sense.
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Image alt text is meaningful.
- [ ] Text remains readable without animation.
- [ ] Color contrast is acceptable.
