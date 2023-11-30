/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/list-artikel.css";
import { CiSearch } from 'react-icons/ci';
import Form from 'react-bootstrap/Form';
import image1 from "../assets/icon/image1.png"

const Listartikel = () => {
    const handleViewMoreClick = () => {
        console.log('View More clicked!')
    }
    return (
        <div className="all-list-dashboard">
            <div className="head-list-dashboard">
            <Form style={{ width: 250 }}>
            <div style={{ position: 'relative' }}>
                <CiSearch size={20} style={{ position: 'absolute', left: 10, top: 10 }} />
                <Form.Control type="text" placeholder="Search" style={{ paddingLeft: 30, height: 40 }} />
            </div>
                </Form>
                <p className="txt-view" onClick={handleViewMoreClick}>View More</p>
            </div>
            <div className="list-artikel-dashboard">
                <div className="content-artikel-dashboard">
                    <h6 className="text-content-artikel-dashboard">Artikel</h6>
                    <h6 className="text-content-artikel-dashboard">Tanggal Artikel</h6>
                </div>
                <div className="all-artikel-dashboard">
                    <div className="artikel-dashboard">
                        <div className="image-artikel">
                            <img src={image1} alt="img-artikel" />
                        </div>
                        <p className="name-artikel">Putri Abigail</p>
                        <p className="desc-artikel">Pentingnya Women Center dalam Mendorong Kesetaraan Gender dan Kesejahteraan Wanita</p>
                        <p className="date-artikel">29/09/2023</p>
                    </div>
                </div>
                <div className="all-artikel-dashboard">
                    <div className="artikel-dashboard">
                        <div className="image-artikel">
                            <img src={image1} alt="img-artikel" />
                        </div>
                        <p className="name-artikel">Putri Abigail</p>
                        <p className="desc-artikel">Pentingnya Women Center dalam Mendorong Kesetaraan Gender dan Kesejahteraan Wanita</p>
                        <p className="date-artikel">29/09/2023</p>
                    </div>
                </div>
                <div className="all-artikel-dashboard">
                    <div className="artikel-dashboard">
                        <div className="image-artikel">
                            <img src={image1} alt="img-artikel" />
                        </div>
                        <p className="name-artikel">Putri Abigail</p>
                        <p className="desc-artikel">Pentingnya Women Center dalam Mendorong Kesetaraan Gender dan Kesejahteraan Wanita</p>
                        <p className="date-artikel">29/09/2023</p>
                    </div>
                </div>
                <div className="all-artikel-dashboard">
                    <div className="artikel-dashboard">
                        <div className="image-artikel">
                            <img src={image1} alt="img-artikel" />
                        </div>
                        <p className="name-artikel">Putri Abigail</p>
                        <p className="desc-artikel">Pentingnya Women Center dalam Mendorong Kesetaraan Gender dan Kesejahteraan Wanita</p>
                        <p className="date-artikel">29/09/2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listartikel;
