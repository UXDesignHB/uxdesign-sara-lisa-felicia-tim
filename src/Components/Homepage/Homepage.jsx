import "./Homepage.css";
import Hero from "../Hero/Hero";
import Storyline from "../Storyline/Storyline";
import City from "../City/City";
import Artic from "../Artic/Artic";

const Homepage = () => {
    return (
    <>
        <Hero/>
        <div className="citySection">
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div id="stars5"></div>
        <Storyline/>
        <City/>
        </div>
        <Artic/>
    </>
    );
}
 
export default Homepage;