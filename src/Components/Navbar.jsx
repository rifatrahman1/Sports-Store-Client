import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaRegHeart } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import './Navbar.css'
import { AuthContext } from '../Provider/AuthProvider';
import Theme_toggle from './Theme_toggle';

const Navbar = () => {
      const { user, sign_out } = useContext(AuthContext);

      return (
            <div >
                  <div className='relative flex flex-col lg:flex-row items-center justify-center lg:justify-around py-5 bg-[#fe0000] text-white font-bold'>
                        <h1>FREE BD DELIVERY ON ORDERS OVER £70</h1>
                        <Link to={'/'}><h1 className='underline'>SALE - UP TO 80% OFF!</h1></Link>
                        <h1>PAY OVER TIME WITH KLARNA & PAYPAL</h1>
                  </div>
                  <div className='bg-[#202020] py-3 !gap-7 flex flex-wrap items-center text-[#8f9291] font-semibold text-[14px] pl-5 '>
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
                        <div className=' w-1/3 lg:flex hidden'>
                              <input className='bg-white text-gray-500 w-full py-3 pl-3 rounded-lg' type="search" placeholder='Search cricket blast specialist store' />
                        </div>
                        <div className='lg:!flex hidden'>
                              <div className='pr-7'>
                                    <Theme_toggle></Theme_toggle>
                              </div>
                              <div className='border-r-2 h-10 items-center flex'>
                                    <div className='pr-5'>
                                          {
                                                user && user?.email ? <button className='text-white cursor-pointer font-semibold text-lg  border-gray-500' onClick={sign_out}>Sign out</button> : <Link to={'/login'} className='text-white font-semibold text-lg border-gray-500'>Login</Link>
                                          }
                                    </div>
                              </div>
                              <div className='flex pl-5 items-center !gap-5'>
                                    {
                                          user?.email && (<img title={user?.displayName || user.name} className='cursor-pointer w-[30px] rounded-full' src={user?.photoURL || user?.photo} alt="" />)
                                    }
                                    <i className='text-2xl'><FaRegHeart /></i>
                                    <i className='text-2xl'><BsBag /></i>
                              </div>
                        </div>
                        <div className='lg:hidden'>
                              <input id="checkbox2" type="checkbox" />
                              <label className="toggle toggle2" htmlFor="checkbox2">
                                    <div id="bar4" className="bars"></div>
                                    <div id="bar5" className="bars"></div>
                                    <div id="bar6" className="bars"></div>
                              </label>
                        </div>
                  </div>
                  <div className='bg-white py-5 flex items-center md:!gap-14 !gap-7 lg:text-xl  md:pl-10 pl-5'>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>Home</NavLink>
                        <NavLink to={'/all_sports_equipment'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>All Sports Equipment</NavLink>
                         {
                              user && user.email ? <>
                              <NavLink to={'/add_equipment'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>Add Equipment</NavLink>
                              <NavLink to={'/my_equipment_list'} className={({ isActive }) => isActive ? 'bg-black text-white px-7 py-1 rounded-lg duration-300' : ''}>My Equipment List</NavLink></> : <></>
                         }
                  </div>
            </div>
      );
};

export default Navbar;