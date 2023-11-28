/* eslint-disable no-unused-vars */
import React from "react";
import Listartikel from "../components/list-artikel";
import Header from "../Component/Organism/Header";
import MainBox from "../Component/Organism/MainBox";
import GrafikArtikel from "../Component/Organism/GrafikArtikel";


const Dashboard = () => {
    return (
        <div>
            <Header />
            <MainBox />
            <GrafikArtikel />
            <Listartikel />
        </div>
    );
}

export default Dashboard;
