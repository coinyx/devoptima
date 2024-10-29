import React, {useState} from 'react'
import styles from './groupintro.module.css'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

const GroupIntro = () => {
    const [flag,setFlag] = useState(0)
 
    
    const [value,setValue] = React.useState("")

    const handleChange = (ev) => {

        setValue({...value,[ev.target.name]: ev.target.value});
    }
    console.log("flag", flag)


    return (

            <div className={styles.groupintrowrap} >
                <div className='container'>
                    <div className={styles.groupintrowrapper}>
                        <img src='Ellipse 237.png' className={styles.gradnt} />
                        <div className={styles.introgroup}>
                            <motion.h2 
                                whileInView={{opacity: 1,scale: 1}}
                                initial={{ scale: 0}}
                                transition={{ duration: 1, }}
                            >
                                Revolutionize<br></br>
                                your DevOps journey with DevOptima
                            </motion.h2>
                            <motion.p 
                                whileInView={{opacity: 1,marginLeft: '0px'}}
                                initial={{ marginLeft: '-1000px'}}
                                transition={{ duration: 1,delay: 1 }}
                            >
                                Empower groups to boost innovation with efficient development,<br></br>
                                automated operations, and stable scaling        
                            </motion.p>
                            <motion.form className={styles.formset}
                                whileInView={{opacity: 1,marginLeft: '0px'}}
                                initial={{opacity: 0, marginLeft: '-700px'}}
                                transition={{ duration: 1, delay: 2}}
                            >
                                
                                <input placeholder='Your bussiness email...' name='filter' onChange={handleChange} />
                                <div>
                                    {
                                        flag === 0 &&
                                        <Button type='secondary' title={"Free trial"} value={value} setValue={setValue} flag={flag} setFlag={setFlag}/>
                                    }
                                    {
                                        flag === 1 &&
                                        <div className='round' >
                                            <img src='Component 1.png' className='roundcircle'/>
                                        </div> 
                                    }

                                    {
                                        flag === 2 &&
                                        <div>
                                        {
                                            value !== '' ? 
                                            <div className='roundcheck'>
                                                <img src='Vector 862.png' />
                                            </div> :
                            
                                            <div className='rounddeny'>
                                                <img src='close.png' />
                                            </div>
                                        }
                                        </div>
                                    }
                                </div>
                              
                            </motion.form>
                        </div>
                        <motion.div className={styles.imageset}
                            whileInView={{opacity: 1,marginRight: '0px'}}
                            initial={{opacity: 0, marginRight: '-500px'}}
                            transition={{ duration: 1, delay: 1}}
                        >
                            <img src='hero illustration.png' width={582} height={416} style={{top: '-70px',position: 'absolute'}} /> 
                        </motion.div>
                    </div>
                </div>
            </div>
    )
}

export default GroupIntro