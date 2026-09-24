// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/ferrari/Home';
// import OnChange from './components/form/Onchange';
import Task1 from './components/Assessment/Task1';
import Task2 from './components/Assessment/Task2';
import Task3 from './components/Assessment/Task3';
import Task4 from './components/Assessment/Task4';
import Task5 from './components/Assessment/Task5';
import Task6 from './components/Assessment/Task6';
import Task7 from './components/Assessment/Task7';
// import Understand from './components/hooks/US';
// import UE from './components/hooks/UE'
// import API from './components/API/API';

function App() {
  return (
    <div>
      <Task1></Task1>
      <Task2></Task2>
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
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
