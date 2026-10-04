import { useEffect, useState } from "react"

export default function USSTyle({colors}) {

    const [color, setColor] = useState(null)


    const randomColorPicker = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        const randomColor = colors[randomIndex]
        const {colour} = randomColor
        
        setColor(colour)
    }

    const handleClick = (event) => {
        event.preventDefault()
        setColor('red')
    }

    

    useEffect(() => {
        if (color !== null){
            console.log('color has changed')    
        }
    }, [color])

    return(
        <div>
            <h1 style={{color: color}}>\/A\/</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={randomColorPicker}>Change the Color</button>
        </div>
    )
}
