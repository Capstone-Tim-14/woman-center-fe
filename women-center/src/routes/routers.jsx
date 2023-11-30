/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import DatabaseUser from "../pages/tabelUSer.jsx";
import DatabaseKonselor from "../pages/tabelKonselor.jsx";
import Jadwal from "../pages/jadwal.jsx";
//import DataKonselor from "../pages/DataKonselor.jsx";
//import DataUser from "../pagesDataUser.jsx";
import Profile from "../pages/Profile.jsx";
import EditProfile from "../pages/editProfile.jsx";
import Artikel from "../pages/ArtikelContainer.jsx";
import AddArtikel from "../pages/AddArtikel.jsx";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/*<Route path="/database/konselor" element={<DatabaseKonselor />} />*/}
      <Route path="/database/user" element={<DatabaseUser />} />
      {/*<Route path="/jadwal" element={<Jadwal />} />*/}
      <Route path="/artikel" element={<Artikel />} />
      {/*<Route path ="/artikel/addartikel" element={<AddArtikel/>} />*/}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/editprofile" element={<EditProfile />} />
    </Routes>
  );
};

export default Routers;
