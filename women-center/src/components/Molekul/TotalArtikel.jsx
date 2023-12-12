import React, { useState } from 'react';
import DashboardSummaryTotalArtikel from '../../assets/icon/Document_Summary.svg'

const TotalArtikelContainer = () => {
  // State untuk menyimpan data total artikel
  const [totalArtikel, setTotalArtikel] = useState(21250);
  const [percentageIncrease, setPercentageIncrease] = useState(15.80);

  // Logika atau efek samping lainnya dapat ditambahkan di sini
  // Misalnya, pembaruan data setiap beberapa detik

  return (
    <TotalArtikel
      totalArtikel={totalArtikel}
      percentageIncrease={percentageIncrease}
    />
  );
};

const TotalArtikel = ({ totalArtikel, percentageIncrease }) => {
  return (
    <div className="box-total-artikel">
      <div className="box-top-artikell-container">
        <img src={DashboardSummaryTotalArtikel} alt="User Icon" />
        <p>Total Artikel</p>
      </div>
      <div className="box-bottom-artikel">
        <p>{totalArtikel.toLocaleString()}</p>
        <p className="subtitle">+{percentageIncrease}%</p>
      </div>
    </div>
  );
};

export default TotalArtikelContainer;
