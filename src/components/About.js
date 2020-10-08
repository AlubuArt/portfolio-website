import * as firebase from "firebase/app";
import "firebase/database";
import React from 'react'
import './About.css';
import profilePic from '../images/IMG_2142.jpg';
import linkedIn from '../images/linkedin-3-32.png';
import github from '../images/github-11-32.png';
import emailIcon from '../images/email-32.png';
import {dbRef} from '../components/firebaseConfig';



class About extends React.Component {

    
    
    render(){

    if(this.props.data){
       var  aboutMe = this.props.data.AboutMe;
       var city = this.props.data.getInTouch.CityCountry;
       var email = this.props.data.getInTouch.email;
       var name = this.props.data.getInTouch.name;
       var phone = this.props.data.getInTouch.phone;
       
    }
    
    return (
        <div className="about">
            <div className="about-container">
                    <div>
                        <img src={profilePic} className="profile-picture" alt="jacob"></img>
                    </div>
                    <div className="about-text-container">
                        <div className="about-me">
                            <h2>About me</h2>
                            <p>{aboutMe}</p>
                        </div>
                        <br />
                        <div className="one-two">
                            <div className="get-in-touch">
                                <h2>Where to get in touch</h2>
                                <p>{name}</p>
                                <p>{city}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div className="icon-container">
                                <img src={linkedIn} alt="linkedin"></img>
                                <img src={github} alt="github"></img>
                                <img src={emailIcon} alt="email"></img>
                            </div>
                    </div> 
            </div>
        </div>
    )
}


//hent data fra databasen
getAboutText = () => {
        
    dbRef.ref('/About/AboutMe').once('value', snapshot => {
    const state = snapshot.val(); 
    this.setState({aboutMeTexts: state})
    });
     
}







}




export default About;
