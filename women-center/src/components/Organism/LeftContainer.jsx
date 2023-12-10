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
            <img src="public/asset/icon_user.svg" alt="User Icon" />
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
        <div className="percentage-type">
            <label>Artikel Diposting</label>
            <p>1,250</p>
            <p id='format'>+15.80%</p>
          </div>
          <div className="percentage-type">
            <label>Kontributor Aktif</label>
            <p>1,180</p>
            <p id='format'>+85%</p>
          </div>
        {/* Kontributor Aktif */}
        <div className="percentage-type">
            <label>Kontributor Baru</label>
            <p>70</p>
            <p id='format'>-10%</p>
          </div>
        {/* Kontributor Baru */}
      </div>
    </div>
  </div>
);

export default LeftContainer;
