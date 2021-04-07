import React from 'react'
import './ResumeCard.css';
import BlueLine from '../../src/images/small_blue_line_to-from.png';


class ResumeCard extends React.Component  {
    
    render() {
        
        const { data }  = this.props;
        //TODO get the keywords from the database and map them.
        return (

            <div className="resume-card-container">
                <div className="container-header">
                    <div className="title-ocupation-container">
                            <h2>{data.title}</h2>
                            <h3>{data.company}</h3>
                    </div>
                    <div className="from-to">
                        <p className="text">{data.period}</p>
                        <img className="blueLine" src={BlueLine} alt=""></img>
                    </div>
                </div>
                <div className="keywords">
                    <ul>
                        <li>{data.key1}</li>
                        <li>{data.key2}</li>
                        <li>{data.key3}</li>
                    </ul>
                </div>
                <div className="description">
                    <p>{data.description}</p>
                </div>
               
                
            </div>
        )
    }
}

export default ResumeCard
