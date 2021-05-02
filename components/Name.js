import { motion } from 'framer-motion'
import styles from '../styles/Name.module.css'
import { firstNameVariants, lastNameVariants, coverVariants } from '../animations/nameAnimation.js'

const Name = () => {
  return (
    <div className={styles.nameWrapper}>
      <motion.div className={styles.firstName}
          variants={firstNameVariants}
          initial="hidden"
          animate="visible">
          ALEXANDRA
        </motion.div>
        <motion.div className={styles.firstNamecover}
          variants={coverVariants}
          initial="visible"
          animate="hidden">
        </motion.div>
        <motion.div className={styles.lastName}
          variants={lastNameVariants}
          initial="hidden"
          animate="visible">
          KOMAROVA
        </motion.div>
        <motion.div className={styles.lastNamecover}
          variants={coverVariants}
          initial="visible"
          animate="hidden">
        </motion.div>
    </div>
  )
}

export default Name


