export const greenRectangleVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6.4,
      duration: 0.7
    },
    // transitionEnd: {
    //   display: "none",
    // }
  }
}

export const featuredVariants = {
  hidden: {
    opacity: 0,
    rotate: 0
  },
  visible: {
    opacity: 1,
    rotate: 180,
    transition: {
      delay: 6.4,
      duration: 0.7
    }
  }
}

export const arrowVariants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    // pathLength: 1,
    transition: {
      delay: 6.4,
      duration: 1.5,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // mass: 0.6,
      // stiffness: 50,
      // velocity: 2
    }
  }
}