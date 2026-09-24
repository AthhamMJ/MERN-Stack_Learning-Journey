import { useState, useEffect } from "react";

export default function UE(){
    const [resourceType, setResourceType] = useState("Posts")
    const [items, setItems] = useState([])


    // whenever the resourceType which one's inside of the useEffect the useEffect works and printout console.log('resource type changed')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typeicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }, [resourceType])

    return(
        <>
            <div>
                <button onClick={() =>setResourceType("Posts")}>Posts</button>
                <button onClick={() =>setResourceType("Users")}>Users</button>
                <button onClick={() =>setResourceType("Comments")}>Comments</button>
            </div>
            <div>{resourceType}</div>
            {/* {items.map((item) => {
                return <pre>{JSON.stringify.(item)}</pre>
            })} */}
        </>
    )
}