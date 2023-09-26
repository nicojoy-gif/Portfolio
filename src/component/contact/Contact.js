import React, {useRef} from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7g75tc",
        "template_cmhyxj7",
        form.current,
        "IM35wvC4INDr0j4-E"
    )
    e.target.reset()
  
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h3>Email</h3>
            <p>orjionyinyechi080@gmail.com</p>
            <a href="mailto:orjionyinyechi080@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h3>Messenger</h3>
            <p>orjionyinyechi</p>
            <a href="https://m.me/orji.onyinyechi">Send a message</a>
          </article>
          <article className="contact-option">
            <RiWhatsappLine className="contact-icon" />
            <h3>Whatsapp</h3>
            <p>+2348097047076</p>
            <a href="https://api.whatsapp.com/send?phone=+2348097047076">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea rows='5' name='message' columns='8' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact