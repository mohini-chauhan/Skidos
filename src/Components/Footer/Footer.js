import "./Footer.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedinIn,faYoutube,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons'

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
                                <div style={{background:'blue'}}><FontAwesomeIcon icon={faFacebookF}/></div>
                                <div style={{background:'#0089ffd4'}}><FontAwesomeIcon icon={faTwitter}/></div>
                                <div style={{background:'#0077b5'}}><FontAwesomeIcon icon={faLinkedinIn}/></div>
                                <div style={{background:'red'}}><FontAwesomeIcon icon={faYoutube}/></div>
                                <div style={{background:'#5851DB'}}><FontAwesomeIcon icon={faInstagram}/></div>
                                <div style={{background:'#E60023'}}><FontAwesomeIcon icon={faPinterest}/></div>
                            
                        </div>                        
                    </article>
                    
                </section>
            </section>
        </>
    )
}

export default Footer
