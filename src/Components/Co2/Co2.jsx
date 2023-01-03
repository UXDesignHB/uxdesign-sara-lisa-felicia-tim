import "./Co2.css";
import "../ThemePopup/ThemePopup.css"

import { getCo2Data2 } from '../../DiagramData';
import { getInformationData } from '../../DiagramData';




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
import { color } from "@mui/system";


const Co2 = () => {

  const co2Data2 = getCo2Data2();
  const data2 = getInformationData();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  //this gets the lastname from form
  const [message, setMessage] = useState("Total");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container">
      {data2
        .filter((arrayID) => arrayID.id === "2")
        .map((arrayData) => (
          <div key={arrayData.title}>
            <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
              {arrayData.title}{" "}
            </h1>
            <p className="smallHeading" style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>

            <div className="popupGrid">
              <div className="topLeftGrid">
                <LineChart
                  width={980}
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

                <p>
                  Data: GISS Surface Temperature (GISTEMP) analys och den
                  globala komponenten av Climate at a Glance (GCAG).
                </p>
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
          </div>
        ))}
    </div>
  );
};

export default Co2;
