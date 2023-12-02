import React from 'react';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const FailedModal = ({ isOpen, onClose }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '360px',
    transform: 'translate(-50%, -50%)',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content d-flex flex-column gap-1">
        <img src="src/assets/gambar/ceklis.png" alt="Ceklis" style={imageStyle} />
        <h5 style={{ textAlign: 'center' }}>Gagal!</h5>

        <div className='d-flex flex-column align-items-center'>
          <p style={{ textAlign: 'center' }}>Data berhasil disimpan dengan baik</p>
          <button onClick={onClose} id='closeSucces' className='rounded-3 btn btn-primary'>OK</button>
        </div>
      </div>
    </div>
  );
};


export default FailedModal;
