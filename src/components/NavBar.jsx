import React from "react";
// Link should be used where the active status of the current link need not be maintained
// e.g. when navigate away from the page
// import { Link } from "react-router-dom";

// NavLink provides feature of active link when a link is clicked upon
import { NavLink } from "react-router-dom";
import { userAuthentication } from "./services/authservice";

const NavBar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const userAuthenticator = userAuthentication();

  return (
    <nav className="nav-link">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      {/* If / is removed then it would behave as relative path */}
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/users">
        Users
      </NavLink>
      {!userAuthenticator.user && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
      )}

      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};

export default NavBar;
