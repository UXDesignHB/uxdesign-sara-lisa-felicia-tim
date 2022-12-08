import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Tips from "./Components/Tips/Tips";
import QandA from "./Components/QandA/QandA";
import Diagram from './Components/Diagram/Diagram';
import Menu from "./Components/Menu/Menu";

import useLocalStorage from 'use-local-storage'

import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

import ThemePopup from "./Components/ThemePopup/ThemePopup";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



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

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');
const switchTheme = () => {
const newTheme = theme === 'dark' ? 'light' : 'dark';
setTheme(newTheme);
}

  return (
    <div className="App" data-theme={theme}>
  
  <div className='appNavBar'>
  <Menu/>

  <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        // label="MUI switch"
        onClick={switchTheme} 
        title="Dark mode"
      />
    
  </div>

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
  
    </div>
  );
}

export default App;
