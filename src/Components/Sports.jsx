import React from 'react';
import { IoStar } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import Sport from './Sport';

const Sports = () => {
      const loader_data = useLoaderData();
      console.log('Loader data', loader_data);
      return (
            <div>
                  <h1 className='uppercase tracking-widest text-center text-2xl py-12'>Our Departments</h1>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 !gap-12'>
                        {
                              loader_data.map((sport) => <Sport key={sport._id} sport={sport}></Sport>)
                        }
                  </div>
            </div>
      );
};

export default Sports;