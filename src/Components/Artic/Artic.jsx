import "./Artic.css";
import Glacier from "../../Images/Glacier1.png";
import Bear from "../../Images/Bear.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import { BsArrowUp, BsArrowDown, BsPlusCircle, BsQuestionCircle, BsEmojiSmile } from "react-icons/bs";


const Artic = () => {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };
    return ( 

        <>
  <div className="articSection">
    <div className="articVideo">
    <ReactPlayer
                      url= "https://youtu.be/H71LG6xgZII"
                      className="articYT"
                      playing={false}
                      // controls={true}
                    //   loop={true}
                    //   muted={true}
                      playsinline={true}
                      onReady={onLoadedData}
                      width="auto"
                      height="16rem"
                    />
            <p className="largeText">
            Klimatförändringar syftar på de många olika effekter som den globala uppvärmning
            har på jordens klimatsystem. Detta bidrar till bland annat stigande havsnivåer, smältande
            glaciärer, förändrade regnmönster och CO2-utsläpp från fossila bränslen. Läs mer
            om hur det påverkar vår jord och hur du kan göra skillnad.
            </p>



      
    </div>
    <div className="articImage">
        <div className="articButtons">
                <Link to="/smaltande-glaciarer"  className="button1">   
                {/* <div className="articButton">   <BsPlusCircle className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">Smältande glaciärer</h3>
                    <BsArrowDown className="arrowIcon"/>
                    <div className="articParagraph">
                        <p className="articParagraph1">-28 cm</p>
                        <sup className="articParagraph2">sedan år 1945</sup>
                    </div>
                </div> */}
          
  <button class="button b1 smallHeading"> + </button>


            </Link>

            <Link to="/co2-utslapp"  className="button2">   
                {/* <div className="articButton">   <BsPlusCircle className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">Global uppvärmning</h3>
                    <BsArrowUp className="arrowIcon"/>
                    <div className="articParagraph">
                        <p className="articParagraph1">+ 1°C</p>
                        <sup className="articParagraph2">sedan år 1880</sup>
                    </div>
            
                </div> */}
           
  <button class="button b2 smallHeading"> + </button>


            </Link>

            <Link to="/global-uppvarming"  className="button3">   
                {/* <div className="articButton">  <BsPlusCircle className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">CO2-utsläpp</h3>
                    <BsArrowUp className="arrowIcon"/>
                    <div className="articParagraph">
                        <p className="articParagraph1">9167 ton</p>
                        <sup className="articParagraph2">sedan år 1760</sup>
                    </div>
                </div> */}
     
  <button class="button b3 smallHeading"> + </button>


            </Link>

            <Link to="/fragor "  className="button4">   
                {/* <div className="articButton">   <BsPlusCircle className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">Stigande havsnivåer</h3>
                    <BsArrowUp className="arrowIcon"/>
                    <div className="articParagraph">
                        <p className="articParagraph1">0.7 m</p>
                        <sup className="articParagraph2">sedan år 1880</sup>
                    </div>
                </div> */}
                
  <button class="button b4 smallHeading"> + </button>

            </Link>

            <Link to="/stigande-havsnivaer"  className="button5">   
                {/* <div className="articButton">  <BsQuestionCircle className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">Vad vet jag om klimatförändringarna?</h3>
          
                </div> */}

  <button class="button b5 smallHeading"> + </button>


            </Link>

            <Link to="/tips" className="button6">   
                {/* <div className="articButton">   <BsEmojiSmile className="plusIcon"/>
                    <h3 className="smallHeading buttonHeading">Vad kan jag göra?</h3>
                  
                </div> */}
               
  <button class="button b6 smallHeading">+</button>

            </Link>

      


         
        </div>
        {/* <img className="glacier bear" src={Bear}/> */}
        <img className="glacier ice" src={Glacier}/>
    </div>
</div>
</>
     );
}
 
export default Artic;