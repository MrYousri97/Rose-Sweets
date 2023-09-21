import React from 'react'
import './review.css'
import Nav from '../nav/Nav'
import dataTest from './dataTest'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);
const Reviews = () => {
    return (
      <section className='section-review'>
      <div className=' section-content'>
        <Nav/>
        <h1>Testimonials</h1>
        <Swiper className="reviews__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
  >
          {
            dataTest.map(({id,image})=>{
              return(
                <SwiperSlide key={id} className='reviews__item'>
                    <div className="reviews__item-img">
                    <img src={image} width={550} height={550}/>
                    </div>
                </SwiperSlide>
              )   
            })
          }     
        </Swiper>
      </div>
      </section>
    )
  }

export default Reviews