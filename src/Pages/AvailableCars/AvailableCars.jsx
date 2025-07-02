import React, { useEffect, useState } from "react";
import AvailableCarsCard from "./AvailableCarsCard";
import Loading from "../Loading/Loading";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { IoMdGrid, IoMdList } from "react-icons/io";

const AvailableCars = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jaitam-backend.vercel.app/availableCars")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const sectionStyle = {
    backgroundImage: `url('https://i.ibb.co/SXk3gfzp/pexels-koolshooters-6494923-1-1.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "cover",
  };

  if (loading) return <Loading />;

  const noResults = data.length === 0;

  return (
    <div style={sectionStyle} className="min-h-screen md:px-20 px-6 ">
      <h3 className="text-2xl text-white lg:text-black text-center lg:font-bold font-semibold lg:py-5 py-3 lg:text-5xl">
        Available Cars
      </h3>

      <SearchBar setData={setData} />

      {/* View toggle */}
      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => setGrid(true)}
          className={`btn btn-square ${grid ? "bg-black text-white" : ""}`}
        >
          <IoMdGrid />
        </button>
        <button
          onClick={() => setGrid(false)}
          className={`btn btn-square ${!grid ? "bg-black text-white" : ""}`}
        >
          <IoMdList />
        </button>
      </div>

      {noResults ? (
        <div className="h-screen flex items-center justify-center text-white text-xl">
          No results found for your search queries
        </div>
      ) : (
        <>
          {grid ? (
            <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full lg:w-9/12 mx-auto py-5">
              {data.map((car) => (
                <AvailableCarsCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <div className="max-w-screen-lg mx-auto px-2 pb-10">
            {data.map((car) => (
              <div
                key={car._id}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3 px-4 rounded-lg bg-white bg-opacity-90 shadow-sm mb-3 border border-gray-100"
              >
                {/* Image + Basic Info */}
                <div className="col-span-2 md:col-span-1 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 truncate">
                      {car.model}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Reg: <span className="text-gray-700">{car.registration}</span>
                    </p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="col-span-1 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm text-gray-700 truncate">{car.location}</p>
                </div>
          
                {/* Bookings */}
                <div className="col-span-1 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-medium">Bookings</p>
                  <p
            className={`text-xs w-20  font-medium mt-2 inline-block rounded-md py-1.5 px-2 ${
              car.availability === "available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {car.availability === "available" ? "Available" : "Unavailable"}
          </p>
                </div>
          
                {/* Price */}
                <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 font-medium">Price/Day</p>
                  <p className="text-sm font-semibold text-gray-900">${car.price}</p>
                </div>
              </div>
            ))}
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default AvailableCars;
