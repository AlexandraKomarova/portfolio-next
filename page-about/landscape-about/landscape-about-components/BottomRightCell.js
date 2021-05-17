import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../landscape-about-styles/BottomRightCell.module.css'
import LandscapeProjectHeartLogo from './LandscapeProjectHeartLogo'
import WorkIcon from './WorkIcon'

import { blueRectangleVariants, periodSpring2021Variants, descriptionSpring2021Variants, workIconSpring2021 } from '../../../animations-about/landscapeBottomRightCellAnimations.js'

const BottomRightCell = () => {
  return (
    <div className={styles.bottomRightCell}>
      <motion.div className={styles.blueRectangle}
        variants={blueRectangleVariants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.period}
        variants={periodSpring2021Variants}
        initial="hidden"
        animate="visible">Spring 2021</motion.div>
      <motion.div className={styles.description}
        variants={descriptionSpring2021Variants}
        initial="hidden"
        animate="visible">
        Started working on Project Heart.
      </motion.div>
      <Link href="https://projectheart.family" passHref={true}>
        <div className={styles.phLogoWrapper}>
          <LandscapeProjectHeartLogo />
        </div>
      </Link>
      <motion.div className={styles.workIconWrapper}
        variants={workIconSpring2021}
        initial="hidden"
        animate="visible">
        <WorkIcon />
      </motion.div>
    </div>
  )
}

export default BottomRightCell
