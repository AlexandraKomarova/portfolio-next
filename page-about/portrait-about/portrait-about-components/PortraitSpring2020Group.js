import styles from '../portrait-about-styles/PortraitSpring2020Group.module.css'

import EducationIcon from '../../../icon-components/EducationIcon'
import ColumbiaIcon from '../../../icon-components/ColumbiaIcon'

const PortraitSpring2020Group = () => {
  return (
    <div className={styles.portraitSpring2020Group}>
      <div className={styles.leftBlueRectangle}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.period}>
        <div>Spring 2020</div>
      </div>
      <div className={styles.description}>
        <div>
          Graduated from Columbia Engineering Full Stack Program. The focus of the curriculum was on Node and React.
        </div>
      </div>
      <div className={styles.iconGroup}>
        <ColumbiaIcon />
        <EducationIcon />
      </div>
    </div>
  )
}

export default PortraitSpring2020Group
