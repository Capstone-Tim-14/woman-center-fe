import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Profile from '../../assets/icon/profile 1.jpg'

const HeaderDatabase = () => {
  return (
    <div className="header-database-user">
      <div className="header-content-database-user">
        <h3>Database</h3>
        <div className="subtitle-database-user">
          <div className="icon-home-database-user">
            <GoHomeFill className="icon-home-img-database-user" />
          </div>
          <div className="subtitle-text-database-user">/ Database</div>
        </div>
      </div>
      <div className="header-icons-database-user">
        {/* Notification Icon */}
        <div className="div-icon-database-user">
          <div className="div-icon-inner-database-user">
            <IoNotifications className="div-icon-bar-database-user" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image-database-user" src={Profile} alt="Profile Image" />
      </div>
    </div>
  );
};

export default HeaderDatabase;