
import "firebase/database";
import React from 'react'
import './About.css';
import linkedIn from '../images/linkedin-3-32.png';
import github from '../images/github-11-32.png';
import emailIcon from '../images/email-32.png';


class About extends React.Component {
  
    
    render(){

    if(this.props.data){
       var aboutMe = this.props.data.AboutMe;
       var city = this.props.data.getInTouch.CityCountry;
       var email = this.props.data.getInTouch.email;
       var name = this.props.data.getInTouch.name;
       var phone = this.props.data.getInTouch.phone;
       var profilePicture = this.props.data.profilePicture;
       
    }
    
    return (
        <div className="about">
            <div className="about-container">
                    <div>
                        <img src={profilePicture} className="profile-picture" alt="jacob"></img>
                    </div>
                    <div className="about-text-container">
                        <div className="about-me">
                            <h2>Hvem jeg er...</h2>
                            <p>{aboutMe}</p>
                        </div>
                        <br />
                        <div className="one-two">
                            <div className="get-in-touch">
                                <h2>Tag kontakt her</h2>
                                <p>{name}</p>
                                <p>{city}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div className="icon-container">
                                <a href="https://www.linkedin.com/in/jacob-christensen-konceptudvikling/" target="_blank">
                                    <img src={linkedIn} alt="linkedin"></img>
                                </a>
                                <a href="https://github.com/AlubuArt" target="_blank">
                                    <img src={github} alt="github"></img>
                                </a>
                                <a href="mailto:jc@jcvisueldesign.dk">
                                    <img src={emailIcon}  type="email" alt="email"></img>
                                </a>
                            </div>
                    </div> 
            </div>
        </div>
    )
}

}

export default About;
