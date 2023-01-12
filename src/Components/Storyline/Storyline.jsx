//Import av Storyline CSS fil
import "./Storyline.css";
//Importerar bild från Images-mapp
import Plane from "../../Images/Plane.png";

// Storyline innehåller element med animerade stjärnor som text för att bygga ett narrativ. Den sista bilden på ett plan är animerad för att väcka uppmärksamhhet.
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