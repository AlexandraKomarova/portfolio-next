import styles from '../portrait-about-styles/PortraitSpring2021Group.module.css'
import WorkIcon from '../../../icon-components/WorkIcon'
import PortraitProjectHeartLogo from './PortraitProjectHeartLogo'

const PortraitSpring2021Group = () => {
  return (
    <div className={styles.portraitSpring2021Group}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.leftBlueSquare}></div>
      <div className={styles.rightBlueRectangle}></div>
      <div className={styles.period}>
        <div>Spring 2021</div>
      </div>
      <div className={styles.description}>
        Started working on Project Heart.
      </div>
      <PortraitProjectHeartLogo />
      <div className={styles.icon}>
        <WorkIcon />
      </div>
    </div>
  )
}

export default PortraitSpring2021Group
