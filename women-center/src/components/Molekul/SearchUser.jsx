import React, { useState } from 'react';
import UserText from '../Atom/UserText';
import SearchBar from '../Atom/SearchBar';

const SearchUser = () => {
  return (
    <div className="search-container">
      <UserText />
      <SearchBar />
    </div>
  );
};

export default SearchUser;
