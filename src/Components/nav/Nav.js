import React from 'react'
import logo from "./nav-asset/skidos-logo.png"
import {Button} from "./Button";
import "./Nav.css";
import Dropdown from "./Dropdown";
import {Link} from "react-router-dom"



const Nav = () => {
    return (
        <>
          <nav className="navbar"  >
              <Link to="/" className="navbar-logo">
                  <img src={logo} alt="logo"/>
              </Link>
              <ul>
                  <li>
                  <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
                  </li>
              </ul>
              
          </nav>
        </>
    )
}

export default Nav

