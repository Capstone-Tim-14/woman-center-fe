import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddArticleButton = () => {

  const navigate = useNavigate();

 const handleClick = () => {
   
    navigate('/addarticle');
  };

  return (
    <a href="/artikel/addartikel" >
    <button className="create-article-button" onClick={handleClick}>
      + Buat Artikel
    </button>
    </a>
  );
};

export default AddArticleButton;
