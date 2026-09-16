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

const students = ([
    {
      name: "Athham",
      age: 20
    },
    {
      name: "Max",
      age: 28
    },
    {
      name: "Chalres",
      age: 28
    },
    {
      name: "Lewis",
      age: 41
    },
    {
      name: "Kimi",
      age: 20
    }
  ])

function App() {
  return (
    // <div className="App">
    //   <Home img={charles} name="Charles Leclerc" number={16}></Home>
    //   <Home img={lewis} name="Lewis Hamilton" number={44}></Home>
    //   <Home img={max} name="Max Verstappen"></Home>
    // </div>
    <div>
      <Learn students ={students}></Learn>
    </div>
  );
}

export default App;
