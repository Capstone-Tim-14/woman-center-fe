import React, { useState, useEffect } from 'react';
import "../../styles/sesi-left-konseling.css"
import imagedashboard from "../../assets/icon/shadow.png"
import PageOptions from '../Molekul/PageOption';
import ModalEditAcara from '../Molekul/Modal/modalEditAcara';


const SesiRightContainer = () => {

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
            <div className="Sesi-acara">
                <div className="all-sesi-konseling">
                    <div className="head-dashboard-sesi-konseling">
                        <h6 className="txt-dashboard-sesi-konseling">Acara</h6>
                    </div>
                    <div className="head-dashboard-sesi-konseling">
                        <h10 className="txt-dashboard2-sesi-konseling">4 Acara Minggu Ini</h10>
                    </div>
                    <hr className="garis" />
                    <div className="showall-sesi-konseling">
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <div className="show-sesi-konseling" >
                            <div className="img-sesi-konseling">
                                <img src={imagedashboard} alt="img-sesi-konseling" />
                            </div>
                            <div className="content-sesi-konseling">
                                <h5 className="title-sesi-konseling" style={{display: "flex"}}>
                                    Nama Acara
                                    <ModalEditAcara/></h5>
                                    <div style={{marginTop: "-120px"}}>
                                <h5 className="sub-title-sesi-konseling2">Taman Ismail Marzuki, Jakarta<br /></h5>
                                <p className="subtitle-sesi-konseling">Tanggal         : 9 November 2023</p>
                                <p className="subtitle-sesi-konseling2">Countdown      : 1 hari, 5 jam 50 menit</p>

                                    </div>
                            </div>
                        </div>
                        <PageOptions onPageChange={goToPage} totalPages={pagination.totalPage || 1} />
                    </div>
                </div>
            </div>
        )
    };

    export default SesiRightContainer;