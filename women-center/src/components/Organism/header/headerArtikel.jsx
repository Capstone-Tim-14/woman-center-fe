import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Profile from '../../../assets/icon/profile 1.jpg'
import '../../../styles/HeaderPaket.css';

const HeaderArtikel = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Artikel</h1>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text">/ Tambah Artikel</div>
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
        <img className="div-image" src={Profile} alt="Profile Image" />
      </div>
    </div>
  );
};

export default HeaderArtikel;