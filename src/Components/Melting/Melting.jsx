import "./Melting.css";

import Vid from "../../Images/StigandeHavsniva.mp4";
import { useState } from "react";
import ReactPlayer from "react-player";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const meltingdata = [
  
{
  "Genomsnittlig kumulativ massbalans": 0.0,
  "Antal observationer": null,
  År: 1945,
  },
  {
  "Genomsnittlig kumulativ massbalans": -1.13,
  "Antal observationer": 1.0,
  År: 1946,
  },
  {
  "Genomsnittlig kumulativ massbalans": -3.19,
  "Antal observationer": 1.0,
  År: 1947,
  },
  {
  "Genomsnittlig kumulativ massbalans": -3.19,
  "Antal observationer": 1.0,
  År: 1948,
  },
  {
  "Genomsnittlig kumulativ massbalans": -3.82,
  "Antal observationer": 3.0,
  År: 1949,
  },
  {
  "Genomsnittlig kumulativ massbalans": -4.887,
  "Antal observationer": 3.0,
  År: 1950,
  },
  {
  "Genomsnittlig kumulativ massbalans": -5.217,
  "Antal observationer": 3.0,
  År: 1951,
  },
  {
  "Genomsnittlig kumulativ massbalans": -5.707,
  "Antal observationer": 3.0,
  År: 1952,
  },
  {
  "Genomsnittlig kumulativ massbalans": -6.341,
  "Antal observationer": 7.0,
  År: 1953,
  },
  {
  "Genomsnittlig kumulativ massbalans": -6.825,
  "Antal observationer": 6.0,
  År: 1954,
  },
  {
  "Genomsnittlig kumulativ massbalans": -6.575,
  "Antal observationer": 7.0,
  År: 1955,
  },
  {
  "Genomsnittlig kumulativ massbalans": -6.814,
  "Antal observationer": 7.0,
  År: 1956,
  },
  {
  "Genomsnittlig kumulativ massbalans": -6.989,
  "Antal observationer": 9.0,
  År: 1957,
  },
  {
  "Genomsnittlig kumulativ massbalans": -7.693,
  "Antal observationer": 9.0,
  År: 1958,
  },
  {
  "Genomsnittlig kumulativ massbalans": -8.325,
  "Antal observationer": 11.0,
  År: 1959,
  },
  {
  "Genomsnittlig kumulativ massbalans": -8.688,
  "Antal observationer": 14.0,
  År: 1960,
  },
  {
  "Genomsnittlig kumulativ massbalans": -8.935,
  "Antal observationer": 15.0,
  År: 1961,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.109,
  "Antal observationer": 20.0,
  År: 1962,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.567,
  "Antal observationer": 22.0,
  År: 1963,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.699,
  "Antal observationer": 22.0,
  År: 1964,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.298,
  "Antal observationer": 24.0,
  År: 1965,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.436,
  "Antal observationer": 27.0,
  År: 1966,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.303,
  "Antal observationer": 29.0,
  År: 1967,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.219,
  "Antal observationer": 31.0,
  År: 1968,
  },
  {
  "Genomsnittlig kumulativ massbalans": -9.732,
  "Antal observationer": 31.0,
  År: 1969,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.128,
  "Antal observationer": 32.0,
  År: 1970,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.288,
  "Antal observationer": 32.0,
  År: 1971,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.441,
  "Antal observationer": 32.0,
  År: 1972,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.538,
  "Antal observationer": 32.0,
  År: 1973,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.613,
  "Antal observationer": 32.0,
  År: 1974,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.534,
  "Antal observationer": 33.0,
  År: 1975,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.633,
  "Antal observationer": 35.0,
  År: 1976,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.682,
  "Antal observationer": 37.0,
  År: 1977,
  },
  {
  "Genomsnittlig kumulativ massbalans": -10.754,
  "Antal observationer": 37.0,
  År: 1978,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.127,
  "Antal observationer": 37.0,
  År: 1979,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.318,
  "Antal observationer": 36.0,
  År: 1980,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.394,
  "Antal observationer": 35.0,
  År: 1981,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.849,
  "Antal observationer": 36.0,
  År: 1982,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.846,
  "Antal observationer": 37.0,
  År: 1983,
  },
  {
  "Genomsnittlig kumulativ massbalans": -11.902,
  "Antal observationer": 37.0,
  År: 1984,
  },
  {
  "Genomsnittlig kumulativ massbalans": -12.238,
  "Antal observationer": 37.0,
  År: 1985,
  },
  {
  "Genomsnittlig kumulativ massbalans": -12.782,
  "Antal observationer": 37.0,
  År: 1986,
  },
  {
  "Genomsnittlig kumulativ massbalans": -12.795,
  "Antal observationer": 37.0,
  År: 1987,
  },
  {
  "Genomsnittlig kumulativ massbalans": -13.26,
  "Antal observationer": 37.0,
  År: 1988,
  },
  {
  "Genomsnittlig kumulativ massbalans": -13.343,
  "Antal observationer": 37.0,
  År: 1989,
  },
  {
  "Genomsnittlig kumulativ massbalans": -13.687,
  "Antal observationer": 37.0,
  År: 1990,
  },
  {
  "Genomsnittlig kumulativ massbalans": -14.255,
  "Antal observationer": 37.0,
  År: 1991,
  },
  {
  "Genomsnittlig kumulativ massbalans": -14.501,
  "Antal observationer": 36.0,
  År: 1992,
  },
  {
  "Genomsnittlig kumulativ massbalans": -14.695,
  "Antal observationer": 37.0,
  År: 1993,
  },
  {
  "Genomsnittlig kumulativ massbalans": -15.276,
  "Antal observationer": 37.0,
  År: 1994,
  },
  {
  "Genomsnittlig kumulativ massbalans": -15.486,
  "Antal observationer": 37.0,
  År: 1995,
  },
  {
  "Genomsnittlig kumulativ massbalans": -15.89,
  "Antal observationer": 37.0,
  År: 1996,
  },
  {
  "Genomsnittlig kumulativ massbalans": -16.487,
  "Antal observationer": 37.0,
  År: 1997,
  },
  {
  "Genomsnittlig kumulativ massbalans": -17.31,
  "Antal observationer": 37.0,
  År: 1998,
  },
  {
  "Genomsnittlig kumulativ massbalans": -17.697,
  "Antal observationer": 37.0,
  År: 1999,
  },
  {
  "Genomsnittlig kumulativ massbalans": -17.727,
  "Antal observationer": 37.0,
  År: 2000,
  },
  {
  "Genomsnittlig kumulativ massbalans": -18.032,
  "Antal observationer": 37.0,
  År: 2001,
  },
  {
  "Genomsnittlig kumulativ massbalans": -18.726,
  "Antal observationer": 37.0,
  År: 2002,
  },
  {
  "Genomsnittlig kumulativ massbalans": -19.984,
  "Antal observationer": 37.0,
  År: 2003,
  },
  {
  "Genomsnittlig kumulativ massbalans": -20.703,
  "Antal observationer": 37.0,
  År: 2004,
  },
  {
  "Genomsnittlig kumulativ massbalans": -21.405,
  "Antal observationer": 37.0,
  År: 2005,
  },
  {
  "Genomsnittlig kumulativ massbalans": -22.595,
  "Antal observationer": 37.0,
  År: 2006,
  },
  {
  "Genomsnittlig kumulativ massbalans": -23.255,
  "Antal observationer": 37.0,
  År: 2007,
  },
  {
  "Genomsnittlig kumulativ massbalans": -23.776,
  "Antal observationer": 37.0,
  År: 2008,
  },
  {
  "Genomsnittlig kumulativ massbalans": -24.459,
  "Antal observationer": 37.0,
  År: 2009,
  },
  {
  "Genomsnittlig kumulativ massbalans": -25.158,
  "Antal observationer": 37.0,
  År: 2010,
  },
  {
  "Genomsnittlig kumulativ massbalans": -26.294,
  "Antal observationer": 37.0,
  År: 2011,
  },
  {
  "Genomsnittlig kumulativ massbalans": -26.93,
  "Antal observationer": 36.0,
  År: 2012,
  },
  {
  "Genomsnittlig kumulativ massbalans": -27.817,
  "Antal observationer": 31.0,
  År: 2013,
  },
  {
  "Genomsnittlig kumulativ massbalans": -28.652,
  "Antal observationer": 24.0,
  År: 2014,
  },
];

