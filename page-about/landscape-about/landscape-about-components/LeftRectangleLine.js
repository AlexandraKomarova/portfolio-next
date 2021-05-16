import { motion } from 'framer-motion'

import styles from '../landscape-about-styles/LeftRectangleLine.module.css'

import { intersectionGreenSquareVariants, blueRectangleVariants, greenRectangleVariants, intersectionBlueSquareVariants } from '../../../animations-about/landscapeLeftRectangleLineAnimations.js'

const LeftRectangleLine = () => {
  return (
    <div className={styles.leftRectangleLine}>
      <div className={styles.emptyIntersectionRectangle1}></div>
      <motion.div className={styles.greenIntersectionSquare}
        variants={intersectionGreenSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <div className={styles.emptyIntersectionRectangle2}></div>
      <motion.div className={styles.blueRectangle1}
        variants={blueRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.blueRectangle2}
        variants={blueRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <div className={styles.emptyIntersectionRectangle3}></div>
      <motion.div className={styles.blueIntersectionRectangle}
        variants={intersectionBlueSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.greenRectangle}
        variants={greenRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
    </div>
  )
}

export default LeftRectangleLine


