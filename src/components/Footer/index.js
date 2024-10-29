import Button from '../Button'
import styles from './footer.module.css'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div >
        <div className={styles.footerdevwrap}>
            <div className='container'>
                <div className={styles.footerdevwrapper}>
                    <div>
                        <div className={styles.devopswrap}>
                            <motion.h3 
                                whileInView={{opacity: 1, transform: 'scale(1)'}}
                                initial={{ opacity: 0, transform: 'scale(0)'}}
                                transition={{ duration: 1, delay: .5}}
                            >
                                Ready to elevate your DevOps strategy?
                            </motion.h3 >

                            <motion.h6 
                                whileInView={{opacity: 1, marginTop: 0}}
                                initial={{ opacity: 0, marginTop: '-50px'}}
                                transition={{ duration: 1, delay: .5}}
                            >
                                Join the multitude of companies benefiting from optimized DevOps practices.<br></br> Contact us to discover how DevOptima can help your business.
                            </motion.h6 >

                            <motion.div className={styles.btnset}
                                whileInView={{opacity: 1, marginTop: 0}}
                                initial={{ opacity: 0, marginTop: '-150px'}}
                                transition={{ duration: 1, delay: 1.5}}
                            >
                                <div className={styles.btnin}>    
                                    <Button type='secondary' title={"Contact us"} />
                                    <Button type='primary' title={"Try for free"} />
                                </div>
                            </motion.div >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.footerwrap}>
            <div className='container'>
                <div className={styles.footerwrapper}>
                    <div className={styles.footerpart}>
                        <div className={styles.ftlogo}>
                            <img src='favicon.png' />
                            <h2>DevOptima</h2>
                        </div>
                        <p>Devoptima 2023 © All rights reserved</p>
                    </div>
                    <div className={styles.footerdetailspart}>
                        <div className={styles.resource}>
                            <h6>Resource</h6>
                            <ul className={styles.list}>
                                <li>Docs</li>
                                <li>Release notes</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <div className={styles.resource}>
                            <h6>Community</h6>
                            <ul className={styles.sociallist}>
                                <li>
                                    <img src='logo-twitter 1.png' />
                                    Twitter
                                </li>
                                <li>
                                    <img src='logo-linkedin 1.png' />
                                    Linkdin
                                </li>
                                <li>
                                    <img src='logo-github 1.png' />
                                    Github
                                </li>
                                <li>
                                    <img src='Frame.png' />
                                    Discourse
                                </li>
                            </ul>
                        </div>
                        <div className={styles.resource}>
                            <h6>Legal</h6>
                            <ul className={styles.list}>
                                <li>Privacy policy</li>
                                <li>Terms of service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer