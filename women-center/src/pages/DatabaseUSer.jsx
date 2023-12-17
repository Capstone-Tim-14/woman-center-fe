import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Database.css";
import Col from 'react-bootstrap/Col';
import Header from "../components/Organism/HeaderDatabase";
import SummaryUser from "../components/Organism/SummaryDatabaseUser.jsx";
import UserText from "../components/Atom/UserTextDatabaseUser.jsx";
import ModalTambahAkunUser from '../components/Molekul/Modal/modalTambahAkunUser.jsx';
import SearchBar from "../components/Atom/SearchBarDatabase.jsx";
import NewTabelUser from '../components/Organism/TabelUser.jsx';
import PageSelector from "../components/Organism/PageSelector"; 


const DatabaseUser = () => {

  return (
    <div className='container-xl'>
    <div className='d-flex flex-column gap-4'>
      <Header />
      <SummaryUser />
      <NewTabelUser />
    </div>
  </div>


  );
};


export default DatabaseUser;
