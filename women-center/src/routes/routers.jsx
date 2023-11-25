/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile.jsx";
import EditProfile from "../pages/editProfile.jsx";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/editprofile" element={<EditProfile />} />
    </Routes>
  );
};

export default Routers;
