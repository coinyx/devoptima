import AboutDetails from './aboutdetails'
import styles from './aboutus.module.css'
import { motion } from 'framer-motion'

const Aboutus = () => {
    return (
        <div className={styles.aboutuswrap}>

                <div className={styles.aboutuswrap}  >
                    <motion.div className={styles.imageset}
                        whileInView={{opacity: 1,marginRight: 0}}
                        initial={{ opacity: 0, marginRight: '-1000px'}}
                        transition={{ duration: 1, }}
                    >
                        <img src='Frame 1321321410.png' />    
                    </motion.div>
                    <motion.div className={styles.optimaset}
                        whileInView={{opacity: 1,marginLeft: 0}}
                        initial={{ opacity: 0, marginLeft: '-1000px'}}
                        transition={{ duration: 1.5, }}
                    >
                        <h3>What is DevOptima?</h3>
                        <h5>At DevOptima, we are a team of passionate DevOps experts committed to transforming the way businesses approach software development and operations</h5>
                        <AboutDetails />
                    </motion.div>
                </div>
        </div>
    )
}

export default Aboutus