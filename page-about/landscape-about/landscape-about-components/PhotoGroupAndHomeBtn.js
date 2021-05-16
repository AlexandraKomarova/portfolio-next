import { motion } from 'framer-motion'

import HomeBtn from './HomeBtn'
import Squiggly from './Squiggly'
import Star from './Star'

import styles from '../landscape-about-styles/PhotoGroupAndHomeBtn.module.css'

import { photoVariants, smallBlueSquareVariants } from '../../../animations-about/landscapePhotoGroupAnimations.js'

const PhotoGroup = () => {
  return (
     <div className={styles.photoGroupAndHomeBtn}>
      <HomeBtn />
      <motion.div className={styles.smallBlueSquare}
        variants={smallBlueSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.photo}
        variants={photoVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <Squiggly />
      <Star />
    </div>
  )
}

export default PhotoGroup