import "./Artic.css";
import Glacier from "../../Images/Glacier.png";
import Bear from "../../Images/Bear.png";
import { BsArrowUp, BsParagraph, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ButtonData } from '../../ButtonData';
import ReactPlayer from "react-player";
import { useState } from "react";

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
                      width="100%"
                      height="200px"
                    />

        <div>
            <h2 className="mediumHeading">Klimatförändringarna</h2>
            <p>
            Klimatförändringar syftar på de många olika effekter som den globala uppvärmning
            har på jordens klimatsystem. Hit hör bland annat stigande havsnivåer, smältande
            glaciärer, förändrade regnmönster och CO2-utsläpp från fossila bränslen. Läs mer
            om hur det påverkar vår jord och hur du kan påverka.
            </p>
        </div>

  
    </div>

    <div className="articImage">
        <div className="articButtons">

        {ButtonData.map((button) => (
                <Link to={button.link}>
                <div className="articButton">  <div className="plus icon"></div>
                    <h3 className="smallHeading buttonHeading">{button.heading}</h3><BsArrowUp className="arrowIcon"/>
                    <div className="articParagraph">
                        <p className="articParagraph1">{button.paragraph1}</p>
                        <sup className="articParagraph2">{button.paragrap2}</sup>
                    </div>
                </div>
            </Link>
            ))}   
   

         
        </div>
        <img className="glacier bear" src={Bear}/>
        <img className="glacier ice" src={Glacier}/>
    </div>
</div>
</>
     );
}
 
export default Artic;