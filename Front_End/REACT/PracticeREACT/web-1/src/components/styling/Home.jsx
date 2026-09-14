export default function Home({img="Image Unavailable", name=3, number="No Number"}){
    return(
        <>
            <div style={style.box}>
                <div><img src={img} style={{ width: '100%', height: 'auto', borderRadius: '28px'}}/></div>
                <p style={style.react}>{name}</p>
                <p style={style.react}>{number}</p>
            </div>
        </>
    )
}

const style = {
    box:{
        margin: "100px",
        backgroundColor:"rgba(255, 0, 0, 0.5)",
        borderRadius: "28px",
        height: "300px",
        width: "250px",
        padding: "50px"
    },
    hello:{
        fontSize:"75px"
    },
    subBody1:{
        margin: "100px"
    }

}