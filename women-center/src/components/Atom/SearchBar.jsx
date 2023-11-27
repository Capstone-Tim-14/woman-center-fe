// SearchBar.jsx
import React, { useState } from 'react';
import PopUpModal from '../Organism/PopUpModal'; // Impor komponen PopUpModal dari file terpisah

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    // Lakukan logika pencarian sesuai dengan nilai searchText
    console.log(`Searching for: ${searchText}`);
    // Tambahkan logika lainnya sesuai kebutuhan, misalnya tampilkan hasil pencarian.
  };

  return (
    <div className="search-bar">
      {/* Tombol pencarian */}
      <button className="search-button" onClick={handleSearch}>
        <img src='public/asset/Search.jpg' alt="Search-Icon" />
      </button>

      {/* Kotak pencarian */}
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />

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
