// import { useState } from "react"

import { useCallback } from "react"

export default function Task7(){
    const student = [
        {id: 1, name: "Athham"},
        {id: 2, name: "Aariz"},
        {id: 3, name: "Leclerc"},
        {id: 4, name: "Hamilton"},
        {id: 5, name: "Max"},
        {id: 6, name: "Sainz"},
        {id: 7, name: "Russell"},
    ]

    const[name, setName] = useState("")

    const handleClick = useCallback()



    return(
        <div>
            <ul>
                {student.map((student) => 
                    <li>{student.name}</li>
                )}
            </ul>

            <div>
                <p><strong>Selected Student: </strong></p>
            </div>
        </div>
    )
}