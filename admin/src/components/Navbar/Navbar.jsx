import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img className="logo" src={assets.logo} alt="ProfitBin Logo" />
      </div>

      {/* Center: Welcome text */}
      <div className="navbar-center">
        <h2>
          <span className="profit">Profit</span>
          <span className="bin">Bin</span> Admin Panel
        </h2>
        <p>Click on Add, List, Orders for exploring it</p>
      </div>

      {/* Right: Profile image */}
      <div className="navbar-right">
        <img className="profile" src={assets.profile_image} alt="Admin Profile" />
      </div>
    </div>
  );
};

export default Navbar;
