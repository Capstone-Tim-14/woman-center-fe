import React, { useState } from 'react';
import UserText from '../atoms/UserText';
import SearchBar from '../atoms/SearchBar';


const SearchUser = () => {
  return (
    <div className="search-container">
      <UserText />
      <SearchBar />
    </div>
  );
};

export default SearchUser;
