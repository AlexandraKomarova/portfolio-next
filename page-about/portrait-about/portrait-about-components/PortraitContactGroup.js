import styles from '../portrait-about-styles/PortraitContactGroup.module.css'
import LetterIcon from '../../../icon-components/LetterIcon'

const PortraitContactGroup = () => {
  return (
    <div className={styles.portraitContactGroup}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.leftPinkRectangle}></div>
      <div className={styles.sayHelloIconGroup}>
        <div className={styles.sayHello}>
          say hello!
        </div>
        <div className={styles.icon}>
          <LetterIcon />
        </div>
      </div>
      <div className={styles.contactEmail}>
        <div>hi@alexandrakomarova.dev</div>
      </div>
      <div className={styles.bottomEmptyRectangle}></div>
    </div>
  )
}

export default PortraitContactGroup
