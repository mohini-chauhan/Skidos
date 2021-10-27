import "./About.css"
import React from 'react'
import ReactPlayer from "react-player"

const About = () => {
    return (
        <>
            <section className="abt-container">
                <section className="center-abt-section">
                    <h1>Why SKIDOS</h1>
                    <section className="abt-contents">
                        <article className="abt-video">
                            <ReactPlayer url="https://www.youtube.com/watch?v=9OVRhJm24zY" controls/>
                        </article>
                        <article className="abt-content">
                            <p>Tempor id ad esse cillum laborum do sunt eiusmod pariatur mollit officia ullamco. Ipsum eu ullamco sunt consectetur cupidatat deserunt pariatur consequat. Duis dolore reprehenderit et id est.</p>
                            <p>Irure irure ipsum velit eiusmod qui culpa sit anim cillum fugiat. Nulla deserunt sunt laboris dolore amet non sit. Amet labore occaecat voluptate incididunt esse ullamco tempor fugiat pariatur ea pariatur anim.Commodo nulla Lorem deserunt culpa nulla. Lorem non laborum excepteur irure labore veniam sunt sunt qui elit velit. Occaecat veniam enim ex aliqua. Magna exercitation aliqua do reprehenderit adipisicing excepteur elit cillum ullamco. Ipsum exercitation mollit reprehenderit ad proident minim ad in in ad magna. Dolor laboris laboris fugiat officia laborum in occaecat irure culpa. Laboris duis duis do magna consequat nostrud deserunt Lorem sit proident commodo.Quis labore cupidatat quis ea aliqua est. Duis exercitation dolor fugiat culpa nulla ea non nisi minim minim ex est pariatur. Velit amet et in anim ex et tempor sint adipisicing duis.Velit est ullamco excepteur ipsum laborum. Et excepteur magna in incididunt cupidatat velit commodo occaecat labore esse officia occaecat eu. Ipsum labore irure mollit irure labore consectetur elit nostrud tempor eiusmod.</p>
                        </article>
                    </section>

                </section>
                

            </section>  
        </>
    )
}

export default About
