import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { IoPencil, IoStar } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
      const { _id, item_name, price, rating, image, status } = card || {};
      return (
            <div>
                  <div key={card._id} className='bg-[#f5f5f5]'>
                        <img className=' lg:w-[360px] w-full h-[330px] rounded-t-lg' src={image} alt="" />
                        <div className=' mt-4 p-5 flex items-center justify-between'>
                              <div className='space-y-4'>
                                    <h3 className='text-lg !font-semibold'>{item_name}</h3>
                                    <p className='font-semibold'>Price : {price} $</p>
                                    <p className='font-semibold flex items-center'>Rating : <span><IoStar className='text-amber-400 text-lg' /></span> {rating}</p>
                                          <p className={`inline px-3 py-1 rounded-lg font-semibold ${status === "in-stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                {card.status}
                                          </p>
                              </div>

                              <div className='space-y-3.5'>
                                    <Link to={`/details/${_id}`} className='flex items-center !gap-3'>
                                          <div className='bg-[#D2B48C] p-2 rounded-lg'>
                                                <FaRegEye className='text-white ' />
                                          </div>
                                          <p className='font-bold text-[#D2B48C]'>View</p>
                                    </Link>
                                    <Link to={`/update_sports/${_id}`} className='flex items-center !gap-3'>
                                          <div className='bg-black p-2 rounded-lg'>
                                                <IoPencil className='text-white ' />
                                          </div>
                                          <p className='font-bold'>Edit</p>
                                    </Link>
                                    <Link >
                                          <button onClick={() => handle_delete(_id)} className='flex items-center !gap-3 cursor-pointer'>
                                                <div className='bg-red-500 cursor-pointer p-2 rounded-lg'><MdDelete className='text-white ' /></div>
                                                <p className='font-bold text-red-500'>Delete</p>
                                          </button>
                                    </Link>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Card;