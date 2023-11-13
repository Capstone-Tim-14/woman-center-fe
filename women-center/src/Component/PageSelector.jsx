import React from 'react';

const PageSelector = () => (
  <div className="page-selector">
    <select id="pageSelect">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      {/* Add more options as needed */}
    </select>
  </div>
);

export default PageSelector;