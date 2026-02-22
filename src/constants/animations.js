export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 280 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: 280,
    transition: { duration: 0.2 },
  },
}

export const noAnimation = {
  hidden: {},
  visible: {},
  exit: {},
}
