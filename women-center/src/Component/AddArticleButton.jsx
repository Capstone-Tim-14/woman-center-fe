import React from 'react';

const AddArticleButton = () => (
  <div className="div-additional-content">
    {/* Additional content goes here */}
    <div className="container">
      <button className="add-article-button" onClick={handleAddArticle}>
        <div className="button-text">+ Buat Artikel</div>
      </button>
    </div>
  </div>
);

const handleAddArticle = () => {
  // Handle the logic when the "Buat Artikel" button is clicked
  console.log("Tambah artikel logic"); // Ganti dengan logika sesuai kebutuhan
};

export default AddArticleButton;
