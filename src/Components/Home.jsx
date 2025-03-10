import React, { useEffect, useState } from 'react';
import Header from './Header';
import Depertment from './Depertment';
import Ton from './Ton';
import Featured from './Featured';
import Sports from './Sports';
import Others from './Others';
import Cricket from './Cricket';

const Home = () => {
      const [loading, set_loading] = useState(true);
      
      useEffect(() => {
            const timer = setTimeout(() => {
                  set_loading(false);
            }, 500);
            return () => clearTimeout(timer);
      }, []);

      if (loading) {
            return (
                  <div className='flex justify-center items-center min-h-screen'>
                        <div class="box-of-star1">
                              <div className="star star-position1"></div>
                              <div className="star star-position2"></div>
                              <div className="star star-position3"></div>
                              <div className="star star-position4"></div>
                              <div className="star star-position5"></div>
                              <div className="star star-position6"></div>
                              <div className="star star-position7"></div>
                        </div>
                        <div className="box-of-star2">
                              <div className="star star-position1"></div>
                              <div className="star star-position2"></div>
                              <div className="star star-position3"></div>
                              <div className="star star-position4"></div>
                              <div className="star star-position5"></div>
                              <div className="star star-position6"></div>
                              <div className="star star-position7"></div>
                        </div>
                        <div className="box-of-star3">
                              <div className="star star-position1"></div>
                              <div className="star star-position2"></div>
                              <div className="star star-position3"></div>
                              <div className="star star-position4"></div>
                              <div className="star star-position5"></div>
                              <div className="star star-position6"></div>
                              <div className="star star-position7"></div>
                        </div>
                        <div className="box-of-star4">
                              <div className="star star-position1"></div>
                              <div className="star star-position2"></div>
                              <div className="star star-position3"></div>
                              <div className="star star-position4"></div>
                              <div className="star star-position5"></div>
                              <div className="star star-position6"></div>
                              <div className="star star-position7"></div>
                        </div>
                        <div data-js="astro" className="astronaut">
                              <div className="head"></div>
                              <div className="arm arm-left"></div>
                              <div className="arm arm-right"></div>
                              <div className="body">
                                    <div className="panel"></div>
                              </div>
                              <div className="leg leg-left"></div>
                              <div className="leg leg-right"></div>
                              <div className="schoolbag"></div>
                        </div>
                  </div>
            );
      }
      return (
            <div>
                  <Header></Header>
                  <div className='bg-[#f9f5f4]'>
                        <Depertment></Depertment>
                  </div>
                  <div className='w-11/12 mx-auto'>
                        <Ton></Ton>
                  </div>
                  <div className='border-b-2 border-gray-400 pb-12'>
                        <Featured></Featured>
                  </div>
                  <div className='w-11/12 mx-auto '>
                        <Sports></Sports>
                  </div>
                  <div>
                        <Cricket></Cricket>
                  </div>
                  <div>
                        <Others></Others>
                  </div>
                  <div>
                        
                  </div>
            </div>
      );
};

export default Home;