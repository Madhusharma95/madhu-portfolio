import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 data-aos="fade-left">Madhu Sharma</h1>
        <h5 data-aos="fade-down" className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
      </div>
       <div className="me" style={{marginTop:"2rem"}}>
        <img src={ME} alt="me" />
       </div>
       <a href='#contact' className='scroll__down'>Scroll Down</a>
       {AOS.init()}
    </header>
    
  )
}

export default Header
