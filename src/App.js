import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Tips from "./Components/Tips/Tips";
import QandA from "./Components/QandA/QandA";

function App() {
  return (
    <div className="App">
  

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/fragor" element={<QandA />} />
        <Route path="/smaltande-glaciarer" element="" />
        <Route path="/stigande-havsnivaer" element="" />
        <Route path="/co2-utslapp" element="" />
        <Route path="/global-uppvarming" element="" />
      </Routes>

    
    </div>
  );
}

export default App;
