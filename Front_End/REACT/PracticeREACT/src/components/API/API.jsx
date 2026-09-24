import { useEffect } from "react"
import { useState } from "react"

export default function API(){

    const[users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        })
    }, [])

    return(
        <>
            <h1>API DATA</h1>
            <p>check the browser console</p>
            <ul>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                        <h3>{user.name} @{user.username}</h3>
                        <p>ID: {user.id}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                        <p><strong>Company:</strong> {user.company?.name}</p>
                        <p><strong>Address:</strong> {user.address?.suite}, {user.address?.street}, {user.address?.city}</p>
                    </div>
                ))}
            </ul>
        </>
    )
}