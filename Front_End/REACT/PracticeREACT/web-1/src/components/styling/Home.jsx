import img from '../../assets/Chalex.jpeg'

export default function Home(driver){
    return(
        <>
        <div style={style.box}>
            <div><img src={driver.img} alt="image" style={{ width: '100%', height: 'auto' }}/></div>
            <p style={style.react}>{driver.name}</p>
        </div>
        </>
    )
}

const style = {
    box:{
        margin: "100px",
        backgroundColor:"rgba(255, 0, 0, 0.5)",
        height: "300px",
        width: "250px",
        padding: "70px"
    },
    hello:{
        fontSize:"75px"
    },
    subBody1:{
        margin: "100px"
    }

}