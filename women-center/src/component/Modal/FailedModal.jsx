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
    width: '200px',
    height: '200px',
    margin: '0 auto',
    display: 'block',
  };

  const centerText = {
    textAlign: 'center',
  };


  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content d-flex flex-column gap-1">
        <img src="src/assets/gambar/ceklis.png" alt="Ceklis" style={imageStyle} />
        <h5 style={{ ...centerText, fontSize: '24px', marginLeft:'95px', marginTop:'10px' }}>GAGAL!</h5>
        <div className='d-flex flex-column align-items-center'>
          <p style={{ textAlign: 'center', marginLeft:'10px' }}>Telah terjadi kesalahan coba lagi</p>
          <button onClick={onClose} id='closeSucces' className='rounded-3 btn button-modal' style={{width:'140px', marginLeft:'20px', color:'white'}}>OK</button>
        </div>
      </div>
    </div>
  );
};


export default FailedModal;
