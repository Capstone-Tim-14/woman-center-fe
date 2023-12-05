import React from 'react';
import Layout from "./components/Layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPages from "./pages/loginPages.jsx";
import Jadwal from "./pages/JadwalPage.jsx";
import Artikel from "./pages/ArtikelContainer.jsx";
import ModalTambahAcara from './components/Molekul/Modal/modalTambahAcara.jsx';
import ModalEditAcara from './components/Molekul/Modal/modalEditAcara.jsx';


function App() {
  return (

    <Routes>
      <Route path="/login" exact element={<LoginPages />} />
      <Route element={<Layout />}>
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/acara" element={<ModalTambahAcara />} />
        <Route path="/editacara" element={<ModalEditAcara />} />
      </Route>
    </Routes>


  );
}

export default App;
