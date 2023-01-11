//Nedan kod fungerar på samma vis som filen Co2.jsx som har blivit utförligt kommenterad steg för steg.
//För att inte behöva sitta och bara kopiera över kommenrarer så hänvisar vi till den sidan för kodkommentarer samt att denna information även skrivits in i kodrapporten. 

import "./Sea.css";
import "../ThemePopup/ThemePopup.css"
import { getSeaData2 } from '../../DiagramData';
import { getInformationData } from '../../DiagramData';

import { useState } from "react";
import ReactPlayer from "react-player";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const Sea = () => {

  const seadata2 = getSeaData2();
  const data2 = getInformationData();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (

    <div className="container diagramPadding">
         {data2
           .filter((arrayID) => arrayID.id === "3")
           .map((arrayData) => (
             <div key={arrayData.title}>
               <h1 style={{ color: arrayData.headingcolor }} className="bigHeading">
                 {arrayData.title}{" "}
               </h1>
               <p className="smallHeading diagramHeading" style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>
    
               <div className="popupGrid">
                 <div className="topLeftGrid"> 
                 <LineChart
                      width={1024}
                      height={400}
                      data={seadata2}
                      margin={{
                        top: 5,
                        bottom: 5,
                        left: -15,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="Time" />
                      <YAxis />
                      <Tooltip contentStyle={{ color: "#DA07F6"}} itemStyle={{ color: "black"}} wrapperStyle={{ backgroundColor: "black" }} labelStyle={{color: "black"}} />
                      <Legend  />
    
                      <Line
                        type="monotone"
                        dataKey="Global medel havsnivå"
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
                     <div >
                       <ReactPlayer
                         url= "https://youtu.be/-IVjPsrmZns"
                  
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

export default Sea;


