import "./Melting.css";
import "../ThemePopup/ThemePopup.css";

import { getMeltingData2 } from "../../DiagramData";
import { getInformationData } from "../../DiagramData";

import { useState } from "react";
import ReactPlayer from "react-player";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/Select";
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

const Melting = () => {
  const meltingdata2 = getMeltingData2();
  const data2 = getInformationData();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const [message1, setMessage1] = useState("Antal observationer");
  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };

  let defaultValue = "Antal observationer";

  return (
    <div className="container">
      {data2
        .filter((arrayID) => arrayID.id === "1")
        .map((arrayData) => (
          <div key={arrayData.title}>
            <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
              {arrayData.title}{" "}
            </h1>
            <p className="smallHeading" style={{ color: arrayData.textcolor }}>
              {arrayData.subtitle}
            </p>

            <div className="popupGrid">
              <div className="topLeftGrid">
                <LineChart
                  width={980}
                  height={400}
                  data={meltingdata2}
                  margin={{
                    top: 5,
                    bottom: 5,
                    left: -15,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="År" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{ color: "#DA07F6" }}
                    itemStyle={{ color: "black" }}
                    wrapperStyle={{ backgroundColor: "black" }}
                    labelStyle={{ color: "black" }}
                  />
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
                  <NativeSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={message1}
                    label="Co2 Utsläpp"
                    onChange={handleChange1}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <MenuItem
                      style={{ color: "black" }}
                      value="Genomsnittlig kumulativ massbalans"
                    >
                      Genomsnittlig kumulativ massbalans
                    </MenuItem>
                    <MenuItem
                      style={{ color: "black" }}
                      value="Antal observationer"
                    >
                      Antal observationer
                    </MenuItem>
                  </NativeSelect>

                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  ></InputLabel>
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
                      url="https://youtu.be/hUjRhwpcdiI"
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
