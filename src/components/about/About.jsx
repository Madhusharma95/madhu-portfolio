import React from 'react'
import './about.css'
import ME from '../../assets/profileImage2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2  data-aos="zoom-in" style={{fontSize:"3rem"}}>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
       <div className="about__me-image"  style={{height:"100%",width:"100%"}}>
        <img src={ME} alt="About Image"/>
       </div>
        </div>
         <div className="about__content">
             <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                   <h5>Experience</h5>
                   <small>Fresher</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                   <h5>Clients</h5>
                   <small>No one</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                   <h5>Projects</h5>
                   <small>3</small>
              </article>
             </div>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit harum quo aut, explicabo, voluptatem, 
              a nobis amet voluptate ex eveniet nemo eos repellendus! Tempora, eius minus. Nobis, consequatur a!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             </p>

             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>

      </div>
{ AOS.init()}
        </section>
  )
}

export default About
