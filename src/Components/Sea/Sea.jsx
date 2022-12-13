import "./Sea.css";

import Vid from "../../Images/StigandeHavsniva.mp4";
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

const seadata = [
  { "Global medel havsnivå": -158.7, "Global medel havsnivå uncertainty": 24.2, "Time": "1880-03-15" },
  { "Global medel havsnivå": -153.1, "Global medel havsnivå uncertainty": 24.2, "Time": "1881-03-15" },
  { "Global medel havsnivå": -169.9, "Global medel havsnivå uncertainty": 23.0, "Time": "1882-03-15" },
  { "Global medel havsnivå": -164.6, "Global medel havsnivå uncertainty": 22.8, "Time": "1883-03-15" },
  { "Global medel havsnivå": -143.7, "Global medel havsnivå uncertainty": 22.2, "Time": "1884-03-15" },
  { "Global medel havsnivå": -145.2, "Global medel havsnivå uncertainty": 21.9, "Time": "1885-03-15" },
  { "Global medel havsnivå": -147.6, "Global medel havsnivå uncertainty": 20.8, "Time": "1886-03-15" },
  { "Global medel havsnivå": -153.2, "Global medel havsnivå uncertainty": 20.8, "Time": "1887-03-15" },
  { "Global medel havsnivå": -151.1, "Global medel havsnivå uncertainty": 20.8, "Time": "1888-03-15" },
  { "Global medel havsnivå": -149.5, "Global medel havsnivå uncertainty": 20.8, "Time": "1889-03-15" },
  { "Global medel havsnivå": -147.5, "Global medel havsnivå uncertainty": 20.7, "Time": "1890-03-15" },
  { "Global medel havsnivå": -149.2, "Global medel havsnivå uncertainty": 20.7, "Time": "1891-03-15" },
  { "Global medel havsnivå": -146.0, "Global medel havsnivå uncertainty": 20.7, "Time": "1892-03-15" },
  { "Global medel havsnivå": -141.3, "Global medel havsnivå uncertainty": 20.3, "Time": "1893-03-15" },
  { "Global medel havsnivå": -151.0, "Global medel havsnivå uncertainty": 21.6, "Time": "1894-03-15" },
  { "Global medel havsnivå": -139.2, "Global medel havsnivå uncertainty": 21.6, "Time": "1895-03-15" },
  { "Global medel havsnivå": -146.8, "Global medel havsnivå uncertainty": 21.2, "Time": "1896-03-15" },
  { "Global medel havsnivå": -141.6, "Global medel havsnivå uncertainty": 20.8, "Time": "1897-03-15" },
  { "Global medel havsnivå": -132.2, "Global medel havsnivå uncertainty": 19.7, "Time": "1898-03-15" },
  { "Global medel havsnivå": -124.7, "Global medel havsnivå uncertainty": 19.4, "Time": "1899-03-15" },
  { "Global medel havsnivå": -130.1, "Global medel havsnivå uncertainty": 18.3, "Time": "1900-03-15" },
  { "Global medel havsnivå": -130.5, "Global medel havsnivå uncertainty": 17.6, "Time": "1901-03-15" },
  { "Global medel havsnivå": -125.9, "Global medel havsnivå uncertainty": 17.3, "Time": "1902-03-15" },
  { "Global medel havsnivå": -117.9, "Global medel havsnivå uncertainty": 17.0, "Time": "1903-03-15" },
  { "Global medel havsnivå": -128.2, "Global medel havsnivå uncertainty": 16.9, "Time": "1904-03-15" },
  { "Global medel havsnivå": -133.7, "Global medel havsnivå uncertainty": 15.4, "Time": "1905-03-15" },
  { "Global medel havsnivå": -126.9, "Global medel havsnivå uncertainty": 14.7, "Time": "1906-03-15" },
  { "Global medel havsnivå": -128.3, "Global medel havsnivå uncertainty": 14.9, "Time": "1907-03-15" },
  { "Global medel havsnivå": -130.8, "Global medel havsnivå uncertainty": 14.5, "Time": "1908-03-15" },
  { "Global medel havsnivå": -126.3, "Global medel havsnivå uncertainty": 14.6, "Time": "1909-03-15" },
  { "Global medel havsnivå": -126.4, "Global medel havsnivå uncertainty": 14.6, "Time": "1910-03-15" },
  { "Global medel havsnivå": -118.1, "Global medel havsnivå uncertainty": 14.2, "Time": "1911-03-15" },
  { "Global medel havsnivå": -121.2, "Global medel havsnivå uncertainty": 14.2, "Time": "1912-03-15" },
  { "Global medel havsnivå": -119.4, "Global medel havsnivå uncertainty": 14.1, "Time": "1913-03-15" },
  { "Global medel havsnivå": -113.1, "Global medel havsnivå uncertainty": 13.8, "Time": "1914-03-15" },
  { "Global medel havsnivå": -105.2, "Global medel havsnivå uncertainty": 13.6, "Time": "1915-03-15" },
  { "Global medel havsnivå": -107.1, "Global medel havsnivå uncertainty": 13.0, "Time": "1916-03-15" },
  { "Global medel havsnivå": -111.6, "Global medel havsnivå uncertainty": 12.8, "Time": "1917-03-15" },
  { "Global medel havsnivå": -113.2, "Global medel havsnivå uncertainty": 12.7, "Time": "1918-03-15" },
  { "Global medel havsnivå": -111.6, "Global medel havsnivå uncertainty": 12.7, "Time": "1919-03-15" },
  { "Global medel havsnivå": -110.3, "Global medel havsnivå uncertainty": 13.0, "Time": "1920-03-15" },
  { "Global medel havsnivå": -108.2, "Global medel havsnivå uncertainty": 13.1, "Time": "1921-03-15" },
  { "Global medel havsnivå": -109.1, "Global medel havsnivå uncertainty": 13.2, "Time": "1922-03-15" },
  { "Global medel havsnivå": -107.9, "Global medel havsnivå uncertainty": 13.0, "Time": "1923-03-15" },
  { "Global medel havsnivå": -115.2, "Global medel havsnivå uncertainty": 13.1, "Time": "1924-03-15" },
  { "Global medel havsnivå": -113.2, "Global medel havsnivå uncertainty": 13.6, "Time": "1925-03-15" },
  { "Global medel havsnivå": -106.7, "Global medel havsnivå uncertainty": 13.7, "Time": "1926-03-15" },
  { "Global medel havsnivå": -107.8, "Global medel havsnivå uncertainty": 12.9, "Time": "1927-03-15" },
  { "Global medel havsnivå": -111.7, "Global medel havsnivå uncertainty": 12.3, "Time": "1928-03-15" },
  { "Global medel havsnivå": -110.3, "Global medel havsnivå uncertainty": 12.1, "Time": "1929-03-15" },
  { "Global medel havsnivå": -106.3, "Global medel havsnivå uncertainty": 12.0, "Time": "1930-03-15" },
  { "Global medel havsnivå": -106.7, "Global medel havsnivå uncertainty": 12.2, "Time": "1931-03-15" },
  { "Global medel havsnivå": -101.0, "Global medel havsnivå uncertainty": 11.9, "Time": "1932-03-15" },
  { "Global medel havsnivå": -96.7, "Global medel havsnivå uncertainty": 11.8, "Time": "1933-03-15" },
  { "Global medel havsnivå": -102.1, "Global medel havsnivå uncertainty": 11.9, "Time": "1934-03-15" },
  { "Global medel havsnivå": -96.5, "Global medel havsnivå uncertainty": 11.9, "Time": "1935-03-15" },
  { "Global medel havsnivå": -100.4, "Global medel havsnivå uncertainty": 11.8, "Time": "1936-03-15" },
  { "Global medel havsnivå": -94.7, "Global medel havsnivå uncertainty": 11.8, "Time": "1937-03-15" },
  { "Global medel havsnivå": -92.1, "Global medel havsnivå uncertainty": 11.8, "Time": "1938-03-15" },
  { "Global medel havsnivå": -86.9, "Global medel havsnivå uncertainty": 12.2, "Time": "1939-03-15" },
  { "Global medel havsnivå": -92.2, "Global medel havsnivå uncertainty": 11.1, "Time": "1940-03-15" },
  { "Global medel havsnivå": -80.0, "Global medel havsnivå uncertainty": 10.8, "Time": "1941-03-15" },
  { "Global medel havsnivå": -80.0, "Global medel havsnivå uncertainty": 10.8, "Time": "1942-03-15" },
  { "Global medel havsnivå": -80.0, "Global medel havsnivå uncertainty": 10.8, "Time": "1943-03-15" },
  { "Global medel havsnivå": -86.4, "Global medel havsnivå uncertainty": 10.7, "Time": "1944-03-15" },
  { "Global medel havsnivå": -83.6, "Global medel havsnivå uncertainty": 10.7, "Time": "1945-03-15" },
  { "Global medel havsnivå": -76.1, "Global medel havsnivå uncertainty": 10.6, "Time": "1946-03-15" },
  { "Global medel havsnivå": -73.0, "Global medel havsnivå uncertainty": 9.6, "Time": "1947-03-15" },
  { "Global medel havsnivå": -68.2, "Global medel havsnivå uncertainty": 9.3, "Time": "1948-03-15" },
  { "Global medel havsnivå": -69.5, "Global medel havsnivå uncertainty": 8.4, "Time": "1949-03-15" },
  { "Global medel havsnivå": -67.3, "Global medel havsnivå uncertainty": 7.9, "Time": "1950-03-15" },
  { "Global medel havsnivå": -57.8, "Global medel havsnivå uncertainty": 7.8, "Time": "1951-03-15" },
  { "Global medel havsnivå": -60.4, "Global medel havsnivå uncertainty": 7.7, "Time": "1952-03-15" },
  { "Global medel havsnivå": -56.0, "Global medel havsnivå uncertainty": 7.5, "Time": "1953-03-15" },
  { "Global medel havsnivå": -58.9, "Global medel havsnivå uncertainty": 7.3, "Time": "1954-03-15" },
  { "Global medel havsnivå": -58.0, "Global medel havsnivå uncertainty": 7.1, "Time": "1955-03-15" },
  { "Global medel havsnivå": -63.1, "Global medel havsnivå uncertainty": 7.0, "Time": "1956-03-15" },
  { "Global medel havsnivå": -49.7, "Global medel havsnivå uncertainty": 6.9, "Time": "1957-03-15" },
  { "Global medel havsnivå": -48.3, "Global medel havsnivå uncertainty": 6.6, "Time": "1958-03-15" },
  { "Global medel havsnivå": -48.0, "Global medel havsnivå uncertainty": 6.5, "Time": "1959-03-15" },
  { "Global medel havsnivå": -44.3, "Global medel havsnivå uncertainty": 6.6, "Time": "1960-03-15" },
  { "Global medel havsnivå": -38.1, "Global medel havsnivå uncertainty": 6.6, "Time": "1961-03-15" },
  { "Global medel havsnivå": -43.3, "Global medel havsnivå uncertainty": 6.6, "Time": "1962-03-15" },
  { "Global medel havsnivå": -44.9, "Global medel havsnivå uncertainty": 6.6, "Time": "1963-03-15" },
  { "Global medel havsnivå": -52.8, "Global medel havsnivå uncertainty": 6.7, "Time": "1964-03-15" },
  { "Global medel havsnivå": -41.6, "Global medel havsnivå uncertainty": 6.7, "Time": "1965-03-15" },
  { "Global medel havsnivå": -47.0, "Global medel havsnivå uncertainty": 6.6, "Time": "1966-03-15" },
  { "Global medel havsnivå": -45.6, "Global medel havsnivå uncertainty": 6.5, "Time": "1967-03-15" },
  { "Global medel havsnivå": -44.8, "Global medel havsnivå uncertainty": 6.7, "Time": "1968-03-15" },
  { "Global medel havsnivå": -38.0, "Global medel havsnivå uncertainty": 7.0, "Time": "1969-03-15" },
  { "Global medel havsnivå": -39.9, "Global medel havsnivå uncertainty": 7.0, "Time": "1970-03-15" },
  { "Global medel havsnivå": -34.7, "Global medel havsnivå uncertainty": 6.9, "Time": "1971-03-15" },
  { "Global medel havsnivå": -25.6, "Global medel havsnivå uncertainty": 6.9, "Time": "1972-03-15" },
  { "Global medel havsnivå": -31.6, "Global medel havsnivå uncertainty": 6.8, "Time": "1973-03-15" },
  { "Global medel havsnivå": -19.7, "Global medel havsnivå uncertainty": 6.8, "Time": "1974-03-15" },
  { "Global medel havsnivå": -21.3, "Global medel havsnivå uncertainty": 6.7, "Time": "1975-03-15" },
  { "Global medel havsnivå": -22.3, "Global medel havsnivå uncertainty": 6.8, "Time": "1976-03-15" },
  { "Global medel havsnivå": -24.0, "Global medel havsnivå uncertainty": 6.6, "Time": "1977-03-15" },
  { "Global medel havsnivå": -17.6, "Global medel havsnivå uncertainty": 6.7, "Time": "1978-03-15" },
  { "Global medel havsnivå": -22.5, "Global medel havsnivå uncertainty": 6.7, "Time": "1979-03-15" },
  { "Global medel havsnivå": -16.5, "Global medel havsnivå uncertainty": 6.5, "Time": "1980-03-15" },
  { "Global medel havsnivå": -4.1, "Global medel havsnivå uncertainty": 6.5, "Time": "1981-03-15" },
  { "Global medel havsnivå": -9.9, "Global medel havsnivå uncertainty": 6.3, "Time": "1982-03-15" },
  { "Global medel havsnivå": -1.5, "Global medel havsnivå uncertainty": 6.5, "Time": "1983-03-15" },
  { "Global medel havsnivå": -2.4, "Global medel havsnivå uncertainty": 6.3, "Time": "1984-03-15" },
  { "Global medel havsnivå": -12.7, "Global medel havsnivå uncertainty": 6.3, "Time": "1985-03-15" },
  { "Global medel havsnivå": -12.1, "Global medel havsnivå uncertainty": 6.3, "Time": "1986-03-15" },
  { "Global medel havsnivå": -11.5, "Global medel havsnivå uncertainty": 6.2, "Time": "1987-03-15" },
  { "Global medel havsnivå": -6.8, "Global medel havsnivå uncertainty": 6.3, "Time": "1988-03-15" },
  { "Global medel havsnivå": -2.3, "Global medel havsnivå uncertainty": 6.4, "Time": "1989-03-15" },
  { "Global medel havsnivå": 0.0, "Global medel havsnivå uncertainty": 6.5, "Time": "1990-03-15" },
  { "Global medel havsnivå": 2.5, "Global medel havsnivå uncertainty": 6.5, "Time": "1991-03-15" },
  { "Global medel havsnivå": 3.2, "Global medel havsnivå uncertainty": 6.6, "Time": "1992-03-15" },
  { "Global medel havsnivå": 1.4, "Global medel havsnivå uncertainty": 6.6, "Time": "1993-03-15" },
  { "Global medel havsnivå": 6.6, "Global medel havsnivå uncertainty": 6.6, "Time": "1994-03-15" },
  { "Global medel havsnivå": 9.5, "Global medel havsnivå uncertainty": 6.6, "Time": "1995-03-15" },
  { "Global medel havsnivå": 13.6, "Global medel havsnivå uncertainty": 6.6, "Time": "1996-03-15" },
  { "Global medel havsnivå": 20.6, "Global medel havsnivå uncertainty": 6.6, "Time": "1997-03-15" },
  { "Global medel havsnivå": 10.7, "Global medel havsnivå uncertainty": 6.8, "Time": "1998-03-15" },
  { "Global medel havsnivå": 19.2, "Global medel havsnivå uncertainty": 6.8, "Time": "1999-03-15" },
  { "Global medel havsnivå": 20.5, "Global medel havsnivå uncertainty": 6.8, "Time": "2000-03-15" },
  { "Global medel havsnivå": 26.0, "Global medel havsnivå uncertainty": 6.7, "Time": "2001-03-15" },
  { "Global medel havsnivå": 28.4, "Global medel havsnivå uncertainty": 6.8, "Time": "2002-03-15" },
  { "Global medel havsnivå": 37.6, "Global medel havsnivå uncertainty": 6.9, "Time": "2003-03-15" },
  { "Global medel havsnivå": 37.2, "Global medel havsnivå uncertainty": 6.9, "Time": "2004-03-15" },
  { "Global medel havsnivå": 37.3, "Global medel havsnivå uncertainty": 6.8, "Time": "2005-03-15" },
  { "Global medel havsnivå": 41.6, "Global medel havsnivå uncertainty": 6.8, "Time": "2006-03-15" },
  { "Global medel havsnivå": 43.5, "Global medel havsnivå uncertainty": 7.1, "Time": "2007-03-15" },
  { "Global medel havsnivå": 52.2, "Global medel havsnivå uncertainty": 6.8, "Time": "2008-03-15" },
  { "Global medel havsnivå": 58.0, "Global medel havsnivå uncertainty": 6.9, "Time": "2009-03-15" },
  { "Global medel havsnivå": 65.7, "Global medel havsnivå uncertainty": 7.1, "Time": "2010-03-15" },
  { "Global medel havsnivå": 67.3, "Global medel havsnivå uncertainty": 7.5, "Time": "2011-03-15" },
  { "Global medel havsnivå": 76.1, "Global medel havsnivå uncertainty": 8.3, "Time": "2012-03-15" },
  { "Global medel havsnivå": 67.7, "Global medel havsnivå uncertainty": 8.9, "Time": "2013-03-15" }
  ]
  ;

const Sea = ({ data }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (

    <div className="container">
         {data
           .filter((arrayID) => arrayID.id === "3")
           .map((arrayData) => (
             <div key={arrayData.title}>
               <h1 style={{ color: arrayData.textcolor }} className="bigHeading">
                 {arrayData.title}{" "}
               </h1>
               <p style={{ color: arrayData.textcolor }}>{arrayData.subtitle}</p>
    
               <div className="popupGrid">
                 <div className="topLeftGrid">
                 <LineChart
                      width={490}
                      height={400}
                      data={seadata}
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
             </div>
           ))}
       </div>

  );
};

export default Sea;


