import { motion } from 'framer-motion'

import styles from '../portrait-about-styles/PortraitPhotoGroupAndHomeBtn.module.css'
import HomeBtn from './PortraitHomeBtn'
import Star from '../../../icon-components/Star'

import { horizontalLine1Variants, verticalLine1Variants, verticalLine2Variants, leftGreenRectangleVariants, smallBlueSquareVariants, smallGreenSquareVariants, photoVariants, squigglyVariants, starVariants } from '../../../animations-about/portraitPhotoGroupAndHomeBtnAnimations.js'

const PortraitPhotoGroupAndHomeBtn = () => {
  return (
    <div className={styles.photoGroupAndHomeBtn}>
      <motion.div className={styles.horizontalLine1}
        variants={horizontalLine1Variants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.verticalLine1}
        variants={verticalLine1Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.verticalLine2}
        variants={verticalLine2Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <div className={styles.homeBtnRectangle}></div>
      <motion.div className={styles.leftGreenRectangle}
        variants={leftGreenRectangleVariants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.smallBlueSquare}
        variants={smallBlueSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.smallGreenSquare}
        variants={smallGreenSquareVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <div className={styles.homeBtn}>
        <HomeBtn />
      </div>
      <motion.div className={styles.photo}
        variants={photoVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <svg className={styles.squiggly} width="168" height="236" viewBox="0 0 168 236" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        variants={squigglyVariants}
        initial="hidden"
        animate="visible"
        d="M7.70809 107.003C9.75268 83.2774 17.5288 64.6752 28.53 49.0648C39.0374 34.1551 51.0271 22.2992 63.6972 14.1328C73.332 7.92277 83.7108 3.81682 93.7849 5.76329C100.881 7.13433 106.124 11.7803 109.878 22.1837C116.103 39.4374 118.519 63.3135 115.05 83.7893C113.096 95.3225 108.216 109.96 104.339 119.679C99.3052 132.3 90.582 150.191 84.4278 161.198C73.2013 181.277 60.0396 199.503 45.4993 211.965C39.2082 217.357 31.5378 222.442 24.5582 220.654C14.0739 217.968 10.2333 200.697 11.5445 184.045C13.1867 163.188 22.4046 146.787 31.5422 133.365C39.3537 121.891 47.8183 112.633 57.4688 106.823C65.3218 102.096 76.0613 96.7232 83.0268 106.179C93.7744 120.77 84.7975 149.806 79.1962 166.092C72.5635 185.377 64.1132 202.068 53.4816 215.293C49.3151 220.475 45.4242 224.722 40.4336 226.542C37.9762 227.439 33.8366 229.24 31.9491 225.358C27.4355 216.075 33.7232 195.602 36.6363 187.549C48.987 153.405 68.8813 126.209 88.5311 104.967C102.017 90.3887 116.743 79.5716 132.37 76.4192C138.698 75.1427 146.623 74.2808 152.22 79.7118C158.523 85.8273 159.765 100.208 158.264 111.782C155.944 129.681 147.964 145.014 140.179 157.352C130.447 172.776 119.201 186.318 107.295 196.164C101.559 200.908 84.3392 212.529 85.2243 191.702C85.9001 175.8 93.4888 160.996 100.025 150.29C109.929 134.068 121.998 120.188 135.007 113.063C141.208 109.667 151.911 105.066 157.847 111.25C161.619 115.18 161.146 124.664 159.749 130.987C156.653 144.999 149.763 155.684 142.812 164.438C132.759 177.099 121.699 186.65 110.905 197.101" stroke="#E47B9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <motion.div className={styles.star}
        variants={starVariants}
        initial="hidden"
        animate="visible">
          <Star />
      </motion.div>
    </div>
  )
}

export default PortraitPhotoGroupAndHomeBtn