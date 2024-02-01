


import React from 'react'

import './Resume.css'
import Data from './Data'
import Card from './Card'

const Resume = () => {

  return (
    <div className="resume container section" id='resume'>

<h2 className="resume__title">
Experience
</h2>

<div className="resume__container grid">


  <div className="timeline grid">

{Data.map((val,key)=>{
 if(val.category=='education'){
  return(
    <Card  key={key} icon={val.icon} year={val.year} desc={val.desc} title={val.title}/>
  )
 }
})}

  </div>

  <div className="timeline grid">

{Data.map((val,key)=>{
 if(val.category=='experience'){
  return(
    <Card key={key} icon={val.icon} year={val.year} desc={val.desc} title={val.title}/>
  )
 }
})}

  </div>

  
</div>

    </div>
  )
}

export default Resume

























 





























