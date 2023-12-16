import React, { useEffect, useState } from 'react';
import "../../styles/sesi-left-konseling.css"
import imagedashboard from "../../assets/icon/shadow.png"
import EditKonseling from '../Molekul/Modal/modalEditKonseling'
import PageOptions from '../Molekul/PageOption';


const SesiLeftContainer = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        totalPage: 1,
        nextPage: null,
        prevPage: null,
    });

    const goToPage = (page) => {
        fetchData(page);
      };
      const fetchData = async (page = 1, filter = '') => {
        try {
          if (token) {
            const response = await axios.get(
            //   'https://api-ferminacare.tech/api/v1/admin/articles',
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                  page,
                  filter,
                },
              }
            );
      
            const data = response.data;
            
            // setTableData(data.data);
      
            setPagination({
              page: data.meta.page,
              totalPage: data.meta.total_page,
              nextPage: data.meta.next_page,
              prevPage: data.meta.previous_page,
            });
      
          } else {
            console.error('Token not available.');
        
            logout();
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <div className="Sesi-konseling">
            <div className="all-sesi-konseling" style={{ marginTop: '5px' }}>
                <div className="head-dashboard-sesi-konseling">
                    <h6 className="txt-dashboard-sesi-konseling">Sesi Konseling</h6>
                </div>
                <div className="head-dashboard-sesi-konseling">
                    <h10 className="txt-dashboard2-sesi-konseling">13 Sesi Hari Ini</h10>
                </div>
                <hr className="garis" />
                <div className="showall-sesi-konseling">
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling" style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling"style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling"style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling"style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling"style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <div className="show-sesi-konseling" >
                        <div className="img-sesi-konseling">
                            <img src={imagedashboard} alt="img-sesi-konseling" />
                        </div>
                        <div className="content-sesi-konseling">
                            <h5 className="title-sesi-konseling">
                                Nama Konselor S.Psi
                                <EditKonseling /><br /></h5>
                            <h5 className="sub-title-sesi-konseling"style={{marginTop: "-20px"}}>Nama Paket . Nama User<br /></h5>
                            <p className="subtitle-sesi-konseling">Sesi Tersisa   : 1 Sesi</p>
                            <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>
                        </div>
                    </div>
                    <PageOptions onPageChange={goToPage} totalPages={pagination.totalPage || 1} />

                </div>
            </div>
        </div>

    )
};

export default SesiLeftContainer;