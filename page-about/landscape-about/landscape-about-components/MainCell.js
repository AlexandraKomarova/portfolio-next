import { motion } from 'framer-motion'

import EducationIcon from './EducationIcon'
import ColumbiaIcon from './ColumbiaIcon'
import LetterIcon from './LetterIcon'
import WorkIcon from './WorkIcon'

import styles from '../landscape-about-styles/MainCell.module.css'

import { verticalLineVariants, horizontalLine1Variants, horizontalLine2Variants, horizontalLine3Variants, contactCellVerticalLineVariants, contactCellHorizontalLine1Variants, contactCellHorizontalLine2Variants, period2019Variants, description2019Variants, periodSpring2020Variants, descriptionSpring2020Variants, periodSummer2020Variants, descriptionSummer2020Variants, periodFall2020Variants, descriptionFall2020Variants, periodWinter2021Variants, descriptionWinter2021Variants, blueRectangleVariants, icon2019Variants, columbiaIcon, educationIconSpring2020, iconSummer2020Variants, iconWinter2021Variants, workIconFall2020, sayHelloVariants, workEmailVariants, letterIconWrapperInnerVariants, letterIconVariants, emailWrapperVariants } from '../../../animations-about/landscapeMainCellAnimations.js'

const MainCell = () => {
  return (
    <div className={styles.mainCell}>
      <motion.div className={styles.verticalLine}
        variants={verticalLineVariants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.horizontalLine1}
        variants={horizontalLine1Variants}
        initial="hidden"
        animate="visible">
      </motion.div>
      <motion.div className={styles.horizontalLine2}
        variants={horizontalLine2Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <motion.div className={styles.horizontalLine3}
        variants={horizontalLine3Variants}
        initial="hidden"
        animate="visible"></motion.div>
      <div className={styles.year2019}>
        <motion.div className={styles.period}
          variants={period2019Variants}
          initial="hidden"
          animate="visible">2019
        </motion.div>
        <motion.div className={styles.description}
          variants={description2019Variants}
          initial="hidden"
          animate="visible">
          Taught myself HTML and CSS. Built a few personal websites. 
        </motion.div>
        <motion.div className={styles.icon}
          variants={icon2019Variants}
          initial="hidden"
          animate="visible">
          <EducationIcon />
        </motion.div>
      </div>
      <div className={styles.spring2020}>
        <motion.div className={styles.period}
          variants={periodSpring2020Variants}
          initial="hidden"
          animate="visible">Spring 2020
        </motion.div>
        <motion.div className={styles.description}
          variants={descriptionSpring2020Variants}
          initial="hidden"
          animate="visible">
          Graduated from Columbia Engineering Full Stack Program. The focus of the curriculum was on Node and React.
        </motion.div>
        <div className={styles.iconGroup}>
          <motion.div 
            variants={columbiaIcon}
            initial="hidden"
            animate="visible">
            <ColumbiaIcon />
          </motion.div>
          <motion.div 
            variants={educationIconSpring2020}
            initial="hidden"
            animate="visible">
            <EducationIcon />
          </motion.div>
        </div>
      </div>
      <div className={styles.summer2020}>
        <motion.div className={styles.period}
          variants={periodSummer2020Variants}
          initial="hidden"
          animate="visible">Summer 2020
        </motion.div>
        <motion.div className={styles.description}
          variants={descriptionSummer2020Variants}
          initial="hidden"
          animate="visible">
          Taught myself Figma, GraphQL and Next.js.Got familiar with Typescript and Microservices architecture.
        </motion.div>
        <motion.div className={styles.icon}
          variants={iconSummer2020Variants}
          initial="hidden"
          animate="visible">
          <EducationIcon />
        </motion.div>
      </div>
      <div className={styles.fall2020AndContact}>
        <div className={styles.fall2020Cell}>
          <motion.div className={styles.blueRectangle}
            variants={blueRectangleVariants}
            initial="hidden"
            animate="visible"></motion.div>
          <motion.div className={styles.fall2020period}
            variants={periodFall2020Variants}
            initial="hidden"
            animate="visible">Fall 2020
          </motion.div>
          <motion.div className={styles.fall2020description}
            variants={descriptionFall2020Variants}
            initial="hidden"
            animate="visible">
            Internship with Good Comerce. Learning about Docker.
          </motion.div>
          <motion.div className={styles.fall2020Icon}
            variants={workIconFall2020}
            initial="hidden"
            animate="visible">
            <WorkIcon />
          </motion.div>
        </div>
        <div className={styles.contactCell}>
          <motion.div className={styles.contactCellVerticalLine}
            variants={contactCellVerticalLineVariants}
            initial="hidden"
            animate="visible"></motion.div>
          <motion.div className={styles.contactCellHorizontalLine1}
            variants={contactCellHorizontalLine1Variants}
            initial="hidden"
            animate="visible"></motion.div>
          <motion.div className={styles.contactCellHorizontalLine2}
            variants={contactCellHorizontalLine2Variants}
            initial="hidden"
            animate="visible"></motion.div>
          <div className={styles.pinkBorderRectangle}></div>
          <div className={styles.sayHelloWrapper}>
            <motion.div className={styles.sayHello}
              variants={sayHelloVariants}
              initial="hidden"
              animate="visible">say hello!
            </motion.div>
          </div>
          <div className={styles.letterIconWrapperOuter}>
            <motion.div className={styles.letterIconWrapperInner}
              variants={letterIconWrapperInnerVariants}
              initial="hidden"
              animate="visible">
              <motion.div
                variants={letterIconVariants}
                initial="hidden"
                animate="visible">
                <LetterIcon className={styles.letterIcon}/>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className={styles.emailWrapper}
            variants={emailWrapperVariants}
            initial="hidden"
            animate="visible">
            <motion.div 
              variants={workEmailVariants}
              initial="hidden"
              animate="visible">hi@alexandrakomarova.dev
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className={styles.winter2021}>
        <motion.div className={styles.period}
          variants={periodWinter2021Variants}
          initial="hidden"
          animate="visible">Winter 2021
        </motion.div>
        <motion.div className={styles.description}
          variants={descriptionWinter2021Variants}
          initial="hidden"
          animate="visible">
          Taught myself native animation with keyframes. Moved on to Framer Motion. 
        </motion.div>
        <motion.div className={styles.winter2021Icon}
          variants={iconWinter2021Variants}
          initial="hidden"
          animate="visible">
          <EducationIcon />
        </motion.div>
      </div>
    </div>
  )
}

export default MainCell
