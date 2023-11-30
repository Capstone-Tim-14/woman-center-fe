import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextBoxArtikel from '../Molekul/TextBoxArtikel';
import ImageUploadAdd from '../Molekul/ImageUploadAdd';
//import TitleBar from '../Atom/ArtikelTitle';
import '../../styles/ArtikelBaru.css'
import CategorySelect from '../Molekul/CategorySelect';

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