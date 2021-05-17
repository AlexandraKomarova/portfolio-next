import Link from 'next/link'

import styles from '../portrait-about-styles/PortraitArtGroup.module.css'
import ArtIcon from '../../../icon-components/ArtIcon'

const PortraitArtGroup = () => {
  return (
    <div className={styles.portraitArtGroup}>
      <div className={styles.leftEmptyRectangle}></div>
      <div className={styles.rightEmptyRectangle}></div>
      <div className={styles.rightGreenSquare}></div>
      <div className={styles.description}>when I’m not coding <br />find me drawing!</div>
      <div className={styles.emailArtIconGroup}>
        <Link href="http://alexandrakomarova.com" passHref={true}>
          <div className={styles.website}>
            alexandrakomarova.com
          </div>
        </Link>
        <Link href="http://alexandrakomarova.com" passHref={true}>
          <ArtIcon />
        </Link> 
      </div>
    </div>
  )
}

export default PortraitArtGroup
