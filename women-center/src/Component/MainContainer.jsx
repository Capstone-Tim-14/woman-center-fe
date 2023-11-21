// MainContainer.jsx
import React, { useState } from 'react';
import SubContainers from './SubContainer';
import AddArticleButton from './AddArticleButton';
import Header from './Header';
import UserText from './Usertext';
import SearchBar from './SearchBar';
import TableSection from './TableSection'; // Import TableSection component

const MainContainer = () => {
  const [isCreateArticleClicked, setCreateArticleClicked] = useState(false);

  const handleCreateArticleClick = () => {
    setCreateArticleClicked(true);
    // Additional logic or actions when the button is clicked
  };

  return (
    <div className="main-container">
      {/* Gunakan komponen Header */}
      <Header />

      {/* Sub-Containers */}
      <div className="sub-containers">
        <SubContainers />
      </div>

      {/* Button */}
      <div className='create-article-button'>
        <AddArticleButton />
      </div>

      {/* User Text */}
      <UserText />

      {/* Search Bar */}
      <SearchBar />

      {/* Table Section */}
      <TableSection />
    </div>
  );
};

export default MainContainer;
