import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className="header">
         <div>Swiggy</div>
        
         <nav>
           <Link to="/"> <span>Home</span></Link>
          <Link to="/about"> <span>About</span></Link>
          <Link to="/services"> <span>Services</span></Link>
           <Link to="/contact"><span>contact</span></Link>
           </nav>
     
      </header>

    </div>
  )
}

export default Header