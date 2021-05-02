import { motion } from 'framer-motion'
import styles from '../styles/Statement.module.css'
import { statementVariants, hiVariants, hiLetterVariants, letterVariants } from '../animations/statementAnimation.js'

const Statement = () => {
  return (
    <div className={styles.statementWrapper}>
      <motion.div className={styles.hi}
        variants={hiVariants}
        initial="hidden"
        animate="visible">
        <motion.span variants={hiLetterVariants}>H</motion.span><motion.span variants={hiLetterVariants}>i</motion.span><motion.span variants={hiLetterVariants}>.</motion.span><motion.span> </motion.span>
      </motion.div>
      <motion.div className={styles.statement}
        variants={statementVariants}
        initial="hidden"
        animate="visible">
        <motion.span variants={letterVariants}>I</motion.span><motion.span variants={letterVariants}> </motion.span>
        <motion.span variants={letterVariants}>l</motion.span><motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>k</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}> </motion.span>
        <motion.span variants={letterVariants}>c</motion.span><motion.span variants={letterVariants}>r</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}>a</motion.span><motion.span variants={letterVariants}>t</motion.span><motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>n</motion.span><motion.span variants={letterVariants}>g</motion.span><motion.span> </motion.span>
        <motion.span variants={letterVariants}>l</motion.span><motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>v</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}>l</motion.span><motion.span variants={letterVariants}>y</motion.span><motion.span> </motion.span>
        <motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>n</motion.span><motion.span variants={letterVariants}>t</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}>r</motion.span><motion.span variants={letterVariants}>a</motion.span><motion.span variants={letterVariants}>c</motion.span><motion.span variants={letterVariants}>t</motion.span><motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>v</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}> </motion.span>
        <motion.span variants={letterVariants}>w</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}>b</motion.span><motion.span variants={letterVariants}>s</motion.span><motion.span variants={letterVariants}>i</motion.span><motion.span variants={letterVariants}>t</motion.span><motion.span variants={letterVariants}>e</motion.span><motion.span variants={letterVariants}>s</motion.span><motion.span variants={letterVariants}>.</motion.span>
      </motion.div>
    </div>
  )
}

export default Statement
