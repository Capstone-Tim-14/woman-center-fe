import React, { useState } from 'react';
import DashboardSummarySesiDipesan from '../../assets/icon/tas.svg'

const SesiDipesanContainer = () => {
  // State untuk menyimpan data sesi dipesan
  const [reservedSessions, setReservedSessions] = useState(1250);
  const [percentageIncrease, setPercentageIncrease] = useState(15.80);

  // Logika atau efek samping lainnya dapat ditambahkan di sini
  // Misalnya, pembaruan data setiap beberapa detik

  return (
    <SesiDipesan
      reservedSessions={reservedSessions}
      percentageIncrease={percentageIncrease}
    />
  );
};

const SesiDipesan = ({ reservedSessions, percentageIncrease }) => {
  return (
    <div className="box-sesi-dipesan">
      <div className="box-top-dipesan-container">
        <img src={DashboardSummarySesiDipesan} alt="User Icon" />
        <p>Sesi Dipesan</p>
      </div>
      <div className="box-bottom-dipesan">
        <p>{reservedSessions.toLocaleString()}</p>
        <p className="subtitle">+{percentageIncrease}%</p>
      </div>
    </div>
  );
};

export default SesiDipesanContainer;
