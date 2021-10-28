import "./Rewards.css"
import reward1 from "./Rewards asset/funreward.png"
import reward2 from "./Rewards asset/familyreward.png"
import reward3 from "./Rewards asset/silverreward.png"
import React from 'react'

const Rewards = () => {
    return (
        <>
            <section className="reward-container">
                <section className="reward-contents">
                    <h2>Rewards & Recognition</h2>
                    <hr className="under-line"/>
                    <section className="flex-reward">
                        <img src={reward1} alt="fun-reward"/>
                        <img src={reward2} alt="fun-reward"/>
                        <img src={reward3} alt="fun-reward"/>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Rewards
