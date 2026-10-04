import { useState } from "react"

export default function Task8() {
    const [value, setValue] = useState("")

    const handleClick = (e) =>{
        const buttonText = e.target.textContent

        if (buttonText === "C") {
            setValue("");
        } else if (buttonText === "=") {
        try {
            const result = new Function(`return ${value}`)();
            

            if (!isFinite(result)) {
            setValue("Error");
            } else {
            setValue(String(result));
            }
        } catch (error) {
            setValue("Error");
        }
        } else {
        if (value === "Error") {
            setValue(buttonText);
        } else {
            setValue((prev) => prev + buttonText);
        }
        }
    };

    const buttons = [
        "1", "2", "3","4", "5", "6","7", "8", "9","0", "+", "-", "x", "/", "="
    ]


    return(
        <div>
            <p>Answer: {value}</p>
            <div>{buttons.map((button) =>{
                return <button key= {button} onClick={handleClick} style={style.button}>{button}</button>
            })}</div>
        </div>
    )
}

const style = {
    button :{
        width: "50px",
        height: "50px"
    }
}