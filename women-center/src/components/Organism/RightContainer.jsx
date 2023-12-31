import React from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import ArtikelSummary from '../../assets/icon/user_artikel.svg'
import '../../styles/ArtikelContainer.css'

const RightContainer = () => (
  <div className="Interaksi-user">
    {/* Top Section of Right Container */}
    <div className="div-header">
      <div className="div-header-content">
        <div className="div-header-right">
          {/* Icon */}
          <div className="icon-box">
          <img src={ArtikelSummary} alt="User Icon" />
          </div>
          <div className="div-header-title">Interaksi User</div>
        </div>
      </div>
    </div>

    {/* Bottom Section of Right Container */}
    <div className="div-footer">
      <div className="div-footer-content">
        {/* Artikel Diposting */}
        <div className="div-footer-item">
          <div className="div-footer-title">Jumlah Baca</div>
          <div className="div-footer-data">30</div>
          <div className="div-footer-percentage">-20%</div>
        </div>
        {/* Kontributor Aktif */}
        <div className="div-footer-item">
          <div className="div-footer-title">Jumlah Komentar</div>
          <div className="div-footer-data">657</div>
        </div>
        {/* Kontributor Baru */}
        <div className="div-footer-item">
          <div className="div-footer-title">Jumlah Simpan</div>
          <div className="div-footer-data">5</div>
        </div>
      </div>
    </div>
  </div>
);

export default RightContainer;
