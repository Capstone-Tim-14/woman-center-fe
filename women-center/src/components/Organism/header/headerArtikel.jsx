import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Profile from '../../../assets/icon/profile 1.jpg'
import '../../../styles/HeaderPaket.css';
import ButtonNotif from '../../Atom/button/ButtonNotif';

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
      <div className="header-icons" style={{gap: '20px'}}>
        {/* Notification Icon */}
        <ButtonNotif />

        {/* Profile Image */}
        <img className="div-image" src={Profile} alt="Profile Image" />
      </div>
    </div>
  );
};

export default HeaderArtikel;