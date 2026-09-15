import lewis from '../../assets/lewis.png';

export default function Learn(props) {
   const { students } = props

  return (
    <div>
      {students.map((student) => (
        <div key={student.name} style={style.box}>
          <img src={lewis} style={{ width: '100%', height: 'auto', borderRadius: '28px'}}/>
          <h1>{student.name}</h1>
          <h2>{student.age}</h2>
        </div>
      ))}
    </div>
  );
}

const style = {
    box:{
        margin: "100px",
        backgroundColor:"rgba(255, 0, 0, 0.5)",
        borderRadius: "28px",
        height: "350px",
        width: "250px",
        padding: "50px"
    },
} 