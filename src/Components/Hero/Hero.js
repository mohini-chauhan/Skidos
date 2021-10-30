import "./Hero.css"
import React from 'react'
import hero from "./hero asset/hero.png"



const Hero = () => {
    return (
        <>
            <section className="hero-container">
                <section className="hero-center">
                <img src={hero} alt="hero-img"/>
                    <article className="hero-contents">
                        <h1>Discover a fun way of learning for kids</h1>
                        <p>Experience over 45 safe & ad-free <br/>mobile games for 2-11 year old kids</p>
                        <button className="try-btn">Try for Free</button>
                    </article>
                    
                </section>
            </section>
        </>
    )
}

export default Hero
