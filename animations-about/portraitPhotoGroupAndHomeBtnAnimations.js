// TOP HORIZONTAL LINE 

export const horizontalLine1Variants = {
  hidden: {
    x: -1500
  },
  visible: {
    x: 0,
    transition: {
      delay: 1.2,
      duration: 1
    }
  }
}

// LEFT VERTICAL LINE 

export const verticalLine1Variants = {
  hidden: {
    y: -1500
  },
  visible: {
    y: 0,
    transition: {
      delay: 1.8,
      duration: 1
    }
  }
}

// RIGHT VERTICAL LINE 

export const verticalLine2Variants = {
  hidden: {
    y: 1500
  },
  visible: {
    y: 0,
    transition: {
      delay: 2.1,
      duration: 1
    }
  }
}

// PHOTO

export const photoVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.8,
      duration: 1
    }
  }
}

// STAR

export const starVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    // opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    rotate: [0, 0, 0, 15, 0, 0, 0, 0],
    scale: [1, 1, 1.1, 1, 1, 1, 1, 1],
    transition: {
      delay: 3.9,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

// SQUIGGLY

export const squigglyVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 4.6,
      duration: 1
    }
  }
}

// LEFT GREEN RECTANGLE

export const leftGreenRectangleVariants = {
  hidden: {
    x: -100
  },
  visible: {
    x: 0,
    transition: {
      delay: 5.7,
      duration: 0.5
    }
  }
}

// SMALL BLUE SQUARE

export const smallBlueSquareVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      delay: 6.2,
      duration: 0.5
    }
  }
}

// SMALL GREEN SQUARE

export const smallGreenSquareVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      delay: 6.7,
      duration: 0.5
    }
  }
}