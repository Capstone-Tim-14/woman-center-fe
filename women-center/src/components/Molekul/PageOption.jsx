import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const PageOptions = ({ onPageChange, totalPages }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (newPage) => {
    setSelectedPage(newPage);
    onPageChange(newPage);
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
    <div className="page-options-artikel">
      <select
        value={selectedPage}
        onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
      >
        {generatePageOptions()}
      </select>
      <p>of {totalPages} pages</p>
      <button
        className="pages-prevnext"
        onClick={() => handlePageChange(selectedPage - 1)}
        disabled={selectedPage === 1}
      >
        <GrFormPrevious />
      </button>
      <button
        className="pages-prevnext"
        onClick={() => handlePageChange(selectedPage + 1)}
        disabled={selectedPage === totalPages}
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default PageOptions;