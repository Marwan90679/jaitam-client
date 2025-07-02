import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AddCars = () => {
  const { user, setLoading} = use(AuthContext);
  const sectionStyle = {
    backgroundImage: `url('https://i.ibb.co/1SxL8L0/pexels-hannaphotography-7730177-1-1.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    backgroundSize: "cover",
  };

  const handleAddCars = (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: "<strong>Sign In to add cars</strong>",
        icon: "info",
        html: `
          You need to <b>Sign In</b> to add cars
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Take me there',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/signin'; 
        }
      });
      }
    setLoading(true);
   
    const form = e.target;
    const formData = new FormData(form);
    const carData = Object.fromEntries(formData.entries());
    const { features, price, bookingCount, ...newCar } = carData;
  
    const numPrice = Number(price);
    const numBookingCount = Number(bookingCount);
    const featuresArr = features.split(",").map((ftrs) => ftrs.trim());
  
    newCar.features = featuresArr;
    newCar.email = user.email;
    newCar.price = numPrice;
    newCar.bookingCount = numBookingCount;
  
    fetch("https://jaitam-backend.vercel.app/addCars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your car has been added",
            showConfirmButton: false,
            timer: 1500,
          });
      });
  };
  

  return (
    <div className="relative sm:px-8 px-4 py-6" style={sectionStyle}>
      {/* white overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto bg-white/60 rounded-xl px-8 py-10 drop-shadow-2xl ">
        <div className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-6">
          <h3 className="quicksand text-white text-shadow-2xl ">
            Add a New Car
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleAddCars}>
              <div className="grid lg:grid-cols-2 gap-y-6 gap-x-6 text-black">
                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Car Model
                  </label>
                  <input
                    required
                    type="text"
                    name="model"
                    placeholder="e.g. Toyota Corolla"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Daily Rental Price ($)
                  </label>
                  <input
                    required
                    type="number"
                    name="price"
                    placeholder="e.g. 45"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Vehicle Registration Number
                  </label>
                  <input
                    required
                    type="text"
                    name="registration"
                    placeholder="e.g. ABC-1234"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Availability
                  </label>
                  <select
                    required
                    name="availability"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Features
                  </label>
                  <input
                    required
                    type="text"
                    name="features"
                    placeholder="e.g. GPS, AC, Bluetooth"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Location
                  </label>
                  <input
                    required
                    type="text"
                    name="location"
                    placeholder="e.g. Dhaka, Bangladesh"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Image URL
                  </label>
                  <input
                    required
                    type="url"
                    name="image"
                    placeholder="e.g. https://example.com/car.jpg"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Description
                  </label>
                  <textarea
                    required
                    name="description"
                    rows="4"
                    placeholder="Write something about the car..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-blue-600"
                  ></textarea>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 opacity-80 block">
                    Booking Count
                  </label>
                  <input
                    required
                    type="number"
                    name="bookingCount"
                    defaultValue={0}
                    className="w-full px-4 text-gray-400 py-2.5 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-10">
                <input
                  type="submit"
                  value="Add Car"
                  className="w-full rounded-md px-4 py-2.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
                />
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-slate-900">Info</h2>
            <ul className="text-sm text-gray-700 space-y-3">
              <li>✓ Booking count is set to 0 by default</li>
              <li>✓ Availability controls user bookings</li>
              <li>✓ Images must be valid URLs</li>
              <li>✓ Features should be comma-separated</li>
              <li>✓ Data is saved with logged-in user info</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCars;
