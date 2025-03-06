import React from 'react';
import ton from '../assets/ton.jpg'

const Ton = () => {
      return (
            <div className='w-full relative mt-16'>
                  <img className='w-full h-[200px] bg-cover ' src={ton} alt="" />
                  <div className='absolute top-[35%] left-[50%] text-white'>
                        <h1 className='text-4xl font-semibold tracking-widest'>SALE</h1>
                        <p className='mt-3 text-xl'>Up to 20% off</p>
                  </div>
            </div>
      );
};

export default Ton;