const Melting = ({ data }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const [message1, setMessage1] = useState("");
  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };


  return (

    <div className="container">
         {data
           .filter((arrayID) => arrayID.id === "1")
           .map((arrayData) => (
             <div key={arrayData.title}>
               <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
                 {arrayData.title}{" "}
               </h1>
               <p className="smallHeading" style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>
    
               <div className="popupGrid">
                 <div className="topLeftGrid">
                 <LineChart
                      width={490}
                      height={400}
                      data={meltingdata}
                      margin={{
                        top: 5,
                        bottom: 5,
                        left: -15,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="År" />
                      <YAxis />
                      <Tooltip  contentStyle={{ color: "#DA07F6"}} itemStyle={{ color: "black"}} wrapperStyle={{ backgroundColor: "black" }} labelStyle={{color: "black"}}   />
                      <Legend />
    
                      <Line
                        type="monotone"
                        dataKey={message1}
                        stroke={arrayData.textcolor}
                      />
    
                   
                    </LineChart>

                    <FormControl fullWidth>
                  <InputLabel
                    style={{ color: arrayData.textcolor }}
                    id="demo-simple-select-label"
                  >
                    {" "}
                    Välj{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={message1}
                    label="Co2 Utsläpp"
                    onChange={handleChange1}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <MenuItem style={{ color: "black" }} value="Genomsnittlig kumulativ massbalans">
                    Genomsnittlig kumulativ massbalans
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Antal observationer">
                    Antal observationer
                    </MenuItem>
          
                  </Select>
                </FormControl>
                   <p>
                     Data: GISS Surface Temperature (GISTEMP) analys och den
                     globala komponenten av Climate at a Glance (GCAG).
                   </p>
                 </div>
                 <div className="topRightGrid">
                   <p className="smallHeading">
                     <b style={{ color: arrayData.textcolor }}>
                       {arrayData.graphtitle}
                     </b>
                   </p>
                   <p>{arrayData.graphtext}</p>
                 </div>
                 <div className="bottomLeftGrid">
                   <p className="smallHeading">
                     <b style={{ color: arrayData.textcolor }}>
                       {arrayData.videotitle}
                     </b>
                   </p>
                   <p>{arrayData.videotext}</p>
                 </div>
                 <div className="bottomRightGrid">
                   <div className="vidcontainer">
                     <div >
                       <ReactPlayer
                         url= "https://youtu.be/hUjRhwpcdiI"
                  
                         playing={true}
                         // controls={true}
                         loop={true}
                         muted={true}
                          playsinline={true}
                         onReady={onLoadedData}
                         width="100%"
                       />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           ))}
       </div>
   
  );
};

export default Melting;


