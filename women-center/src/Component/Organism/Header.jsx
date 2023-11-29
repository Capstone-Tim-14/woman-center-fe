import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Dashboard</h1>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text">/ Dashboard</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon">
          <div className="div-icon-inner">
            <IoNotifications className="div-icon-bar" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src="src/asset/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;