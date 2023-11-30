import React from "react";
import Listartikel from "../components/list-artikel";
import Header from "../components/Organism/HeaderContainer";
import MainBox from "../components/Organism/MainBox";
import GrafikArtikel from "../components/Organism/GrafikArtikel";



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