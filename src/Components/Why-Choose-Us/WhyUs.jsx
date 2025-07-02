import React from 'react';
import { FaCarSide, FaWallet, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaCarSide size={36} className="text-black" />,
      title: "Well-Maintained Fleet",
      text: "From compact to luxury, every car is clean, insured, and ready to roll. No surprises, just smooth drives.",
    },
    {
      icon: <FaWallet size={36} className="text-black" />,
      title: "Transparent Pricing",
      text: "No hidden fees. What you see is what you pay. Simple hourly and daily rates for every budget.",
    },
    {
      icon: <FaMapMarkedAlt size={36} className="text-black" />,
      title: "Flexible Pickup & Return",
      text: "Choose your pickup point, return when you're done — we work around your plans, not the other way around.",
    },
    {
      icon: <FaHeadset size={36} className="text-black" />,
      title: "24/7 Support",
      text: "Stuck somewhere? Need a replacement? Our support team is just a call away, anytime, anywhere.",
    },
  ];

  
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/RTqDg0X7/pexels-bylukemiller-19711655-1.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left',
    backgroundSize: 'cover',
  };

  return (
    <div className="py-16 px-6 md:px-20 lg:min-h-screen" style={sectionStyle}>
      <div className="text-center mb-12  lg:pb-32">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
          Why Ride With Us?
        </h2>
        <p className="text-black mt-2 text-lg max-w-2xl mx-auto bg-white bg-opacity-70 px-4 py-2 rounded-xl inline-block">
          When you rent with us, it’s not just about the car — it’s about the experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mb-55">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-amber-50 opacity-65 text-black p-8 rounded-xl shadow-lg hover:scale-104 transition-transform"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-sm opacity-90 ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
