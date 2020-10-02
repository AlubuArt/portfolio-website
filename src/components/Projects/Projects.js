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
                    projectTitle={project1.title}
                    projectDescription={project1.description}       
                     />
                    <ProjectsCard 
                    projectTitle={project2.title}
                    projectDescription={project2.description}            
                     />
                     <ProjectsCard 
                    projectTitle={project3.title}
                    projectDescription={project3.description} 
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
    title: "Project 1 title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. iat nulla pariatur.",
    liveLink: "",
    githubLink: ""
}


const project2 = {
    title: "Project 2 title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. iat nulla pariatur."
}

const project3 = {
    title: "Project 3 title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. iat nulla pariatur."
}