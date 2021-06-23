import React from "react";
import { FaAlignJustify } from "react-icons/fa";

import {NavLink, Link} from 'react-router-dom'

const Nav = () => {
  const [state, setState] = React.useState(true);
  const [navbar, setNavbar] = React.useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 130) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.webp" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/HOME">Home</Link>
              </li>

              <li>
                <Link to="/Projects">Projects</Link>
              </li>

              <li>
                <Link to="/Page">Page</Link>
              </li>

              <li>
                <Link to="/Blog">Blog</Link>
              </li>
      
              <li>
                
                <NavLink exact to="/Services" activeClassName="active">Services</NavLink>
              
              </li>

              <li>
                <NavLink exact to ="/" activeClassName="active">Pages</NavLink>
              </li>

              

            </ul>
          ) : (
            ""
          )}
        </div>
        
        <div className="say_hello">
          <p>Say Hello</p>
          </div>

        
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};



export default Nav;
