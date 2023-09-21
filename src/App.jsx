import React from 'react'
/* import './index.css' */
import Head from './components/head/Head'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import {Routes,Route,useLocation} from 'react-router-dom'
import Reviews from './components/review/Reviews'
import Contact from './components/Contact/Contact'
import MenuAR from './components/menu/MenuAR'
const App = () => {
  const location = useLocation();
  return (
    <>
    <Routes location={location} key={location.pathname}>
      <Route index element={<Head />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/menuAR' element={<MenuAR />} />
      <Route path='/about' element={<About />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App