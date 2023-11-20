import React from 'react';

const UserSection = () => (
  <div>
    {/* User Section */}
    <div className="user-text">User</div>
    <div className="container">
      <div className="header">
        <div className="search-container">
          {/* Search Icon */}
          <i className="fas fa-search">
            <img className="search-icon" src="public/asset/Search.jpg" alt="Search Icon" />
          </i>
          {/* Search Input */}
          <input type="text" placeholder="Search" />
        </div>

        {/* Right Section */}
        <div className="option-container">
          {/* Filter Date Button */}
          <a id="filterDateButton" className="option-button">
            <img id="filterDateIcon" className="option-icon" src="public/asset/filterdate.png" alt="Icon 1" />
          </a>
          {/* Other Option Icon */}
        </div>
      </div>
    </div>
  </div>
);

export default UserSection;