import { motion } from 'framer-motion'

import styles from '../landscape-about-styles/TopRectangleLine.module.css'

import { blueRectangleVariants } from '../../../animations-about/landscapeTopRectangleLineAnimations.js'

const TopRectangleLine = () => {
  return (
    <div className={styles.topRectangleLine}>
      <div className={styles.emptyRectangle1}></div>
      <div className={styles.emptySquare}></div>
      <div className={styles.emptyRectangle2}></div>
      <motion.div className={styles.blueRectangle}
        variants={blueRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
    </div>
  )
}

export default TopRectangleLine
