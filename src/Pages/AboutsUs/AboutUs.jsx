import React from 'react';
import { FaCar, FaUsers, FaAward, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Disclaimer Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <FaInfoCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> This is a dummy website created for demonstration purposes only. 
              While all site functionality works, Jaitam is not an actual company.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Jaitam</h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing car rentals through technology and customer focus
        </p>
      </div>

      {/* Founder Section */}
      <div className="mb-20 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our Founder</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-medium text-blue-600 mb-4">Marwan Ahmed</h3>
          <p className="text-gray-600 text-lg mb-6">
            A visionary entrepreneur with over 15 years of experience in the automotive and technology sectors, 
            Marwan founded Jaitam in 2010 with a simple goal: to make car rentals seamless and accessible for everyone.
          </p>
          <p className="text-gray-600 text-lg">
            His unique background in both engineering and business development allowed him to identify key pain points 
            in traditional car rental systems and develop innovative solutions that form the foundation of Jaitam's platform.
          </p>
        </div>
      </div>

      {/* Company Details */}
      <div className="space-y-16 mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Purpose</h2>
          <p className="text-gray-600 text-lg mb-4">
            At Jaitam, we believe mobility should be simple, affordable, and available to all. Our platform was 
            created to eliminate the frustrations of traditional car rentals - hidden fees, complicated paperwork, 
            and limited vehicle options.
          </p>
          <p className="text-gray-600 text-lg">
            We're not just a rental service; we're a mobility partner that helps people access vehicles when they 
            need them, for as long as they need them, with complete transparency and flexibility.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-gray-600 text-lg mb-4">
            Our vision is to become the most trusted name in mobility services worldwide. We aim to expand our 
            innovative rental model to every major city, offering an unparalleled selection of vehicles with 
            industry-leading customer service.
          </p>
          <p className="text-gray-600 text-lg">
            Looking ahead, we're investing in electric and autonomous vehicle technology to position Jaitam at 
            the forefront of the next generation of transportation solutions.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Challenges We've Overcome</h2>
          <p className="text-gray-600 text-lg mb-4">
            Building Jaitam hasn't been without its challenges. In our early days, we struggled with fleet 
            management and maintaining consistent quality across locations. The 2015 economic downturn forced 
            us to rethink our expansion strategy and focus on sustainable growth.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our biggest technical challenge was developing our proprietary booking platform that could handle 
            thousands of simultaneous reservations while maintaining real-time vehicle availability updates. 
            After two years of development and testing, we launched what is now considered the most reliable 
            system in the industry.
          </p>
          <p className="text-gray-600 text-lg">
            Today, these challenges have become our strengths, shaping Jaitam into the resilient, customer-focused 
            company it is today.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">Why Choose Jaitam</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaCar className="text-5xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-medium mb-4">Diverse Fleet</h3>
            <p className="text-gray-600 text-lg">
              From compact cars to premium SUVs, we offer the industry's most comprehensive selection of 
              well-maintained vehicles to suit every need and preference.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaUsers className="text-5xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-medium mb-4">24/7 Support</h3>
            <p className="text-gray-600 text-lg">
              Our award-winning customer service team is available around the clock to assist with reservations, 
              roadside emergencies, or any questions you may have.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaAward className="text-5xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-medium mb-4">Award Winning</h3>
            <p className="text-gray-600 text-lg">
              Recognized as "Most Innovative Rental Service" and "Customer Service Excellence" award winners 
              for five consecutive years.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-medium mb-4">Fully Insured</h3>
            <p className="text-gray-600 text-lg">
              Every rental includes comprehensive insurance coverage with flexible options to match your 
              specific needs and travel plans.
            </p>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-blue-50 rounded-xl p-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Our Commitment</h2>
        <p className="text-gray-700 text-xl mb-8 text-center max-w-4xl mx-auto">
          At Jaitam, we're committed to continuous improvement and innovation in everything we do. 
          We pledge to:
        </p>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Maintain the highest standards of vehicle maintenance and cleanliness</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Provide transparent pricing with no hidden fees</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Invest in technology that simplifies the rental process</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Support sustainable practices in our operations</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Give back to the communities we serve</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-xl">•</span>
            <span className="text-gray-600 text-lg">Listen to and act on customer feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;