import React from 'react';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sport = ({sport}) => {
      const {_id, item_name, price, rating, image, status} = sport || {};
      return (
            <div>
                  <Link to={`/details/${_id}`} key={sport._id} className='bg-[#f5f5f5]'>
                                    <img className=' w-[360px] h-[330px] rounded-t-lg' src={image} alt="" />
                                    <div className='space-y-2.5 mt-4 p-5'>
                                          <h3 className='text-lg !font-semibold'>{item_name}</h3>
                                          <p className='font-semibold'>Price : {price} $</p>
                                          <p className='font-semibold flex items-center'>Rating : <span><IoStar className='text-amber-400 text-lg' /></span> {rating}</p>
                                          <p className={`inline px-3 py-1 rounded-lg font-semibold ${status === "in-stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                {sport.status}
                                          </p>
                                    </div>

                              </Link>
            </div>
      );
};

export default Sport;