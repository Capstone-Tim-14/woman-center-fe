/* eslint-disable no-unused-vars */
import React from "react";
import Topartikel from "../components/top-artikel";
import Listartikel from "../components/list-artikel";
import Header from "../Component/Organism/Header";
import MainBox from "../Component/Organism/MainBox";
import SliderTextCombo from "../Component/molekul/SliderTextCombo";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <MainBox />
            <SliderTextCombo />
            <Topartikel />
            <Listartikel />
        </div>
    );
}

export default Dashboard;
