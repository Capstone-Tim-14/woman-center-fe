import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextBoxArtikel from '../molekul/TextBoxArtikel';
import ImageUploadAdd from '../molekul/ImageUploadAdd';
import TitleBar from '../atom/ArtikelTitle';
import './ArtikelBaru.css'
import CategorySelect from '../molekul/CategorySelect';

const ArtikelBaru = ( ) => {
 
    return (
      
      <Container fluid className="artikel-baru-page">
      <Row className='justify-content-md-center'>
        
        <Col className="container-textbox" md={8}>
          <Row>
            <Col md={12}>
            <TextBoxArtikel />

            </Col>
            <Col md={12}>
            <CategorySelect  />

            </Col>
          </Row>
        </Col>
    
        
        <Col className="container-image" md={4}>
          <ImageUploadAdd />
        </Col>
      </Row>
    </Container>
    );
  };

export default ArtikelBaru