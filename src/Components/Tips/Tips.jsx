import "./Tips.css";
import CO2 from "../../Images/ClimateIcons/CO2.png";

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
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front1">
                <p className="smallHeading tipsHeading">Undvik bilen</p>
              </div>
              <div class="flip-card-back flip-card-back1">
                <p>
                  Utsläpp från boskap står för 14,5% av alla växthusgaser. Genom
                  att minska konsumtionen av kött.....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item2">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front2">
                <p className="smallHeading tipsHeading">Undvik bilen</p>
                <div className="line"></div>
              </div>
              <div class="flip-card-back flip-card-back2">
                <p>
                  Cykla, gå eller använd kollektivtrafiken. Minska antalet
                  bilresor genom att endast använda bilen....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front3">
                <p className="smallHeading tipsHeading">Börja källsortera</p>
                <div className="line"></div>
              </div>
              <div class="flip-card-back flip-card-back3">
                <p>
                  Sätt upp speciella kärl för att källsortera skräp hemma och i
                  skolan. När du källsorterar ditt skräp kan det återvinnas....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item4">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front4">
                <p className="smallHeading tipsHeading">Börja källsortera</p>
                <div className="line"></div>
              </div>
              <div class="flip-card-back flip-card-back4">
                <p>
                  Sätt upp speciella kärl för att källsortera skräp hemma och i
                  skolan. När du källsorterar ditt skräp kan det återvinnas....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item5">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front5">
                <p className="smallHeading tipsHeading">Börja källsortera</p>
                <div className="line"></div>
              </div>
              <div class="flip-card-back flip-card-back5">
                <p>
                  Sätt upp speciella kärl för att källsortera skräp hemma och i
                  skolan. När du källsorterar ditt skräp kan det återvinnas....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front flip-card-front6">
                <p className="smallHeading tipsHeading">Börja källsortera</p>
                <div className="line"></div>
              </div>
              <div class="flip-card-back flip-card-back6">
                <p>
                  Sätt upp speciella kärl för att källsortera skräp hemma och i
                  skolan. När du källsorterar ditt skräp kan det återvinnas....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;