import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import './Private.css'
import { AuthContext } from '../Provider/AuthProvider';

const Private_route = ({ children }) => {
      const {user} = useContext(AuthContext);
      const [loading, set_loading] = useState(true);
      const location = useLocation();
      
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
      if (!user) {
            return <Navigate state={{ from: location.pathname }} to={'/login'}></Navigate>
      }
      return children
};

export default Private_route;