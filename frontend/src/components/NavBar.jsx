import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand">
          Movie App
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span>
          <i className={`fas ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </span>
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""} `}>
        <Link to="/" className="nav-links">
          <i className="fas fa-home"></i>
          Home
        </Link>
        <Link to="/favorites" className="nav-links">
          <i className="fas fa-heart"></i>
          Favorites
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
