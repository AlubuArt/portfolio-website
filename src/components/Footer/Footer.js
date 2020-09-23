import React from 'react';
import linkedIn from '../../images/linkedin-3-32.png';
import github from '../../images/github-11-32.png';
import email from '../../images/email-32.png';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-main-container">
            <div className="footer-container">
                                <img src={linkedIn} alt="linkedin"></img>
                                <img src={github} alt="github"></img>
                                <img src={email} alt="email"></img>
                            </div>
            
        </div>
    )
}

export default Footer
