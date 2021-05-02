export const coverVariants = {
  // visible: {
  //   opacity: 1
  // },
  // hidden: {
  //   opacity: 1,
  //   transition: {
  //     duration: 1.5
  //   },
  //   transitionEnd: {
  //     display: "none",
  //   }
  // }
}

export const firstNameVariants = {
  hidden: {
    y: -70,
    zIndex: -1
  },
  visible: {
    zIndex: 1,
    y: 0,
    transition: {
      delay: 4.5,
      duration: 0.7
    }
  }
}

export const lastNameVariants = {
  hidden: {
    zIndex: -1,
    y: 60
  },
  visible: {
    zIndex: 1,
    y: 0,
    transition: {
      delay: 4.5,
      duration: 0.7
    }
  }
}