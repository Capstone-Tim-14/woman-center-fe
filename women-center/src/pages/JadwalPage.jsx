import React from "react";
import HeaderJadwal from "../components/Organism/HeaderJadwal";
import KalenderContainers from "../components/Organism/KalenderContainer";
import SesiContainers from "../components/Organism/SesiContainer";
import KalenderLeft from '../components/Organism/KalenderLeft';
import NoteKalender from '../components/Organism/NoteKalender';

import "../styles/Jadwal.css";



const JadwalPage = () => {
  
    return (
        <div className="jadwal-page">
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