// MainContainer.jsx
import React, { useState } from 'react';
import SubContainers from './SubContainer';
import AddArticleButton from '../atoms/AddArticleButton';
import Header from './Header';
import UserText from '../atoms/UserText';
import SearchBar from '../atoms/SearchBar';
import TableSection from '../molecules/TableSection'; // Import TableSection component

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
