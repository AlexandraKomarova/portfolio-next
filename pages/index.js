import Head from 'next/head'
import { motion } from 'framer-motion'

// components
import BlueBG from '../components/BlueBG'
import PHWrapper from '../components/PHWrapper'
import PHWrapperMobile from '../components/PHWrapperMobile'
import styles from '../styles/home.module.css'

const home = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandra Komarova</title>
      </Head>
      <BlueBG />
      <PHWrapper />
      <PHWrapperMobile />
    </div>
  )
}

export default home

// icon 

// <link rel="icon" href="" />

// COMPONENTS

// NAME

// <Name />

// STATEMENT

// <Statement />

// PROJECT HEART LOGO

// <ProjectHeartLogo />

// FEATURED

// <Featured />

// THIN LINE

// <motion.div className={styles.thinLine}
//           variants={thinLineVariants}
//           initial="hidden"
//           animate="visible">
//         </motion.div>

// SOME STORY

// <motion.div className={styles.story}>Project Heart was established in 2014 and got an amzing following around the worl, amassing 2050 memebers and counting, spreading to 34 coutries, with events a few times a year.</motion.div>

// HI. I'M SASHA

// <span>H</span><span>i</span><span>.</span><span> </span>
//           <span>I</span><span>'</span><span>m</span><span> </span>
//           <span>S</span><span>a</span><span>s</span><span>h</span><span>a</span><span>.</span><span> </span>

// ALEXANDRA KOMAROVA

// <div className={styles.name}>Alexandra</div>
//           <div className={styles.lastName}>Komarova</div>

// SMILEY SVG

// <svg className={styles.svg} width="97" height="45" viewBox="0 0 97 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M7.5 28.5C7.5 86 88.9999 86 88.9999 28.5" stroke="lightpink" strokeWidth="15"/>
//             <circle cx="31" cy="9" r="9" fill="lightpink"/>
//             <circle cx="62" cy="9" r="9" fill="lightpink"/>
//           </svg>