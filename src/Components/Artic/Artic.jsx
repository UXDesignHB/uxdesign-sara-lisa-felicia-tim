import "./Artic.css";
import Glacier from "../../Images/Glacier.png";
import Bear from "../../Images/Bear.png";
import { BsArrowUp, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Artic = () => {
    return ( 

        <>

    
            <div className="articSection">
        
            <div className="articVideo">
                <h2>Lorem impsum</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero eligendi eveniet nihil perspiciatis facere ipsam. Nesciunt eum debitis unde magni, minima ut ex optio est architecto quibusdam eaque pariatur?</p>
                <iframe src="https://youtu.be/H71LG6xgZII" frameborder="0"></iframe>
            </div>
<div className="articImage">
<div className="articButtons">
       <Link to="/smaltande-glaciarer"> <div className="articButton articButton1"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading1">Smältande glaciärer</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div> </Link>
       <Link to="/stigande-havsnivaer"> <div className="articButton articButton2"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading2">Stigande havsnivåer</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div></Link>
       <Link to="/co2-utslapp"> <div className="articButton articButton3"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading3">CO2-utsläpp</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div></Link>
       <Link to="/global-uppvarming"> <div className="articButton articButto4"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading4">Global uppvärmning</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div></Link>
       <Link to="/tips"> <div className="articButton articButton5"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading5">Vad kan jag göra?</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div></Link>
       <Link to="/fragor"> <div className="articButton articButton6"><BsPlusCircle className="plusIcon"/><h3 className="smallHeading articButtonHeading6">Vad kan jag om klimatförändringarna?</h3><BsArrowUp className="arrowIcon"/><div className="articParagraph"><p className="articParagraph1">Lorem impsum</p><sup className="articParagraph2">Lorem impsum</sup></div></div></Link>
    </div>
<img className="glacier bear" src={Bear}/>
            <img className="glacier ice" src={Glacier}/>
            </div>
            </div>
        

        </>
     );
}
 
export default Artic;