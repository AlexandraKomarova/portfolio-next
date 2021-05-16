import { motion } from 'framer-motion'

import BrushIcon from './BrushIcon'

import styles from '../landscape-about-styles/BottomLeftCell.module.css'

import { textVariants, emailVariants } from '../../../animations-about/landscapeBottomLeftCellAnimations.js'

const BottomLeftCell = () => {
  return (
    <div className={styles.bottomLeftCell}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible">
        when I’m not coding find me drawing!
      </motion.div>
      <div className={styles.emailGroup}>
        <motion.div 
          variants={emailVariants}
          initial="hidden"
          animate="visible">alexandrakomarova.com
        </motion.div>
        <BrushIcon />
      </div>
    </div>
  )
}

export default BottomLeftCell
