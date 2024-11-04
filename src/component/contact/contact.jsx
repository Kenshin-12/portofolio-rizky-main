import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0vkrzqe', 'template_xxe5kb9', form.current, 'cYXIUNCmnvGVq2mdw')
        
      e.target.reset()
    };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>rizkya7y123@gmail.com</h5>
            <a href="mailto:rizkya7y123@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Muhammad Rizky Ferdiansya</h5>
            <a href="https://m.me/muhammadrizkyferdiansya.ferdiansya.3" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillInstagram className='.contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@_kyr1z_</h5>
            <a href="https://www.instagram.com/_kyr1z_/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='.contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+62 857-7909-1985</h5>
            <a href="https://api.whatsapp.com/send?phone+6285779091985" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}

export default Contact