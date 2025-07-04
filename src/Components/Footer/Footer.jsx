import React from "react";
import logo from "/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className=" border-t-3   md:border-t-5 border-black footer footer-horizontal footer-center bg-[#F3F3E0]  text-primary-content p-10">
      <aside className="text-black">
        <img src={logo} className="rotate-90 w-20" alt="" />

        <p className="text-lg md:text-3xl font-bold">jaitam</p>

        <p className="font-medium">Ride. Yes. Rent it. Start riding.</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-black text-xl">
          <Link to='https://www.facebook.com'>
            <FaFacebook></FaFacebook>
          </Link>   
          <Link to='https://www.instagram.com'>
            <FaInstagram></FaInstagram>
          </Link>   
          <Link to='https://www.x.com'>
            <FaTwitter></FaTwitter>
          </Link>   
            
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
