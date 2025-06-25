import React from 'react';
import { useLoaderData } from 'react-router'; 
import { FaStar } from "react-icons/fa";
import BookModal from '../../Components/BookModal/BookModal';

const CarDetails = () => {
  const carData = useLoaderData();
  
  if (!carData) {
    return <p className="text-center text-xl mt-10">Car not found.</p>;
  }

  const {
    model,
    image,
    description,
    availability,
    bookingCount,
    price,
    features,
    location,
    registration,
    datePosted,
  } = carData;

  return (
    <div className="flex pb-8 flex-col lg:flex-row mt-20 gap-12 px-4 md:px-12 lg:w-9/12 mx-auto">
      {/* Car Image */}
      <div className="bg-zinc-50 p-6 rounded-lg shadow-xl border border-black/30  lg:w-150 flex justify-center">
        <img
          className="shadow-xl  rounded object-cover"
          src={image}
          alt={model}
        />
      </div>

      {/* Car Details */}
      <div className="max-w-2xl space-y-4">
        <h3 className="text-3xl font-semibold">{model}</h3>
        <p className="text-lg text-gray-700">{description}</p>

        <div className="grid  grid-cols-2   gap-4 text-gray-800 mt-4">
          <div>
            <p className="font-medium">Rental Price:</p>
            <p className="font-bold">${price} / day</p>
          </div>
          <div>
            <p className="font-medium">Availability:</p>
            <p className={`font-bold ${availability === 'available' ? 'text-green-600' : 'text-red-600'}`}>
              {availability.charAt(0).toUpperCase() + availability.slice(1)}
            </p>
          </div>
          <div>
            <p className="font-medium">Booking Count:</p>
            <p className="font-bold">{bookingCount}</p>
          </div>
          <div>
            <p className="font-medium">Location:</p>
            <p className="font-bold">{location}</p>
          </div>
          <div>
            <p className="font-medium">Registration No:</p>
            <p className="font-bold">{registration}</p>
          </div>
          <div>
            <p className="font-medium">Date Posted:</p>
            <p className="font-bold">{new Date(datePosted).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <p className="font-semibold">Features:</p>
          <ul className="list-disc list-inside text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div   className="mt-8 pb-8">
          <button  onClick={()=>document.getElementById('my_modal_6').showModal()}
          className="px-6 py-2 border rounded-lg border-indigo-500 text-indigo-700 hover:bg-indigo-100 transition">
            Book Now
          </button>       
        </div>
      </div>
      <BookModal carData={carData}></BookModal>
    </div>
  );
};

export default CarDetails;
