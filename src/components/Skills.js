import React from 'react'
import ResumeCard from './ResumeCard';
import './Resume.css';
import verticalLine from '/Users/jacobchristensen/Arbejde/code_projekter/website/portfolio/src/images/Path 8.png'
import horizontalLine from '../../src/images/Line 4.png'

function Skills() {
    return (
        <div className="container">
        <div className="main-container">
            <div className="side-container">
                <div className="title-text">
                    <h2>Skills</h2>
                    <img src={verticalLine} alt=""></img>
                </div>
                <div className="horizontalLine">
                    <img src={horizontalLine} alt=""></img>
                </div>

            </div>
           
        </div>
    </div>
    )
}

export default Skills
