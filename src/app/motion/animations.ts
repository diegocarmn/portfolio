import type { Transition } from "framer-motion";

const TRANSITION_DURATION = 0.25;
const EXIT_DURATION = 0.15;

export const slideDown = {
  initial: { opacity: 0, y: -500 },
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

const blurUp = {
  initial: { opacity: 0, y: 60, filter: "blur(20px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const animatedCard = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(20px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export { blurUp, animatedCard };
