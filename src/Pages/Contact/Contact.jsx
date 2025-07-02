import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help and answer any questions you might have
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Auto Rental Avenue<br />
                Downtown, Cityville 10001<br />
                United States
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaPhone className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Phone Numbers</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Reservations:</span> +1 (800) 555-1234
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Customer Service:</span> +1 (800) 555-5678
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Email Addresses</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">General Inquiries:</span> info@jaitam.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Support:</span> support@jaitam.com
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaClock className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Monday-Friday:</span> 8:00 AM - 8:00 PM
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">What documents do I need to rent a car?</h3>
            <p className="text-gray-600">
              You'll need a valid driver's license, a debit card in your name, and proof of insurance if you're declining our coverage.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Can I extend my rental period?</h3>
            <p className="text-gray-600">
              Yes, you can extend your rental by contacting our customer service at least 24 hours before your scheduled return time.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">What's your cancellation policy?</h3>
            <p className="text-gray-600">
              You can cancel your reservation up to 24 hours before pickup with no penalty. Late cancellations may incur a fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;