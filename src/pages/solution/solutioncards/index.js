import styles from './solutioncards.module.css'
import { motion } from 'framer-motion'

const cards = [
    {
        img: 'Mask group (1).png',
        title: 'Continuous Integration & Deployment',
        content: 'Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.'
    },
    {
        img: 'Mask group.png',
        title: 'Cloud Solutions & Infrastructure Management',
        content: 'Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.'
    },
    {
        img: 'Mask group (2).png',
        title: 'Automated Testing & Quality Assurance',
        content: 'Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.'
    }
]

const SolutionCards = () => {
    return (
        <div className={styles.cardgroup}>
            {
                cards.map((item,index) => {
                    return  <motion.div key={index} className={styles.card}
                                whileInView={{opacity: 1, transform: 'scale(1)'}}
                                initial={{ opacity: 0, transform: 'scale(0)'}}
                                transition={{ duration: index+1*0.3, delay: .5}}
                            >
                            <img className={styles.imgsize} src={item.img} />
                            <div className={styles.fontset}> 
                                <h6>{item.title}</h6>
                                <h4>{item.content}</h4>
                            </div>
                        </motion.div>
                })
            }
        </div>
    )
}

export default SolutionCards