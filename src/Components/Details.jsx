
import React, { useEffect, useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router-dom';
import sponsor from '../assets/sponsor.png'
import { FaShoppingCart } from 'react-icons/fa';

const Details = () => {
      const [sports, set_sports] = useState(null);
      const [count, setCount] = useState(1); 
      const [cartCount, setCartCount] = useState(0); 

      const handleIncrease = () => {
            setCount(count + 1);
      };

      const handleDecrease = () => {
            if (count > 1) {
                  setCount(count - 1);
            }
      };

      const handleAddToCart = () => {
            setCartCount(cartCount + count);
            setCount(1); 
      };
      const sports_data = useLoaderData();
      const { id } = useParams();

      useEffect(() => {
            const sportss_data = Object.values(sports_data).find((data) => data._id === id);
            set_sports(sportss_data)
      }, [sports_data, id])

      const { item_name, category_name, image, description, price, rating, delivery, customization, status } = sports || {};

      return (
            <div className='bg-[#f7f7f7] py-24'>
                  <div className='bg-white flex items-center !gap-16 rounded-lg p-20  !w-9/12 shadow-lg mx-auto'>
                        <div>
                              <img className='w-[400px] rounded-lg' src={image} alt="" />
                        </div>
                        <div className='text-lg space-y-3'>
                              <h3 className='text-2xl font-semibold'>Name : {item_name}</h3>
                              <p><strong>Category</strong> : {category_name}</p>
                              <p><strong>Description</strong> : {description}</p>
                              <p><strong>Customization</strong> : {customization ? customization : 'No customization'}</p>

                              <p className='font-semibold flex items-center'>Rating : <span><IoStar className='text-amber-400 text-lg' /></span> {rating}</p>
                              <p className='font-semibold'>Delivery Time : {delivery} Days</p>
                              <p className={`inline px-3 py-1 rounded-lg font-semibold ${status === "in-stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                    {status}
                              </p>


                              <div className="border border-gray-400 p-4 rounded-lg shadow-md w-[400px] mt-7">
                              <p className='text-red-400 text-2xl'>Price : {price} $</p>
                                    <div className="space-y-2.5 mt-4">
                                         
                                          <div className="flex items-center space-x-3 mt-3">
                                                <button
                                                      onClick={handleDecrease}
                                                      className="bg-gray-100 text-black px-3 py-1 rounded-lg"
                                                >
                                                      -
                                                </button>
                                                <span className="text-xl font-bold">{count}</span>
                                                <button
                                                      onClick={handleIncrease}
                                                      className="bg-gray-100 text-black px-3 py-1 rounded-lg"
                                                >
                                                      +
                                                </button>
                                          </div>
                                          <button
                                                onClick={handleAddToCart}
                                                className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-3 w-full flex items-center justify-center"
                                          >
                                                <FaShoppingCart className="mr-2" />
                                                ADD TO CART
                                          </button>

                                          {/* 🛍️ Cart Summary */}
                                          {cartCount > 0 && (
                                                <p className="mt-3 text-green-600 font-semibold">
                                                      🛍️ Added to cart: {cartCount} items
                                                </p>
                                          )}
                                    </div>
                              </div>



                        </div>
                        <div>
                              <img src={sponsor} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Details;