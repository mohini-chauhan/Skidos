import "./About.css"
import React from 'react'
import ReactPlayer from "react-player"

const About = () => {
    return (
        <>
            <section className="abt-container">
                <section className="center-abt-section">
                    <h1>Why SKIDOS</h1>
                    <hr className="under-line"/>
                    <section className="abt-contents">
                        <article className="abt-video">
                            <ReactPlayer width='100%' height='100%' url="https://www.youtube.com/watch?v=9OVRhJm24zY" controls/>
                        </article>
                        <article className="abt-content">
                            <p>Tempor id ad esse cillum laborum do sunt eiusmod pariatur mollit officia ullamco. Ipsum eu ullamco sunt consectetur cupidatat deserunt pariatur consequat. Duis dolore reprehenderit et id est.</p>
                            <p>Irure irure ipsum velit eiusmod qui culpa sit anim cillum fugiat. Nulla deserunt sunt laboris dolore amet non sit. Amet labore occaecat voluptate incididunt esse ullamco tempor fugiat pariatur ea pariatur anim.Commodo nulla Lorem deserunt culpa nulla. Lorem non laborum excepteur irure labore veniam sunt sunt qui elit velit. Occaecat veniam enim ex aliqua. Magna exercitation aliqua do reprehenderit adipisicing excepteur elit cillum ullamco. Ipsum exercitation mollit reprehenderit ad proident minim ad in in ad magna. Dolor laboris laboris fugiat officia laborum in occaecat irure culpa. Laboris duis duis do magna consequat nostrud deserunt Lorem sit proident commodo.</p>
                        </article>
                    </section>

                </section>
                

            </section>  
        </>
    )
}

export default About
