import { useState, createContext, useContext } from "react"

const StudentContext = createContext();

function Student(){
    const student = useContext(StudentContext)

    return(
        <div>
            <h2>Student Card (Context Data)</h2>
            <p>Name: </p>
            
        </div>
    )
}

export default function Task3(){


    const[name, setname] = useState("")
    const[course, setCourse] = useState("")
    const[batch, setBatch] = useState("")

    return(
        <>
            <h1>Student Information App</h1>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text"/><br /><br />

                <label htmlFor="">Course:</label>
                <input type="text"/><br /><br />

                <label htmlFor="">Batch:</label>
                <input type="text"/><br /><br />

                <p>Name: </p>
                <p>Course: </p>
                <p>Batch: </p>
            </div>
        </>
    )
}