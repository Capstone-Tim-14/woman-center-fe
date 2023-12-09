/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ModalNotification.js
import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa'; 
import imagenotif from '../../Assets/logonotif.png';

const ModalNotification = ({ isOpen, closeModal}) => {
  const customStyles = {
    content: {
      width: '396px',
      height: '414px',
      margin: 'auto',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Notification Modal"
      style={customStyles}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <FaTimes />
          </button>
        </div>
        <h2>Notification</h2>
        <div className= "img-notif">
            <img src={imagenotif} alt="imgnotif" />
        </div>
        <p>Pengguna Baru Terdaftar</p>
        <p>19 Jam yang lalu</p>
      </div>
    </Modal>
  );
};

export default ModalNotification;
