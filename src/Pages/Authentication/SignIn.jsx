import React, { use, useState } from "react";
import loginImg from "../../assets/Adobe Express - file (4).png";
import { Link, useLocation, useNavigate } from "react-router"; 
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInUser ,setLoading,googleSign} = use(AuthContext);
  const location=useLocation();
  const [error,setError]=useState(null)
  const navigate=useNavigate()
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true)
    signInUser(email, password)
      .then(() => {
        console.log("done");
        navigate(`${location.state?location.state:''}`)
      })
      .catch((error) => {
        setError(error.errorMessage)
      })
      .finally(() => {
       setLoading(false)
      });
  };
  const handleGoogleSignIn=()=>{
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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="grid lg:grid-cols-2 w-full max-w-6xl rounded-xl overflow-hidden shadow-xl">
        {/* Left Side with Image and Background */}
        <div className="bg-indigo-100 flex items-center justify-center p-10">
          <img
            src={loginImg}
            alt="login"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="drop-shadow-2xl  p-10 w-full max-w-md mx-auto">
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-indigo-800">Sign in</h2>
              <p className="text-sm text-indigo-800 mt-2">
                Welcome back! Sign in to access your account and continue your journey.
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {error&&<p>{error}</p>}
            {/* Submit Button */}
            <div>
              <input
                type="submit"
                value="Sign In"
                className="w-full bg-indigo-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-indigo-800 transition shadow-md hover:shadow-lg cursor-pointer"
              />
              <p className="text-sm mt-4 text-center text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-indigo-800 font-medium hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>

            {/* Google Sign In Button at Bottom */}
            <div className="pt-4 border-t border-slate-200">
              <button
              onClick={handleGoogleSignIn}
                type="button"
                className="mt-4 w-full flex items-center justify-center gap-2 border border-slate-300 py-3 px-4 bg-white rounded-lg text-slate-700 shadow-sm hover:shadow-md transition font-medium"
              >
                <FcGoogle size={22} />
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
