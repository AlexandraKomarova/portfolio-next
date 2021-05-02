import { motion } from 'framer-motion'
import styles from '../styles/ProjectHeartLogo.module.css'
import { projectHeartVariants, blobHeartVariants } from '../animations/projectHeartLogoAnimation.js'

const ProjectHeartLogo = () => {
  return (
    <div className={styles.phWrapper}>
      <motion.div
      // PROJECT HEART
        variants={projectHeartVariants}
        initial="hidden"
        animate="visible"
        className={styles.projectHeart}>
        <span className={styles.project}>project</span>
        <span className={styles.heartWord}>heart</span>
        <motion.img
        // BLOB HEART
          variants={blobHeartVariants}
          initial="hidden"
          animate="visible"
        className={styles.blobHeart}
        src="hearticon.png" alt="heart image"/>
      </motion.div>
    </div>
  )
}

export default ProjectHeartLogo
