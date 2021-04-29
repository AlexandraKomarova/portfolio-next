import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/home.module.css'

const home = () =>  {
  return (
    <motion.div className={styles.wrapper}>
      <Head>
        <title>Home | Alexandra Komarova</title>
        <link rel="icon" href="" />
      </Head>
      
      hello page
    </motion.div>
  )
}

export default home
