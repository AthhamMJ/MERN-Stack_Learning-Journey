import { useState } from "react"
import './style.css'

export default function Task1(){
    
    const[name, setName] = useState("")

    const clear =(event)=>{
        event.preventDefault()
        setName("")
    }

    return(
        <form>
            <h1>Student Name App</h1>
            <label htmlFor="">Student's Name: </label>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <p>Name: {name}</p><br />
            <button onClick={clear}>clear</button>
            <input type="reset" className="reset-btn"/>
        </form>
    )
}