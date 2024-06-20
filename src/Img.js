


import React from 'react'
import './Img.css'

function Img({name,rating,img,sector}) {
  return (
    <div>
        <div className="box">
         <img src={img}/>
         <h1>{name}</h1>
         <span>rating:{rating} star</span>
         <p>location: sector-{sector}</p>
       </div>
    </div>
  )
}

export default Img;
