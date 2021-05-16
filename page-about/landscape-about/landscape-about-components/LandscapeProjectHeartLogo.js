import { motion } from 'framer-motion'

import styles from '../landscape-about-styles/LandscapeProjectHeartLogo.module.css'

import { projectHeartVariants, blobHeartVariants } from '../../../animations-about/landscapePortraitProjectHeartLogoAnimations.js'

const PortraitProjectHeartLogo = () => {
  return (
    <div className={styles.phWrapper}>
      <motion.div className={styles.projectHeart}
        variants={projectHeartVariants}
        initial="hidden"
        animate="visible">
        <span className={styles.project}>project</span>
        <span className={styles.heartWord}>heart</span>
        <motion.img className={styles.blobHeart} 
        variants={blobHeartVariants}
        initial="hidden"
        animate="visible"
        src="hearticon.png" alt="heart"/>
      </motion.div>
    </div>
  )
}

export default PortraitProjectHeartLogo
