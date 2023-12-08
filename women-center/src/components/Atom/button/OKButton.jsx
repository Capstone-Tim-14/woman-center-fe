import React from 'react';
import '../../../styleS/Berhasil.css';

const OKButton = ({ handleClick }) => {
  return (
    <button type="button" className="OK-button" onClick={handleClick}>
    OK
  </button>
  );
};

export default OKButton;
