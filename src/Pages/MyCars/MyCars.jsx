import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import FormatDate from "../../Utilities/FormatDate";
import Update from "../../Components/Update/Update";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const token=user?.accessToken;
  
  const [myCars, setMyCars] = useState([]);
  const [updateCarInfo, setUpdateCarInfo] = useState({});
  const [sortOption, setSortOption] = useState("");
  const [reRender, setReRender] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleModal = (id) => {
    fetch(`https://jaitam-backend.vercel.app/myCars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateCarInfo(data);
        document.getElementById("my_modal_5").showModal();
      });
  };

  useEffect(() => {
    fetch(`https://jaitam-backend.vercel.app/myCars?email=${user?.email}&sort=${sortOption}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [user?.email, reRender, sortOption, token]);
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jaitam-backend.vercel.app/myCars/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setReRender(!reRender);
            }
          });
      }
    });
  };

  const sectionStyle = {
    backgroundImage: `url('https://i.ibb.co/fz70qnzJ/pexels-hannaphotography-7730177.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "cover",
  };

  if (loading) {
    return <Loading />;
  }

  if (!loading && myCars.length === 0) {
    return (
      <div
        style={sectionStyle}
        className="flex justify-center flex-col space-y-20 md:space-y-25 py-12 text-center bg-amber-100 h-screen"
      >
        <h3 className="text-2xl md:text-6xl font-bold text-white">
          You haven't added any cars yet!
        </h3>
        <button className="bg-amber-300 hover:bg-amber-200 lg:text-2xl px-4 py-2 lg:px-5 lg:py-5 rounded-2xl font-medium md:font-bold md:w-1/4 mx-auto">
          <Link to="/addCars">Add a car now</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="py-5">
      <h3 className="text-2xl text-center lg:font-bold font-semibold lg:my-5 my-3 lg:text-5xl">
        My Cars
      </h3>
      <div className="flex justify-center my-3 px-4">
        <form className="filter flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="btn btn-square"
            onClick={() => setSortOption("")}
          >
            ×
          </button>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "high"}
              onClick={() => setSortOption("high")}
              readOnly
            />
            <span className="ml-2">Price High</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "low"}
              onClick={() => setSortOption("low")}
              readOnly
            />
            <span className="ml-2">Price Low</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "new"}
              onClick={() => setSortOption("new")}
              readOnly
            />
            <span className="ml-2">Newest</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "old"}
              onClick={() => setSortOption("old")}
              readOnly
            />
            <span className="ml-2">Oldest</span>
          </label>
        </form>
      </div>

      <div className="w-full overflow-x-auto lg:w-9/12 mx-auto rounded-box border border-base-content/25 bg-base-100">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Model</th>
              <th>Rental Price</th>
              <th>Booking Count</th>
              <th>Status</th>
              <th>Date Added</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myCars.map((car, index) => (
              <tr className="hover:bg-amber-50" key={index}>
                <td className="font-medium">{index + 1}</td>
                <td>
                  <div className="w-20 lg:w-30 bg-amber-100 rounded-xl p-2">
                    <img
                      className="rounded-xl w-full h-full object-cover"
                      src={car.image}
                      alt=""
                    />
                  </div>
                </td>
                <td>{car?.model}</td>
                <td>{car?.price}</td>
                <td>{car?.bookingCount}</td>
                <td>
                  <p
                    className={`text-[13px] font-medium mt-2 inline-block rounded-md py-1.5 px-3 ${
                      car.availability === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.availability === "available"
                      ? "Available"
                      : "Unavailable"}
                  </p>
                </td>
                <td>{FormatDate(car?.datePosted)}</td>
                <td>
                  <div className="flex md:flex-wrap gap-4 lg:justify-end max-md:col-span-full">
                    <button
                      onClick={() => handleModal(car._id)}
                      type="button"
                      className="lg:font-medium px-2 lg:px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white tracking-wide cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      type="button"
                      className="font-medium px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-400 tracking-wide cursor-pointer max-md:w-full"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Update updateCarInfo={updateCarInfo} setReRender={setReRender} />
    </div>
  );
};

export default MyCars;
