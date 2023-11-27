// PageOptions.jsx
import React, { useState } from 'react';

const PageOptions = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const totalPages = 44; // Ganti sesuai kebutuhan

  const handlePageChange = (newPage) => {
    // Handle logic when page is changed (e.g., fetching data for the new page)
    setSelectedPage(newPage);
  };

  const generatePageOptions = () => {
    const options = [];
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="page-options">
      <select value={selectedPage} onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}>
        {generatePageOptions()}
      </select>
      <p>of {totalPages} pages</p>
    </div>
  );
};

export default PageOptions;
