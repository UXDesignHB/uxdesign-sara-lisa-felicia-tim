import "./Tips.css";

const Tips = () => {
  return (
    <div className="container">
      <header>
        <h1 className="bigHeading tipsBigHeading">Enkla tips</h1>

        <div className="headerButtons">

          <button className="closeButton">X</button>
        </div>
      </header>
      

      <p className="mediumHeading">
        Hur kan du bidra till att bekämpa klimatförändringarna?
      </p>

      <div className="outerContainer">
        <div className="innerContainer" id="item1">
          <p className="smallHeading">Minska på köttet</p>
          <div className="line"></div>
          <p>
            {" "}
            Utsläpp från boskap står för 14,5% av alla växthusgaser. Genom att
            minska konsumtionen av kött.....{" "}
          </p>
        </div>

        <div className="innerContainer" id="item2">
          <p className="smallHeading">Undvik bilen</p>
          <div className="line"></div>
          <p>
            {" "}
            Cykla, gå eller använd kollektivtrafiken. Minska antalet bilresor
            genom att endast använda bilen...
          </p>
        </div>

        <div className="innerContainer" id="item3">
          <p className="smallHeading">Börja källsortera</p>
          <div className="line"></div>
          <p>
            Sätt upp speciella kärl för att källsortera skräp hemma och i
            skolan. När du källsorterar ditt skräp kan det återvinnas...{" "}
          </p>
        </div>

        <div className="innerContainer" id="item4">
          <p className="smallHeading">Börja källsortera</p>
          <div className="line"></div>
          <p>
            Sätt upp speciella kärl för att källsortera skräp hemma och i
            skolan. När du källsorterar ditt skräp kan det återvinnas...{" "}
          </p>
        </div>

        <div className="innerContainer" id="item5">
          <p className="smallHeading">Börja källsortera</p>
          <div className="line"></div>
          <p>
            Sätt upp speciella kärl för att källsortera skräp hemma och i
            skolan. När du källsorterar ditt skräp kan det återvinnas...{" "}
          </p>
        </div>

        <div className="innerContainer" id="item6">
          <p className="smallHeading">Börja källsortera</p>
          <div className="line"></div>
          <p>
            Sätt upp speciella kärl för att källsortera skräp hemma och i
            skolan. När du källsorterar ditt skräp kan det återvinnas...{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;