import React from 'react';
import Grafik from '../Molekul/Grafik';
import Topartikel from '../../components/top-artikel';
import '../../styles/GrafikArtikel.css'; // Import the CSS file

function GrafikArtikel() {
  return (
    <div className="articles-organism">
      <div className="left-column">
        <Grafik />
      </div>
      <div className="right-column">
        <Topartikel />
      </div>
    </div>
  );
}

export default GrafikArtikel;