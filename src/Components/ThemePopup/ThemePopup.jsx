import "./ThemePopup.css";

//Tim gör denna

const ThemePopup = () => {
    
    return ( 
        <div className="container">

        <header>
            <h1 className="bigHeading">Rubrik</h1>

            <div className="headerButtons">

                <button>Dark mode</button>

                <button className="closeButton">X</button>
            </div>

        </header>

        <p className="mediumHeading">Detta är theme komponenten</p>
        <p className="smallHeading">Detta är theme komponenten</p>

    </div>
     );
}
 
export default ThemePopup;