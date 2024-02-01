import React, { useState } from 'react'
import './Portofolio.css'
import Menu from './Menu'

const Portofolio = () => {

  const [items,setItems]=useState(Menu)


  const filterItem=(categoryItem)=>{

    const updatedItems=Menu.filter((curElem)=>{
      return curElem.category===categoryItem ;
    })

    setItems(updatedItems)

  }


  return (
    <section className="work container section" id='portofolio'>

   <h2 className="section__title">
   Recent Works
   </h2>



   <div className="work__filters">
    <span  onClick={()=>setItems(Menu)}  className="work__item">Everything</span>
    <span onClick={()=>filterItem("Creative")} className="work__item">Creative</span>
    <span onClick={()=>filterItem("Art")} className="work__item">Art</span>
    <span onClick={()=>filterItem("Design")} className="work__item">Design</span>
    <span onClick={()=>filterItem("Branding")} className="work__item">Branding</span>
   </div>


   <div className="work__container grid">
{items.map((val,key)=>{
  return(
    <div className="work__card" key={key}>

  <div className="work__thumbnail">
    <img src={val.image} alt="" className="work__image" />
    <div className="work__mask"></div>
  </div>

  <span className="work__category">{val.category}</span>
  <h3 className="work__title">{val.title}</h3>
  <a href="#" className="work__button">
    <i className="icon-link work__button-icon"></i>
  </a>

    </div>
  )
})}
   </div>

    </section>
  )
}

export default Portofolio