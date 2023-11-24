// Container.jsx
import React from 'react';
import UserAktifContainer from '../molekul/UserAktif';
import SesiKonselingContainer from '../molekul/SesiKonseling';
import TotalArtikelContainer from '../molekul/TotalArtikel';
import SesiDipesanContainer from '../molekul/SesiDipesan';
import './Container.css';

const Container = () => {
  return (
    <div className="container">
      <UserAktifContainer />
      <SesiKonselingContainer />
      <TotalArtikelContainer />
      <SesiDipesanContainer />
    </div>
  );
};

export default Container;
