import React from 'react'
import './Projects.css';
import ProjectsCard from './ProjectsCard';

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-main-container">
                <div className="projects-header-container">
                     <h1 className="section-title">What projects i have done</h1>
                </div>
                <div className="projectCards-container">
                    <ProjectsCard 
                    projectTitle="Sponsor Match"
                    projectDescription="Use this bio section 
                    as your way of describing yourself and 
                    saying what you do, what technologies 
                    you like to use or feel most comfortable 
                    with, describing your personality, or whatever 
                    else you feel like throwing in.
                    - Keyword1
                    - Keyword2"            
                     />
                    <ProjectsCard 
                    projectTitle="Sponsor Match"
                    projectDescription="Use this bio section 
                    as your way of describing yourself and 
                    saying what you do, what technologies 
                    you like to use or feel most comfortable 
                    with, describing your personality, or whatever 
                    else you feel like throwing in.
                    - Keyword1
                    - Keyword2"            
                     />
                     <ProjectsCard 
                    projectTitle={project3.title}
                    projectDescription={project3.description3} 
                    link1={project1.liveLink}  
                    link2={project1.githubLink}         
                     />
                </div>
            </div>
        </div>
    )
}

export default Projects

const project1 = {
    title: "Sponsor Match",
    description3: "625195139",
    liveLink: "https://wwww.sponsormatch.dk",
    githubLink: ""
}


const project2 = {
    title: "Sponsor Match",
    description3: "625195139"
}

const project3 = {
    title: "Sponsor Match",
    description3: "625195139"
}