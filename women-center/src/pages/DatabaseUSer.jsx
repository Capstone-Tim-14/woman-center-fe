import React from 'react';
import "../styles/Database.css";
import Header from "../components/Organism/HeaderDatabase";
import SummaryUser from "../components/Organism/SummaryDatabaseUser.jsx";
import NewTabelUser from '../components/Organism/TabelUser.jsx';


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
