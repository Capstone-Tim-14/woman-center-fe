import React, { useState } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import AddArticleButton from './AddArticleButton';

const MainContainer = () => {
  const [isCreateArticleClicked, setCreateArticleClicked] = useState(false);

  const handleCreateArticleClick = () => {
    setCreateArticleClicked(true);
    // Additional logic or actions when the button is clicked
  };

  return (
    <div className="main-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1>Artikel</h1>
          <div className="subtitle">
            <div className="icon-home">
              <img className="icon-home-img" src="public/asset/Home.jpg" alt="Home Icon" />
            </div>
            <div className="subtitle-text">/ Artikel</div>
          </div>
        </div>
        <div className="header-icons">
          {/* Notification Icon */}
          <div className="div-icon">
            <div className="div-icon-inner">
              <img className="div-icon-bar" src="public/asset/Notification.jpg" alt="Notification Icon" />
            </div>
          </div>

          {/* Profile Image */}
          <img className="div-image" src="public/asset/profile 1.jpg" alt="Profile Image" />
        </div>
      </div>

      {/* Sub-Containers */}
      <div className="sub-containers">
        {/* Left Container */}
        <LeftContainer />

        {/* Right Container */}
        <RightContainer />
      </div>

      {/* Button */}
      <div className='create-article-button'>
      <AddArticleButton />
      </div>
    </div>
  );
};

export default MainContainer;
