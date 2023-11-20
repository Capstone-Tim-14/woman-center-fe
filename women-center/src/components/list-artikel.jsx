/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/list-artikel.css";
import { FiSearch } from "react-icons/fi";
import image1 from "../assets/image1.png"

const Listartikel = () => {
    return (
        <div className="all-list-dashboard">
            <div className="head-list-dashboard">
                <div className="search-box">
                <FiSearch  className="seacrh-icon"/>
                    <input
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <p className="txt-view">View More</p>
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
