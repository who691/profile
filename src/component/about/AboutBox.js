import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-fire"></i>

          <div className="">
            <h3 className="about__tilte">23</h3>
            <span className="about__subtitle">Project completed</span>
          </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

          <div className="">
            <h3 className="about__tilte">5670</h3>
            <span className="about__subtitle ">Cup of coffee</span>
          </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

          <div className="">
            <h3 className="about__tilte">20</h3>
            <span className="about__subtitle">Satisfied clients</span>
          </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

          <div className="">
            <h3 className="about__tilte">8</h3>
            <span className="about__subtitle">Nominees winner</span>
          </div>

        </div>

      
    </div>
  )
}

export default AboutBox