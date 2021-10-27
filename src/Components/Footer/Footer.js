import "./Footer.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <section className="footer-contents">
                    <article>
                        <ul>
                            <li className="footer-links">Copyright © 2021 SKIDOS</li>
                            <li className="footer-links">Privacy Policy</li>
                            <li className="footer-links">Terms & Conditions</li>
                        </ul>
                        {/* need aunction that can display the icons */}
                        <div className="footer-social-icons">
                            <div>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </div>
                        </div>                        
                    </article>
                    
                </section>
            </section>
        </>
    )
}

export default Footer
