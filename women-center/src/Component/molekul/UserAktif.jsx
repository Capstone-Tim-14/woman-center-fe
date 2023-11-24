import React from 'react';

const UserAktif = () => {
  return (
    <div className="box-user-aktif">
      <div className="box-top">
        <img src="src/asset/icon.svg" alt="User Icon" />
        <p>User Aktif</p>
      </div>
      <div className="box-bottom-user">
        <p>12.250</p>
        <p className="subtitle">+15.80%</p>
      </div>
    </div>
  );
};

export default UserAktif;
