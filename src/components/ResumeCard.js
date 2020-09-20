import React from 'react'
import './ResumeCard.css';
import BlueLine from '/Users/jacobchristensen/Arbejde/code_projekter/website/portfolio/src/images/small_blue_line_to-from.png';



function ResumeCard(props) {
    return (
        <div className="resume-card-container">
            <div className="container-header">
                <div className="title-ocupation-container">
                        <h2>{props.title}</h2>
                        <h3>{props.company}</h3>
                </div>
                <div className="from-to">
                    <p className="text">{props.year}</p>
                    <img className="blueLine" src={BlueLine} alt=""></img>
                </div>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className="keywords">
                <ul>
                    <li>{props.keyword1}</li>
                    <li>{props.keyword2}</li>
                    <li>{props.keyword3}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default ResumeCard
