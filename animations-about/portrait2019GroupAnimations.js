export const blueBGVariants = {
  visible: {
    x: 0
  },
  hidden: {
    x: -1500,
    transition: {
      delay: 0.5,
      duration: 1,
      transitionEnd: {
        display: "none"
      }
    }
  }
}

// BOTTOM HORIZONTAL LINE 

export const horizontalLineVariants = {
  hidden: {
    x: -1500
  },
  visible: {
    x: 0,
    transition: {
      delay: 1.5,
      duration: 1
    }
  }
}

// LEFT VERTCAL LINE 

export const verticalLine1Variants = {
  hidden: {
    y: -1500
  },
  visible: {
    y: 0,
    transition: {
      delay: 1.8,
      duration: 1
    }
  }
}

// RIGHT VERTCAL LINE 

export const verticalLine2Variants = {
  hidden: {
    y: 1500
  },
  visible: {
    y: 0,
    transition: {
      delay: 2.1,
      duration: 1
    }
  }
}

// PERIOD

export const periodVariants = {
  hidden: {
    y: 20
  },
  visible: {
    y: 0,
    transition: {
      delay: 7.2,
      duration: 0.5
    }
  }
}