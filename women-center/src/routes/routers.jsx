/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPages from "../pages/loginPages.jsx";
import Jadwal from "../pages/JadwalPage.jsx";




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/jadwal" element={<Jadwal />} />

    </Routes>
  );
};

export default Routers;
