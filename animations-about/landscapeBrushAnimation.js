export const brushVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: [0, 10, -10, 5, 0],
    x: [0, 10, -5, 0],
    rotate: [0, 10, -20, 0],
    opacity: 1,
    transition: {
      delay: 15.3,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}