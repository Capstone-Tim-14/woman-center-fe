/* eslint-disable no-unused-vars */
import React from "react";
import Topartikel from "../components/top-artikel";
import Listartikel from "../components/list-artikel";
import Header from "../Component/Organism/Header";
import MainBox from "../Component/Organism/MainBox";
import GrafikText from "../Component/Atom/GrafikText";
import Checkbox from "../Component/Atom/Checkbox";
import Chart from "../Component/molekul/Chart";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <MainBox />
            <GrafikText />
            <Checkbox />
            <Chart />
            <Topartikel />
            <Listartikel />
        </div>
    );
}

export default Dashboard;
