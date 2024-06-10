interface EntranceTransitionProps {
  initialPosition?: number;
  delay?: number;
  amount?: number;
}

export function entranceTransition({
  initialPosition = 30,
  delay = 0.2,
  amount = 0.5,
}: EntranceTransitionProps = {}) {
  return {
    initial: { opacity: 0, y: initialPosition },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, type: 'spring', bounce: 0.6, delay },
    viewport: { once: true, amount: amount },
  };
}

export const variantsContainer = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const variantItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const commonTransition = entranceTransition({
  initialPosition: -30,
});
