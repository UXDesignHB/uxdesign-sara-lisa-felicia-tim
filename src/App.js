import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Tips from "./Components/Tips/Tips";
import QandA from "./Components/QandA/QandA";
import Diagram from './Components/Diagram/Diagram';
import Menu from "./Components/Menu/Menu";
import ThemePopup from "./Components/ThemePopup/ThemePopup";




const data = [
  {
    id: "1",
    title: "Smältande Glaciärer",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)",
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#EC8394",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit.",
  },
  {
    id: "2",
    title: "CO2-Utsläpp",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)",
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#B29BCA",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit."
  },
  {
    id: "3",
    title: "Stigande havsnivåer",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)", 
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#A8DAEA",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit."
  },
  {
    id: "4",
    title: "Global uppvärming",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)",
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#F1C454",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit."
  
  },
  {
    id: "5",
    title: "Vad kan jag göra",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)",
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#A8DAEA",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit."
  },
  {
    id: "6",  
    title: "Vad kan jag om klimatförändringar",
    subtitle: "TEMPERATURFÖRÄNDRINGAR (1880-2016)",
    graphtitle: "NU ÄR DET VARMARE ÄN NÅGONSIN",
    textcolor: "#A8DAEA",
    graphtext: "Jordens temperatur har stigit med 0,14 ° Fahrenheit (0,08 ° Celsius) per decennium sedan 1880, men uppvärmningshastigheten sedan 1981 är mer än dubbelt så stor: 0,32 ° F (0,18 ° C) per decennium. År 2021 var det sjätte varmaste året någonsin baserat på temperaturdata. I genomsnitt över land och hav var yttemperaturen 2021 1,51 °F (0,84 °C) varmare än 1900-talets genomsnitt på 57,0 °F (13,9 °C) och 1,87 ˚F (1,04 ˚C) varmare än den förindustriella period (1880-1900). De nio åren från 2013 till 2021 rankas bland de 10 varmaste åren någonsin.",
    videotitle: "VISUALITION ÖVER GLOBALA TEMPERATURAVVIKELSER",
    videotext: "Denna färgkodade karta i Robinson-projektion visar en utveckling av förändrade globala yttemperatur-avvikelser. Normala temperaturer visas i vitt. Högre än normala temperaturer visas i rött och lägre än normala temperaturer visas i blått. Normala temperaturer beräknas över den 30-åriga baslinjeperioden 1951-1980. Den sista ramen representerar de 5-åriga globala temperaturavvikelserna från 2017-2021. Skala i grader Fahrenheit."
  },
];



function App() {
  return (
    <div className="App">
  
  <Menu/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/fragor" element={<QandA />} />
        <Route path="/smaltande-glaciarer" element= { <ThemePopup data={data} /> } />
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
