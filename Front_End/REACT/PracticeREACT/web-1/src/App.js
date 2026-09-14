import logo from './logo.svg';
import './App.css';
// import Nav from './components/ferrari/Nav';
// import Home from './components/ferrari/Home';
// import Text from './components/ferrari/Text';
import Home from './components/styling/Home';
import charles from './assets/charles.png';
import lewis from './assets/lewis.png';
import max from './assets/max.jpeg';

function App() {
  return (
    <div className="App">
      <Home img={charles} name="Charles Leclerc"></Home>
      <Home img={lewis} name="Lewis Hamilton"></Home>
      <Home img={max} name="Max Verstappen"></Home>
    </div>
  );
}

export default App;
