import React, { useState } from 'react';
import {Button } from 'react-bootstrap';
import TextBoxArtikel from '../Molekul/TextBoxArtikel';
import ImageUploadAdd from '../Molekul/ImageUploadAdd';
import '../../styles/ArtikelBaru.css'
import CategorySelect from '../Molekul/CategorySelect';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios';
import HeaderArtikel from './header/headerArtikel';

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except dashes
    .replace(/-+/g, '-') // Replace consecutive dashes with a single dash
    .replace(/^-+/, '') // Trim leading dashes
    .replace(/-+$/, ''); // Trim trailing dashes
};


const ArtikelBaru = () => {
  const { token } = useAuth();
  const [articleTitle, setArticleTitle] = React.useState('');
  const [articleContent, setArticleContent] = React.useState('');
  const [imagePath, setImagePath] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };
  

  const handleTitleChange = (newTitle) => {
    setArticleTitle(newTitle);
  };

  const handleArticleContentChange = (newContent) => {
    setArticleContent(newContent);
  };

  const handleImageChange = (file) => {
    setImagePath(file.path);
    setImageFile(file);
  };


  const handleSubmit = async () => {
    try {
      if (token && imageFile) {
        
        const formData = new FormData();
        formData.append('title', articleTitle);
        formData.append('content', articleContent);
        formData.append('thumbnail', imageFile);
  
        const articleResponse = await axios.post(
          'https://api-ferminacare.tech/api/v1/admin/articles',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log('Article Response Data:', articleResponse.data);
  
       
        if (articleResponse.data.code === 201) {
          
          const articleId = articleResponse.data.data.id;
  
         
          const attachCategoriesResponse = await axios.post(
            `https://api-ferminacare.tech/api/v1/articles/${articleId}/add-category`,
            {
              category_id: selectedCategories,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
  
         
          console.log('Attach Categories Response:', attachCategoriesResponse.data);
        } else {
          console.error(`Error: Article creation failed with code ${articleResponse.data.code}`);
        }
      } else {
        console.error('Token or image file not available.');
      }
    } catch (error) {
   
      console.error('API Error:', error.response || error.message || error);
      if (error.response && error.response.status === 409) {
        console.error('Conflict:', error.response.data); 
      }
    }
  };
  return (

    <div>
      <HeaderArtikel />
    <div className='container-page-artikel-baru' style={{marginTop: '30px'}}>
      <div className='row'>
        <div className="col" style={{display: 'flex', marginLeft: "20px"}}>
            <h5>Artikel Baru</h5>
        </div>
        <div className='col'style={{display: 'flex', marginLeft: "640px"}}>
          <Button className="button-publikasi-pageartikel" onClick={handleSubmit}>
            Publikasikan
          </Button>
        </div>
      </div>

    </div>
    

  <div className='row-justify-content-md-center' style={{backgroundColor: 'transparent', marginTop: '20px'}}>
    <div>
          <TextBoxArtikel
            onTitleChange={handleTitleChange}
            onArticleContentChange={handleArticleContentChange}
            />
    </div>
    <div className='col-lg-5' style={{marginLeft: '600px', marginTop: '-700px'}}>
          {/* ImageUploadAdd */}
          <ImageUploadAdd onImageChange={handleImageChange} />
    </div>
  </div>
    <div className='row'>
    <div className='col-lg-8' style={{marginTop: '300px', marginBottom: '20px'}}>
          {/* CategorySelect */}
          <CategorySelect onCategoryChange={handleCategoryChange}/>
    </div>

    </div>

</div>
  );
};

export default ArtikelBaru;