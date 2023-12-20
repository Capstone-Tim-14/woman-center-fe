// Container.jsx
import React from 'react';
import UserAktifContainer from '../Molekul/UserAktif';
import SesiKonselingContainer from '../Molekul/SesiKonseling';
import TotalArtikelContainer from '../Molekul/TotalArtikel';
import SesiDipesanContainer from '../Molekul/SesiDipesan';
import '../../styles/Container.css';

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
