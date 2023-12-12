/* eslint-disable no-unused-vars */
// Dashboard.js
import React, { useState } from 'react';
import ModalNotification from './Notifikasi/Modal';
import { FaBell } from 'react-icons/fa'; // Import ikon notifikasi dari react-icons

const Dashboard = () => {
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
      <button onClick={() => openModal('Notification')}>
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

export default Dashboard;
