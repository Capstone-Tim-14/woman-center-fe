// ItemPerPage.jsx
import React, { useState } from 'react';

const ItemPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 200; // Jumlah total item (ganti sesuai kebutuhan)
  const currentPage = 1; // Halaman saat ini (ganti sesuai kebutuhan)

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const generatePageOptions = () => {
    const options = [10, 20, 30]; // Pilihan jumlah item per halaman
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <div className="page-selector">
      <div className="items-per-page-select">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          {generatePageOptions()}
        </select>
        <label>Items per page</label>
      </div>

      <div className="page-info">
        <p>
          {startIndex}-{endIndex} items of {totalItems} items
        </p>
      </div>
    </div>
  );
};

export default ItemPerPage;
