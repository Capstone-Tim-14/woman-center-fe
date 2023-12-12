import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import TextBoxArtikel from '../Molekul/TextBoxArtikel';
import ImageUploadAdd from '../Molekul/ImageUploadAdd';
//import TitleBar from '../Atom/ArtikelTitle';
import '../../styles/ArtikelBaru.css'
import '../../styles/ArtikelTitle.css'
import CategorySelect from '../Molekul/CategorySelect';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios';

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
    <Container className="artikel-baru-page">
      {/* Submit Button */}
      <Row className="d-flex justify-content-between mb-4">
        <Col md={9}>
          <h5>Artikel Baru</h5>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <Button className="submit-button" onClick={handleSubmit}>
            Publikasikan
          </Button>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="justify-content-md-center">
        <Col className="container-textbox" lg={8}>
          {/* TextBoxArtikel */}
          <TextBoxArtikel
            onTitleChange={handleTitleChange}
            onArticleContentChange={handleArticleContentChange}
          />

          {/* CategorySelect */}
          <CategorySelect onCategoryChange={handleCategoryChange}/>
        </Col>
        <Col className="container-image" lg={4}>
          {/* ImageUploadAdd */}
          <ImageUploadAdd onImageChange={handleImageChange} />
        </Col>
      </Row>
    </Container>
  );
};

export default ArtikelBaru;