import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

      <div className="user-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <img
          className="user-icon"
          src="https://img.icons8.com/material-outlined/512/user--v1.png"
          alt="user-icon"
        />
        <span className="username">John-Paul</span>
        {isOpen && (
          <ul className="dropdown-menu">
            <li>Account Settings</li>
            <li>Log Out</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
