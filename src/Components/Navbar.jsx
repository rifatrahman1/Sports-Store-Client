import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaRegHeart } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import './Navbar.css'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
      const {user} = useContext(AuthContext);
      console.log(user);
      return (
            <div >
                  <div className='flex items-center justify-around py-5 bg-[#fe0000] text-white font-bold'>
                        <h1>FREE BD DELIVERY ON ORDERS OVER £70</h1>
                        <Link to={'/'}><h1 className='underline'>SALE - UP TO 80% OFF!</h1></Link>
                        <h1>PAY OVER TIME WITH KLARNA & PAYPAL</h1>
                  </div>
                  <div className='bg-[#202020] py-3 !gap-7 flex items-center text-[#8f9291] font-semibold text-[14px] pl-5 '>
                        <p className='hover:text-white cursor-pointer'>CRICKET</p>
                        <p className='hover:text-white cursor-pointer'>SOCCER</p>
                        <p className='hover:text-white cursor-pointer'>RUNNING</p>
                        <p className='hover:text-white cursor-pointer'>LIFESTYLE</p>
                        <p className='hover:text-white cursor-pointer'>BASKETBALL</p>
                        <p className='hover:text-white cursor-pointer'>TENNIS</p>
                        <p className='hover:text-white cursor-pointer'>RUGBY</p>
                        <p className='hover:text-white cursor-pointer'>GOLF</p>
                  </div>
                  <div className='bg-[#111111] text-white py-5 flex justify-between items-center px-10'>
                        <div className="">
                              <div className='flex items-center !gap-6'>
                                    <img className='w-[50px] rounded-full' src={logo} alt="Logo" />
                                    <h1 className='mono text-2xl font-semibold tracking-widest name'>CRICKET BLAST</h1>
                              </div>
                        </div>
                        <div className=' w-1/3'>
                              <input className='bg-white text-gray-500 w-full py-3 pl-3 rounded-lg' type="search" placeholder='Search cricket blast specialist store' />
                        </div>
                        <div className='!flex'>
                              <div className='border-r-2 h-10 items-center flex'>
                                    <Link to={'/login'} className='text-white font-semibold text-lg  border-gray-500'>Login</Link>
                              </div>
                              <div className='flex pl-5 items-center !gap-5'>
                                    <img className='w-[30px] rounded-full' src={logo} alt="" />
                                    <i className='text-2xl'><FaRegHeart /></i>
                                    <i className='text-2xl'><BsBag /></i>
                              </div>
                        </div>
                  </div>
                  <div className='bg-white py-5 flex items-center gap-20 text-xl space-x-14 pl-10'>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>Home</NavLink>
                        <NavLink to={'/all_sports_equipment'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>All Sports Equipment</NavLink>
                        <NavLink to={'/add_equipment'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>Add Equipment</NavLink>
                        <NavLink to={'/my_equipment_list'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>My Equipment List</NavLink>
                  </div>
            </div>
      );
};

export default Navbar;