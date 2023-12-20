import { React, useState } from 'react'
import ArtikelBaru from '../components/Organism/ArtikelBaru';
import HeaderArtikel from '../components/Organism/header/headerArtikel';

const AddArtikel = () => {
   
  const [showPopup, setShowPopup] = useState(false);
  const [articleData, setArticleData] = useState({
    title: '',
    articleContent: '',
    selectedCategories: [],
    image: null,
  });

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    
    console.log('Submitting data:', articleData);

   
    handleClosePopup();
  };

  const handleTitleChange = (newTitle) => {
   
    setArticleData((prevData) => ({
      ...prevData,
      title: newTitle,
    }));
  };

    return (
        <>
        <div className="page-container">
          <ArtikelBaru onTitleChange={handleTitleChange} />
        </div>
      </>
    );
  };

export default AddArtikel