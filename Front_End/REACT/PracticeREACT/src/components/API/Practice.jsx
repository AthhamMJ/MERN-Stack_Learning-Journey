import { useEffect, useState } from "react";

export default function Practice() {
    
    const [driver, setDriver] = useState([])

    useEffect(() => {
        fetch('/drivers.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.drivers)
            setDriver(data.drivers)
        })
    }, [])

    return(
        <div>
            <h1>Driver's Data</h1>
            <ul>
                {driver.map((driver) => (
                    <div>
                        <table>
                            <tr>
                                <td style={style.table}>{driver.name}</td>
                                <td style={style.table}>{driver.number}</td>
                                <td style={style.table}>{driver.number}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const style = {
    table:{
        border: "1px solid black",
        padding: "0px 30px"
    },

}