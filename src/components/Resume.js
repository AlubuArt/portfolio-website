import React from 'react'
import ResumeCard from './ResumeCard';
import './Resume.css';
import verticalLine from '/Users/jacobchristensen/Arbejde/code_projekter/website/portfolio/src/images/Path 8.png'
import horizontalLine from '../../src/images/Line 4.png'
import ExperienceCards from './ExperienceCards';
import EducationCards from './EducationCards';
import Skills from './Skills';

function Resume() {
    return (
        <div>
        <ExperienceCards />
        <EducationCards />
        <Skills />
        
        
    </div>
    )
}

export default Resume
