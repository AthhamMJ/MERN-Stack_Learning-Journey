import { useState } from "react"
import '../form/style.css'


export default function Onchange(){

    const[name, setname] = useState("")
    const[age, setage] = useState(null)
    const[gender, setgender] = useState("")
    const[address, setaddress] = useState("")
    const[phoneno, setphoneno] = useState("")
    const[feedback, setfeedback] = useState("")

    const handleClick =(event) => {
        // to prevent the event from the page Refresh
        event.preventDefault();

        console.log({name})
        console.log({age})
        console.log({address})
        console.log({gender})
        console.log({phoneno})
        console.log({feedback})
    }
   return(
     <>
        <form>
            <h1>Application Form</h1>

            <label>Name:</label>
            <input 
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(event)=>setname(event.target.value)}
             ></input><br />

             <label>Address:</label>
             <input 
                type="text"
                placeholder="Enter your Address"
                value={address}
                onChange={(event)=>setaddress(event.target.value)}
             ></input><br />

             <label>Age:</label>
             <input 
                type="number"
                placeholder="Enter your Age"
                value={age}
                onChange={(event)=>setage(event.target.value)}
             ></input><br />

             <label>Gender:</label><br />
             <div>
                Male:<input 
                    type="radio"
                    value={gender}
                    onChange={(event)=>setgender(event.target.value)}
                ></input><br />
                Female:<input 
                    type="radio"
                    value={gender}
                    onChange={(event)=>setgender(event.target.value)}
                ></input><br />
             </div>
             <label>Phone No:</label>
                <input 
                    type="tel"
                    placeholder="Enter your Contact Number"
                    value={phoneno}
                    onChange={(event)=>setphoneno(event.target.value)}
                ></input><br />

                <label>FeedBack</label>
                <input 
                    type="text"
                    placeholder="Tell us Your FeedBack"
                    value={feedback}
                    onChange={(event)=>setfeedback(event.target.value)}
                ></input><br /><br />
            <div className="row">
                <button className="submit" type="submit" onClick={handleClick}>SUBMIT</button>
                <button className="clear" type="reset">CLEAR</button>
            </div>
        </form>
    </>
   )
}
