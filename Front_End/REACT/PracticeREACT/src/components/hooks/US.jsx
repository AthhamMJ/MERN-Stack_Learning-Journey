import { useState } from "react"

export default function US() {
    
    // use the useState as a function
    // const [count, setCount] = useState(() => {
    //     console.log('Run function')
    //     return 2
    // })

    const [state, setState] = useState({count: 4, theme: "yellow"})

    const count = state.count
    const theme = state.theme

    function decreamentCount(){
        setState(prevState => {
            return{
                ...prevState,
                count: prevState.count-1}
        })
    }
    const increamentCount = ()=> {
        // setCount(nextCount => nextCount+1)
    }

    return(
        <>
        <button onClick={decreamentCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={increamentCount}>+</button>
        </>
    )
}