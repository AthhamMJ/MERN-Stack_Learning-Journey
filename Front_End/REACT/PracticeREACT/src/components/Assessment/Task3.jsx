import { useContext, useState , createContext} from "react";

export const StudentContext = createContext();

function Student(){
    const student = useContext(StudentContext);

    if(!student) return null;

    return(
        <div>
            <h2>Student Card (Context Data)</h2>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>Batch: {student.batch}</p>
        </div>
    )
}

function Home() {
    return(
        <div>
            <h3>Home Section</h3>
            <Student />
        </div>
    )
}

export default function Task3(){
    const[student, setStudent] = useState({
        name: "Athham",
        course: "Full Stack Development",
        batch: "Cohort 2"
    })


const onChange = (e) =>{
    setStudent({
        ...student,
        [e.student.name] : [e.student.value]
    })
}

return(
    <StudentContext.Provider value={student}>
        <h1>Student Infomation App</h1>
        <div>
            <label>Name: </label>
            <input type="text" name="name" value={student.name} onChange={onChange} /><br /><br />

            <label>Course: </label>
            <input type="text" name="course" value={student.course} onChange={onChange} /><br /><br />

            <label>Batch: </label>
            <input type="text" name="batch" value={student.batch} onChange={onChange} /><br /><br />
        </div>
        <div>
            <Home></Home>
        </div>
    </StudentContext.Provider>
)
}