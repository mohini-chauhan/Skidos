import React from 'react'
import logo from "./nav-asset/skidos-logo.png"
import "./Nav.css";





const Nav = () => {
    return (
        <>
          <nav className="navbar"  >              
                <img src={logo} alt="logo"/>
                <div className="dropdwn-container">
                    <select>
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="nav-btn">Log In</button>   
                </div>
                           
          </nav>
        </>
    )
}

export default Nav

