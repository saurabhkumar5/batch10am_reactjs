import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className="header">
         <div>Swiggy</div>
        
          {/* <nav>
           <Link to="/"> <span>Home</span></Link>
          <Link to="/about"> <span>About</span></Link>
          <Link to="/services"> <span>Services</span></Link>
           <Link to="/contact"><span>contact</span></Link>
           </nav>  */}
         

          <nav>
           <NavLink to="/" style={({isActive})=>{
           return {backgroundColor:isActive?'yellow':' '}}}> <span>Home</span></NavLink>
          <NavLink to="/about"  style={({isActive})=>{
           return {backgroundColor:isActive?'yellow':' '}}}> <span>About</span></NavLink>
          <NavLink to="/services"  style={({isActive})=>{
           return {backgroundColor:isActive?'yellow':' '}}}> <span>Services</span></NavLink>
           <NavLink to="/contact"  style={({isActive})=>{
           return {backgroundColor:isActive?'yellow':' '}}}><span>contact</span></NavLink>
           </nav>
     
      </header>

    </div>
  )
}

export default Header