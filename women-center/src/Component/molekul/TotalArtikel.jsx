// TotalArtikel.jsx
import React from 'react';

const TotalArtikel = () => {
  return (
    <div className="box-total-artikel"> {/* Tambahkan kelas "total-artikel" */}
      <div className="box-top.artikell">
        <img src="src/asset/Document.svg" alt="User Icon" />
        <p>Total Artikel</p>
      </div>
      <div className="box-bottom-artikel">
        <p>21,250</p>
        <p className="subtitle">+15.80%</p>
      </div>
    </div>
  );
};

export default TotalArtikel;
