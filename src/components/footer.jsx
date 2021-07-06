import React from 'react';
import {Link} from 'react-router-dom';

import {faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <div className="footer">
            <div className="wrapper">
                <div className="content">
                    <div className="brand">
                        <div className="head">Pacific</div>
                        <div className="subhead">Sparkles</div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="contact">
                            <div className="head">Contact</div>
                            <p className="address">
                            DMK VENTURES 368, Marudhar Kesari Nagar Shobhawato Ki Dhani Near Apex School Jodhpur-342008 Rajasthan.
                            </p>
                            <p className="phone">
                                +91 9414134320 
                            </p>
                            <p className="mail"><a id="mail-link" href="mailto:pacificsparklesconsumercare@gmail.com">Email Us!</a></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="social">
                            <div className="head">
                                Social
                            </div>
                            <div className="icons">
                                <a href="https://www.instagram.com/pacific_sparkles/"><FontAwesomeIcon id="insta" icon={faInstagram} className="icon"/></a>
                                <a href="https://www.facebook.com/pacificsparkles/"><FontAwesomeIcon id="fb" icon={faFacebook} className="icon"/></a>
                                <a href="https://api.whatsapp.com/send?phone=919414134320"><FontAwesomeIcon id="whatsapp" icon={faWhatsapp} className="icon"/></a>
                                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=Pacificsparklesconsumercare@gmail.com"><FontAwesomeIcon id="email" icon={faEnvelope} className="icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="links">
                            <div className="head">Links</div>
                            <div className="ul footer-links">
                                <Link to="/"className="footer-link">Home</Link>
                                <Link to="/about"className="footer-link">About Us</Link>
                                <Link to="/shop"className="footer-link">Shop</Link>
                                <Link to="/editorial"className="footer-link">Editorial</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}