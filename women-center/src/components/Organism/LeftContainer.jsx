import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';

const LeftContainer = () => (
  <div className="interaksi-kontributor">
    {/* Top Section of Left Container */}
    <div className="div-header">
      <div className="div-header-content">
        <div className="div-header-left">
          {/* Colored Icon with a small box */}
          <div className="icon-box">
            <HiOutlineUsers className="icon-image colored-icon" />
          </div>
        </div>
        <div className="div-header-title">
          {/* Tulisan "Interaksi Kontributor" dan Option */}
          <div className="div-title-DashboardSummary">Interaksi Kontributor</div>
        </div>
      </div>
    </div>

    {/* Bottom Section of Left Container */}
    <div className="div-footer">
      <div className="div-footer-content">
        {/* Artikel Diposting */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Artikel Diposting</div>
          <div className="div-footer-data-left">1,250</div>
          <div className="div-footer-percentage-left">+15.80%</div>
        </div>
        {/* Kontributor Aktif */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Kontributor Aktif</div>
          <div className="div-footer-data-left">1,180</div>
          <div className="div-footer-percentage-left">+85%</div>
        </div>
        {/* Kontributor Baru */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Kontributor Baru</div>
          <div className="div-footer-data-left">70</div>
          <div className="div-footer-percentage-left">-10%</div>
        </div>
      </div>
    </div>
  </div>
);

export default LeftContainer;
