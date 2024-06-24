import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='footer'>
      <a><FaFacebook /> facebook </a>
      <a><FaInstagramSquare/>instagram</a>
      <a>twitter</a>
      <a>linkdien</a>
      </div>
    </>
  )
}

export default Footer