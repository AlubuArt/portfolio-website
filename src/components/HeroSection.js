import React from 'react';
import '../App.css';
import './HeroSection.css';
import hero from '../images/header_blaa_2000x1000.jpg';


function HeroSection() {
    return (
        <div className="hero-container">
            <img src={hero} alt="sdf" className="hero-image" />
            <div className="heroHeadline">
                <h1>JACOB CHRISTENSEN</h1>
                <p>Dedikeret og kreativ konceptudvikler med interesse for webudvikling og UX-design.</p>
            </div>
            <div>
                
            </div>
            
            
        </div>
        
    )
}

export default HeroSection;
