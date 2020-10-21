import React from 'react'
import verticalLine from '../../src/images/Path 8.png'
import horizontalLine from '../../src/images/Line 4.png'
import './Skills.css';
import SkillBar from 'react-skillbars';

function Skills() {
    return (
        <div className="s-container">
        <div className="skills-main-container">
          <div className="title-text-400">
                    <h2>Kompetencer</h2>
                    <img src={verticalLine} alt=""></img>
                </div>
    
            <div className="skills-side-container">
                <div className="title-text">
                    <h2>Kompetencer</h2>
                    <img src={verticalLine} alt=""></img>
                </div>
                <div className="skills-horizontalLine">
                    <img src={horizontalLine} alt=""></img>
                </div>

            </div>
            <div className="skills-container">
              <SkillBar className="skillbar"
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
    
    {type: "Webudvikling", level: 65},
    {type: "UX/UI", level: 80},
    {type: "Webdesign", level: 75},
    {type: "Scripting", level: 55},
    {type: "Konceptudv.", level: 85},
    {type: "Prototyping", level: 75},
  ];

