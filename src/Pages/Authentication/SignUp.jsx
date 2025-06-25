import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const SignUp = () => {
  const{createUser,setLoading,googleSign,updateUserInfo,setUser}=use(AuthContext);
  const [error,setError]=useState(null)
  const location=useLocation();
  const navigate=useNavigate();
  const handleSignUp = (e) => {
    setError('')
    e.preventDefault();   
    const form = e.target;
    const formData = new FormData(form);
    const credentials = Object.fromEntries(formData.entries());
    const{email,password,photo,name,cpassword}=credentials;
    setLoading(true)
    if(password===cpassword){
      createUser(email,password)
      .then((userCredentials)=>{
        const signedUpUser=userCredentials.user;
        updateUserInfo(name,photo)
        .then(()=>{
          setUser({...signedUpUser,displayName:name,photoURL:photo});
          navigate(`${location.state?location.state:'/'}`)
        })
        .catch((error)=>{
          setUser(signedUpUser)
          setError(error)
        })
      })
      .catch((err)=>{
        setError(err)
      })
      .finally(()=>{
        setLoading(false)
      })
    }
    else{setError("Passwords didn't match")}
  };
  const googleSignUp =()=>{
    googleSign()
    .then(() => {
      navigate(`${location.state?location.state:'/'}`)
        })
        
    .catch((error) => {
      // Handle Errors here.
      
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Large Screen */}
      <div className="lg:flex hidden items-center justify-center px-4 flex-1">
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 max-w-4xl w-full">
          {/* Header */}
          <div className="text-center font-bold text-4xl mb-6 text-indigo-800">
            <h3>Join Jaitam</h3>
            <p className="text-sm text-slate-500 mt-2">
              Smooth rides, sleek accounts — let’s roll.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="md:w-1/2 w-full bg-indigo-100 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                Why Jaitam?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Get in. Get out. No stress.",
                    desc: "Create your account and access modern car convenience without old-school hassle.",
                  },
                  {
                    title: "Your dashboard, your rules.",
                    desc: "Keep track of all your rides, bookings, and perks in one clean interface.",
                  },
                  {
                    title: "One key, endless access.",
                    desc: "Explore possibilities — Jaitam grows with your lifestyle.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Section */}
            <div className="md:w-1/2 w-full p-4">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Start Your Jaitam Journey
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Creating your account takes less than a minute.
              </p>
              <form onSubmit={handleSignUp} className="space-y-4">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <input
                  required
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <input
                  required
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {error&&<p>{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Create My Account
                </button>
              </form>
              <button onClick={googleSignUp} className="gap-2 font-semibold text-lg cursor-pointer flex bg-white rounded-lg justify-center my-4 border w-full items-center p-3 shadow">
                <FcGoogle size={24} />
                Sign Up with Google
              </button>
              <p className="mt-4 text-sm text-slate-600 text-center">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col justify-center flex-1 p-4">
        <div className="max-w-md w-full mx-auto border border-gray-200 bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-center font-bold text-3xl mb-6 text-indigo-700">
            <h3>Welcome to Jaitam</h3>
            <p className="text-sm text-slate-500 mt-1">
              Let’s get you moving, fast and free.
            </p>
          </div>
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              name="photo"
              type="text"
              required
              placeholder="Photo URL"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              name="cpassword"
              type="password"
              required
              placeholder="Confirm Password"
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none cursor-pointer"
              value="Create My Account"
            />
          </form>
          <button onClick={googleSignUp} className="gap-2 font-semibold text-sm mt-4 cursor-pointer flex bg-white rounded-lg justify-center border w-full items-center p-3 shadow">
            <FcGoogle size={20} />
            Sign Up with Google
          </button>
          <p className="text-slate-600 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/signIn"
              className="text-indigo-600 font-medium hover:underline ml-1"
            >
              Sign In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
