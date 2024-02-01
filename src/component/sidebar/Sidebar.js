

import React, { useState } from 'react'

import Logo from '../../assets/logo.svg'

import './Sidebar.css'

const Sidebar = () => {

  const [toogle,showMenu]=useState(false)

  return (

    <>
     <aside className={toogle? 'aside show__menu' : 'aside'} >

<a href="#home" className="nav_logo">
  <h2 style={{marginBottom:'10px'}}>AB.</h2>
 { /* <img src={Logo} alt=""  className='nav__logo-image' /> */ }
</a>


<nav className="nav">
  <div className="nav__menu">
    <ul className="nav__list">

<li className="nav__item">
   <a href="#home" className="nav__link"> <i className="icon-home"></i></a>
</li>


<li className="nav__item">
  <a href="#about" className="nav__link"><i className="icon-user-following"></i></a>
</li>


<li className="nav__item">
  <a href="#services" className="nav__link"><i className="icon-briefcase"></i></a>
</li>


<li className="nav__item">
  <a href="#resume" className="nav__link"><i className="icon-graduation"></i></a>
</li>


<li className="nav__item">
  <a href="#portofolio" className="nav__link"><i className="icon-layers"></i></a>
</li>


<li className="nav__item">
  <a href="#blog" className="nav__link"><i className="icon-note"></i></a>
</li>


<li className="nav__item">
  <a href="#contact" className="nav__link"><i className="icon-bubble"></i></a>
</li>

    </ul>


  </div>
</nav>


<div className="nav__footer">
  <span className="copyright">
   All Right Reserved &copy; 2024 Ewneta PLC
  </span>
</div>

   </aside>
   
   
   <div  className={toogle ? "nav__toggle nav__toggle-open" : "nav__toggle" } onClick={()=>showMenu(!toogle)} >
   { toogle ? <i class="fa-sharp fa-solid fa-x"></i> :  <i className="icon-menu"></i> } 
   </div>

   </>

  
  )
}

export default Sidebar