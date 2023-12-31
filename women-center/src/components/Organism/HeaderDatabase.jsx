import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Profile from '../../assets/icon/profile 1.jpg'
import ButtonNotif from '../Atom/button/ButtonNotif';

const HeaderDatabase = () => {
  return (
    <div className="header" style={{width: '100%'}}>
      <div className="header-content">
        <h3> Database</h3>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text" style={{marginTop: '3px'}}>/ Database</div>
        </div>
      </div>
      <div className="header-icons" style={{gap: '20px'}}>
        {/* Notification Icon */}
        <ButtonNotif/>

        {/* Profile Image */}
        <img className="div-image" src={Profile} alt="Profile Image" />
      </div>
    </div>
  );
};

export default HeaderDatabase;