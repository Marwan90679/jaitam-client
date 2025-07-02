import React from "react";
import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa6";

const Reviews = () => {


  const originalReviews = [
    { rating: 5, title: "Smooth and hassle-free!", text: "Jaitam made renting a car for my trip super easy. Great prices and clean vehicles.", name: "Mr Adnan Reza", time: "1 day ago" },
    { rating: 4, title: "Best rental service in town", text: "Their app is easy to use and pickup was seamless. Will definitely use Jaitam again!", name: "Ms Afsana Karim", time: "2 days ago" },
    { rating: 5, title: "Perfect for family trips", text: "We booked a 7-seater for our family weekend. The car was in great condition and super comfy.", name: "Mrs Sofia Rahman", time: "3 days ago" },
    { rating: 4, title: "Affordable & reliable", text: "Way cheaper than other platforms. I liked how transparent Jaitam is about pricing.", name: "Mr Tanvir Ahmed", time: "5 hours ago" },
    { rating: 5, title: "Super helpful support team", text: "Had a minor issue with the pickup time, but support solved it quickly. Very professional!", name: "Ms Tania Zaman", time: "1 hour ago" },
    { rating: 4, title: "Loved the instant booking", text: "Booked a sedan in under 5 minutes. What a smooth experience on Jaitam!", name: "Mr Imran Hossain", time: "44 minutes ago" },
   
  ];

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/MxNz03F9/pramod-tiwari-f-Sl-Ee-TXe-A24-unsplash-1.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left',
    backgroundSize: 'cover',
  };
  return (
    <section style={sectionStyle} className=" relative overflow-hidden px-6 py-16 md:px-20 text-center font-rubik">
      <div className="text-center text-white mb-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          What our customers <br /> Are Saying
          </h1>
        </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative mt-8" // Use grid for static layout
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.4 }} 
      >
        {originalReviews.map((review, idx) => ( 
          <motion.div
            key={idx}
            className="bg-white/70 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 flex-shrink-0"
            variants={itemVariants} 
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    className={
                      i < review.rating ? "text-emerald-500" : "text-neutral-500"
                    }
                  />
                ))}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-stone-800">{review.title}</h4>
              <p className="text-gray-700 italic mb-4 flex-grow">“{review.text}”</p>
              <p className="text-emerald-600 font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.time}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;
