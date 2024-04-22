import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router";

const PrivateRoute = ({ authentication }) => {
  return authentication == true ? <ProductDetail /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
