import "./Pass.css";
import tick from "./pass/tick.PNG";
import React from 'react'

const Pass = () => {
    function passData(){
        return(
            <article>
                <img src={tick} alt="tick-icon"/>
                <p>Upto 6 users with one pass</p>
            </article>
        )

    }
    return (
        <>
            <section className="pass-container">
                <h2>Included in your SKIDOS pass</h2>
                <section className="pass-grid-container">
                    {passData()}
                    {passData()}
                    {passData()}
                    {passData()}
                    {passData()}
                    {passData()}

                </section>
            </section>  
        </>
    )
}

export default Pass
