// PINK RECTANGLE

export const pinkRectangleVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 7.7,
      duration: 0.5
    }
  }
}

// HOME

export const homeVariants = {
  hidden: {
    opacity: 0,
    rotate: 30
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 7.8,
      duration: 0.5
    }
  }
}

// ARROW

export const arrowVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 7.9,
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // mass: 0.6,
      // stiffness: 50,
      // velocity: 2
    }
  }
}