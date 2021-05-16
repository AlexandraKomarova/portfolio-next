import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'
import { aboutVariants, pinkRectangleVariants, arrowVariants } from '../animations/aboutAnimation.js'

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <Link href="/about" passHref={true}>
      <motion.svg className={styles.arrow} 
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
          whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
          width="31" height="70" viewBox="0 0 31 136" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8177 0.771591L16.3043 136.271M15.8177 0.771591C15.8572 11.7715 14.9219 29.775 0.421981 29.8271M15.8177 0.771591C15.8572 11.7715 16.4219 29.7696 30.9218 29.7175" stroke="white" strokeWidth="2"/>
        </motion.svg>
        </Link>
        <Link href="/about" passHref={true}>
        <motion.div className={styles.about}
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
          whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}>
          about
        </motion.div>
        </Link>
        <Link href="/about">
        <motion.div className={styles.pinkRectangle}
          variants={pinkRectangleVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.5 } }}
          whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}>
        </motion.div>
        </Link>
      </div>
  )
}

export default About
