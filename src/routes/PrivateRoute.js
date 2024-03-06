import { StatusContext } from "components/ContextStatus/ContextStatus";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { getFromStorage } from "services/localStorService";


export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  // const isLoggedIn = getFromStorage("auth");
  const { auth } = useContext(StatusContext);
  return auth ? <Navigate to={redirectTo} /> : Component;
};
