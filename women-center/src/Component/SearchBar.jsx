import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Ikon pencarian */}
      <div className="search-icon">
        <img src="public/asset/Search.jpg" alt="Search-Icon" />
      </div>

      {/* Kotak pencarian */}
      <input type="text" placeholder="Search..." />

    </div>
  );
};

export default SearchBar;
