import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Featured.css';
import bat1 from '../assets/others1.webp';
import bat2 from '../assets/others2.avif';
import bat3 from '../assets/others3.jpg';
import bat4 from '../assets/others4.avif';
import bat5 from '../assets/others5.avif';
import bat6 from '../assets/others6.avif';
import bat7 from '../assets/others7.avif';

// import required modules
import { Pagination } from 'swiper/modules';

const Others = () => {
  // 🛒 প্রতিটি ইমেজের সাথে টেক্সট (title) অ্যাড করা হলো
  const slides = [
    { image: bat1, title: "Adults Wicket Keeping" },
    { image: bat2, title: "Kids Equipment" },
    { image: bat3, title: "Kits Shoes" },
    { image: bat4, title: "Match Day Clothing" },
    { image: bat5, title: "Kids Helmets" },
    { image: bat6, title: "Accessories" },
    { image: bat7, title: "Kids Wicket Keeping" },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="uppercase tracking-widest text-xl font-semibold mt-12 text-center py-7">
        Other Departments
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
      >
        {/* 🔥 Swiper Slide Loop */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <img className=" rounded-md shadow-lg" src={slide.image} alt={slide.title} />
            <p className="mt-3 text-lg font-semibold text-gray-700">{slide.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Others;
