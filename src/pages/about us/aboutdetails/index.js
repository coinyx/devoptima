import styles  from './aboutdetails.module.css'


const details = [
    {
        image: 'Group 1321321415.png',
        title: 'DevOps transformation',
        contnet: 'Reshaping businesses with DevOps expertise.'
    },
    {
        image: 'Group 1321321416.png',
        title: 'Efficient operations',
        contnet: 'Streamline processes for productivity gains.'
    },
    {
        image: 'Group 1321321416.png',
        title: 'CI/CD implementation',
        contnet: 'Seamless software delivery pipeline.'
    },
    {
        image: 'Group 1321321417.png',
        title: 'Automation mastery',
        contnet: 'Unlock full automation potential.'
    }
]


const AboutDetails = (props) => {
    return (
        <div className={styles.eachgroupset } >
            {
                details.map((item,index) => {
                    return <div key={index} className={styles.eachgroup}>
                        <img src={item.image} className={styles.iconsize} />
                        <h6>{item.title}</h6>
                        <p>{item.contnet}</p>
                    </div>
                })
            }
        </div>
    )
}

export default AboutDetails