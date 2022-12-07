import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Tips from "./Components/Tips/Tips";
import QandA from "./Components/QandA/QandA";
import Diagram from './Components/Diagram/Diagram';
import Menu from "./Components/Menu/Menu";


function App() {
  return (
    <div className="App">
  
  <Menu/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/fragor" element={<QandA />} />
        <Route path="/smaltande-glaciarer" element="" />
        <Route path="/stigande-havsnivaer" element="" />
        <Route path="/co2-utslapp" element="" />
        <Route path="/global-uppvarming" element="" />
        <Route path="/diagram" element={<Diagram/>} />
      </Routes>
      
      <Link to="/fragor">
        <button>Frågor</button>
      </Link>
      <Link to="/tips">
        <button>Tips</button>
      </Link>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <Link to="/diagram">
        <button>Diagram</button>
      </Link>

    </div>
  );
}

export default App;
