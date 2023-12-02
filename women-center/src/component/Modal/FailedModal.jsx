import React from 'react';
import '../modal/ModalSucces.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const FailedModal = ({ isOpen, onClose }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '330px',
    transform: 'translate(-50%, -50%)',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',  // Menengahkan gambar secara horizontal
    display: 'block',  // Mengatasi margin: auto yang hanya berfungsi pada elemen block
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content d-flex flex-column gap-1">
        <img src="src/assets/Group2.svg" alt="Gagal" style={imageStyle} />
        <h5 style={{ textAlign: 'center' }}>GAGAL!</h5>

        <div className='d-flex flex-column'>
          <p style={{ textAlign: 'center' }}>Data tidak tersimpan coba lagi</p>
          <div className='d-flex justify-content-center'>
            <button onClick={onClose} id='closeFailed' className='rounded-3'>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedModal;