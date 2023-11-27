import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import "../../styles/ArtikelTitle.css";

const TitleBar = ({ onSubmit, onTitleChange, onArticleContentChange, onCategoryChange }) => {
 
  const handleSubmit = () => {

    console.log('Submitting data:', title, articleContent, selectedCategories, image);
    
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Container fluid className="title-bar align-items-center justify-content-center">
      <Row className="d-flex align-items-center">
        <Col md={9}>
          <h5>Artikel Baru</h5>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <Button className="submit-button" onClick={handleSubmit}>
            Publikasikan
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleBar;