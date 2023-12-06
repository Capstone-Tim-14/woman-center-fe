import React from 'react';


const SummaryKarir = () => {
  return (
    <div className="sub-containers">
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
          <div className="div-title-DashboardSummary">Interaksi User</div>
        </div>
      </div>
    </div>

    {/* Bottom Section of Left Container */}
    <div className="div-footer">
      <div className="div-footer-content">
        {/* Artikel Diposting */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Akses Harian</div>
          <div className="div-footer-data-left">200</div>
          <div className="div-footer-percentage-left">+15.80%</div>
        </div>
        {/* Kontributor Aktif */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Visit Link</div>
          <div className="div-footer-data-left">7</div>
          <div className="div-footer-percentage-left">+10%</div>
        </div>
        {/* Kontributor Baru */}
        <div className="div-footer-item">
          <div className="div-footer-title-left">Pengguna Chatbot</div>
          <div className="div-footer-data-left">12</div>
          <div className="div-footer-percentage-left">-10%</div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default SummaryKarir;