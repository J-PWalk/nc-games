import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActivePage(path);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link
            to="/"
            className={activePage === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            to="/reviews"
            className={activePage === "/reviews" ? "active" : ""}
            onClick={() => handleLinkClick("/reviews")}
          >
            Reviews
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            to="/categories"
            className={activePage === "/categories" ? "active" : ""}
            onClick={() => handleLinkClick("/categories")}
          >
            Categories
          </Link>
        </li>
      </ul>

      <div
        className="user-dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
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
