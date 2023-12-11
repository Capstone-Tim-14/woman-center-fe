import React from "react";
import Listartikel from "../components/list-artikel";
import Header from "../components/Organism/HeaderContainer";
import MainBox from "../components/Organism/MainBox";
import GrafikArtikel from "../components/Organism/GrafikArtikel";



const Dashboard = () => {
    return (
        <div className="container"> 
            <div className="row">
                <div className="col-lg-12">
                    <Header />
                </div>
                <div className="col-lg-12">
                    <MainBox />
                </div>
                <div className="col-lg-12">
                    <GrafikArtikel />
                </div>
                <div className="col-lg-12">
                    <Listartikel />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;