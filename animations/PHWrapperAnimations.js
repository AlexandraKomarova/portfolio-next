export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5
    },
  }
}

export const textVariants = {
  hidden: { 
    y: 60,
    zIndex: -1
  },
  visible: {
    y: 0,
    zIndex: 1,
    transition: {
      delay: 0.7,
      duration: 0.7
    },
  }
}

export const blueRectangleVariants = {
  hidden: {
    opacity: 0,
    rotate: 0
  },
  visible: {
    opacity: 1,
    rotate: 180,
    transition: {
      delay: 1.5,
      duration: 0.5
    }
  }
}

export const videoVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5
    },
  }
}

export const storyVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5,
      duration: 0.7
    },
  }
}

export const visitVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5.5,
      duration: 0.7
    },
  }
}