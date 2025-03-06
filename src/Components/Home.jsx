import React from 'react';
import Header from './Header';
import Depertment from './Depertment';
import Ton from './Ton';
import Featured from './Featured';
import Sports from './Sports';
import Others from './Others';

const Home = () => {
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
                        <Others></Others>
                  </div>
                  <div>
                        
                  </div>
            </div>
      );
};

export default Home;