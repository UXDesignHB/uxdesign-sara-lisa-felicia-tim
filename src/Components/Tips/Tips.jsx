import "./Tips.css";


const Tips = () => {
    return ( 
        <div className="container">

        <header>
            <h1 className="bigHeading">Rubrik</h1>

            <div className="headerButtons">

                <button>Dark mode</button>

                <button className="closeButton">X</button>
            </div>

        </header>
        <p className="mediumHeading">Detta är tips komponenten</p>
        <p className="smallHeading">Detta är tips komponenten</p>

    </div>
     );
}
 
export default Tips;


