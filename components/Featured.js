import { motion } from 'framer-motion'
import styles from '../styles/Feautured.module.css'
import { featuredVariants, pinkRectangleVariants, arrowVariants } from '../animations/featuredAnimation.js'

const Feautured = () => {
  return (
    <div className={styles.featuredWrapper}>
      <motion.div className={styles.pinkRectangle}
        variants={pinkRectangleVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.featured}
        variants={featuredVariants}
        initial="hidden"
        animate="visible">featured
      </motion.div>
      <motion.svg className={styles.arrow} 
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
        width="31" height="70" viewBox="0 0 31 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 135.5L15.5 0M15.5 135.5C15.5 124.5 14.5 106.5 0 106.5M15.5 135.5C15.5 124.5 16 106.5 30.5 106.5" stroke="white" strokeWidth="2"/>
      </motion.svg>
    </div>
  )
}

export default Feautured
