import React, { useState } from 'react';
import SummaryKarir from "../components/Organism/SummaryKarir";
import KarierButton from "../components/Molekul/Modal/modalTambahKarir";
import Header from "../components/Organism/HeaderKarir";
import SearchBar from "../components/Atom/SearchBar";
import TableKarir from "../components/Organism/TableKarir";
import PageSelector from "../components/Organism/PageSelector"; // Ganti nama import menjadi PageSelector
import "../styles/KarirPage.css";


const KarirPage = () => {
  
  const [isCreateKarierClicked, setCreateKarierClicked] = useState(false);

  const handleCreateKarierClick = () => {
    setCreateKarierClicked(true);
    // Additional logic or actions when the button is clicked
  };

  return (
    <div className="main-container">
      {/* Gunakan komponen Header */}
      <Header />

      {/* Sub-Containers */}
      <div className="sub-containers">
        <SummaryKarir />
      </div>

      {/* Button */}
      <div className='create-Karier-button'>
        <KarierButton />
      </div>

      {/* UserText */}


      {/* Search Bar */}
      <SearchBar />

      {/* Table Section */}
      <TableKarir />

      {/* Page Selector (as Footer) */}
      <footer className="page-selector-footer">
      <PageSelector />
      </footer>
    </div>
  );
};

export default KarirPage;