// SearchBar.jsx
import React, { useState } from 'react';
import PopUpModal from '../organisms/PopUpModal'; // Impor komponen PopUpModal dari file terpisah

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="search-bar">
      {/* Ikon pencarian */}
      <div className="search-icon">
        <img src='public/asset/Search.jpg' alt="Search-Icon" />
      </div>

      {/* Kotak pencarian */}
      <input type="text" placeholder="Search..." />

      {/* Ikon filter date */}
      <div className="filter-date-icon" onClick={togglePopup}>
        <img src='public/asset/filterdate.png' alt="Filter-Date-Icon" />
      </div>

      {/* Memanggil komponen PopUpModal */}
      <PopUpModal isOpen={isOpen} togglePopup={togglePopup} />
    </div>
  );
};

export default SearchBar;
