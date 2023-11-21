import React from 'react';
import './ModalSuccess.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const FailedModal = ({ isOpen, onClose }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '315px',
    transform: 'translate(-50%, -50%)',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    margin: '0 auto',  // Menengahkan gambar secara horizontal
    display: 'block',  // Mengatasi margin: auto yang hanya berfungsi pada elemen block
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <img src="src/assets/icon/x.png" alt="Gagal" style={imageStyle} /><br />
        <h3 style={{ textAlign: 'center' }}>GAGAL!</h3>
        <p style={{ textAlign: 'center' }}>Gagal mengunggah data. Silakan coba lagi.</p>
        <button onClick={onClose}>Oke</button>
      </div>
    </div>
  );
};

export default FailedModal;
