import React, { Component } from 'react'
import './Projects.css';
import ProjectsCard from './ProjectsCard';

class Projects extends Component {

    render(){

        if(this.props.data){
            var projectArray = this.props.data;
            var projects = Object.values(projectArray).map(project =>{
                return <ProjectsCard key={project.title} data={project} />
            })
        }
        return (
            <div className="projects-container">
                <div className="projects-main-container">
                    <div className="projects-header-container">
                        <h1 className="section-title">What projects i have done</h1>
                    </div>
                    <div className="projectCards-container">
                        {projects}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
