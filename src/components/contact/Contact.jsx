import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
//We will get public key from Account>>API keys>>Public Key
    emailjs.sendForm('service_i91ddvo', 'template_exc5hwq', form.current, '36R9LlocDtQpuAEpE')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>vinayakbirla20@gmail.com</h5>
            <a href="https://mailto:vinayakbirla20@gmail.com" target="_blank">Mail</a>
          </article>
          <article className='contact__option'>
            <GrLinkedin className='contact__option__icon'/>
            <h4>LinkedIn</h4>
            <h5>Shrivinayak Birla</h5>
            <a href="https://www.linkedin.com/in/shrivinayak-birla-24590a214/" target='_blank'>Send Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>WhatsApp</h4>
            <h5>Contact : +91 9156781814</h5>
            <a href="https://api.whatsapp.com/send?phone=919156781814" target='_blank'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = 'name' placeholder='Your Full Name' required/>
          <input type="email" name = 'email' placeholder='Your Email Id' required/>
          <textarea type="text" rows='7'name = 'message' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact