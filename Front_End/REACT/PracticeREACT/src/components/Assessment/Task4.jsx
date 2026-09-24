import { useRef } from "react"

export default function Task4(){

    const inputRef = useRef(null)

    const handleFocus = ()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    const handleClear = () =>{
        if(inputRef.current){
            inputRef.current.value = ""
            inputRef.current.focus()
        }
    }
    return(
        <>
        <form>
            <h2>Input Focus App</h2>

            <label htmlFor="">Name</label>
            <input type="text" ref={inputRef}/>

            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleClear}>clear</button>
        </form>
        </>
    )
}