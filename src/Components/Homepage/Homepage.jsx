import "./Homepage.css";
import Hero from "../Hero/Hero";
import Storyline from "../Storyline/Storyline";
import City from "../City/City";
import Artic from "../Artic/Artic";
import { Link } from "react-router-dom";

// Homepage är applikationens startsida och innehåller komponenterna Hero, Storyline, City och Artic.
const Homepage = () => {
    return (
    <>

    {/* Animerad pil som har en länk till Artic-komponenten */}
    <Link to="/artic">
        <div className="arrow"><div className="down-arrow "></div></div>
    </Link>
     
    <Hero/>

    <div className="citySection">

    {/* Element med animerade stjärnor */}
    <div id="stars3"></div>
    <div id="stars4"></div>

    <Storyline/>

    <City/>

    </div>

    <Artic/>

    </>
    );
}
 
export default Homepage;