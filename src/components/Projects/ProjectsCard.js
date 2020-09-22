import React from 'react'
import './ProjectsCard.css'
import placeholderImage from '../../images/Skærmbillede 2020-09-21 kl. 15.21.58.png'
// import line from '../../images'

function ProjectsCard(props) {
    return (
        <div className="Card-container">
            <div className="projectsCard-header-container">
                <h2>{props.projectTitle}</h2>
                {/* <img src={line}></img> */}
            </div>
            <div className="two-col-container">
                <div className="project-description-container">
                    <p>{props.projectDescription}</p>
                        
                </div>
                <div className="project-image-container">
                    <div className="project-image">
                        <img src={placeholderImage} alt=""></img>
                    </div>
                    <div className="project-image-container-footer">
                        <div className="live-version-link"><a href={props.link1} >View Live Version </a></div>
                        <div className="github-link"><a href={props.link2}>View on Github</a></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectsCard
