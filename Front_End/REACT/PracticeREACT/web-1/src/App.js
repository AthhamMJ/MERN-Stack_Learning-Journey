import logo from './logo.svg';
import './App.css';
import Learn from './components/props/Learn';
// import Nav from './components/ferrari/Nav';
// import Home from './components/ferrari/Home';
// import Text from './components/ferrari/Text';
// import Home from './components/styling/Home';
// import charles from './assets/charles.png';
// import lewis from './assets/lewis.png';
// import max from './assets/max.jpeg';
// import Hooks from './components/Input/Hooks'
import OnChange from './components/form/Onchange';
import Task1 from './components/Assessment/Task1';
import Task2 from './components/Assessment/Task2';
import Task3 from './components/Assessment/Task3';

const students = [
  {
    id: 1,
    name: "Athham",
    age: 20,
    points: 0
  },
  {
    id: 2,
    name: "Max",
    age: 28,
    points: 0
  },
  {
    id: 3,
    name: "Charles",
    age: 28,
    points: 0
  },
  {
    id: 4,
    name: "Lewis",
    age: 41,
    points: 0
  },
  {
    id: 5,
    name: "Kimi",
    age: 20,
    points: 0
  }
];

function App() {
  return (
    // <div className="App">
    //   <Home img={charles} name="Charles Leclerc" number={16}></Home>
    //   <Home img={lewis} name="Lewis Hamilton" number={44}></Home>
    //   <Home img={max} name="Max Verstappen"></Home>
    // </div>
    // <>
    //   <Learn students={students} />
    //   <OnChange></OnChange>
    // </>

    <>
    <Task1></Task1>
    <Task2></Task2>
    <Task3></Task3>
    </>
    
  );
}

export default App;