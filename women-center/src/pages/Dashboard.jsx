/* eslint-disable no-unused-vars */
import React from "react";
import Topartikel from "../components/top-artikel";
import Listartikel from "../components/list-artikel";
import Header from "../Component/Organism/Header";
import MainBox from "../Component/Organism/MainBox";
import Grafik from "../Component/molekul/Grafik";


const Dashboard = () => {
    return (
        <div>
            <Header />
            <MainBox />
            <Grafik />
            <Topartikel />
            <Listartikel />
        </div>
    );
}

export default Dashboard;
