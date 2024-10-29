
const Button = (props) =>{
    const {title,type,value,flag,setFlag} = props
    
    const Enter = () => {
        if(flag === 0){
            setFlag(1)
            let timer = setTimeout(() => {
                console.log("11")
                setFlag(2)
            }, 2000)
                // setFlag(3)            
            // clearTimeout(timer)
        }
        
    }


    return (

        <div className={type} onClick={Enter}>{title}</div>

    )
}

export default Button