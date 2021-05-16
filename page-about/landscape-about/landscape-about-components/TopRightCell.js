import { motion } from 'framer-motion'

import styles from '../landscape-about-styles/TopRightCell.module.css'

import { topLeftBlueRectangleVariants, topRightGreenRectangleVariants } from '../../../animations-about/landscapeTopRightCellAnimations.js'

const TopCell = () => {
  return (
    <div className={styles.TopRightCell}>
      <motion.div className={styles.topLeftBlueRectangle}
        variants={topLeftBlueRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.topRightGreenRectangle}
        variants={topRightGreenRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
    </div>
  )
}

export default TopCell
