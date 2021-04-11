import React from 'react'
import './Quote.css'


class Qoute extends React.Component {


    render(){

        if(this.props.data){
            var qouteText = this.props.data.QuoteText;
            var quoteAuthor = this.props.data.Author;
        }

        return (
            
                <div className="quote-container">
                    <div className="quote-text">
                        <p className="quote">"{qouteText}"</p>
                        <div className="author">
                            <p className="author-name">{quoteAuthor}</p>
                        </div>
                    </div>               
                </div>  
   
        )
    }    
}

export default Qoute



