import styles from '../portrait-about-styles/PortraitWinter2021Group.module.css'
import EducationIcon from '../../../icon-components/EducationIcon'

const PortraitWinter2021Group = () => {
  return (
    <div className={styles.portraitWinter2021Group}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.leftEmptyTinyRectangle}></div>
      <div className={styles.leftGreenRectangle}></div>
      <div className={styles.leftBlueSquare}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.period}>Winter 2021</div>
      <div className={styles.description}>
        <div>
          Taught myself native animation with keyframes. Moved on to Framer Motion. 
        </div>
      </div>
      <div className={styles.icon}>
        <EducationIcon />
      </div>
    </div>
  )
}

export default PortraitWinter2021Group
