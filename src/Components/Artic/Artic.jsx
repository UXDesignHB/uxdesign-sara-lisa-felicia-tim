import "./Artic.css";
import Glacier from "../../Images/Glacier.png";
import Bear from "../../Images/Bear.png";
import { BsArrowUp, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Artic = () => {
    return ( 

        <>

    
            <div className="articSection">
            <div className="articButtons">
       <Link to="/smaltande-glaciarer"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">Smältande glaciärer</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div> </Link>
       <Link to="/stigande-havsnivaer"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">Stigande havsnivåer</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div></Link>
       <Link to="/co2-utslapp"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">CO2-utsläpp</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div></Link>
       <Link to="/global-uppvarming"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">Global uppvärmning</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div></Link>
       <Link to="/tips"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">Vad kan jag göra?</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div></Link>
       <Link to="/fragor"> <div className="articButton"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading">Vad kan jag om klimatförändringarna?</h3><BsArrowUp className="arrowIcon"/><p>Lorem impsum</p></div></Link>
    </div>
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