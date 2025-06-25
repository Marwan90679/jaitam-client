import React from "react";

import Hero from "../../Components/Header/Hero";

import WhyUs from "../../Components/Why-Choose-Us/WhyUs";
import RecentListing from "../../Components/RecentListing/RecentListing";
import Loading from "../Loading/Loading";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Reviews from "../../Components/Reviews/Reviews";






const Home =()=> {
  
 
  
  return (

    <div>
        <Hero></Hero>
      <WhyUs></WhyUs>
      <SpecialOffers></SpecialOffers>
 <RecentListing ></RecentListing>
 <Reviews/>
    </div>

  );
}

export default Home;
