export const blueBGVariants = {
  hidden: {
    opacity: 0,
    y: -1000
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 9.2,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const squigllyVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 5.3,
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // mass: 0.6,
      // stiffness: 50,
      // velocity: 2
    }
  }
}