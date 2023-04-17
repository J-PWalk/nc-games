import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
        <img
          className="user-icon"
          src="https://img.icons8.com/material-outlined/512/user--v1.png"
          alt="user-icon"
        />
      </nav>
    );
  };
  
  export default Navbar;
  