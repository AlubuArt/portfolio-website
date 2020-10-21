import React, { Component } from 'react'
import ResumeCard from '../ResumeCard';
import '../ExperienceCards/ExperienceCards.css';
import verticalLine from '../../images/Path 8.png'
import horizontalLine from '../../images/Line 4.png'

class EducationCards extends Component {

    render() {

        if(this.props.data){
            var education = this.props.data.education;
            var educations = Object.values(education).map(eduArray => {
                return <ResumeCard key={eduArray.title} data={eduArray} />
            })
        }
        return (
            <div className="container">
                <div className="main-container">
                    <div className="title-text-400">
                        <h2>Uddannelse</h2>
                        <img src={verticalLine} alt=""></img>
                    </div>
                <div className="side-container">
                    <div className="title-text">
                        <h2>Uddannelse</h2>
                        <img src={verticalLine} alt=""></img>
                    </div>
                    <div className="horizontalLine">
                        <img src={horizontalLine} alt=""></img>
                    </div>

                </div>
                <div className="cards-container">
                    {educations}
                </div>
            </div>
        </div>
        )
    }
}

export default EducationCards;