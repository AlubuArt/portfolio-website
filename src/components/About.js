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
                            <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.
                                 Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
                        </div>
                        <br />
                        <div className="one-two">
                            <div className="get-in-touch">
                                <h2>Where to get in touch</h2>
                                <p>Tim Baker</p>
                                <p>My Street</p>
                                <p>City conutry etc</p>
                                <p>phone number</p>
                                <p>email</p>
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
