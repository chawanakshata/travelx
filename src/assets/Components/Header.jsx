

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">Travel<span>X</span></Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;

