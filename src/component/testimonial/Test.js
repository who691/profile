import React from 'react'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Test.css'

import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'


const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];


const Test = () => {

  return (
    <div className="test container section">
      <h2 className="test__title">
      Clients & Reviews
      </h2>

     <Swiper // install Swiper modules
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    grabCursor={true}
    pagination={{ clickable: true }} className="test__container grid">
{data.map((val,key)=>{
  return(
    <SwiperSlide
    className="test__item" key={val.id}>
      <div className="thumb">
        <img src={val.image} alt="" />
      </div>
      <h3 className="test__title">{val.title}</h3>
      <span className="test__subtitle">{val.subtitle}</span>
      <div className="test__comment">{val.comment}</div>
    </SwiperSlide>
  )
})}
     </Swiper>

    </div>
  )
}

export default Test