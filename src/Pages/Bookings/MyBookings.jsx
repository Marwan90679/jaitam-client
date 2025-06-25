import React, { useState, useEffect, use } from "react";
import FormatDate from "../../Utilities/FormatDate"; // Update path if needed
import Loading from "../Loading/Loading"; // Replace with a spinner or remove
import { AuthContext } from "../../Contexts/AuthContext";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import "cally";
import DateModal from "./DateModal";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingId, setBookingId] = useState(true);
  const { user } = use(AuthContext);
  const email = user?.email;
  const token=user?.accessToken;
  useEffect(() => {
    fetch(`https://jaitam-backend.vercel.app/bookings?email=${email}`,{
      headers:{authorization: `Bearer ${token}`}
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  });

  const sectionStyle = {
    backgroundImage: `url('https://i.ibb.co/fz70qnzJ/pexels-hannaphotography-7730177.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "cover",
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Canceled",
          text: "Your booking has been canceled",
          icon: "success",
        });
      }
    });
    fetch(`https://jaitam-backend.vercel.app/cancel/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleModify = (id) => {
    document.getElementById("date_modal").showModal();
    setBookingId(id);
  };

  if (loading) return <Loading />;

  if (!loading && bookings.length === 0) {
    return (
      <div
        style={sectionStyle}
        className="flex justify-center flex-col space-y-20 py-12 text-center bg-amber-100 h-screen"
      >
        <h3 className="text-2xl md:text-6xl font-bold text-white">
          You haven’t made any bookings yet!
        </h3>
        <button className="bg-amber-300 hover:bg-amber-200 text-lg md:text-2xl px-5 py-3 rounded-2xl font-semibold md:w-1/4 mx-auto">
          Explore Cars
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl text-center font-semibold lg:text-5xl my-6">
        My Bookings
      </h3>

      <div className="w-full overflow-x-auto lg:w-9/12 mx-auto rounded-box border border-base-content/25 bg-base-100">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Model</th>
              <th>Status</th>
              <th>Rental Period</th>
              <th>Booking Date</th>
              <th>Total Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr className="hover:bg-amber-50" key={booking._id}>
                <td className="font-medium">{index + 1}</td>
                <td>
                  <div className="w-25 bg-amber-100 rounded-xl p-2">
                    <img
                      className="rounded-xl w-full h-full object-cover"
                      src={booking.image}
                      alt={booking.model}
                    />
                  </div>
                </td>
                <td>{booking.model}</td>
                <td>
                  <span
                    className={`text-xs font-medium inline-block rounded-md py-1.5 px-3 ${
                      booking.confirm == true
                        ? "bg-green-100 text-green-700"
                        : booking.confirm == true
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.confirm == true ? "Confirmed" : "Canceled"}
                  </span>
                </td>
                <td className="text-sm">
                  {booking.formattedStart} → {booking.formattedEnd}
                </td>
                <td>{booking.bookingDate}</td>
                <td>
                  $
                  {booking.totalPrice * booking.days +
                    booking.totalPrice * booking.days * (0.05).toFixed(2)}
                </td>
                <td>
                  <div className="flex flex-wrap gap-3 justify-end">
                    <button
                      disabled={booking.confirm !== true}
                      onClick={() => handleModify(booking._id)}
                      className={`flex items-center gap-1 lg:font-semibold text-sm px-3 py-1.5 rounded-md 
        ${
          booking.confirm !== true
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 text-white"
        }
      `}
                    >
                      <FaCalendarAlt /> Modify Date
                    </button>

                    <button
                      disabled={booking.confirm !== true}
                      onClick={() => handleCancel(booking._id)}
                      className={`flex items-center gap-1 lg:font-semibold text-sm px-3 py-1.5 rounded-md 
        ${
          booking.confirm !== true
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-400 text-white"
        }
      `}
                    >
                      <IoTrashBinSharp /> Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DateModal bookingId={bookingId}></DateModal>
    </div>
  );
};

export default MyBookings;
