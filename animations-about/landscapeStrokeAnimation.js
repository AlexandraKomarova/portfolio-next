export const strokeSvgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    // y: [0, 9, -4, 0],
    // x: [0, 18, -4, 4, 0],
    // rotate: [0, -5, 5, 0],
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const strokePathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    // y: [0, 9, -4, 0],
    // x: [0, 18, -4, 4, 0],
    // rotate: [0, -5, 5, 0],
    transition: {
      delay: 1.5,
      duration: 2,
      // ease: [0.6, 0.05, -0.01, 0.9],
      // type: 'spring',
      // mass: 0.4,
      // stiffness: 100,
      // velocity: 2
    }
  }
}



      