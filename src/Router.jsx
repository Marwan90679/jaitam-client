import {
    createBrowserRouter,
  } from "react-router";
import Layouts from "./MainLayouts/Layouts";

import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import Home from "./Pages/Home/Home";

import MyCars from "./Pages/MyCars/MyCars";
import AvailableCars from "./Pages/AvailableCars/AvailableCars";
import MyBookings from "./Pages/Bookings/MyBookings";
import { AuthContext } from "./Contexts/AuthContext";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AddCars from "./Pages/AddCars/AddCars";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Error from "./Pages/Error/Error";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutsUs/AboutUs";

const router = 
createBrowserRouter([
    {
      path: "/",
      Component:Layouts,
      errorElement:<Error></Error>,
      children:[{
        index:true,
        Component:Home,
       
      },
    {
      path:'about-us',
      Component:AboutUs
    },
    {
      path:'contact-us',
      Component:Contact
    },
    {
      path:'signIn',
      Component:SignIn
    },
    {
      path:'signUp',
      Component:SignUp
    },
    {
      path:'addCars',
      element:<PrivateRoute><AddCars></AddCars></PrivateRoute>
    },
    {
      path:'myCars',
      element:<PrivateRoute><MyCars></MyCars></PrivateRoute>
    },
    {
      path:'availableCars',     
      Component:AvailableCars
    },
    {
      path:'carDetails/:id',
      Component:CarDetails,
      loader:({params})=>fetch(`https://jaitam-backend.vercel.app/myCars/${params.id}`)
    },
    {
      path:'my-bookings',
     element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
    },
    ]
    },
  ]);

  export default router;