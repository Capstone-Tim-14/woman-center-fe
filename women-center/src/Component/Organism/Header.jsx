import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Dashboard</h1>
        <div className="subtitle">
          <div className="icon-home">
            <img className="icon-home-img" src="src/asset/Home.jpg" alt="Home Icon" />
          </div>
          <div className="subtitle-text">/ Dashboard</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon">
          <div className="div-icon-inner">
            <img className="div-icon-bar" src="src/asset/Notification.jpg" alt="Notification Icon" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src="src/asset/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;