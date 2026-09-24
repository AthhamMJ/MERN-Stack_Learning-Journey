export default function Hooks(){


    const handleClick = () =>{
        console.log("Clicked")
    }

    return(
        <>
        <div>
            <button onClick={handleClick} style={style.button}>Click</button>
        </div>
        </>
    )
}

const style = {
    button: {
        margin: "10px 100px",
        borderRadius: "28px",
        height: "40px",
        width: "100px",
        backgroundColor: "red",
        color: "white",
        border: "none"
    }
}