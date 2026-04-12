import { scale, type Transition } from "framer-motion";

const TRANSITION_DURATION = 0.25;
const EXIT_DURATION = 0.15;

export const slideDown = {
  initial: { opacity: 0, y: -120 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: EXIT_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
};

export const slideUp = {
  initial: { opacity: 0, y: 5},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: EXIT_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
};

export const modal = {
  initial: {
    opacity: 0,
    scale: 0.92,
    y: 20,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.3 },
      filter: { duration: 0.3 },
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      y: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    filter: "blur(4px)",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
      opacity: { duration: 0.2 },
      filter: { duration: 0.2 },
    } satisfies Transition,
  },
};

export const blurUp = {
  initial: { opacity: 0, y: 60, filter: "blur(12px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export const animatedCard = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(12px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export const mediaSlide = (direction: 1 | -1) => ({
  initial: { opacity: 0, x: direction * 40, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: TRANSITION_DURATION,
      ease: [0.25, 0.46, 0.45, 0.94],
      filter: { duration: 0.2 },
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    x: direction * -30,
    filter: "blur(4px)",
    transition: {
      duration: EXIT_DURATION,
      ease: [0.4, 0, 1, 1],
    } satisfies Transition,
  },
});

export const mediaLabel = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      ease: "easeOut",
      delay: 0.05,
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: EXIT_DURATION,
      ease: "easeIn",
    } satisfies Transition,
  },
};

export const modalContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    } satisfies Transition,
  },
};

export const modalItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    } satisfies Transition,
  },
};
