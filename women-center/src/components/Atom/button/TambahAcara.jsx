import React, { useState } from 'react';
import BerhasilAcara from '../../Molekul/Modal/BerhasilAcara';
const TambahAcara = ({ handleSubmit, id }) => {
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
      <button 
        id={id}
        type="button" 
        className="submit" 
        onClick={handleFormSubmit}>
        Tambah
      </button>
      {/* Render PopupComponent if showPopup is true */}
      {showPopup && <BerhasilAcara handleClose={handleClose} />}
    </>
  );
};

export default TambahAcara;
