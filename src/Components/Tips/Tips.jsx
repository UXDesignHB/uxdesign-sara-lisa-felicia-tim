import "./Tips.css";
import Glacier from "../../Images/Glacier1.png";

//Vändbara kort som visar en rubrik och en bild på framsidan av kortet och som roter 180 grader vid hovering och då visar en liten beskrivande text.
const Tips = () => {
  return (
    <div className="tipsSection">
    <div className="container tipsContainer">
      <header>
        <h1 className="bigHeading tipsBigHeading">Enkla tips</h1>

      </header>

      <p className="mediumHeading">
        Hur kan du bidra till att bekämpa klimatförändringarna?
      </p>

      <div className="outerContainer">
        <div className="innerContainer" id="item1">
             <div className="flip-card"> 
            <div className="flip-card-inner">
               {/* visar texten nedan på framsidan av korten. Beroende på vilken siffra det har så stylas det genom css-filen */}
              <div className="flip-card-front flip-card-front1"> 
                <p className="smallHeading tipsHeading">Minska på köttet</p>
              </div>
               {/* visar texten nedan på baksidan av kortet. Beroende på vilken siffra det har så stylas det genom css-file */}
              <div className="flip-card-back flip-card-back1">
                <p>
                  Utsläpp från boskap står för 14,5% av alla växthusgaser. Genom
                  att minska konsumtionen av kött så kan vi sänka den siffran.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item2">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-front2">
                <p className="smallHeading tipsHeading">Undvik bilen</p>
                <div className="line"></div>
              </div>
              <div className="flip-card-back flip-card-back2">
                <p>
                  Cykla, gå eller använd kollektivtrafiken. Minska antalet
                  bilresor genom att endast använda bilen då ni är en större grupp. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-front3">
                <p className="smallHeading tipsHeading">Börja källsortera</p>
                <div className="line"></div>
              </div>
              <div className="flip-card-back flip-card-back3">
                <p>
                  Sätt upp speciella kärl för att källsortera skräp hemma och i
                  skolan. När du källsorterar ditt skräp kan det återvinnas vilket är bättre för miljön.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-front4">
                <p className="smallHeading tipsHeading">Spara elektricitet</p>
                <div className="line"></div>
              </div>
              <div className="flip-card-back flip-card-back4">
                <p>
                Du kan spara mycket elektricitet genom att koppla in dina prylar i ett grenuttag som du stänger av när du inte använder prylarna. Det är bra både för jorden och för din ekonomi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item5">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-front5">
                <p className="smallHeading tipsHeading">Sprid kunskap</p>
                <div className="line"></div>
              </div>
              <div className="flip-card-back flip-card-back5">
                <p>
                Sprid kunskap om klimatförändringarna bland dina kompisar så de kan lära sig mer om hur vi kan bekämpa dem. Det här är avgörande för att alla ska kunna leva hållbart i framtiden.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainer" id="item6">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-front6">
                <p className="smallHeading tipsHeading">Lufttorka</p>
                <div className="line"></div>
              </div>
              <div className="flip-card-back flip-card-back6">
                <p>
                  Låt ditt hår och dina kläder lufttorka istället för att använda hårtork, torktumlare och torkskåp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 <div className="articFooter">     <img className="glacier ice" alt="Glacier" src={Glacier}/>
 </div>

       </div>
  );
};

export default Tips;