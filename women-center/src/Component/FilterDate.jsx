// FilterDate.jsx
import React from 'react';
import moment from 'moment';

const FilterDate = () => {
  // Contoh penggunaan moment di dalam komponen
  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
      <p>Current Date: {currentDate}</p>
      {/* Tambahan logika dan UI untuk filter tanggal */}
    </div>
  );
};

export default FilterDate;
