import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
 const [name ,setName] = useState("");
 const [email,setEmail] = useState("");
 const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6qxm4j9', 'template_urxfm3f', form.current, 'z4I9THgacGH8azkf0')
      .then((result) => {
          console.log(result.text,"messagesend");
          alert("message ssend")
      }, (error) => {
          console.log(error.text);
          alert(error)
      });
      setEmail("");
      setName("");
      setMessage("");
  };
  return (
    <section id='contact'>
      <h5 data-aos="flip-left">Get In Touch</h5>
      <h2 style={{fontSize:"3rem"}} data-aos="flip-left">Contact me</h2>

      <div  data-aos="fade-up" className="container contact__container">
      
        <form ref={form} onSubmit={sendEmail}>
          <input  type='text' style={{color:"black",padding:"1rem"}} name="user_name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Full Name' required />
          <input type='email' style={{color:"black",padding:"1rem"}} name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
          <textarea name="message" style={{color:"black",padding:"1rem"}}  rows="7" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      {AOS.init()}
       </section>
  )
}

export default Contact
