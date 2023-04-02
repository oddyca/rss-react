import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/aboutus">About</Link>
      </div>
    </header>
  );
};

export default Header;
