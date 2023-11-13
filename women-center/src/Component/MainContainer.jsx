import React from 'react';


const MainContainer = () => (
  <div className="main-container">
    {/* Top Section */}
    <div className="div-top-section">
      <div className="div-title-bar">
        <div className="div-title">Artikel</div>
        <div className="div-icons">
          {/* Notification Icon */}
          <div className="div-icon">
            <div className="div-icon-inner">
              <img className="div-icon-bar" src="public/asset/Notification.jpg" alt="Icon Bar" />
            </div>
          </div>
          {/* Profile Image */}
          <img className="div-image" src="public/asset/profile 1.jpg" alt="Icon Image" />
        </div>
      </div>
      <div className="div-top-content">
        <div className="div-subtitle">
          <div className="div-icon-home">
            {/* Home Icon */}
            <img className="div-icon-home-img" src="public/asset/Home.jpg" alt="Home Icon" />
          </div>
          <div className="div-subtitle-text">/ Artikel</div>
        </div>
      </div>
    </div>
  </div>
);

export default MainContainer;