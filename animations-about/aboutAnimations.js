export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 2000,
    originX: "50%",
    originY: "50%",
    scale: 0.5,
    // TODO: ADD PERSPECTIVE
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 1.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const horizontalLine1Variants = {
  hidden: {
    x: 2000
  },
  visible: {
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const horizontalLine2Variants = {
  hidden: {
     x: -2000
  },
  visible: {
     x: 0,
    transition: {
      delay: 1.8,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const horizontalLine3Variants = {
  hidden: {
     x: 2000
  },
  visible: {
     x: 0,
    transition: {
      delay: 2.1,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const horizontalLine4Variants = {
  hidden: {
     x: -2000
  },
  visible: {
     x: 0,
    transition: {
      delay: 2.4,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const verticalLine1Variants = {
  hidden: {
    opacity: 0,
    y: 1000
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.9,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const verticalLine2Variants = {
  hidden: {
    opacity: 0,
    y: -1000
  },
  visible: {
    opcaity: 1,
    y: 0,
    transition: {
      delay: 2.2,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const portraitBlueVariants = {
  visible: {
    x: 0
  },
  hidden: {
    x: -1500,
    transition: {
      delay: 0.5,
      duration: 1,
      transitionEnd: {
        display: "none"
      }
    }
  }
}