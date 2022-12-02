
import "./Storyline.css";
import Plane from "../../Images/Plane.png";

const Storyline = () => {
    return (
<>
    
            

            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="container story">
            <p className="largeText">Ser vi till historien har klimatet alltid förändrats.</p>

                <p className="largeText">Vår jord har varit både varmare och kallare beroende på
                    det varierande avståndet till solen, våra kontinenters rörelser och den kemiska
                    sammansättningen i atmosfären.</p>
                <p className="largeText">Tidigare klimatförändringar har ofta tagit många tusen
                    år, men nu ökar medeltemperaturen och klimatförändringarna snabbt.</p>
                <p className="largeText">Till skillnad från tidigare klimatförändringar beror
                    den vi ser idag på människan.
                </p>
                <img className="plane" src={Plane}/>
            </div>
            </>

    );
}
 
export default Storyline;