import React from 'react';

const AddArticleButton = () => {
  const handleClick = () => {
    // Tindakan yang ingin Anda lakukan saat tombol diklik
    console.log('Tombol diklik!');
  };

  return (
    <button className="create-article-button" onClick={handleClick}>
      + Buat Artikel
    </button>
  );
};

export default AddArticleButton;
