import React from 'react'
import './About.css';
import profilePic from '../images/IMG_2142.jpg';
import linkedIn from '../images/linkedin-3-32.png';
import github from '../images/github-11-32.png';
import email from '../images/email-32.png'


function About() {
    return (
        <div className="about">
            <div className="about-container">
                
                    <div>
                        <img src={profilePic} className="profile-picture" alt="jacob"></img>
                    </div>

                    
                    <div className="about-text-container">
                        <div className="about-me">
                            
                            
                            <h2>About me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                        </div>
                        <br />
                        <div className="one-two">
                            <div className="get-in-touch">
                                <h2>Where to get in touch</h2>
                                <p>Jacob Christensen</p>
                                <p>This Street</p>
                                <p>City and country</p>
                                <p>123456789</p>
                                <p>this@email.dk</p>
                            </div>
                            
                        </div>
                        <div className="icon-container">
                                <img src={linkedIn} alt="linkedin"></img>
                                <img src={github} alt="github"></img>
                                <img src={email} alt="email"></img>
                            </div>
                    </div>
                    
                
            </div>
            
        </div>
    )
}

export default About;
