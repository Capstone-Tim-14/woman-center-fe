import React from 'react';
import Layout from "./components/Layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPages from "./pages/loginPages.jsx";
import Dashboard from './pages/Dashboard.jsx';
import DatabaseUser from "./pages/DatabaseUSer.jsx";
import DatabaseKonselor from "./pages/DatabaseKonselor.jsx";
import Jadwal from "./pages/JadwalPage.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/editProfile.jsx";
import Artikel from "./pages/ArtikelContainer.jsx";
import AddArtikel from "./pages/AddArtikel.jsx";
//import KalenderPage from "./pages/Kalender.jsx";
import { AuthProvider } from './components/Layout/AuthContext'

function App() {
  return (
<AuthProvider>
            <Routes>
              
                <Route path="/" exact element={<LoginPages />} />
                <Route element={<Layout />}>
                   <Route path="/dashboard" element={<Dashboard />} />
                   <Route path="/database/konselor" element={<DatabaseKonselor />} />
                   <Route path="/database/user" element={<DatabaseUser />} />
                   <Route path="/jadwal" element={<Jadwal />} />
                  <Route path ="/artikel/addartikel" element={<AddArtikel/>} />
                   <Route path="/artikel" element={<Artikel />} />
                   <Route path="/profile" element={<Profile />} />
                   <Route path="/profile/editprofile" element={<EditProfile />} />
                </Route>     
                
            </Routes>
            </AuthProvider>



  );
}

export default App;
