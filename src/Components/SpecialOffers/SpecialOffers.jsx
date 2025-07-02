import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Get 15% off for weekend rentals!",
    description: "Book your weekend ride now and enjoy exclusive savings.",
    buttonText: "Book Now",
  },
  {
    title: "Luxury cars at $99/day this holiday!",
    description: "Enjoy luxury for less — limited time offer.",
    buttonText: "Book Now",
  },
];

const SpecialOffers = () => {
  const sectionStyle = {
  
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://i.ibb.co/rXv9Ldc/oleksandr-chumak-6-Abuox-JW-Ug-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };

  return (
    
    <section style={sectionStyle} className="py-20 px-4 md:px-20 text-white font-rubik">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4"> Special Offers</h2>
      <p className="text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto text-gray-200">
        Unlock exclusive deals and make your next journey unforgettable with our limited-time promotions.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -130 : 130, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            // Redesigned card background and text colors
            className={`rounded-2xl backdrop-blur-md shadow-xl p-6 bg-white/80 text-stone-800
                        transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <h3 className="text-2xl font-bold mb-2 text-stone-900">{offer.title}</h3>
            <p className="mb-5 text-stone-700">{offer.description}</p>
            <button className="px-6 py-3   bg-[#e7e7c1] hover:bg-[#777772] hover:text-white rounded-full font-semibold transition
                               shadow-md hover:shadow-lg cursor-pointer ">
              {offer.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
