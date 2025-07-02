import React from "react";
import { Link } from "react-router" 

const AvailableCarsCard = ({ car }) => {
  const { image, price, model, availability, location, _id } = car;

  return (
    <div className="w-full bg-white/35 border border-gray-200 rounded-lg shadow-sm flex flex-col">
      <div>
        <img
          className="w-full h-60 object-cover rounded-t-lg"
          loading="lazy"
          src={image}
          alt="Car"
        />
      </div>

      <div className="px-5 pb-5 pt-4 space-y-4 flex-grow flex flex-col justify-between">
        <div>
          <h5 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {model}
          </h5>
          <h6 className="text-white/90 font-semibold mt-2">
            Location: {location}
          </h6>
          <p
            className={`text-xs font-medium mt-2 inline-block rounded-md py-1.5 px-2 ${
              availability === "available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {availability === "available" ? "Available" : "Unavailable"}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${price}{" "}
            <sup className="text-xs text-amber-500">(per day)</sup>
          </span>
          <Link
            to={`/carDetails/${_id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCarsCard;
