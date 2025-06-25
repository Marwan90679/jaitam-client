// src/components/SpecialOffers.jsx
import { motion } from "framer-motion";

const offers = [
  {
    title: "Get 15% off for weekend rentals!",
    description: "Book your weekend ride now and enjoy exclusive savings.",
    buttonText: "Book Now",
    color: "bg-yellow-50/60", // Soft overlay
  },
  {
    title: "Luxury cars at $99/day this holiday!",
    description: "Enjoy luxury for less — limited time offer.",
    buttonText: "Book Now",
    color: "bg-blue-50/60", // Soft overlay
  },
];

const SpecialOffers = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://i.ibb.co/rXv9Ldc/oleksandr-chumak-6-Abuox-JW-Ug-unsplash.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };

  return (
    <section style={sectionStyle} className="py-14 px-4 md:px-10 lg:px-20 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">🚗 Special Offers</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -130 : 130, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: false }}
            className={`rounded-2xl backdrop-blur-md shadow-xl p-6 ${offer.color} text-gray-800`}
          >
            <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
            <p className="mb-5 text-gray-700">{offer.description}</p>
            <button className="px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition">
              {offer.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
