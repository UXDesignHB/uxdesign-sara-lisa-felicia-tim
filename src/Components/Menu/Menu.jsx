import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavigationData } from '../../NavigationData';
import { IconContext } from 'react-icons';

// funktionen hanterar öppning och stängning av hamburgermenyn. //
// sidebar ska inte visas förrän användare klickar på hamburger ikonen. //
function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setSidebar(false);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  // IconContext.Provider måste användas för att kunna ändra färg på husikonen som tar en till startsidan. //
  // navigationData renderar ut alla paths och dess titlar som ger en fungerande navigation. //
  return (
    <div ref={menuRef}>
      <IconContext.Provider value={{ color: 'var(--text-primary)' }}>

        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            {NavigationData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navigation;