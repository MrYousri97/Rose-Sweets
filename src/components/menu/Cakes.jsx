import React from 'react'
import './menu.css'
import data from './data'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom'
import {BsWhatsapp} from 'react-icons/bs'
SwiperCore.use([Pagination]);
const Cakes = () => {
  return (
    <>
    <section className='Cakes'>
      <h1>Cakes</h1>
      <Swiper className="cake__container" 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
  >
          {
            data.map(({id,image})=>{
              return(
                <SwiperSlide key={id} className='cake__item'>
                    <div className="cake__item-img">
                    <img src={image} width={500} height={500}/>
                    </div>
                </SwiperSlide>
              )   
            })
          }     
        </Swiper>
      <h3>To ask about Cakes Prices</h3>
      <Link className='Link' to="https://wa.me/201278187473" target='_blank'><BsWhatsapp/></Link>
    </section>
    </>
  )
}

export default Cakes