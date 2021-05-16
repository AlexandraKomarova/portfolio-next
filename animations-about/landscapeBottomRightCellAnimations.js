export const blueRectangleVariants = {
  hidden: {
    opacity: 0,
    width: 0
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 11.6,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const periodSpring2021Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 11.6,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const descriptionSpring2021Variants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 11.6,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const workIconSpring2021 = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 13.4,
      duration: 0.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

