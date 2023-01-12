//Importerar css från ThemePopup
import "../ThemePopup/ThemePopup.css"
//Importerar CO2 datan från DiagramData till diagram
import { getCo2Data2 } from '../../DiagramData';
//Importerar datan för texterna från DiagramData till diagram
import { getInformationData } from '../../DiagramData';
//useState används till videospelaren
import { useState } from "react";
//npm paket som importeras för att visa videoklipp
import ReactPlayer from "react-player";
//Importerar för input select från MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//Importerar react
import * as React from "react";

//Importerar från rechart för diagrammen. 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Co2 = () => {
  //Här hämtas datan från import genom en const
  const co2Data2 = getCo2Data2();
  const data2 = getInformationData();
  //Här sätts state för video
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  //Här kommer onChange från input select in för att välja vilken data som skall visas i diagrammen.
  const [message, setMessage] = useState("Total");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    //nedan hämtas datan från Diagramdata.jsx och filtreras baserat på ID. Här skrivs informationen på sidan ut.
    <div className="container diagramPadding">
      {data2
        .filter((arrayID) => arrayID.id === "2")
        .map((arrayData) => (
          <div key={arrayData.title}>
            <h1 style={{ color: arrayData.headingcolor }} className="bigHeading">
              {arrayData.title}{" "}
            </h1>
            <p className="smallHeading diagramHeading" style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>

            {/* Nedan ligger input selecten som används för att välja vilken data som visas i diagrammen. Detta görs genom en onChange funktion som ändrar värdet i diagrammet.  */}
            <FormControl className="form">
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
                    value={message}
                    label="Co2 Utsläpp"
                    onChange={handleChange}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <MenuItem style={{ color: "black" }} value="Cement">
                      Cement
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Gas Flaring">
                      Gas Flaring
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Gas Fuel">
                      Gas Fuel
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Liquid Fuel">
                      Liquid Fuel
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Solid Fuel">
                      Solid Fuel
                    </MenuItem>
                    <MenuItem style={{ color: "black" }} value="Total">
                      Total
                    </MenuItem>
                  </Select>
                </FormControl>

            <div className="popupGrid">
              <div className="topLeftGrid">

                {/* Nedan finns diagrammet. Datan kommer från json filen som ligger i Diagramdata och vilken av datan som visas görs genom input select ovan */}
                <LineChart
                  width={1024}
                  height={400}
                  data={co2Data2}
                  margin={{
                    top: 5,
                    bottom: 5,
                    left: -15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <Tooltip contentStyle={{ color: "#DA07F6"}} itemStyle={{ color: "black"}} wrapperStyle={{ backgroundColor: "black" }} labelStyle={{color: "black"}}  />
                  <Legend />

                  <Line
                    type="monotone"
                    dataKey={message}
                    stroke={arrayData.textcolor}
                  />
                </LineChart>
          

       
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
                  <div>
                    {/* Här används npm paketet ReactPlayer för att spela upp loopade videoklipp från ett youtube klipp*/}
                    <ReactPlayer
                      url="https://youtu.be/AyszFPGbu2s"
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
            <p>
            {arrayData.dataSource}
                </p>
          </div>
        ))}
    </div>
  );
};

export default Co2;
