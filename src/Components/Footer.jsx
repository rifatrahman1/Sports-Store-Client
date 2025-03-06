import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebook, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
      return (
            <div className='bg-black text-white py-24 mt-2'>
                  <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                        <div>
                              <div className='flex items-center !gap-6'>
                                    <img className='w-[50px] rounded-full' src={logo} alt="Logo" />
                                    <h1 className='mono text-2xl font-semibold tracking-widest name'>CRICKET BLAST</h1>
                              </div>
                        </div>
                        <div>
                              <h3 className='font-semibold tracking-widest text-lg uppercase'>My Account</h3>
                              <p className='font-medium leading-6 mt-5'>Address Book <br />
                                    My Details <br />
                                    Order History <br />
                                    My Preferences <br />
                                    Premier Delivery</p>
                        </div>
                        <div>
                              <h3 className='font-semibold tracking-widest text-lg'>HELP & INFO</h3>
                              <p className='font-medium leading-6 mt-5'>Help and FAQs <br />
                                    Delivery <br />
                                    Returns <br />
                                    Returns Advice <br />
                                    Pro:Direct Careers <br />
                                    Contact Us</p>
                        </div>
                        <div>
                              <h3 className='font-semibold tracking-widest text-lg uppercase'>About Cricket Blast</h3>
                              <p className='font-medium leading-6 mt-5'>Family owned and run since 1981 <br />

                                    In the Company of Kings & Queens <br />

                                    Over 100,000 5 Star Reviews on Trustpilot <br />

                                    Partnered with the PFA and ESFA <br />

                                    Teamwear supplier to 35 Pro and Semi-Pro Clubs <br />

                                    Proud Sponsor of Schools Football Week</p>
                        </div>
                        <div>
                              <h3 className='font-semibold tracking-widest text-lg uppercase'>Legal</h3>
                              <p className='font-medium leading-6 mt-5'>© 2005-2025 Pro:Direct Sport <br />

                                    Terms and Conditions <br />
                                    Privacy Policy</p>
                              <div className='flex items-center !gap-5 mt-5 text-2xl'>
                                    <FaSquareInstagram />
                                    <FaYoutube />
                                    <FaFacebook />
                              </div>
                        </div>
                  </div>
                  <footer className=" text-white text-center py-6 mt-12">
                        <p className="text-lg font-semibold flex justify-center">All Rights Reserved | <h1 className='mono text-2xl font-semibold tracking-widest name'>CRICKET BLAST</h1></p>
                        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Your Company. Developed by Rifat Rahman.</p>
                  </footer>
            </div>
      );
};

export default Footer;