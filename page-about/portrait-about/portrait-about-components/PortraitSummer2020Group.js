import styles from '../portrait-about-styles/PortraitSummer2020Group.module.css'
import EducationIcon from '../../../icon-components/EducationIcon'

const PortraitSummer2020Group = () => {
  return (
    <div className={styles.portraitSummer2020Group}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.leftGreenSquare}></div>
      <div className={styles.rightGreenSquare}></div>
      <div className={styles.period}>
        <div>Summer 2020</div>
      </div>
      <div className={styles.description}>
        <div>
          Taught myself Figma, GraphQL and Next.js.Got familiar with Typescript and Microservices architecture.
        </div>
      </div>
      <div className={styles.icon}>
        <EducationIcon />
      </div>
    </div>
  )
}

export default PortraitSummer2020Group
