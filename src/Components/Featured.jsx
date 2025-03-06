import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Featured.css';
import bat1 from '../assets/batsman-1.avif'
import bat2 from '../assets/batsman-2.avif'
import bat3 from '../assets/batsman-3.avif'
import bat4 from '../assets/batsman-4.avif'
import bat5 from '../assets/batsman-5.avif'
import bat6 from '../assets/batsman-6.avif'

// import required modules
import { Pagination } from 'swiper/modules';

const Featured = () => {
      return (
            <div className='w-11/12 mx-auto'>
                  <h1 className='uppercase tracking-widest text-xl font-semibold mt-12'>Featured</h1>
                  <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
      >
        <SwiperSlide className='flex flex-col'>
            <img src={bat1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bat2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bat3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bat4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bat5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bat6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
            </div>
      );
};

export default Featured;