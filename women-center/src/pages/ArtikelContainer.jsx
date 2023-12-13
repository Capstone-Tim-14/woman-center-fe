import React, { useState } from 'react';
import SubContainers from "../components/Organism/SubContainer";
import AddArticleButton from "../components/Atom/AddArticleButton";
import Header from "../components/Organism/HeaderArtikel";
import UserText from "../components/Atom/UserText";
import SearchBar from "../components/Atom/SearchBar";
import TableSection from "../components/Molekul/TableSection";
import PageSelector from "../components/Organism/PageSelector"; // Ganti nama import menjadi PageSelector
import "../styles/ArtikelContainer.css";


const ArtikelContainer = () => {
  
  const [isCreateArticleClicked, setCreateArticleClicked] = useState(false);

  const handleCreateArticleClick = () => {
    setCreateArticleClicked(true);
    // Additional logic or actions when the button is clicked
  };

  return (
    <div className="main-container">
      {/* Gunakan komponen Header */}
      <Header />

      {/* Sub-Containers */}
      <div className="sub-containers">
        <SubContainers />
      </div>

      {/* Button */}
      <div className='create-article-button'>
        <AddArticleButton />
      </div>

      {/* UserText */}
      <UserText />

      {/* Search Bar */}
      <SearchBar />

      {/* Table Section */}
      <TableSection />

      {/* Page Selector (as Footer) */}
      <footer className="page-selector-footer">
      <PageSelector />  
      </footer>
    </div>
  );
};

export default ArtikelContainer;
