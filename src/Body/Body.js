import React from 'react'
import data from '../Data';
import Img from '../Img'

function Body() {
  return (
       <div className="container">
        
        {
          data.map((value)=>{
               console.log(value.name)
             return <Img name={value.name} rating={value.rating} sector={value.sector} img={value.img}/>
          })
        }
     </div>
  )
}

export default Body