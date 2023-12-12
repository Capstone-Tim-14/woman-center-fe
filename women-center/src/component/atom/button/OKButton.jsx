import React from 'react';
import '../../../style/Berhasil.css';

const OKButton = ({ handleClick }) => {
  return (
    <button 
      id='btn-okPaket'
      type="button" 
      className="OK-button" onClick={handleClick}>
    OK
  </button>
  );
};

export default OKButton;
