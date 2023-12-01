import React from 'react';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Modal = ({ isOpen, onClose }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    // Mengatur posisi menjadi fixed untuk memudahkan pemrosesan
    position: 'fixed',
    // Menengahkan modal di tengah vertikal dan horizontal
    top: '50%',
    left: '50%',
    width: '315px',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <img src="src/assets/gambar/ceklis.jpeg" alt="Ceklis" style={{ width: '200px', height: '200px' }} />
        <h3 style={{ textAlign: 'center' }}>BERHASIL!</h3>
        <p style={{ textAlign: 'center' }}>Data berhasil diubah!</p>
        <button className='button-container'onClick={onClose}>Oke</button>
      </div>
    </div>
  );
};

export default Modal;