import React, { useState } from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const PageOptions = ({ onPageChange }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const totalPages = 44; // Ubah sesuai kebutuhan

  const handlePageChange = (newPage) => {
    setSelectedPage(newPage);
    if (typeof onPageChange === 'function') {
      onPageChange(newPage);
    }
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
      <button onClick={() => handlePageChange(selectedPage - 1)} disabled={selectedPage === 1}>
        <GrFormPrevious />
      </button>
      <button onClick={() => handlePageChange(selectedPage + 1)} disabled={selectedPage === totalPages}>
        <GrFormNext />
      </button>
    </div>
  );
};

export default PageOptions;
