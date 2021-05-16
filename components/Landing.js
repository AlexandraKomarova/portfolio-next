import { motion } from 'framer-motion'
import Name from './Name'
import Statement from './Statement'
import Squiggly from './Squiggly'
import Featured from './Featured'
import About from './About'
import styles from '../styles/Landing.module.css'
import { landingVariants } from '../animations/landingAnimation.js'

const Landing = () => {
  return (
    <motion.div className={styles.landing}
      variants={landingVariants}
      initial="hidden"
      animate="visible">
      <Name />
      <Statement />
      <Featured />
      <About />
      <Squiggly />
    </motion.div>
  )
}

export default Landing
