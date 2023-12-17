import React from 'react';
import '../../../styles/BerhasilAcara.css';
import OKButton from '../../Atom/button/OKButton';

const BerhasilAcara = ({ handleClose }) => {
  const handleOKClick = () => {
    handleClose(); // Tambahkan logika yang dibutuhkan pada tombol OK jika diperlukan
  };

  return (
    <div className="popup-overlay-berhasil">
      <div className="popup-content-berhasil">
        <h2>BERHASIL</h2>
        {/* Image di bawah judul */}
        <img src="src/assets/icon/Group.png" alt="Success Icon" />
        <p>Acara berhasil ditambahkan</p>
        {/* Menggunakan komponen OKButton */}
        <OKButton handleClick={handleOKClick} />
      </div>
    </div>
  );
};

export default BerhasilAcara;
