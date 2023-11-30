import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../../styles/ArtikelTitle.css'

const TitleBar = ({ onSubmit }) => {
  const handleSubmit = () => {
    // Call the onSubmit prop to trigger the form submission
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