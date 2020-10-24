import React, { Component } from 'react';
import '../App.css';
import './HeroSection.css';
import hero from '../images/header_blaa_2000x1000.jpg';
import { Link} from 'react-scroll'
import {FaAngleDown} from 'react-icons/fa';

class HeroSection extends Component {

    render() {

        if(this.props.data) {
            var title = this.props.data.title;
            var subtitle = this.props.data.subtitle;
        }
        return (
            <div className="hero-container">
                <img src={hero} alt="sdf" className="hero-image" />
                
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="scroll-down-button">
                    <FaAngleDown/>
                    </Link>
                    
                    
    
            </div>
            
        )
    }
}

export default HeroSection;
