

import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div className="contact container section" id='contact'>
      <h2 className="section__title">
      Get In Touch
      </h2>

      <div className="contact_container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__detail">Don't like forms? Send me an email. 👋</p>
        </div>

    <form action="" className="contact__form">
      <div className="contact__form-group">
        <div className="contact__form-div">
          <input type="text" className='contact__form-input' placeholder='Insert your name' />
        </div>
        <div className="contact__form-div">
          <input type="email" className='contact__form-input' placeholder='Insert your email' />
        </div>
        </div>
        <div className="contact__form-div">
          <input type="text" className='contact__form-input' placeholder='Insert your subject' />
        </div>
        <div className="contact__form-div">
          <textarea name="" id="" cols="30" className='contact__form-input contact__form-area' rows="10" placeholder='Write Your Message'></textarea>
        </div>
      
      <button className='btn btnContact'>Send Message</button>
    </form>

      </div>

    </div>
  )
}

export default Contact