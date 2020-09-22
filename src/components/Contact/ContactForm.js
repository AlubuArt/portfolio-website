import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
<div className="contact-main-container">
<div className="contact-container">
  <form>
    <h1 className="form-header">Contact</h1>
  <div className="name-section">
    <div className="col-25">
      <label for="name">Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="name" name="name" placeholder=""></input>
    </div>
  </div>
  
  <div className="email-section">
    <div className="col-25">
      <label for="email">Email</label>
    </div>
    <div className="col-75">
      <input type="text" id="email" name="email" placeholder=""></input>
    </div>
  </div>
  <div className="subject-section">
    <div className="col-25">
      <label for="subject">Subject</label>
    </div>
    <div className="col-75">
      <input type="text" id="subject" name="subject"></input>
    </div>
  </div>
  <div className="message-section">
    <div className="col-25">
      <label for="messsage">Message</label>
    </div>
    <div className="col-75">
      <textarea id="Message" name="subject" placeholder="Write something.." ></textarea>
    </div>
  </div>
  <div className="submit-section">
    <input type="submit" value="SUBMIT"></input>
  </div>
  </form>
</div>
</div>
        

    )
};

export default ContactForm
