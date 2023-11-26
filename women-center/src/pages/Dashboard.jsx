/* eslint-disable no-unused-vars */
import React from "react";
import Topartikel from "../components/top-artikel";
import Listartikel from "../components/list-artikel";
import Header from "../components/Organism/Header";
import MainBox from "../components/Organism/MainBox";
import SliderTextCombo from "../components/Molekul/SliderTextCombo";

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

