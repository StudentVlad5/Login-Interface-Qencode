import React from "react";
import { Navigate } from "react-router-dom";
import { getFromStorage } from "services/localStorService";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = getFromStorage("auth");
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
