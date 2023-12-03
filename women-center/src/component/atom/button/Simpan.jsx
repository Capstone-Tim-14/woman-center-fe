import React, { useState } from 'react';
import Berhasil from '../../molekul/modal/Berhasil';

const Simpan = ({ handleSubmit }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = () => {
    // Your existing logic for form submission

    // Set showPopup to true after successful submission
    setShowPopup(true);
  };

  const handleClose = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <>
      <button type="button" className="submit" onClick={handleFormSubmit}>
        Simpan
      </button>
      {/* Render PopupComponent if showPopup is true */}
      {showPopup && <Berhasil handleClose={handleClose} />}
    </>
  );
};

export default Simpan;
