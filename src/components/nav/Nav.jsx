import React from 'react'
import './nav.css'
import logo from '../../images/Logo.png'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
      <section className='section-navbar'>
      <div className='navbar-logo'>  
        <Link className='logo' to="/"><img  src={logo} alt="Logo"/></Link> 
      </div>
      <div className='navbar-content'>
        <nav className='nav-content'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
{/*           <Link to="/about">About</Link> */}
          <Link to="/Reviews">Testimonials</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
      </section>
    )
  }
  
  export default Nav
