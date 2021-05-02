import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion'
import styles from '../styles/PHWrapper.module.css'
import { containerVariants, textVariants, blueRectangleVariants, videoVariants, storyVariants, visitVariants } from '../animations/PHWrapperAnimations.js'

const PHWrapper = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  useEffect(() => {
    if(inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <motion.div className={styles.container}
      ref={contentRef}
      variants={containerVariants}
      animate={animation}
      initial="hidden">
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <motion.p className={styles.text} variants={textVariants}>
            STORYTELLING PACED TO ENGAGE.
          </motion.p>
          <div className={styles.cover}></div>
        </div>
        <motion.div className={styles.blueRectangle}
          variants={blueRectangleVariants}
          >
        </motion.div>
        <motion.video 
          className={styles.video}
          src="video.MOV"
          autoPlay
          muted
          variants={videoVariants}
          >
        </motion.video>
        <div className={styles.story}>
          <motion.p
            variants={storyVariants}
            initial="hidden"
            animate="visible">
            A work in progress, Project Heart is intended to be a curated community platform, designed to provide 2000+ active followers with a space to connect and share insider events. At the moment even the presentational portion of the webiste is still in development. I'm proud to share the current version with you here.
          </motion.p>
        </div>
        <motion.div className={styles.visit}
            variants={visitVariants}
            initial="hidden"
            animate="visible">
          <Link href="https://projectheart.family" passHref={true}>
            <motion.p 
              whileHover={{ 
              x: [0, 5, 0],
              transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}>
              VISIT PROJECT HEART @ PROJECTHEART.FAMILY
            </motion.p>
          </Link>
          <Link href="https://projectheart.family" passHref={true}>
            <motion.svg 
            whileHover={{ 
              scale: [1, 1.1, 1],
              transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              className={styles.arrow}  width="57" height="32" viewBox="0 0 137 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M136 15.7278L0.501497 16.2722M136 15.7278C125 15.772 106.997 14.8443 106.938 0.344419M136 15.7278C125 15.772 107.003 16.3443 107.061 30.8442" stroke="#D12E49" strokeWidth="2"/>
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PHWrapper
