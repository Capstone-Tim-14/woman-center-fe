/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Konselor from "../pages/konselor";
import KonselingPage from "../pages/Konseling";
import ArtikelPage from "../pages/ArtikelPage";
import KarierPage from "../pages/KarierPage";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/konselor" element={<Konselor />} />
      <Route path="/konseling" element={<KonselingPage />} />
      <Route path="/artikel" element={<ArtikelPage />} />
      <Route path="/karier" element={<KarierPage />} />
    </Routes>
  );
};

export default Routers;
