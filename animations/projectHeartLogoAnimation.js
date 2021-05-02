export const projectHeartVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 2,
    // x: -20
  },
  visible: {
    // x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 5.5,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const blobHeartVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    rotate: [0, -5, 0],
    // scale: [1, 1.05, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 6,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}