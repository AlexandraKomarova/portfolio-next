export const pinkBGVariants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: {
    opacity: 1,
    height: "100vh",
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}