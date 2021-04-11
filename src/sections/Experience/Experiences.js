import React from 'react'
import ExperienceCards from '../ExperienceCards/Experiences';





class Resume extends React.Component {

    render() {
        return(
        <div className="resumeList">
        {
        this.props.resume.experience.map((experience) => {

          return <ExperienceCards  key={experience.id} experience={experience} />;

        })
      }
      </div>

    )}
}

export default Resume





