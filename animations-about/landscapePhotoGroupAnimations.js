export const photoVariants = {
  hidden: {
    opacity: 0,
    x: -150
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const starVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    // TODO: MAKE IT BLINK
    // opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    rotate: [0, 15, 0],
    scale: [0.5, 1.1, 1],
    transition: {
      delay: 3.6,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const squigglyVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 4.3,
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // mass: 0.6,
      // stiffness: 50,
      // velocity: 2
    }
  }
}

export const smallBlueSquareVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    // TODO: MAKE IT BLINK
    // opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    scale: [0.5, 1.1, 1],
    transition: {
      delay: 4.7,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}