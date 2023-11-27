import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import './BacaArtikel.css'
import artikelplaceholder from "../../assets/artikelplaceholder.png"
import axios from 'axios';

const ArtikelModal = ({ show, handleClose }) => {
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    thumbnail: '',
  });

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6542b7a801b5e279de1f79ad.mockapi.io/articledetail');
        if (response.status === 401) {
          
          console.error('Unauthorized access.');
          
          return;
        }

        if (!response.data) {
          throw new Error('Empty response data.');
        }

      
        setArticleData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

   
    fetchData();
  }, []);



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title><h5>Baca Artikel</h5></Modal.Title>
      </Modal.Header>
      <Modal.Body >

      <Container >
      <label htmlFor="popupTextarea">{articleData.title}</label>
          <Row className="h-100 custom-flex-row">
            <Col md={8}>
              <div className="textarea-container h-100">
                
              <div
                  id="popupTextarea"
                  className="artikel-textarea form-control h-100"
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                />
              </div> 
            </Col>
            <Col md={4} className='d-flex flex-column' >
              <div className="image-container mb-3 d-flex flex-column">
                
                <img
                  src={artikelplaceholder }
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-end mt-auto align-items-end">
            
            <Button className="close-button" onClick={handleClose}>
              Selesai
            </Button>
          </div>

            </Col>
            
          </Row>
           
        </Container>

      </Modal.Body>
      
    </Modal>
  );
};

export default ArtikelModal;