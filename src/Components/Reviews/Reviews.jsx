import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import reviewImg from "../../assets/Adobe Express - file2.png";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  const originalReviews = [
    {
      rating: 5,
      title: "Smooth and hassle-free!",
      text: "Jaitam made renting a car for my trip super easy. Great prices and clean vehicles.",
      name: "Mr Adnan Reza",
      time: "1 day ago",
    },
    {
      rating: 4,
      title: "Best rental service in town",
      text: "Their app is easy to use and pickup was seamless. Will definitely use Jaitam again!",
      name: "Ms Afsana Karim",
      time: "2 days ago",
    },
    {
      rating: 5,
      title: "Perfect for family trips",
      text: "We booked a 7-seater for our family weekend. The car was in great condition and super comfy.",
      name: "Mrs Sofia Rahman",
      time: "3 days ago",
    },
    {
      rating: 4,
      title: "Affordable & reliable",
      text: "Way cheaper than other platforms. I liked how transparent Jaitam is about pricing.",
      name: "Mr Tanvir Ahmed",
      time: "5 hours ago",
    },
    {
      rating: 5,
      title: "Super helpful support team",
      text: "Had a minor issue with the pickup time, but support solved it quickly. Very professional!",
      name: "Ms Tania Zaman",
      time: "1 hour ago",
    },
    {
      rating: 4,
      title: "Loved the instant booking",
      text: "Booked a sedan in under 5 minutes. What a smooth experience on Jaitam!",
      name: "Mr Imran Hossain",
      time: "44 minutes ago",
    },
    {
      rating: 5,
      title: "Clean cars, friendly service",
      text: "Jaitam really impressed me with how well-maintained their vehicles are.",
      name: "Mrs Farzana Kabir",
      time: "6 days ago",
    },
    {
      rating: 4,
      title: "Easy to cancel & reschedule",
      text: "Plans changed last minute and I was able to reschedule without any headache.",
      name: "Mr Arif Chowdhury",
      time: "2 days ago",
    },
    {
      rating: 5,
      title: "Great for weekend getaways",
      text: "Booked a car for a Cox’s Bazar trip — everything went perfectly from pickup to return.",
      name: "Ms Nusrat Sultana",
      time: "9 hours ago",
    },
    {
      rating: 4,
      title: "Trustworthy service",
      text: "Used Jaitam twice now. Never faced hidden fees. Honest pricing and service.",
      name: "Mr Khaled Noor",
      time: "3 days ago",
    },
    {
      rating: 5,
      title: "Great experience for first-time user",
      text: "I had never rented a car before but Jaitam made it simple and safe.",
      name: "Ms Rima Aktar",
      time: "18 hours ago",
    },
    {
      rating: 4,
      title: "Pickup and drop were smooth",
      text: "The driver arrived exactly on time, and the process was quick. Highly recommend!",
      name: "Mr Saif Mahmud",
      time: "12 hours ago",
    },
    {
      rating: 5,
      title: "Excellent customer care",
      text: "Support answered all my questions even late at night. Really appreciate the effort.",
      name: "Ms Lamiya Hossain",
      time: "45 minutes ago",
    },
    {
      rating: 4,
      title: "Loved the flexible options",
      text: "Needed a car urgently and Jaitam had multiple choices. Super convenient.",
      name: "Mr Habib Rahman",
      time: "1 day ago",
    },
    {
      rating: 5,
      title: "Feels like owning a car!",
      text: "Using Jaitam feels like I have my own vehicle when I need it. So reliable.",
      name: "Mrs Nilufa Yasmin",
      time: "Just now",
    },
  ];

  // Duplicate array to simulate infinite loop
  const reviews = [...originalReviews, ...originalReviews];
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalItems = reviews.length;
        const visibleItems = 3;

        // If at halfway point, reset to 0 (but keep scrolling smoothly)
        if (prev >= ((totalItems / 2) * 100) / visibleItems) {
          return 0;
        }
        return prev + 100 / visibleItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="relative overflow-hidden pb-16 pt-5 px-4 md:px-20 text-center bg-amber-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">What our</h2>
      <h3 className="text-xl md:text-3xl font-bold italic hover:text-emerald-600 cursor-pointer">
        customers Are Saying
      </h3>

      <div
        className="h-30 mb-5 rounded-3xl"
        style={{
          backgroundImage: `url(${reviewImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={containerRef}
          className="flex gap-6"
          animate={{ x: `-${position}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="min-w-[90%] md:min-w-[33.3%] bg-gray-50 p-6 rounded-xl shadow transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    className={
                      i < review.rating ? "text-emerald-500" : "text-gray-300"
                    }
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <h4 className="text-xl font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-600 italic mb-4">“{review.text}”</p>
              <p className="text-emerald-600 font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
