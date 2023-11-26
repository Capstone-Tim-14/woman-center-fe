// Options.jsx
import React from 'react';

const Options = () => {
  return (
    <div className="options">
      <select id="options" name="options">
        <option value="option1">Harian</option>
        <option value="option2">Mingguan</option>
        <option value="option3">Bulanan</option>
        <option value="option4">Tahunan</option>
        {/* Tambahkan opsi lainnya sesuai kebutuhan */}
      </select>
    </div>
  );
};

export default Options;
