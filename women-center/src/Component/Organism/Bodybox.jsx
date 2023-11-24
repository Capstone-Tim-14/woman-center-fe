// Bodybox.jsx
import React from 'react';
import UserAktif from '../molekul/UserAktif';
import SesiKonseling from '../molekul/SesiKonseling';
import TotalArtikel from '../molekul/TotalArtikel';
import SesiDipesan from '../molekul/SesiDipesan';
import './Bodybox.css';

const Bodybox = () => {
  return (
    <div className="display-flex"> {/* Tambahkan class display-flex */}
      <UserAktif />
      <SesiKonseling />
      <TotalArtikel />
      <SesiDipesan />
    </div>
  );
};

export default Bodybox;
