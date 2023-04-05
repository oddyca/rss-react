import React from 'react';
import { Link } from 'react-router-dom';

import header_corner from '../assets/header-corner.svg';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header_corner-decoration-left">
          <p className="dec_text">
            W: 22345.216.221x.
            <br />
            Y: 001235.118.441y.
          </p>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/aboutus">About</Link>
        </div>
        <div className="header_corner-decoration-right">
          <p className="dec_text">
            4331.4
            <br />
            100.42
          </p>
          <img src={header_corner} alt="arrows in a square icon" className="header-dec-icon" />
        </div>
      </header>
    </div>
  );
};

export default Header;
