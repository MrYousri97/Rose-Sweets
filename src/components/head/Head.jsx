import React from 'react'
import './head.css'
import {LuChefHat} from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'
const Head = () => {
  const navigate = useNavigate();
  return (
    <header>
        <div className=' content'>
            <Nav />
            <div className='contents'>
                <h2><LuChefHat/></h2>
                <h1>ROSE SWEETS</h1>
                <p> to delight your loved ones</p>
            </div>   
                <div className='contents-button'>
                    <button onClick={()=>navigate('/menu')} type='button'><span className='span-head'></span>VIEW THE MENU</button>
                    <button onClick={()=> window.open('https://wa.me/201278187473')} type='button'><span className='span-head'></span>ORDER NOW !</button>
                </div> 
        </div> 
    </header>
  )
}

export default Head