import React from 'react';
import { Link } from 'react-router-dom';

const Depertment = () => {
      return (
            <div className='w-11/12 mx-auto py-16'>
                  <h2 className='text-xl font-semibold tracking-widest'>SHOP BY DEPERTMENT</h2>
                  <div className='flex flex-wrap items-center !gap-5 mt-10'>
                        <Link to={'/details/67c74a47bb8211066705ca98'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Adult Shoes</p></Link>
                        <Link to={'/details/67c74889bb8211066705ca8d'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Adult Gloves</p></Link>
                        <Link to={'/details/67c7cc1a008a0717acc5d337'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Adult Pads</p></Link>
                        <Link to={'/details/67c74848bb8211066705ca8c'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Adult Helmets</p></Link>
                        <Link to={'/details/67c74a88bb8211066705ca99'} ><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Adult Bags & Luggage</p></Link>
                        <Link to={'/details/67c747f7bb8211066705ca8b'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Cricket Balls</p></Link>
                        <Link to={'/details/67c88a91cdcd55ece8d5b2d3'}><p className='font-semibold bg-white hover:bg-[#d8cfcd] px-7 py-3 duration-300'>Cricket Bats</p></Link>
                  </div>
            </div>
      );
};

export default Depertment;