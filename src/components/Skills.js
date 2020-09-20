import React from 'react'
import verticalLine from '/Users/jacobchristensen/Arbejde/code_projekter/website/portfolio/src/images/Path 8.png'
import horizontalLine from '../../src/images/Line 4.png'
// import SkillBar from './SkillBar';
import './Skills.css';
import SkillBar from 'react-skillbars';

function Skills() {
    return (
        <div className="container">
        <div className="skills-main-container">
            <div className="skills-side-container">
                <div className="title-text">
                    <h2>Skills</h2>
                    <img src={verticalLine} alt=""></img>
                </div>
                <div className="skills-horizontalLine">
                    <img src={horizontalLine} alt=""></img>
                </div>

            </div>
            <div className="skills-container">
            <SkillBar 
            skills={skills} 
            height={40} 
            font-family ={'avernir next'}
            colors = {{
                "bar": "#8AB5BB",
                "title": {
                  "text": "#fff",
                  "background": "#8AB5BB"
                }
              }}
              
            animationDelay
              />
                
            </div>
           
        </div>
    </div>
    )
}

export default Skills

const skills = [
    {type: "Java", level: 85},
    {type: "Javascript", level: 75},
    {type: "Javascript", level: 75},
    {type: "Javascript", level: 75},
    {type: "Javascript", level: 75},
  ];

