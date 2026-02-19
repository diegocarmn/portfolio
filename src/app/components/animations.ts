const blurUp = {
  initial: { opacity: 0, y: 60, filter: "blur(20px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export { blurUp };
