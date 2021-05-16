import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/PHWrapperMobile.module.css'

const PHWrapperMobile = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>STORYTELLING PACED TO ENGAGE.</p>
        <img src="video.MOV" className={styles.video} />
        <div className={styles.story}>
          <p>
            A work in progress, Project Heart is intended to be a curated community platform, designed to provide 2000+ active followers with a space to connect and share insider events. At the moment even the presentational portion of the webiste is still in development. I'm proud to share the current version with you here.
          </p>
        </div>
        <div className={styles.visit}>
          <Link href="https://projectheart.family" passHref={true}>
            <motion.p className={styles.visitText} whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }}>VISIT PROJECT HEART @ PROJECTHEART.FAMILY</motion.p>
          </Link>
          <Link href="https://projectheart.family" passHref={true}>
            <motion.svg className={styles.arrow}  whileTap={{ scale: [1, 1.1, 1], transition: { duration: 0.5 } }} width="57" height="32" viewBox="0 0 137 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M136 15.7278L0.501497 16.2722M136 15.7278C125 15.772 106.997 14.8443 106.938 0.344419M136 15.7278C125 15.772 107.003 16.3443 107.061 30.8442" stroke="#D12E49" strokeWidth="2"/>
            </motion.svg>
          </Link>
        </div>
    </div>
  )
}

export default PHWrapperMobile
