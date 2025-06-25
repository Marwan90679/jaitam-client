import React, { use } from "react";
import logo from "/logo.png";
import { Link } from "react-router";
import { GrHomeRounded } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { RiApps2AddLine } from "react-icons/ri";
import { AuthContext } from "../../Contexts/AuthContext";
import { SiMyget } from "react-icons/si";
import { IoMdBookmarks } from "react-icons/io";
import Loading from "../../Pages/Loading/Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser, setLoading, loading } = use(AuthContext);

  const links = [
    <li key="1">
      <Link to="/">
        <GrHomeRounded size={20} />
        Home
      </Link>
    </li>,
    <li key="2">
      <Link to="/availableCars">
        <FaCar size={20} />
        Available Cars
      </Link>
    </li>,
    <li key="3">
      <Link to="/addCars">
        <RiApps2AddLine size={20} />
        Add Cars
      </Link>
    </li>,
    user && (
      <div key="4" className="lg:flex items-center">
        <li>
          <Link to="/myCars">
            <SiMyget size={20} /> My Cars
          </Link>
        </li>
        <li>
          <Link to="/my-bookings">
            {" "}
            <IoMdBookmarks size={20} />
            My Bookings
          </Link>
        </li>
      </div>
    ),
  ];
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "Your successfully signed out",
              icon: "success",
            });
          })
          .catch((err) => {
            toast.error(err.errorMessage);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  if (loading) return <Loading></Loading>;
  return (
    <div className="navbar shadow-sm     border-b-3   md:border-b-5  bg-[#F3F3E0]  ">
      {/* mobile device */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center ">
          <img className="rotate-90 md:w-20 w-15" src={logo} alt="" />
          <a className=" md:text-3xl font-bold -ml-2">jaitam</a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 font-semibold md:text-xl">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="py-1 md:py-2 md:px-5 px-3 rounded-full bg-[#b0b9c4] text-orange-700 hover:text-red-800 font-bold text-lg"
          >
            Sign Out
          </button>
        ) : (
          <div className="flex gap-3 items-center">
            <button className="py-1 md:py-2 md:px-5 px-3 rounded-full bg-[#266e68] hover:bg-[#278a85] md:font-bold md:text-lg text-white">
              <Link to="/signUp">Sign Up</Link>
            </button>{" "}
            <button className="py-1 px-3 md:py-2 md:px-5 rounded-full bg-[#26466e] hover:bg-[#27548A] md:font-bold md:text-lg text-white">
              <Link to="/signIn">Sign In</Link>
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
