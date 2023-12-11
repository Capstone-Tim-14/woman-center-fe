import React from 'react';
import image from '../../assets/icon/icon_user.svg'


const SummaryDatabaseUser = () => {
  return (
    <div className="sub-containers">
        <div className="interaksi-kontributor">
    {/* Top Section of Left Container */}
    <div className="div-header">
      <div className="div-header-content">
        <div className="div-header-left">
          {/* Colored Icon with a small box */}
          <div className="icon-box">
            <img src={image} alt="User Icon" />
          </div>
        </div>
        <div className="div-header-title">
          {/* Tulisan "Interaksi Kontributor" dan Option */}
          <div className="div-title-DashboardSummary">Konselor</div>
        </div>
      </div>
    </div>

    {/* Bottom Section of Left Container */}
    <div className="div-footer">
      <div className="div-footer-content">
        {/* Artikel Diposting */}
        <div className="percentage-type">
            <label>Konselor Aktif</label>
            <p>1250</p>
            <p id='format'>+15.80%</p>
        </div>
        <div className="percentage-type">
            <label>Konselor Baru</label>
            <p>1180</p>
            <p id='format'>+85%</p>
        </div>
        {/* Kontributor Aktif */}
        <div className="percentage-type">
            <label>Sesi Konselor</label>
            <p>70</p>
            <p id='format'>-10%</p>
        </div>        
        {/* Kontributor Baru */}
      </div>
    </div>
  </div>
    </div>
  );
};

export default SummaryDatabaseUser;