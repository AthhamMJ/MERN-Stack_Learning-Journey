import { useState } from "react"

export default function Task1(){
    
    const[name, setname] = useState("")

    const clear =(event)=>{
        event.preventDefault()
        setname("")
    }

    return(
        <div>
            <h1>Student Name App</h1>
            <label htmlFor="">Student's Name: </label>
            <input type="text" onChange ={(event)=>setname(event.target.value)} />
            <p>Name: {name}</p><br />
            <button onClick={clear}>clear</button>
        </div>
    )
}