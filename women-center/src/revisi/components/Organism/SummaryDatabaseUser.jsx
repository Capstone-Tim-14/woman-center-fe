import React from 'react';
import image from '../../assets/icon/icon_user.svg'


const SummaryDatabaseUser = () => {
  return (
    <div className="sub-containers-user">
    <div className="interaksi-kontributor-database-user">
    <div className="div-header-database-user">
      <div className="div-header-content-database-user">
        <div className="div-header-left-database-user">
          <div className="icon-box-database-user">
            <img src={image} alt="User Icon" />
          </div>
        </div>
        <div className="div-header-title-database-user">
          <div className="div-title-DashboardSummary-database-user">User</div>
        </div>
      </div>
    </div>

    {/* Bottom Section of Left Container */}
    <div className="div-footer-database-user">
      <div className="div-footer-content-database-user">
        <div className="percentage-type-database-user">
            <label>User Baru</label>
            <p>1250</p>
            <p id='format'>+15.80%</p>
        </div>
        <div className="percentage-type-database-user">
            <label>User Aktif</label>
            <p>1180</p>
            <p id='format'>+85%</p>
        </div>
        {/* Kontributor Aktif */}
        <div className="percentage-type-database-user">
            <label>Konseling</label>
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