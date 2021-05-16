import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/AboutMe.module.css'
import { pinkRectangleVariants, gradVariants } from '../animations/aboutMeAnimations.js'

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradWrapper}>
        <motion.div className={styles.pinkRectangle}
          variants={pinkRectangleVariants}
          initial="hidden"
          animate="visible">
        </motion.div>
        <motion.div className={styles.grad}
          variants={gradVariants}
          initial="hidden"
          animate="visible">
          2019: Taught myself HTML and CSS. Built a few personal websites for myself and friends.
        </motion.div>
      </div>
      <div className={styles.gradWrapper}>
        <motion.div className={styles.pinkRectangle}
          variants={pinkRectangleVariants}
          initial="hidden"
          animate="visible">
        </motion.div>
        <motion.div className={styles.grad}
          variants={gradVariants}
          initial="hidden"
          animate="visible">
          Spring 2020: Graduated from Columbia Engineering Full Stack Program. The curriculumn was focused on Node and React. 
        </motion.div>
      </div>
      <div className={styles.gradWrapper}>
        <motion.div className={styles.pinkRectangle}
          variants={pinkRectangleVariants}
          initial="hidden"
          animate="visible">
        </motion.div>
        <motion.div className={styles.grad}
          variants={gradVariants}
          initial="hidden"
          animate="visible">
          Spring 2020: Graduated from Columbia Engineering Full Stack Program. The curriculumn was focused on Node and React. 
        </motion.div>
      </div>
      <div className={styles.gradWrapper}>
        <motion.div className={styles.pinkRectangle}
          variants={pinkRectangleVariants}
          initial="hidden"
          animate="visible">
        </motion.div>
        <motion.div className={styles.grad}
          variants={gradVariants}
          initial="hidden"
          animate="visible">
          Spring 2020: Graduated from Columbia Engineering Full Stack Program. The curriculumn was focused on Node and React. 
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
