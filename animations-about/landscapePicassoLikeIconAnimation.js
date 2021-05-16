export const iconVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.1
    }
  }
}

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      // ease: [0.6, 0.05, -0.01, 0.9],
      // type: 'spring',
      // mass: 0.4,
      // stiffness: 100,
      // velocity: 2
    }
  }
}