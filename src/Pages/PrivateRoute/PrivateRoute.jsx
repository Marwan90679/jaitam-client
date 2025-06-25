import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) return <Loading></Loading>;
  if (!user) <Navigate to="/signIn" state={location.pathname}></Navigate>;
  return children;
};

export default PrivateRoute;
