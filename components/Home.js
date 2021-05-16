import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/HomeBtn.module.css'
import { arrowVariants, homeVariants, greenRectangleVariants } from '../animations/homeBtnAnimation.js'

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Link href="/" passHref={true}>
        <motion.svg className={styles.arrow} 
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
            whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
            width="57" height="32" viewBox="0 0 137 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0127329 15L135.513 15.1103M0.0127329 15C11.0127 15.0089 29.0119 16.0236 29.0001 30.5236M0.0127329 15C11.0127 15.0089 29.0131 14.5236 29.0249 0.023601" stroke="rgb(8, 8, 209)" strokeWidth="2"/>
          </motion.svg>
        </Link>
        <Link href="/" passHref={true}>
          <motion.div className={styles.home}
            variants={homeVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}
            whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}>
            home
          </motion.div>
        </Link>
        <Link href="/">
          <motion.div className={styles.greenRectangle}
            variants={greenRectangleVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.5 } }}
            whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}>
          </motion.div>
        </Link>
      </div>
  )
}

export default Home
