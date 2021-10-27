import "./Views.css";
import view from "./views asset/char3.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
const Views = () => {
    return (
        <>
            <section className="view-container">
                <section className="view-contents">
                    <h2>Loved by kids,parents & teachers</h2>
                    <section className="view-flex">
                        <article className="view-content">
                            <h3>Kids are loving it</h3>
                            <p>Ut cupidatat consectetur pariatur qui exercitation elit deserunt dolore magna in ea proident. Non pariatur ex officia duis ullamco tempor dolor amet veniam. Cillum eu duis ipsum mollit cupidatat nostrud aliquip.Aliquip ullamco anim qui est mollit ut sint quis consequat consequat nisi. Voluptate ex officia enim nisi veniam laboris in id tempor. Reprehenderit ipsum culpa fugiat veniam velit do proident ut ad tempor mollit. Ex nostrud adipisicing eiusmod consequat incididunt commodo incididunt consequat est.</p>
                            <h4>-HomeschoolmommyErica</h4>
                            <div className="rating-container">
                                <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                                <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                                <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                                <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                                <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                            </div>
                        </article>
                        <article className="view-img">
                            <img src={view} alt="bird-icon"/>
                        </article>

                    </section>
                </section>
            </section>
        </>
    )
}

export default Views
