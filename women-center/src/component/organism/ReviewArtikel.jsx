import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import './BacaArtikel.css'
import artikelplaceholder from "../../assets/artikelplaceholder.png"

const ArtikelModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title><h5>Baca Artikel</h5></Modal.Title>
      </Modal.Header>
      <Modal.Body >

      <Container >
      <label htmlFor="popupTextarea">Review Artikel</label>
          <Row className="h-100 custom-flex-row">
            <Col md={8}>
              <div className="textarea-container h-100">
                
                <textarea
                  id="popupTextarea"
                  className="artikel-textarea form-control h-100"
                  rows="5" 
                  readOnly
                ></textarea>
              </div> 
            </Col>
            <Col md={4} className='d-flex flex-column' >
              <div className="image-container mb-3 d-flex">
                
                <img
                  src={artikelplaceholder }
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-between mt-auto align-items-end">
              <Button className="close-button reject" onClick={handleClose}>
              Reject
            </Button>
            <Button className="close-button" onClick={handleClose}>
              Approve
            </Button>
          </div>

            </Col>
            
          </Row>
           
        </Container>

      </Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
  );
};

export default ArtikelModal;