import { useState } from 'react';
import lewis from '../../assets/lewis.png';
import { FileX } from 'lucide-react';

export default function Learn(props) {
  const { students } = props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ferrari")
  const [color, setColor] = useState("yellow")

  return (
    <div>
      {students.map((student) => (
        <div key={student.name} style={style.box}>
          <div>
            <img src={lewis} style={{ width: '200px', height: '200px', borderRadius: '28px'}}/>
          </div>
          <h1>Name: {student.name}</h1>
          <h2 style={style.name}>Age: {student.age}</h2>
          <h2>Points: {count}</h2>
          <h2>Team: {name}</h2>
          <button style={style.button} onClick={() => console.log(student.name)}>Name</button>
          <button style={style.button} onClick={() => setCount(count+1)}>Points</button>
          <button style={style.button} onClick={() => setCount(count-1)}>Points-Minus</button>
          <button style={style.button} onClick={() => setName("AMG")}>Change-Team</button>
          <button style={{backgroundColor:color}} onClick={() => setColor("red")}>Color</button>
        </div>
      ))}
    </div>
  );
}

const style = {
    box:{
        display: "flex",
        flexDirection: "column",
        margin: "100px",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "28px",
        height: "auto",
        width: "300px",
        padding: "50px",

        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",

        backDropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)"
    },
    button: {
        margin: "10px",
        borderRadius: "28px",
        height: "40px",
        width: "100px",
        backgroundColor: "red",
        color: "white",
        border: "none"
    },
    name:{
      width: "400px"
    }
}