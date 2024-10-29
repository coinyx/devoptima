import styles from './solution.module.css'
import SolutionCards from './solutioncards'
import { motion } from 'framer-motion'

const Solution = () => {
    return (

        <div className={styles.solutionwrap}>
            <div className='container'>
                <div className={styles.solutionwrapper}>
                    <div className={styles.articlewrap}>
                        <div>
                            <motion.h3 className={styles.imageset}
                                whileInView={{opacity: 1, transform: 'scaleX(1)'}}
                                initial={{ opacity: 0, transform: 'scaleX(180)'}}
                                transition={{ duration: 1, }}
                            >
                                Innovative solutions<br></br>
                                for operational excellence
                            </motion.h3>
                            <motion.h5 className={styles.imageset}
                                whileInView={{opacity: 1, transform: 'rotateY(360deg)'}}
                                initial={{ opacity: 0, transform: 'rotateY(180deg)'}}
                                transition={{ duration: 2, delay: 1 }}
                            >
                                Tailored DevOps expertise driving your business momentum.<br></br>
                                Personalized solutions for growth and evolution.
                            </motion.h5>
                        </div>
                        <SolutionCards />
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Solution