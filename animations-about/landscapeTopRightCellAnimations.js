export const topLeftBlueRectangleVariants = {
  hidden: {
    width: 0
  },
  visible: {
    width: "10vw",
    transition: {
      delay: 5.4,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const topRightGreenRectangleVariants = {
  hidden: {
    width: 0
  },
  visible: {
    width: "25vw",
    transition: {
      delay: 5.7,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}