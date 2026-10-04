import { useState, useEffect } from "react";

export default function Practice2() {

    const [result, setResult] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${result}`)
            .then((response) => response.json())
            .then((json) => setItems(json))
    }, [result])
    

    return(
        <div>
            <button onClick={() => {setResult('posts')}}>posts</button>
            <button onClick={() => {setResult('users')}}>users</button>
            <button onClick={()=> {setResult('comments')}}>comments</button>
            <h2>{result}</h2>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}