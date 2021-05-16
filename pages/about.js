import { motion } from 'framer-motion'

// landscape
import TopRectangleLine from '../page-about/landscape-about/landscape-about-components/TopRectangleLine'
import LeftRectangleLine from '../page-about/landscape-about/landscape-about-components/LeftRectangleLine'
import PhotoGroupAndHomeBtn from '../page-about/landscape-about/landscape-about-components/PhotoGroupAndHomeBtn'
import TopRightCell from '../page-about/landscape-about/landscape-about-components/TopRightCell'
import MainCell from '../page-about/landscape-about/landscape-about-components/MainCell'
import BottomLeftCell from '../page-about/landscape-about/landscape-about-components/BottomLeftCell'
import BottomRightCell from '../page-about/landscape-about/landscape-about-components/BottomRightCell'

// portrait 
import PortraitPhotoGroupAndHomeBtn from '../page-about/portrait-about/portrait-about-components/PortraitPhotoGroupAndHomeBtn'
import Portrait2019Group from '../page-about/portrait-about/portrait-about-components/Portrait2019Group'
import PortraitSpring2020Group from '../page-about/portrait-about/portrait-about-components/PortraitSpring2020Group'
import PortraitSummer2020Group from '../page-about/portrait-about/portrait-about-components/PortraitSummer2020Group'
import PortraitFall2020Group from '../page-about/portrait-about/portrait-about-components/PortraitFall2020Group'
import PortraitWinter2021Group from '../page-about/portrait-about/portrait-about-components/PortraitWinter2021Group'
import PortraitSpring2021Group from '../page-about/portrait-about/portrait-about-components/PortraitSpring2021Group'
import PortraitArtGroup from '../page-about/portrait-about/portrait-about-components/PortraitArtGroup'
import PortraitContactGroup from '../page-about/portrait-about/portrait-about-components/PortraitContactGroup'

import styles from '../page-about/landscape-about/landscape-about-styles/AboutPage.module.css'

import { containerVariants, horizontalLine1Variants, horizontalLine2Variants, horizontalLine3Variants, horizontalLine4Variants, verticalLine1Variants, verticalLine2Variants, portraitBlueVariants } from '../animations-about/aboutAnimations.js'

const about = () => {
  return (
    <>
      <div className={styles.blueBG}>
        <motion.div className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div className={styles.horizontalLine1}
            variants={horizontalLine1Variants}>
          </motion.div>
          <motion.div className={styles.horizontalLine2}
            variants={horizontalLine2Variants}>
          </motion.div>
          <motion.div className={styles.horizontalLine3}
            variants={horizontalLine3Variants}>
          </motion.div>
          <motion.div className={styles.horizontalLine4}
            variants={horizontalLine4Variants}>
          </motion.div>
          <motion.div className={styles.verticalLine1}
            variants={verticalLine1Variants}>
          </motion.div>
          <motion.div className={styles.verticalLine2}
            variants={verticalLine2Variants}>
          </motion.div>
          <TopRightCell />
          <TopRectangleLine />
          <LeftRectangleLine />
          <PhotoGroupAndHomeBtn />
          <MainCell />
          <BottomLeftCell className={styles.bottomLeftCell} />
          <BottomRightCell />
        </motion.div>
      </div>
      <div className={styles.mobileContainer}>
        <motion.div className={styles.portraitBlueBG}
          variants={portraitBlueVariants}
          initial="visible"
          animate="hidden">
        </motion.div>
        <PortraitPhotoGroupAndHomeBtn />
        <Portrait2019Group />
        <PortraitSpring2020Group />
        <PortraitSummer2020Group />
        <PortraitFall2020Group />
        <PortraitWinter2021Group />
        <PortraitSpring2021Group />
        <PortraitArtGroup />
        <PortraitContactGroup />
      </div>
    </>
    
  )
}

export default about
