import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
      
        <Component {...pageProps} key={router.route} />
      
    )
}

export default MyApp

// <AnimatePresence exitBeforeEnter></AnimatePresence>