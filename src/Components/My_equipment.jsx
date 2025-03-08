import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sport from './Sport';
import { AuthContext } from '../Provider/AuthProvider';
import Card from './Card';

const My_equipment = () => {
      const {user} = useContext(AuthContext);
      const loaded_equipment = useLoaderData();
            const [loading, set_loading] = useState(true);

            const all_equipment = loaded_equipment.filter((equipment) => equipment.user_email === user.email);
            
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
            <div className='w-11/12 mx-auto'>
                  <h1 className='text-center'>This is All Equipment</h1>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 !gap-12'>
                        {
                              all_equipment.map((card) => <Card key={card._id} card={card} ></Card>)
                        }
                  </div>
            </div>
      );
};

export default My_equipment;