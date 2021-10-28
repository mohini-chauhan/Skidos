import "./Fun.css";
import tab from "./Fun asset/devices.png";
import React from 'react'

const Fun = () => {
    return (
        <>
            <section className="fun-container">
                <section className="fun-contents">
                    <h2>Unlimited fun & learning for your kids</h2>
                    <hr className="under-line"/>
                    <section className="flex-section">
                        <article className="fun-img">
                            <img src={tab} alt="devices"/>
                        </article>
                        <article className="fun-content">
                            <p>Ut ipsum ipsum ea ipsum non laborum exercitation nostrud deserunt. Consectetur nulla excepteur consectetur consequat cupidatat sunt. Labore ea irure in dolore commodo enim duis proident laborum aute dolore in nisi est. Voluptate ex veniam et aliquip ut incididunt cillum qui anim reprehenderit ex.

Reprehenderit sit quis consequat exercitation duis pariatur non labore id. Eu elit amet qui nostrud elit consectetur consequat commodo. Excepteur non laborum amet cillum et amet id et quis nostrud ullamco magna. Voluptate esse dolor ipsum qui consequat amet velit veniam voluptate. In reprehenderit cillum laborum deserunt proident ad dolor reprehenderit incididunt excepteur reprehenderit et consectetur commodo. Proident aute adipisicing qui pariatur minim dolor consequat cillum irure ea.</p>
                        </article>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Fun
