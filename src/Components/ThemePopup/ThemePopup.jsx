import "./ThemePopup.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const sealeveldata = [
  { GMSL: -158.7, "GMSL uncertainty": 24.2, Time: "1880-03-15" },
  { GMSL: -153.1, "GMSL uncertainty": 24.2, Time: "1881-03-15" },
  { GMSL: -169.9, "GMSL uncertainty": 23.0, Time: "1882-03-15" },
  { GMSL: -164.6, "GMSL uncertainty": 22.8, Time: "1883-03-15" },
  { GMSL: -143.7, "GMSL uncertainty": 22.2, Time: "1884-03-15" },
  { GMSL: -145.2, "GMSL uncertainty": 21.9, Time: "1885-03-15" },
  { GMSL: -147.6, "GMSL uncertainty": 20.8, Time: "1886-03-15" },
  { GMSL: -153.2, "GMSL uncertainty": 20.8, Time: "1887-03-15" },
  { GMSL: -151.1, "GMSL uncertainty": 20.8, Time: "1888-03-15" },
  { GMSL: -149.5, "GMSL uncertainty": 20.8, Time: "1889-03-15" },
  { GMSL: -147.5, "GMSL uncertainty": 20.7, Time: "1890-03-15" },
  { GMSL: -149.2, "GMSL uncertainty": 20.7, Time: "1891-03-15" },
  { GMSL: -146.0, "GMSL uncertainty": 20.7, Time: "1892-03-15" },
  { GMSL: -141.3, "GMSL uncertainty": 20.3, Time: "1893-03-15" },
  { GMSL: -151.0, "GMSL uncertainty": 21.6, Time: "1894-03-15" },
  { GMSL: -139.2, "GMSL uncertainty": 21.6, Time: "1895-03-15" },
  { GMSL: -146.8, "GMSL uncertainty": 21.2, Time: "1896-03-15" },
  { GMSL: -141.6, "GMSL uncertainty": 20.8, Time: "1897-03-15" },
  { GMSL: -132.2, "GMSL uncertainty": 19.7, Time: "1898-03-15" },
  { GMSL: -124.7, "GMSL uncertainty": 19.4, Time: "1899-03-15" },
  { GMSL: -130.1, "GMSL uncertainty": 18.3, Time: "1900-03-15" },
  { GMSL: -130.5, "GMSL uncertainty": 17.6, Time: "1901-03-15" },
  { GMSL: -125.9, "GMSL uncertainty": 17.3, Time: "1902-03-15" },
  { GMSL: -117.9, "GMSL uncertainty": 17.0, Time: "1903-03-15" },
  { GMSL: -128.2, "GMSL uncertainty": 16.9, Time: "1904-03-15" },
  { GMSL: -133.7, "GMSL uncertainty": 15.4, Time: "1905-03-15" },
  { GMSL: -126.9, "GMSL uncertainty": 14.7, Time: "1906-03-15" },
  { GMSL: -128.3, "GMSL uncertainty": 14.9, Time: "1907-03-15" },
  { GMSL: -130.8, "GMSL uncertainty": 14.5, Time: "1908-03-15" },
  { GMSL: -126.3, "GMSL uncertainty": 14.6, Time: "1909-03-15" },
  { GMSL: -126.4, "GMSL uncertainty": 14.6, Time: "1910-03-15" },
  { GMSL: -118.1, "GMSL uncertainty": 14.2, Time: "1911-03-15" },
  { GMSL: -121.2, "GMSL uncertainty": 14.2, Time: "1912-03-15" },
  { GMSL: -119.4, "GMSL uncertainty": 14.1, Time: "1913-03-15" },
  { GMSL: -113.1, "GMSL uncertainty": 13.8, Time: "1914-03-15" },
  { GMSL: -105.2, "GMSL uncertainty": 13.6, Time: "1915-03-15" },
  { GMSL: -107.1, "GMSL uncertainty": 13.0, Time: "1916-03-15" },
  { GMSL: -111.6, "GMSL uncertainty": 12.8, Time: "1917-03-15" },
  { GMSL: -113.2, "GMSL uncertainty": 12.7, Time: "1918-03-15" },
  { GMSL: -111.6, "GMSL uncertainty": 12.7, Time: "1919-03-15" },
  { GMSL: -110.3, "GMSL uncertainty": 13.0, Time: "1920-03-15" },
  { GMSL: -108.2, "GMSL uncertainty": 13.1, Time: "1921-03-15" },
  { GMSL: -109.1, "GMSL uncertainty": 13.2, Time: "1922-03-15" },
  { GMSL: -107.9, "GMSL uncertainty": 13.0, Time: "1923-03-15" },
  { GMSL: -115.2, "GMSL uncertainty": 13.1, Time: "1924-03-15" },
  { GMSL: -113.2, "GMSL uncertainty": 13.6, Time: "1925-03-15" },
  { GMSL: -106.7, "GMSL uncertainty": 13.7, Time: "1926-03-15" },
  { GMSL: -107.8, "GMSL uncertainty": 12.9, Time: "1927-03-15" },
  { GMSL: -111.7, "GMSL uncertainty": 12.3, Time: "1928-03-15" },
  { GMSL: -110.3, "GMSL uncertainty": 12.1, Time: "1929-03-15" },
  { GMSL: -106.3, "GMSL uncertainty": 12.0, Time: "1930-03-15" },
  { GMSL: -106.7, "GMSL uncertainty": 12.2, Time: "1931-03-15" },
  { GMSL: -101.0, "GMSL uncertainty": 11.9, Time: "1932-03-15" },
  { GMSL: -96.7, "GMSL uncertainty": 11.8, Time: "1933-03-15" },
  { GMSL: -102.1, "GMSL uncertainty": 11.9, Time: "1934-03-15" },
  { GMSL: -96.5, "GMSL uncertainty": 11.9, Time: "1935-03-15" },
  { GMSL: -100.4, "GMSL uncertainty": 11.8, Time: "1936-03-15" },
  { GMSL: -94.7, "GMSL uncertainty": 11.8, Time: "1937-03-15" },
  { GMSL: -92.1, "GMSL uncertainty": 11.8, Time: "1938-03-15" },
  { GMSL: -86.9, "GMSL uncertainty": 12.2, Time: "1939-03-15" },
  { GMSL: -92.2, "GMSL uncertainty": 11.1, Time: "1940-03-15" },
  { GMSL: -80.0, "GMSL uncertainty": 10.8, Time: "1941-03-15" },
  { GMSL: -80.0, "GMSL uncertainty": 10.8, Time: "1942-03-15" },
  { GMSL: -80.0, "GMSL uncertainty": 10.8, Time: "1943-03-15" },
  { GMSL: -86.4, "GMSL uncertainty": 10.7, Time: "1944-03-15" },
  { GMSL: -83.6, "GMSL uncertainty": 10.7, Time: "1945-03-15" },
  { GMSL: -76.1, "GMSL uncertainty": 10.6, Time: "1946-03-15" },
  { GMSL: -73.0, "GMSL uncertainty": 9.6, Time: "1947-03-15" },
  { GMSL: -68.2, "GMSL uncertainty": 9.3, Time: "1948-03-15" },
  { GMSL: -69.5, "GMSL uncertainty": 8.4, Time: "1949-03-15" },
  { GMSL: -67.3, "GMSL uncertainty": 7.9, Time: "1950-03-15" },
  { GMSL: -57.8, "GMSL uncertainty": 7.8, Time: "1951-03-15" },
  { GMSL: -60.4, "GMSL uncertainty": 7.7, Time: "1952-03-15" },
  { GMSL: -56.0, "GMSL uncertainty": 7.5, Time: "1953-03-15" },
  { GMSL: -58.9, "GMSL uncertainty": 7.3, Time: "1954-03-15" },
  { GMSL: -58.0, "GMSL uncertainty": 7.1, Time: "1955-03-15" },
  { GMSL: -63.1, "GMSL uncertainty": 7.0, Time: "1956-03-15" },
  { GMSL: -49.7, "GMSL uncertainty": 6.9, Time: "1957-03-15" },
  { GMSL: -48.3, "GMSL uncertainty": 6.6, Time: "1958-03-15" },
  { GMSL: -48.0, "GMSL uncertainty": 6.5, Time: "1959-03-15" },
  { GMSL: -44.3, "GMSL uncertainty": 6.6, Time: "1960-03-15" },
  { GMSL: -38.1, "GMSL uncertainty": 6.6, Time: "1961-03-15" },
  { GMSL: -43.3, "GMSL uncertainty": 6.6, Time: "1962-03-15" },
  { GMSL: -44.9, "GMSL uncertainty": 6.6, Time: "1963-03-15" },
  { GMSL: -52.8, "GMSL uncertainty": 6.7, Time: "1964-03-15" },
  { GMSL: -41.6, "GMSL uncertainty": 6.7, Time: "1965-03-15" },
  { GMSL: -47.0, "GMSL uncertainty": 6.6, Time: "1966-03-15" },
  { GMSL: -45.6, "GMSL uncertainty": 6.5, Time: "1967-03-15" },
  { GMSL: -44.8, "GMSL uncertainty": 6.7, Time: "1968-03-15" },
  { GMSL: -38.0, "GMSL uncertainty": 7.0, Time: "1969-03-15" },
  { GMSL: -39.9, "GMSL uncertainty": 7.0, Time: "1970-03-15" },
  { GMSL: -34.7, "GMSL uncertainty": 6.9, Time: "1971-03-15" },
  { GMSL: -25.6, "GMSL uncertainty": 6.9, Time: "1972-03-15" },
  { GMSL: -31.6, "GMSL uncertainty": 6.8, Time: "1973-03-15" },
  { GMSL: -19.7, "GMSL uncertainty": 6.8, Time: "1974-03-15" },
  { GMSL: -21.3, "GMSL uncertainty": 6.7, Time: "1975-03-15" },
  { GMSL: -22.3, "GMSL uncertainty": 6.8, Time: "1976-03-15" },
  { GMSL: -24.0, "GMSL uncertainty": 6.6, Time: "1977-03-15" },
  { GMSL: -17.6, "GMSL uncertainty": 6.7, Time: "1978-03-15" },
  { GMSL: -22.5, "GMSL uncertainty": 6.7, Time: "1979-03-15" },
  { GMSL: -16.5, "GMSL uncertainty": 6.5, Time: "1980-03-15" },
  { GMSL: -4.1, "GMSL uncertainty": 6.5, Time: "1981-03-15" },
  { GMSL: -9.9, "GMSL uncertainty": 6.3, Time: "1982-03-15" },
  { GMSL: -1.5, "GMSL uncertainty": 6.5, Time: "1983-03-15" },
  { GMSL: -2.4, "GMSL uncertainty": 6.3, Time: "1984-03-15" },
  { GMSL: -12.7, "GMSL uncertainty": 6.3, Time: "1985-03-15" },
  { GMSL: -12.1, "GMSL uncertainty": 6.3, Time: "1986-03-15" },
  { GMSL: -11.5, "GMSL uncertainty": 6.2, Time: "1987-03-15" },
  { GMSL: -6.8, "GMSL uncertainty": 6.3, Time: "1988-03-15" },
  { GMSL: -2.3, "GMSL uncertainty": 6.4, Time: "1989-03-15" },
  { GMSL: 0.0, "GMSL uncertainty": 6.5, Time: "1990-03-15" },
  { GMSL: 2.5, "GMSL uncertainty": 6.5, Time: "1991-03-15" },
  { GMSL: 3.2, "GMSL uncertainty": 6.6, Time: "1992-03-15" },
  { GMSL: 1.4, "GMSL uncertainty": 6.6, Time: "1993-03-15" },
  { GMSL: 6.6, "GMSL uncertainty": 6.6, Time: "1994-03-15" },
  { GMSL: 9.5, "GMSL uncertainty": 6.6, Time: "1995-03-15" },
  { GMSL: 13.6, "GMSL uncertainty": 6.6, Time: "1996-03-15" },
  { GMSL: 20.6, "GMSL uncertainty": 6.6, Time: "1997-03-15" },
  { GMSL: 10.7, "GMSL uncertainty": 6.8, Time: "1998-03-15" },
  { GMSL: 19.2, "GMSL uncertainty": 6.8, Time: "1999-03-15" },
  { GMSL: 20.5, "GMSL uncertainty": 6.8, Time: "2000-03-15" },
  { GMSL: 26.0, "GMSL uncertainty": 6.7, Time: "2001-03-15" },
  { GMSL: 28.4, "GMSL uncertainty": 6.8, Time: "2002-03-15" },
  { GMSL: 37.6, "GMSL uncertainty": 6.9, Time: "2003-03-15" },
  { GMSL: 37.2, "GMSL uncertainty": 6.9, Time: "2004-03-15" },
  { GMSL: 37.3, "GMSL uncertainty": 6.8, Time: "2005-03-15" },
  { GMSL: 41.6, "GMSL uncertainty": 6.8, Time: "2006-03-15" },
  { GMSL: 43.5, "GMSL uncertainty": 7.1, Time: "2007-03-15" },
  { GMSL: 52.2, "GMSL uncertainty": 6.8, Time: "2008-03-15" },
  { GMSL: 58.0, "GMSL uncertainty": 6.9, Time: "2009-03-15" },
  { GMSL: 65.7, "GMSL uncertainty": 7.1, Time: "2010-03-15" },
  { GMSL: 67.3, "GMSL uncertainty": 7.5, Time: "2011-03-15" },
  { GMSL: 76.1, "GMSL uncertainty": 8.3, Time: "2012-03-15" },
  { GMSL: 67.7, "GMSL uncertainty": 8.9, Time: "2013-03-15" },
];

const ThemePopup = ({ data }) => {
  // const [themedata, setData] = useState(data);

  return (
    <div className="container">
      {data
        .filter((arrayID) => arrayID.id === "2")
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
                  data={sealeveldata}
                  margin={{
                    top: 5,
                    bottom: 5,
                    left: -28,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="GMSL"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="GMSL uncertainty"
                    stroke="#82ca9d"
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
              <div className="bottomRightGrid"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThemePopup;
