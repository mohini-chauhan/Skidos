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
                <section className="pass-contents">
                <h2>Included in your SKIDOS pass</h2>
                <hr className="under-line"/>
                    <section className="pass-grid-container">
                        {passData()}
                        {passData()}
                        {passData()}
                        {passData()}
                        {passData()}
                        {passData()}

                    </section>
                </section>
            </section>  
        </>
    )
}

export default Pass
