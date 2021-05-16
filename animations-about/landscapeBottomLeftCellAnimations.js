export const textVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 14.8,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const emailVariants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 14.8,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}