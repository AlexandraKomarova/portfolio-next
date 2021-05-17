import { motion } from 'framer-motion'
import Link from 'next/link'

import BrushIcon from './BrushIcon'

import styles from '../landscape-about-styles/BottomLeftCell.module.css'

import { textVariants, emailVariants, smallBlueSquareVariants } from '../../../animations-about/landscapeBottomLeftCellAnimations.js'

const BottomLeftCell = () => {
  return (
    <div className={styles.bottomLeftCellWrapper}>
      <motion.div className={styles.smallBlueSquare}
        variants={smallBlueSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <div className={styles.bottomLeftCell}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible">
        when I’m not coding find me drawing!
      </motion.div>
      <div className={styles.emailGroup}>
        <Link href="http://alexandrakomarova.com" passHref={true}>
          <motion.div 
          variants={emailVariants}
          initial="hidden"
          animate="visible">alexandrakomarova.com
        </motion.div>
        </Link>
        <Link href="http://alexandrakomarova.com" passHref={true}>
          <BrushIcon />
        </Link>
      </div>
    </div>
    </div>
    
  )
}

export default BottomLeftCell
