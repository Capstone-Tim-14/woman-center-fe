import React from 'react';

const LeftContainer = () => (
  <div className="new-container left-container">
    {/* Top Section of Left Container */}
    <div className="div-header">
      <div className="div-header-content">
        <div className="div-header-left">
          <img className="icon-image" src="public/asset/Two-user.jpg" alt="Icon" />
          <div className="div-header-title">Interaksi Kontributor</div>
        </div>
        <select id="timeOptionLeft" className="div-option">
          <option value="hari">Hari</option>
          <option value="minggu">Minggu</option>
          <option value="bulan">Bulan</option>
          <option value="tahun">Tahun</option>
        </select>
      </div>
    </div>

    {/* Bottom Section of Left Container */}
    <div className="div-footer">
      <div className="div-footer-content">
        {/* Artikel Diposting */}
        <div className="div-footer-item">
          <div className="div-footer-title">Artikel Diposting</div>
          <div className="div-footer-data">1,250</div>
          <div className="div-footer-percentage">+15.80%</div>
        </div>
        {/* Kontributor Aktif */}
        <div className="div-footer-item">
          <div className="div-footer-title">Kontributor Aktif</div>
          <div className="div-footer-data">1,180</div>
          <div className="div-footer-percentage">+85%</div>
        </div>
        {/* Kontributor Baru */}
        <div className="div-footer-item">
          <div className="div-footer-title">Kontributor Baru</div>
          <div className="div-footer-data">70</div>
          <div className="div-footer-percentage">-10%</div>
        </div>
      </div>
    </div>
  </div>
);

export default LeftContainer;