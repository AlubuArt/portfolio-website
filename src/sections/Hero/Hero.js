import React, { Component } from 'react';
import '../../App.css';
import './Hero.css';
import hero from '../../images/header_blaa_2000x1000.jpg';
import { Link} from 'react-scroll'
import {FaAngleDown} from 'react-icons/fa';
import linkedIn from '../../images/linkedin-3-32.png';
import github from '../../images/github-11-32.png';
import emailIcon from '../../images/email-32.png';
import '../About/About.css';

class HeroSection extends Component {

    render() {

        if(this.props.data) {
            var title = this.props.data.title;
            var subtitle = this.props.data.subtitle;
        }
        return (
            <div className="hero-container">
                <div className="hero-image">
                    <img src={hero} alt="sdf" className="hero-image" />
                </div>
                <div className="hero-text-section">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className="hero-buttons">
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
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="scroll-down-button">
                        <FaAngleDown/>
                    </Link>
            </div>
            
        )
    }
}

export default HeroSection;



