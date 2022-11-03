import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2 style={{fontSize:"3rem"}} data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">My Experience</h2>

      <div className=" container experience__container">
        <div className="experience__frontend">
         <h3>Frontend Development</h3>
         <div className="experience__content">
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
        <div>
         <h4>Bootstrap</h4>
       <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
       </article>
         </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
         <div className="experience__content">
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Nodejs</h4>
            <small className='text-light'>Basic</small>
            </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MongoDb</h4>
            <small className='text-light'>Intermediate</small>
            </div>
        </article>
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MySql</h4>
            <small className='text-light'>Basic</small>
           </div>
        </article>
        
       
       </div>
        </div>
      </div>
{AOS.init()}
        </section>
  )
}

export default Experience
