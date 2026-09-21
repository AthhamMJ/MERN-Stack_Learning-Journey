import {useState, useEffect } from "react"

export default function Task2(){

        const[time, setTime] = useState(new Date())

        useEffect(()=>{
            const timerID = setInterval(()=>{
                setTime(new Date())
            }, 1000)

            return ()=> clearInterval(timerID)
        }, [])

        const formattedTime = time.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })

    return(
        <div>
            <h1>Digital Clock</h1>
            <div style={style.time}>{formattedTime}</div>
        </div>
    )
    
}

const style = {
    time: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        padding: "10px",
        width: "100px",
        height: "50px",
        border: "1px solid black",
        borderRadius: "1.5rem"
    }
}