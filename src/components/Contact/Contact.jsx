import React from 'react'
import './contact.css'
import Nav from '../nav/Nav'
import {SiInstagram} from 'react-icons/si'
import {LuFacebook} from 'react-icons/lu'
import {BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='section-contact'>
        <div className='Contact'>
        <Nav/>
        <h1>Contact Us</h1>
          <div className='container contact-content'>
          <h2>Get In Touch</h2>
          <div className='icons'>
              <Link to="https://www.instagram.com/rosesweetsalex/" target='_blank'><SiInstagram/></Link> 
              <Link to="https://www.facebook.com/profile.php?id=100065015080222" target='_blank'><LuFacebook/></Link>
              <Link to="https://wa.me/201278187473" target='_blank'><BsWhatsapp/></Link>
          </div>  
          </div>
        </div>
    </section>
  )
}

export default Contact
