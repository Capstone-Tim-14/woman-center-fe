/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPages from "../pages/loginPages.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import DatabaseUser from "../pages/DatabaseUSer.jsx";
import DatabaseKonselor from "../pages/DatabaseKonselor.jsx";
import Jadwal from "../pages/JadwalPage.jsx";
import Paket from "../pages/PaketPage.jsx";
import Karier from "../pages/KarirPage.jsx";
//import KalenderPage from "../pages/Kalender.jsx";
import DataKonselor from "../pages/DataKonselor.jsx";
import DataUser from "../pages/DataUser.jsx";
import Profile from "../pages/Profile.jsx";
import EditProfile from "../pages/editProfile.jsx";
import Artikel from "../pages/ArtikelContainer.jsx";
import ArtikelBaru from "../components/Organism/ArtikelBaru.jsx"

//import AddArtikel from "../pages/AddArtikel.jsx";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/database/konselor" element={<DatabaseKonselor />} />
      <Route path="/database/user" element={<DatabaseUser />} />
      {/*<Route path="/paket" element={<KalenderPage />} />*/}
      {/*<Route path="/database/data-konselor" element={<DataKonselor />} />
      <Route path="/database/data-user" element={<DataUser />} />*/}
      <Route path="/jadwal" element={<Jadwal />} />
      <Route path="/paket" element={<Paket />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/karier" element={<Karier />} />
      <Route path ="/artikel/addartikel" element={<ArtikelBaru/>} />
      {/*<Route path ="/artikel/addartikel" element={<AddArtikel/>} />*/}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/editprofile" element={<EditProfile />} />
    </Routes>
  );
};

export default Routers;
