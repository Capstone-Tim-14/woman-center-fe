/* eslint-disable no-unused-vars */
// Dashboard.js
import React, { useState } from 'react';
import ModalNotification from '../../Molekul/Modal/ModalNotif';
import { FaBell } from 'react-icons/fa'; // Import ikon notifikasi dari react-icons

const ButtonNotif = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  

  const openModal = (message) => {
    setNotificationMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => openModal('Notification')} style={{border: 'none', background: 'none', cursor: 'pointer', color : '#F4518D'}}>
        <FaBell />
      </button>

      <ModalNotification
        isOpen={modalIsOpen}
        closeModal={closeModal}
        message={notificationMessage}
      />
    </div>
  );
};

export default ButtonNotif;
