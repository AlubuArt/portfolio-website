import React, {Component} from 'react'
import '../Contact/ContactForm.css';
import axios from 'axios';

class ContactForm1 extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send'
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sender'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Besked ikke sendt')
        })
    }

    render(){
    return (
        <div className="contact-main-container">
            <div className="contact-container">
                <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                    <h1 className="form-header">Kontakt</h1>
                        <div className="name-section">
                            <div className="col-25">
                                <label class="name" htmlFor="message-name">Navn</label>
                            </div>
                            <div className="col-75"> 
                                <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Dit navn" value={this.state.name}/>
                            </div>
                        </div>
                        <div className="email-section">
                            <div className="col-25">
                                <label class="email" htmlFor="email">Email</label>
                            </div>
                            <div className="col-75"> 
                                <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="din@email.com" required value={this.state.email} />
                            </div>
                        </div>
                        <div className="message-section">
                            <div className="col-25">
                                <label class="message" htmlFor="message-input">Besked</label>
                            </div>
                            <div className="col-75">  
                            
                                <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Din besked her" value={this.state.message} required/>
                            </div>
                        </div>
                    <div className="submit-section">
                        <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}

export default ContactForm1
