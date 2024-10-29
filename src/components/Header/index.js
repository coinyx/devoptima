import styles from './header.module.css'
import Button from '../Button'
import { motion } from 'framer-motion'

const Header = (props) => {
    return (
                <motion.div 
                    whileInView={{opacity: 1}}
                    initial={{ opacity: 1}}
                    transition={{ duration: .5, }}
                >
                
                <div className={props.scrollY < 100 ? styles.header : styles.headerForm}>
                    <div className='container'>
                        <div className={styles.headerwrap}>
                            <motion.a className={styles.logowrap}
                                whileInView={{x: 0,y: 0,opacity: 1}}
                                initial={{ x: -120,y: -30,opacity: 0}}
                                transition={{ duration: 1, }}
                            >
                                <img src='favicon.png' />
                                <h5>DevOptima</h5>
                            </motion.a >
                            <ul className={styles.list}>
                                <motion.li 
                                    whileInView={{y: 0,opacity: 1}}
                                    initial={{ opacity: 0,y: -20}}
                                    transition={{ duration: .5, }}
                                >
                                    <a>
                                        About us
                                    </a>    
                                </motion.li>

                                <motion.li 
                                    whileInView={{y: 0,opacity: 1}}
                                    initial={{ opacity: 0,y: -20}}
                                    transition={{ duration: .5, delay: .5 }}
                                >
                                    <a>
                                        Services
                                    </a>    
                                </motion.li>

                                <motion.li 
                                    whileInView={{y: 0,opacity: 1}}
                                    initial={{ opacity: 0,y: -20}}
                                    transition={{ duration: .5, delay: 1 }}
                                >
                                    <a>
                                        Why DevOptima
                                    </a>    
                                </motion.li>
                            </ul>
                            
                            <Button type='primary' title={"Ger started"} />
                        </div>
                    </div>
                </div>
                </motion.div>
    )
}

export default Header