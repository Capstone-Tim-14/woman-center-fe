// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Artikel</h1>
        <div className="subtitle">
          <div className="icon-home">
            <img className="icon-home-img" src="public/asset/Home.jpg" alt="Home Icon" />
          </div>
          <div className="subtitle-text">/ Artikel</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon">
          <div className="div-icon-inner">
            <img className="div-icon-bar" src="public/asset/Notification.jpg" alt="Notification Icon" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src="public/asset/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;