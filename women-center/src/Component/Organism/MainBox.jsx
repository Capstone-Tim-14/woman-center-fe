// MainBox.jsx
import React from 'react';
import Summary from '../Atom/Summary';
import Options from '../Atom/Option';
import UserAktif from '../molekul/UserAktif';
import SesiKonseling from '../molekul/SesiKonseling';
import TotalArtikel from '../molekul/TotalArtikel';
import SesiDipesan from '../molekul/SesiDipesan';
import './MainBox.css';

const MainBox = () => {
  return (
    <div className="main-box">
      <div className="Summary">
        <Summary />
      <div className="options">
          <Options />
      </div>

      </div>
      <div className="box-user-aktif">
        <UserAktif />
      </div>
      <div className="box">
        <SesiKonseling />
      </div>
      <div className="box-total-artikel">
        <TotalArtikel />
      </div>
      <div className="box">
        <SesiDipesan />
      </div>
    </div>
  );
};

export default MainBox;
