import React, {Component} from 'react'
import ResumeCard from '../ResumeCard';
import './ExperienceCards.css';
import verticalLine from '../../images/Path 8.png'
import horizontalLine from '../../images/Line 4.png'

class ExperienceCards extends Component {
    render() {

  
        if(this.props.data){
            var exp = this.props.data.experience;
            var exps = Object.values(exp).map(expArray =>{
                
                return <ResumeCard key={expArray.title} data={expArray} />
            })}

        return (
            <div className="container">
                <div className="main-container">
                    <div className="title-text-400">
                            <h2>Erfaringer</h2>
                            <img src={verticalLine} alt=""></img>
                        </div>
                    <div className="side-container">
                        
                        <div className="title-text">
                            
                            <h2>Erfaringer</h2>
                            <img src={verticalLine} alt=""></img>
                        </div>
                        <div className="horizontalLine">
                            <img src={horizontalLine} alt=""></img>
                        </div>

                    </div>
                    <div className="cards-container">   
                          {exps}
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceCards;