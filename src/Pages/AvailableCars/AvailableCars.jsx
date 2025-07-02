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
                  className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 py-4 px-4 rounded-xl bg-white bg-opacity-90 shadow-sm mb-4"
                >
                  {/* Image + Basic Info */}
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={car.image}
                        alt={car.model}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">
                        {car.model}
                      </p>
                      <p className="text-slate-500">
                        Reg:{" "}
                        <span className="text-slate-800">
                          {car.registration}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="text-xs md:text-sm text-slate-700 min-w-[120px]">
                    <p className="font-medium text-slate-500">Location</p>
                    <p>{car.location}</p>
                  </div>

                  {/* Bookings */}
                  <div className="text-xs md:text-sm text-slate-700 min-w-[80px]">
                    <p className="font-medium text-slate-500">Bookings</p>
                    <p>{car.bookingCount}</p>
                  </div>

                  {/* Price */}
                  <div className="text-xs md:text-sm text-slate-700 min-w-[80px]">
                    <p className="font-medium text-slate-500">Price/Day</p>
                    <p className="text-slate-900 font-medium">${car.price}</p>
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
