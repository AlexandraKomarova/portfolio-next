import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from '../portrait-about-styles/PortraitHomeBtn.module.css'

import { pinkRectangleVariants, homeVariants, arrowVariants } from '../../../animations-about/portraitHomeBtnAnimations.js'

const Home = () => {
  return (
    <Link href="/">
      <div className={styles.homeWrapper}>
      <motion.svg className={styles.arrow} 
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
        width="57" height="32" viewBox="0 0 137 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0127329 15L135.513 15.1103M0.0127329 15C11.0127 15.0089 29.0119 16.0236 29.0001 30.5236M0.0127329 15C11.0127 15.0089 29.0131 14.5236 29.0249 0.023601" stroke="rgb(8, 8, 209)" strokeWidth="2"/>
      </motion.svg>
      <motion.div className={styles.home}
        variants={homeVariants}
        initial="hidden"
        animate="visible">home
      </motion.div>
      <motion.div className={styles.pinkRectangle}
        variants={pinkRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
    </div>
    </Link>
  )
}

export default Home
