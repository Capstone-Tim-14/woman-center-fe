import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import '../../../style/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Paket</h1>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text">/ Paket</div>
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
        <img className="div-image" src="src/assets/image/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Header;