
import React from 'react'

import './About.css'

import about from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
<h2 className="section__title">
  About Me
</h2>

<div className="about__container grid">
<img src={about} className='about__image' />



<div className="about__data grid">

<div className="about__info">
  <p className="about__description">
    I'm Abenezer Habtamu, a full stack web and mobile application developer from Addis Ababa, Ethiopia. I have rich experience
    in web site design and building and customization, also i am good at building mobile applications.
  </p>

  <a href="#" className="btn">Download Cv</a>
</div>

<div className="about__skills grid">


  <div className="skills__data">
    <div className="skills__titles">
<h3 className="skills__name">Development</h3>
<span className="skills__number ">90%</span>
    </div>

<div className="skills__bar">
  <span className="skills__percentage development"></span>
</div>

  </div>


  <div className="skills__data">
    <div className="skills__titles">
<h3 className="skills__name">UI/UX design</h3>
<span className="skills__number">80%</span>
    </div>

<div className="skills__bar">
  <span className="skills__percentage ui"></span>
</div>

  </div>

  
  <div className="skills__data">
    <div className="skills__titles">
<h3 className="skills__name">Photography</h3>
<span className="skills__number">60%</span>
    </div>

<div className="skills__bar">
  <span className="skills__percentage photo"></span>
</div>

  </div>


</div>

</div>
</div>

<AboutBox/>

    </section>
  )
}

export default About