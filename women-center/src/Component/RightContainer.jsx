import React from 'react';

const RightContainer = () => (
  <div className="new-container right-container">
    {/* Top Section of Right Container */}
    <div className="div-header">
      <div className="div-header-content">
        <div className="div-header-left">
          <img className="icon-image" src="public/asset/User.png" alt="Icon" />
          <div className="div-header-title">Interaksi User</div>
        </div>
        <select id="timeOptionRight" className="div-option1">
          <option value="hari">Hari</option>
          <option value="minggu">Minggu</option>
          <option value="bulan">Bulan</option>
          <option value="tahun">Tahun</option>
        </select>
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