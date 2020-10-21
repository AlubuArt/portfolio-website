import React from 'react';
import linkedIn from '../../images/linkedin-3-32.png';
import github from '../../images/github-11-32.png';
import email from '../../images/email-32.png';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-main-container">
            <div className="footer-container">
                                <a href="https://www.linkedin.com/in/jacob-christensen-konceptudvikling/" target="_blank">
                                    <img src={linkedIn} alt="linkedin"></img>
                                </a>
                                <a href="https://github.com/AlubuArt" target="_blank">
                                    <img src={github} alt="github"></img>
                                </a>
                                <a href="mailto:jc@jcvisueldesign.dk">
                                    <img src={email}  type="email" alt="email"></img>
                                </a>
                            </div>
            
        </div>
    )
}

export default Footer
