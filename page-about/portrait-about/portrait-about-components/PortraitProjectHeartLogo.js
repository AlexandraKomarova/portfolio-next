import styles from '../portrait-about-styles/PortraitProjectHeartLogo.module.css'
// import heart from '../public/hearticon.png'
const PortraitProjectHeartLogo = () => {
  return (
    <div className={styles.phWrapper}>
      <div className={styles.projectHeart}>
        <span className={styles.project}>project</span>
        <span className={styles.heartWord}>heart</span>
        <img className={styles.blobHeart} src="hearticon.png" alt="heart image"/>
      </div>
    </div>
  )
}

export default PortraitProjectHeartLogo
