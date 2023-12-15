import React from "react";
import HeaderJadwal from "../components/Organism/HeaderJadwal";
import KalenderContainers from "../components/Organism/KalenderContainer";
import SesiContainers from "../components/Organism/SesiContainer";
import KalenderLeft from '../components/Organism/KalenderLeft';
import NoteKalender from '../components/Organism/NoteKalender';
import ModalEditKonseling from '../components/Molekul/Modal/EditKonselingPaket';
import PageSelector from "../components/Organism/PageSelector"; // Ganti nama import menjadi PageSelector

import "../styles/Jadwal.css";


const containerStyle = {
  overflowX: "hidden",
};
const JadwalPage = () => {

  return (
    <div className="jadwal-page" style={containerStyle}>
      {/* Gunakan komponen Header */}
      <HeaderJadwal />

      <div className="sub-jadwal-kalender">
        <KalenderLeft />
        <NoteKalender />
      </div>


      <div className="sub-content-jadwal-sesi">
        <SesiContainers />
      </div>


    </div>
  );
}

export default JadwalPage;