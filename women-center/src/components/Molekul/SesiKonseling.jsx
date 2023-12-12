import React, { useState } from 'react';
import DashboardSummarySesiDipesan from '../../assets/icon/icon 2.svg'

const SesiKonselingContainer = () => {
  // State untuk menyimpan data sesi konseling
  const [ongoingSessions, setOngoingSessions] = useState(123);
  const [percentageIncrease, setPercentageIncrease] = useState(15.80);

  // Logika atau efek samping lainnya dapat ditambahkan di sini
  // Misalnya, pembaruan data setiap beberapa detik

  return (
    <SesiKonseling
      ongoingSessions={ongoingSessions}
      percentageIncrease={percentageIncrease}
    />
  );
};

const SesiKonseling = ({ ongoingSessions, percentageIncrease }) => {
  return (
    <div className="sesi-konseling-container">
      <div className="sesi-konseling-top">
        <img src={DashboardSummarySesiDipesan} alt="konseling-icon" />
        <p>Sesi Konseling Berjalan</p>
      </div>
      <div className="sesi-konseling-bottom">
        <p>{ongoingSessions}</p>
        <p className="subtitle">+{percentageIncrease}%</p>
      </div>
    </div>
  );
};

export default SesiKonselingContainer;
