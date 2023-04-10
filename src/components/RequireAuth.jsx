import React from "react";
import { userAuthentication } from "./services/authservice";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const userAuthenticator = userAuthentication();
  const location = useLocation();

  if (!userAuthenticator.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};
