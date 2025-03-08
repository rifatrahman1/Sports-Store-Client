import React from 'react';
import pic1 from '../assets/pic1.avif'
import pic2 from '../assets/pic2.avif'
import pic3 from '../assets/pic3.avif'
import pic4 from '../assets/pic4.avif'
import pic5 from '../assets/pic5.avif'
import pic6 from '../assets/pic6.avif'
import pic7 from '../assets/pi7.avif'
import './Cricket.css'
import { Link } from 'react-router-dom';

const Cricket = () => {
      return (
            <div>
                  <div className="border-t-1 border-gray-400 my-16"></div>
                  <div className='relative'>
                        <img src={pic1} alt="" />
                        <div className='absolute lg:translate-y-1/2 -translate-y-1/5 top-1/4 left-12 text-white'>
                              <h1 className='lg:text-4xl text-lg font-bold'>Cricket Bats</h1>
                              <p className='font-semibold text-[16px] py-4'>Shop our huge range of bats to suit every player</p>
                              <div className='flex items-center gap-7  text-[#183153]'>
                                    <Link to={'/details/67c88a91cdcd55ece8d5b2d3'}>
                                          <button className='btnn'>
                                                <span>ADULT BATS</span>
                                          </button>
                                    </Link>
                                    <Link to={'/details/67c88a91cdcd55ece8d5b2d3'}>
                                          <button className='btnn'>
                                                <span>KIDS BATS</span>
                                          </button>
                                    </Link>
                              </div>
                        </div>
                  </div>
                  <div className='bg-black p-5 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5'>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic2} alt="" />
                              <p className='text-center py-2 font-semibold'>Gunn & Moore</p>
                        </div>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic3} alt="" />
                              <p className='text-center py-2 font-semibold'>Gray-Nicolls</p>
                        </div>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic4} alt="" />
                              <p className='text-center py-2 font-semibold'>Kookaburra</p>
                        </div>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic5} alt="" />
                              <p className='text-center py-2 font-semibold'>New Balance</p>
                        </div>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic6} alt="" />
                              <p className='text-center py-2 font-semibold'>Chase</p>
                        </div>
                        <div className='bg-white rounded-lg transition-transform duration-300 cursor-pointer hover:scale-90'>
                              <img className='rounded-t-lg' src={pic7} alt="" />
                              <p className='text-center py-2 font-semibold'>DSC</p>
                        </div>
                  </div>
            </div>
      );
};

export default Cricket;