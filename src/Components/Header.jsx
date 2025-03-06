import React, { useRef } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import bat from '../assets/bat.jpg'
import shoes from '../assets/shows.jpg'
import pads from '../assets/pads.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // ✅ সঠিক ইমপোর্ট

const Header = () => {
      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };

      return (
            <div>
                  
                  <div>
                        <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                              }}
                              pagination={{ clickable: true }}
                              navigation={true}
                              modules={[Autoplay, Pagination, Navigation]} // ✅ এখানে ঠিক করা হয়েছে
                              onAutoplayTimeLeft={onAutoplayTimeLeft}
                              className="mySwiper"
                        >
                              <SwiperSlide>
                                    <img src={bat} alt="" />
                                    <div className='absolute left-10 bottom-10 text-white '>
                                          <h1 className='text-left font-bold text-2xl mb-2'>RETURN OF THREE STRIPES</h1>
                                          <p>adidas Incurza range, exclusive to Cricekt Blast</p>
                                    </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <img src={shoes} alt="" />
                                    <div className='absolute left-10 bottom-10 text-white '>
                                          <h1 className='text-left font-bold text-2xl mb-2'>FRESS FOR 2025</h1>
                                          <p>Save up t 20% on the Neocors, Strators and more</p>
                                    </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <img src={pads} alt="" />
                                    <div className='absolute left-10 bottom-10 text-white '>
                                          <h1  className='text-left font-bold text-2xl mb-2'>DOMINATE THIS SESSION</h1>
                                          <p>Sort your pre session prep with the lates turf shoes</p>
                                    </div>
                              </SwiperSlide>
                              <div className="autoplay-progress" slot="container-end">
                                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                                          <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent}></span>
                              </div>
                        </Swiper>
                  </div>
            </div>
      );
};

export default Header;
