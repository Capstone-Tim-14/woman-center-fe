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

const ArtikelBaru = () => {
  const { token } = useAuth();
  const [articleTitle, setArticleTitle] = React.useState('');
  const [articleContent, setArticleContent] = React.useState('');
  const [imagePath, setImagePath] = useState('');

  const handleTitleChange = (newTitle) => {
    setArticleTitle(newTitle);
  };

  const handleArticleContentChange = (newContent) => {
    setArticleContent(newContent);
  };

  const handleImageChange = (path) => {
    setImagePath(path);
  };

  const handleSubmit = async () => {
    try {
      if (token) {
        const formData = new FormData();
        formData.append('title', articleTitle);
        formData.append('articleContent', articleContent);
        formData.append('thumbnail', imageFile);
  
        // Make API request using axios
        const response = await axios.post(
          'https://api-ferminacare.tech/api/v1/admin/articles',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Handle the response as needed
        console.log('API Response:', response.data);
      } else {
        console.error('Token not available.');
        // You might want to redirect to the login page or handle unauthorized access
        logout();
      }
    } catch (error) {
      // Handle errors
      console.error('API Error:', error);
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
          <CategorySelect />
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