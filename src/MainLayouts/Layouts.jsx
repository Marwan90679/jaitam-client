import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-365px)] '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;