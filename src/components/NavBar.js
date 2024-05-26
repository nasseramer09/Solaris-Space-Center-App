import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Solaris Space Center</Link>
      </div>
      <div className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/favorites" className="nav-button">Favorites</Link>
      </div>
    </nav>
  );
};

export default NavBar;
