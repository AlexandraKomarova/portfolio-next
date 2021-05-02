import { motion } from 'framer-motion'
import Name from './Name'
import Statement from './Statement'
import Featured from './Featured'
import styles from '../styles/BlueBG.module.css'
import { blueBGVariants, squigllyVariants } from '../animations/bluebGAnimation.js'

const BlueBG = () => {
  return (
    <motion.div className={styles.blueBG}
      variants={blueBGVariants}
      initial="hidden"
      animate="visible">
      <Name />
      <Statement />
      <Featured />
      <svg className={styles.squiggly} width="350" height="310" viewBox="0 0 350 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          variants={squigllyVariants}
          initial="hidden"
          animate="visible"
          d="M1.09708 151.042C15.8516 131.363 21.0587 123.339 38.5279 104.87C61.2715 80.8243 86.4922 58.333 113.95 39.7805C139.859 22.2742 169.613 9.87546 200.489 4.68069C222.341 1.00423 246.046 -1.44539 266.654 8.4686C275.47 12.7095 281.477 16.6308 287.23 24.7185C296.712 38.0483 298.553 56.0406 298.526 71.8769C298.506 83.7305 296.361 102.128 293.371 113.566C286.588 139.523 273.036 162.937 257.846 184.774C243.359 205.6 231.18 220.403 213.982 239.038C196.851 257.6 178.344 275.117 157.186 289.065C150.998 293.145 133.961 302.778 126.658 305.472C113.922 310.17 96.2705 312.632 88.2862 298.031C80.5 286 83.2278 264.556 88.8242 248.003C99.7284 215.752 121.244 188.381 149.027 168.973C158.328 162.476 175.412 154.665 186.772 151.356C197.2 148.318 211.265 146.042 221.76 150.414C237.669 157.043 235.815 180.996 232.137 194.3C229.599 203.482 224.785 212.769 219.496 220.614C212.235 231.383 202.957 241.768 192.42 249.438C185.624 254.385 177.338 259.892 169.5 263C159.5 266.965 150.5 268.307 143.289 266.965C139.303 266.224 136.366 262.766 135.803 258.807C133.538 242.885 143.614 225.666 152.255 213.598C164.389 196.652 176.881 184.492 193.003 171.147C215.034 152.91 239.584 137.696 266.34 127.418C276.551 123.496 292.604 119.282 303.726 117.735C314.97 116.172 328.511 115.549 339.073 120.671C356.912 129.324 344.686 151.254 341.605 164.759" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  )
}

export default BlueBG