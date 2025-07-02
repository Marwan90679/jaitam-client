import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Loading from "../../Pages/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookModal = ({ carData, loading }) => {
  if (loading) return <Loading />;
  if (!carData) return null;

  const {
    model,
    price,
    image,
    location,
    registration,
    _id,
    features = [],
  } = carData;
  const { user } = use(AuthContext);
  const email = user?.email;

  const handleClose = () => {
    document.getElementById("my_modal_6").close();
  };
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login before booking.", {
        icon: "⚠",
        className: "bg-red-500 text-white font-medium rounded shadow-lg",
      });
      return;
    }

    if (carData.availability === "unavailable") {
      toast.info("Unavailable", {
        icon: "🚫",
        className: "bg-gray-700 text-white font-medium rounded shadow",
      });
      return;
    }

   
    const check = await fetch(
      `https://jaitam-backend.vercel.app/check-bookings?email=${email}&carId=${_id}`
    )
      .then((res) => res.json())
      .catch(() => null);

    if (check?.message === "Booking exists already") {
      toast.warn("You already booked this car!", {
        icon: "⚠️",
        className: "bg-yellow-500 text-black font-semibold rounded shadow",
      });
      return; // Stop  here
    }

    await fetch(`https://jaitam-backend.vercel.app/car/${_id}`, {
      method: "PATCH",
    });

    const carId = _id;
    const bookingData = {
      model,
      price,
      image,
      registration,
      carId,
      bookingCount: 0,
    };

    await fetch("https://jaitam-backend.vercel.app/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Booked Successfully", {
          icon: "✅",
          className: "bg-green-600 text-white font-medium rounded shadow",
        });
      });

    await fetch(`https://jaitam-backend.vercel.app/book/${carId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.info("Check your Bookings", {
          icon: "📅",
          className: "bg-blue-500 text-white font-medium rounded shadow",
        });
      });
    const bookingDate = new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "");
    const startDate = new Date(); // today
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1); // +1 day

    //  days difference:
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const formattedStart = startDate.toLocaleDateString("en-GB"); 
    const formattedEnd = endDate.toLocaleDateString("en-GB");
    
    const userBooking = {
      email,
      model,
      image,
      registration,
      carId,
      confirm: true,
      days,
      bookingDate,
      totalPrice: price,
      formattedStart,
     formattedEnd,
    };

    await fetch(`https://jaitam-backend.vercel.app/user-booking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userBooking),
    });
  };

  return (
    <dialog
      id="my_modal_6"
      className="modal modal-bottom sm:modal-middle overflow-y-auto"
    >
      <div className="flex items-center justify-center w-full p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl">
          <div className="bg-indigo-600 px-6 py-4 rounded-t-2xl">
            <h2 className="text-lg font-semibold text-white">Booking Info</h2>
            <p className="text-slate-200 text-sm mt-1">
              Thank you for choosing our service!
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Booking Date
                </p>
                <p className="text-slate-900 text-sm font-semibold mt-1">
                  {today}
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">Location</p>
                <p className="text-slate-900 text-sm font-semibold mt-1">
                  {location}
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Registration
                </p>
                <p className="text-slate-900 text-sm font-semibold mt-1">
                  {registration}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={image}
                  alt={model}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-slate-900">
                  {model}
                </h3>
                <p className="text-sm text-slate-500">
                  Features: {features.join(", ") || "N/A"}
                </p>
                <p className="text-indigo-700 font-semibold text-base">
                  ${price}/day
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="text-base font-medium text-slate-900 mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <p className="text-slate-500 font-medium">Subtotal</p>
                  <p className="text-slate-900 font-semibold">${price}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-slate-500 font-medium">Tax (5%)</p>
                  <p className="text-slate-900 font-semibold">
                    ${(price * 0.05).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-sm border-t border-gray-300 pt-3">
                  <p className="font-semibold text-slate-900">Total</p>
                  <p className="font-semibold text-indigo-700">
                    ${(price * 1.05).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 gap-2 px-6 py-4 rounded-b-2xl text-center flex flex-col md:flex-row justify-between">
            <button
              onClick={handleClose}
              className="bg-neutral-400 hover:bg-amber-200 font-medium text-sm px-6 py-2 rounded-lg transition duration-200"
            >
              Close
            </button>
            <button
              onClick={handleBooking}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-6 py-2 rounded-lg transition duration-200"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default BookModal;
