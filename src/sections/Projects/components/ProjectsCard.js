import React, { Component } from 'react'
import './ProjectsCard.css'




class ProjectsCard extends Component {

    render(){

        const { data } = this.props;
        

        if(data.githubLink) {
            var githubLink = <>
             <div className="github-link"><a href={data.githubLink} target="_blank">Se på github</a></div>
            </>   
        } 

        if (data.liveLink) {
            var liveLink = <>
                <div className="live-version-link">
                    <a href={data.liveLink} target="_blank" rel="noopener noreferrer">Se live</a>
                </div>
            </>
        }

        return (
            <div className="Card-container">
                <div className="projectsCard-header-container">
                    <h2>{data.title}</h2>
                    {/* <img src={line}></img> */}
                </div>
                
                <div className="two-col-container">
                
                    <div className="project-description-container">
                    <div className="keywords">
                    <ul>
                        <li>{data.key1}</li>
                        <li>{data.key2}</li>
                        <li>{data.key3}</li>
                    </ul>
                </div>
                        <p>{data.description}</p>
                    </div>
                    <div className="project-image-container">
                        <div className="project-image">
                            <img src={data.picture} alt=""></img>
                        </div>
                        <div className="project-image-container-footer">
                            {liveLink}
                            {githubLink}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsCard
