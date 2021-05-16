import { motion } from 'framer-motion'
import styles from '../landscape-about-styles/Star.module.css'
import { starVariants } from '../../../animations-about/landscapePhotoGroupAnimations.js'
const Star = () => {
  return (
    <motion.svg className={styles.star} 
      variants={starVariants}
      initial="hidden"
      animate="visible"
      width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 0.5L14.4576 8.5L20.9232 10.1008L16 14.7984L20 22.3992L10.9617 18.5L4.5 23.5L5 14.7984L0 8L6.46564 8.5L11.5 0.5Z" fill="#E47B9E"/>
    </motion.svg>
  )
}

export default Star
