// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/ferrari/Home';
// import OnChange from './components/form/Onchange';
// import Task1 from './components/Assessment/Task1';
// import Task2 from './components/Assessment/Task2';
// import Task3 from './components/Assessment/Task3';
// import Task4 from './components/Assessment/Task4';
// import Task5 from './components/Assessment/Task5';
// import Task6 from './components/Assessment/Task6';
// import Task7 from './components/Assessment/Task7';

// import Task8 from './components/Calc/Task8'
// import Practice from "./components/API/Practice";
// import Practice2 from "./components/API/Practice2";
import USStyle from './components/hooks/USStyle'

// import Understand from './components/hooks/US';
// import UE from './components/hooks/UE'
// import API from './components/API/API';

function App() {

  const colors = [
    { id: 1, colour: 'red' },
    { id: 2, colour: 'blue' },
    { id: 3, colour: 'green' },
    { id: 4, colour: 'black' },
    { id: 5, colour: 'yellow' },
    { id: 6, colour: 'orange' },
    { id: 7, colour: 'purple' },
    { id: 8, colour: 'pink' },
    { id: 9, colour: 'brown' },
    { id: 10, colour: 'gray' },
    { id: 11, colour: 'cyan' },
    { id: 12, colour: 'magenta' },
    { id: 13, colour: 'lime' },
    { id: 14, colour: 'navy' },
    { id: 15, colour: 'teal' },
    { id: 16, colour: 'gold' },
    { id: 17, colour: 'silver' },
    { id: 18, colour: 'coral' },
    { id: 19, colour: 'maroon' },
    { id: 20, colour: 'indigo' },
    { id: 21, colour: 'violet' },
    { id: 22, colour: 'turquoise' },
    { id: 23, colour: 'olive' },
    { id: 24, colour: 'crimson' }
]

  return (
    <div>
      {/* <Task1></Task1>
      <Task2></Task2>
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 /> 
      <Task8 />
      <Practice />
      <Practice2 />*/}
      <USStyle colors = {colors}/>
    </div>

    //   {/* Routing definition */}
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/onchange" element={<OnChange />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
