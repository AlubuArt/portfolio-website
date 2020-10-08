import React from 'react';
import '../App.css';
import './HeroSection.css';
import hero from '../images/header_blaa_2000x1000.jpg';
import { Link} from 'react-scroll'
import {FaAngleDown} from 'react-icons/fa';


function HeroSection() {
    return (
        <div className="hero-container">
            <img src={hero} alt="sdf" className="hero-image" />
            
                <h1>JACOB CHRISTENSEN</h1>
                <p>Dedikeret og kreativ konceptudvikler med interesse for webudvikling og UX-design.</p>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="scroll-down-button">
                <FaAngleDown/>
                </Link>
                
                
 
        </div>
        
    )
}

export default HeroSection;
