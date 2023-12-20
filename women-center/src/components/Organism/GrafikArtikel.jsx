import React from 'react';
import Grafik from '../Molekul/Grafik';
import Topartikel from '../../components/top-artikel';
import '../../styles/GrafikArtikel.css';

function GrafikArtikel() {
  return (
    <div className="articles-organism d-flex gap-2" style={{ width: '100%' }}>
      <div className="left-column" style={{ width: '90%' }}>
        <Grafik />
      </div>
      <div className="right-column" style={{ width: '90%' }}>
        <Topartikel />
      </div>
    </div>
  );
}

export default GrafikArtikel;