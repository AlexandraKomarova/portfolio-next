import styles from '../portrait-about-styles/PortraitFall2020Group.module.css'
import WorkIcon from '../../../icon-components/WorkIcon'

const PortraitFall2020Group = () => {
  return (
    <div className={styles.portraitFall2020Group}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.rightBlueRectangle}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.period}>
        <div>Fall 2020</div>
      </div>
      <div className={styles.description}>
       <div>
         Internship with Good Comerce. Learning about Docker.
       </div>
      </div>
      <div className={styles.icon}>
        <WorkIcon />
      </div>
    </div>
  )
}

export default PortraitFall2020Group
