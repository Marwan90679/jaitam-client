import React, { useEffect, useState } from "react";
import { TimeAgo } from "../../Utilities/TimeAgo";
import Loading from "../../Pages/Loading/Loading";
import { Link } from "react-router";

const RecentListing = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://jaitam-backend.vercel.app")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;
  return (
    <div
      className=" relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url('https://i.ibb.co/39T23HW2/pexels-koolshooters-6494663-1-1.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

      <div className="relative z-10 px-6 py-16 md:px-20">
        <div className="text-center text-white mb-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
            Recent Listings
          </h1>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {data?.map((car, index) => (
            <div
              key={index}
              className="bg-white/50 rounded-xl overflow-hidden shadow-lg transition hover:scale-102"
            >
              <img
                src={car.image}
                alt={car.model}
                loading="lazy"
                className="w-full h-68 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{car.model}</h2>
                <p className="text-gray-700 font-medium mb-1">
                  Price:{" "}
                  <span className="text-blue-600 font-bold">
                    ${car.price}/day
                  </span>
                </p>
                <p className="text-sm mb-2">
                  Booking Count:{" "}
                  <span className="text-blue-900 text-lg font-medium">
                    {car.bookingCount}
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-3  rounded-full  font-semibold ${
                      car.availability == "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.availability == "available"
                      ? "Available"
                      : "Unavailable"}
                  </span>
                  <span className="text-gray-900 text-sm text-shadow-xl">
                    {TimeAgo(car.datePosted)}
                  </span>
                </div>
             <div className="flex justify-center">
             <button className="pb-4 pt-6 ">
                  <Link
                    to={`/carDetails/${car._id}`}
                    className="px-4 py-2 my-6  bg-[#F3F3E0] hover:bg-[#777772] hover:text-white rounded-full font-semibold transition
                               shadow-md hover:shadow-lg cursor-pointer relative"
                  >
                    View Details
                  </Link>
                </button>
             </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListing;
