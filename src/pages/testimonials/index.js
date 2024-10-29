import styles from './testimonials.module.css'
import { motion } from 'framer-motion'

const TestiMonials = (props) => {
    return (

        <div className={styles.testimoniaslwrap}>
                <div className='container'>
                    <div className={styles.testimonialswrapper}>
                        <div className={styles.betweenpart}>
                                
                                <div className={styles.eachpart}>

                                    <motion.div className={styles.eachpartout}
                                        whileInView={{opacity: 1, transform: 'scale(1)'}}
                                        initial={{ opacity: 0, transform: 'scale(0)'}}
                                        transition={{ duration: 1, delay: .5}}
                                    >
                                        <img src='Frame 1321321405.png' className={styles.imageset} />
                                        <h6>Thanks to DevOptima, our team can focus more on innovation and less on operational challenges. Their cloud management solutions are top-notch</h6>
                                        <div className={styles.personal}>
                                        <img src='image 19.png' className={styles.avatarset} />
                                            <div className={styles.namepart}>
                                                <div className={styles.namepart}>
                                                    <h6>John Smith</h6>
                                                    <p>It Director at Reflect</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className={styles.eachpart}>
                                    <motion.div className={styles.eachpartout}
                                        whileInView={{opacity: 1, transform: 'scale(1)'}}
                                        initial={{ opacity: 0, transform: 'scale(0)'}}
                                        transition={{ duration: 1, delay: .5}}
                                    >
                                        <img src='Frame 1321321406.png' className={styles.imageset} />
                                        <h6>DevOptima has been a game-changer for us. With their support, we've shifted our focus from operational hurdles to pushing boundaries in innovation.</h6>
                                        <div className={styles.personal}>
                                        <img src='image 8.png' className={styles.avatarset} />
                                        <div className={styles.namepart}>
                                            <div className={styles.namepart}>
                                                <h6>John Smith</h6>
                                                <p>Tech Lead at Dribble</p>
                                            </div>
                                        </div>
                                        </div>
                                    </motion.div>
                                </div>
                            
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default TestiMonials