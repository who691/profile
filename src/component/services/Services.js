

import React from 'react'

import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'


import './Services.css'

const Services = () => {


  const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 3,
      image: Image3,
      title: "Photography",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
  ];
  

  return (
    <section className="services container section" id='services'>

<h2 className="service__title">
Services
</h2>

<div className="services__container grid">
  {data.map((item,key)=>{
    return(
      <div className="services__card" key={key}>
        <img src={item.image} className='services__image' />
        <h3 className="services__title">{item.title}</h3>
         <p className="services__description">{item.description}</p>
      </div>
    )
  })}
</div>

    </section>
  )
}

export default Services