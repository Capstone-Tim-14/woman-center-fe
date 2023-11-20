import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextBoxArtikel from '../molekul/TextBoxArtikel';
import ImageUploadAdd from '../molekul/ImageUploadAdd';
import TitleBar from '../atom/ArtikelTitle';
import './ArtikelBaru.css'
import CategorySelect from '../molekul/CategorySelect';

const ArtikelBaru = ( onSubmit ) => {
  const [title, setTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState(null);

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleArticleContentChange = (newArticleContent) => {
    setArticleContent(newArticleContent);
  };

  const handleCategoryChange = (newSelectedCategories) => {
    setSelectedCategories(newSelectedCategories);
  };

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  
   
    return (
      
      <Container fluid className="artikel-baru-page">
      <Row className='justify-content-md-center'>
        
        <Col className="container-textbox" md={8}>
          <Row>
            <Col md={12}>
            <TextBoxArtikel onTitleChange={handleTitleChange} onArticleContentChange={handleArticleContentChange} />

            </Col>
            <Col md={12}>
            <CategorySelect onCategoryChange={(selectedCategories) => handleCategoryChange(selectedCategories)} />

            </Col>
          </Row>
        </Col>
    
        
        <Col className="container-image" md={4}>
          <ImageUploadAdd onImageChange={handleImageChange}/>
        </Col>
      </Row>
    </Container>
    );
  };

export default ArtikelBaru