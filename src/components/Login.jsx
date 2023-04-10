import React, { useState } from "react";
import { userAuthentication } from "./services/authservice";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const userAuthenticationStatus = userAuthentication();
  const [username, setUsername] = useState("");

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const navigate = useNavigate();
  const handleUserInput = () => {
    userAuthenticationStatus.login(username);
    navigate(redirectPath);
  };

  return (
    <>
      <label htmlFor="usernameinput">
        User name:
        <input
          type="text"
          id="usernameinput"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handleUserInput}>Login</button>
    </>
  );
};

export default Login;
