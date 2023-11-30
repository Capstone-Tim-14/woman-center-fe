import React from "react";
import Topartikel from "../components/top-artikel";
import Listartikel from "../components/list-artikel";
import Header from "../components/Organism/HeaderContainer";
import MainBox from "../components/Organism/MainBox";
import GrafikArtikel from "../components/Organism/GrafikArtikel";



const Dashboard = () => {
    return (
        <div className="dashboard"> 
            <Header />
            <MainBox />
            <GrafikArtikel />
            <Topartikel />
            <Listartikel />
        </div>
    );
}

export default Dashboard;