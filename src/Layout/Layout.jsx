import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  {/* footer */}
                  <Footer></Footer>
            </div>
      );
};

export default Layout;