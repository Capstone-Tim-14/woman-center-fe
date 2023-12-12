import React, { useState } from 'react';
import DashboardSummary from '../../assets/icon/icon_user.svg'

const UserAktifContainer = () => {
  // State untuk menyimpan data total artikel
  const [activeUsersCount, setActiveUsersCount] = useState(21250);
  const [percentageIncrease, setPercentageIncrease] = useState(15.80);

  // Logika atau efek samping lainnya dapat ditambahkan di sini
  // Misalnya, pembaruan data setiap beberapa detik

  return (
    <div className="user-aktif-container">
      <UserAktif
        activeUsers={activeUsersCount.toLocaleString()} // Format angka di sini
        percentageIncrease={percentageIncrease}
      />
    </div>
  );
};

const UserAktif = ({ activeUsers, percentageIncrease }) => {
  return (
    <div className="box-user-aktif">
      <div className="box-top">
        <img src={DashboardSummary} alt="User Icon" />
        <p>User Aktif</p>
      </div>
      <div className="box-bottom-user">
        <p>{activeUsers}</p>
        <p className="subtitle-User">+{percentageIncrease}%</p>
      </div>
    </div>
  );
};

export default UserAktifContainer;
