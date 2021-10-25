import "./Features.css";
import React from 'react';
import bird from "./feature asset/char1.png"
import tick from "./feature asset/tickicon.PNG"

const Features = () => {
    function features(){
        return(
            <article className="fcontents">
                <img src={tick} alt="icon"/>
                <p>practice math and develop 21st century skills</p>
            </article>
        )
    }
    return (
        <>
           <section className="Feature-container">
               <h1>Let kids learn on their own with meaningful screen time</h1>
               <section className="feature-contents-container">
                   <section className="feature-grid">
                       {features()}
                       {features()}
                       {features()}
                       {features()}
                       {features()}
                       {features()}

                   </section>
                   <article>
                       <img src={bird} alt="char1"/>
                   </article>
               </section>


           </section> 
        </>
    )
}

export default Features
