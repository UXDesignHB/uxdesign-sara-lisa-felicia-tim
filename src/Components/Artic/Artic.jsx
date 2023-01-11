//Import av Artic CSS fil
import "./Artic.css";
//Import av React router
import { Link } from "react-router-dom";
//useState används till videospelaren
import { useState } from "react";
//npm paket som importeras för att visa videoklipp
import ReactPlayer from "react-player";
//Importerar bild från Images-mapp
import Glacier from "../../Images/Glacier1.png";


const Artic = () => {

    //Här sätts state för video
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    return (
        <> 

        {/* ReactPlayer används för att spela upp en YouTube-video */}
        <div className = "articSection" > <div className="articVideo">
            <ReactPlayer
                url="https://youtu.be/H71LG6xgZII"
                className="articYT"
                playing={false}
                playsinline={true}
                onReady={onLoadedData}
                width="auto"
                height="16rem"/>
            <p className="largeText">
                Klimatförändringar syftar på de många olika effekter som den globala uppvärmning
                har på jordens klimatsystem. Detta bidrar till bland annat stigande havsnivåer,
                smältande glaciärer, förändrade regnmönster och CO2-utsläpp från fossila
                bränslen. Läs mer om hur det påverkar vår jord och hur du kan göra skillnad.
            </p>

        </div>

        <div className="articImage">

            {/* Sektion med sex animerade knappar som länkar vidare till andra komponenter i applikationen */}
            <div className="articButtons">
                <Link to="/smaltande-glaciarer" className="button1">

                    <button class="button b1 smallHeading">
                        +
                    </button>

                </Link>

                <Link to="/co2-utslapp" className="button2">

                    <button class="button b2 smallHeading">
                        +
                    </button>

                </Link>

                <Link to="/global-uppvarming" className="button3">

                    <button class="button b3 smallHeading">
                        +
                    </button>

                </Link>

                <Link to="/fragor " className="button4">

                    <button class="button b4 smallHeading">
                        +
                    </button>

                </Link>

                <Link to="/stigande-havsnivaer" className="button5">

                    <button class="button b5 smallHeading">
                        +
                    </button>

                </Link>

                <Link to="/tips" className="button6">

                    <button class="button b6 smallHeading">
                        +
                    </button>

                </Link>

            </div>

            <img className="glacier ice" src={Glacier}/>

        </div> 
        </div>
</>
    );
}

export default Artic;