import "./City.css";
import Moon from "../../Images/Moon.png";
import Clouds from "../../Images/Clouds.png";
import Skyline from "../../Images/Skyline.png";
import Ferriswheel from "../../Images/Ferriswheel.png";
import Tivoli from "../../Images/Tivoli.png";
import Reflection from "../../Images/Reflection.png";

const City = () => {
    return ( 

        <>
 
     <img className="clouds" src={Clouds}/>
        <img className="moon" src={Moon}/>
        <img className="clouds" src={Clouds}/>
        <img className="clouds" src={Clouds}/>

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