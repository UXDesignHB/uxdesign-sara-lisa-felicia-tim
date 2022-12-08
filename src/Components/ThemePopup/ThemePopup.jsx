import "./ThemePopup.css";

const ThemePopup = ({ data }) => {
  // const [themedata, setData] = useState(data);

  return (
    <div className="container">
      {data
        .filter((arrayID) => arrayID.id === "1")
        .map((arrayData) => (
          <div key={arrayData.title}>
            <h1 style={{color: arrayData.textcolor }} className="bigHeading">{arrayData.title} </h1>
            <p style={{color: arrayData.textcolor }}>{arrayData.subtitle}</p>

            <div className="popupGrid">
              <div className="topLeftGrid"></div>
              <div className="topRightGrid">
                <p  className="smallHeading">
                  <b style={{color: arrayData.textcolor }}>{arrayData.graphtitle}</b>
                </p>
                <p>{arrayData.graphtext}</p>
              </div>
              <div className="bottomLeftGrid"></div>
              <div className="bottomRightGrid"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThemePopup;
