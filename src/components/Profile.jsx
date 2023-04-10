import React from "react";
import { userAuthentication } from "./services/authservice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userAuthenticator = userAuthentication();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    userAuthenticator.logout();
    navigate("/");
  };

  return (
    <>
      <label>Welcome {userAuthenticator.user}</label>
      <button onClick={handleUserLogout}>Logout</button>
    </>
  );
};

export default Profile;
