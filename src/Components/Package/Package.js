import "./Package.css"
import React from 'react'
import cardbg from "./Package asset/cardbg.png"
import cap from "./Package asset/cap.png"
import gradCap from "./Package asset/gradCap.png"
import Hat from "./Package asset/Hat.png"
import off from "./Package asset/off.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Package = () => {
function card(){
    return(
        <section className="package-card-contents">
            <img className="cardBg" src={cardbg} alt="card-layout"/>
            <p className="card-heading">Monthly Pass</p>
            <div className="combo-img">
                <img className="cap" src={cap} alt="cap"/>
                <img className="off"src={off} alt="offer"/>
            </div>
            <p className="month-price">$7.99<smaller>/Mo</smaller></p>
            <p className="off-price"><s>$15.99</s><smaller>/Mo</smaller></p>
            <hr/>
            <button className="try-btn">Try for Free  <FontAwesomeIcon className="arrow" icon={faArrowRight} /></button>
    </section>
    )
}

    return (
        <>
            <section className="package-container">
                <h1>Our Learning Packages</h1>
                <p>Choose the right Pass for your kid</p>
                <section className="package-card-container">
                    {card()}
                    

                </section>
            </section> 
        </>
    )
}

export default Package
