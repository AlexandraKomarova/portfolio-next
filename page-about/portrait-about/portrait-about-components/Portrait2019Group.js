import { motion } from 'framer-motion'

import styles from '../portrait-about-styles/Portrait2019Group.module.css'
import EducationIcon from '../../../icon-components/EducationIcon'

import { blueBGVariants, horizontalLineVariants, verticalLine1Variants, verticalLine2Variants, periodVariants } from '../../../animations-about/portrait2019GroupAnimations.js'

const Portrait2019Group = () => {
  return (
    <div className={styles.mobile2019Gtoup}>
      <motion.div className={styles.blueBG}
        variants={blueBGVariants}
        initial="visible"
        animate="hidden">
      </motion.div>
      <motion.div className={styles.horizontalLine}
        variants={horizontalLineVariants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.verticalLine1}
        variants={verticalLine1Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.verticalLine2}
        variants={verticalLine2Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <div className={styles.period}>
        <motion.div
        variants={periodVariants}
        initial="hidden"
        animate="visible">2019
      </motion.div>
      </div>
      <div className={styles.description}>
        <div>
          Taught myself HTML and CSS. Built a few personal websites.
        </div> 
      </div>
      <div className={styles.icon}>
        <EducationIcon />
      </div>
    </div>
  )
}

export default Portrait2019Group
