export const intersectionGreenSquareVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    // TODO: MAKE IT BLINK
    // opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    scale: [0.5, 1],
    transition: {
      delay: 6,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const blueRectangleVariants = {
  hidden: {
    opacity: 0,
    width: 0
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 9.8,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}


export const greenRectangleVariants = {
  hidden: {
    opacity: 0,
    y: 300
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 13.9,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const intersectionBlueSquareVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    // TODO: MAKE IT BLINK
    // opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    scale: [0.5, 1],
    transition: {
      delay: 14.3,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}