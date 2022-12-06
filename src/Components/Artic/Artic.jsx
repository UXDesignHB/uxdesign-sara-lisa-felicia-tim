import "./Artic.css";
import Glacier from "../../Images/Glacier.png";
import Bear from "../../Images/Bear.png";

const Artic = () => {
    return ( 

        <>

    
            <div className="articSection">
            <div className="articVideo">
                <h2></h2>
                <p></p>
                <iframe src="https://youtu.be/H71LG6xgZII" frameborder="0"></iframe>
            </div>
<div className="articImage">
<img className="glacier bear" src={Bear}/>
            <img className="glacier ice" src={Glacier}/>
            </div>
            </div>
        

        </>
     );
}
 
export default Artic;