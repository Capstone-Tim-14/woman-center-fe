import React, { useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Profile from '../../assets/icon/profile 1.jpg';
import ModalNotification from '../Molekul/Modal/NotifikasiModal';

const HeaderContainer = () => {
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

  const openNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  return (
    <div className="header" style={{ width: '105%' }}>
      <div className="header-content">
        <h3>Dashboard</h3>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text">/ Dashboard</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon" onClick={openNotificationModal}>
          <div className="div-icon-inner">
            <IoNotifications className="div-icon-bar" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src={Profile} alt="Profile Image" />
      </div>

      {/* Notification Modal */}
      {isNotificationModalOpen && <ModalNotification onClose={closeNotificationModal} />}
    </div>
  );
};

export default HeaderContainer;
