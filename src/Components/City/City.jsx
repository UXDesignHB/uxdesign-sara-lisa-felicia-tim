//Import av City CSS fil
import "./City.css";
//Import av bilder från Images-mapp 
import Moon from "../../Images/Moon.png";
import Clouds from "../../Images/Clouds.png";
import Skyline from "../../Images/Skyline.png";
import Ferriswheel from "../../Images/Ferriswheel.png";
import Tivoli from "../../Images/Tivoli.png";
import Reflection from "../../Images/Reflection1.png";

// Komponenten består av bilder för att skapa ett engagerande gränssnitt
const City = () => {
    return ( 

        <>
 
     <img className="clouds" src={Clouds}/>
        <img className="moon" src={Moon}/>
        <img className="clouds" src={Clouds}/>
        <img className="clouds2" src={Clouds}/>

        <div className="cityWrapper">
        <img className="skyline" src={Skyline}/>
        <img className="ferriswheel" src={Ferriswheel}/>
        <img className="tivoli" src={Tivoli}/>
        </div>
      

        <div className="waterSection">
        <img className="reflection" src={Reflection}/>
        </div>

        </>
     );
}
 
export default City;