export const transition = {
  fast: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
  standard: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  editorial: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  spring: { type: "spring" as const, stiffness: 260, damping: 25 },
  springSoft: { type: "spring" as const, stiffness: 180, damping: 22 },
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: transition.standard },
  },
  revealUp: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: transition.standard },
  },
  revealDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: transition.standard },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: transition.standard },
  },
  editorialReveal: {
    hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: transition.editorial },
  },
};
