import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../../styles/BacaArtikel.css';
import artikelplaceholder from '../../assets/artikelplaceholder.png';
import { useAuth } from '../Layout/AuthContext'

const ArtikelModal = ({ show, handleClose, articleSlug,  }) => {
  const { token, logout } = useAuth();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(
          `https://api-ferminacare.tech/api/v1/admin/articles/${articleSlug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        setArticleDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    if (show && articleSlug) {
      fetchArticleDetails();
    }
  }, [show, articleSlug, token]);

  const handleApprove = async () => {
    try {
      
      await axios.put(
        `https://api-ferminacare.tech/api/v1/admin/articles/approved-request/${articleSlug}`,
        { status: 'APPROVED' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleClose();
    } catch (error) {
      console.error('Error approving article:', error);
    }
  };

  
  const handleReject = async () => {
    try {
      
      await axios.put(
        `https://api-ferminacare.tech/api/v1/admin/articles/approved-request/${articleSlug}`,
        { status: 'REJECTED' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    handleClose();
  } catch (error) {
    console.error('Error rejecting article:', error);
  }
};
  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title>
          <h5>Review Artikel</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <label htmlFor="popupTextarea">{articleDetails?.title}</label>
          <Row className="h-100 custom-flex-row">
            <Col md={8}>
              <div className="textarea-container h-100">
                <textarea
                  id="popupTextarea"
                  className="artikel-textarea form-control h-100"
                  rows="5"
                  readOnly
                  value={articleDetails?.content || ''}
                ></textarea>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column">
              <div className="image-container mb-3 d-flex">
                <img
                  src={articleDetails?.thumbnail || artikelplaceholder}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-between mt-auto align-items-end">
                <Button className="close-button reject" onClick={handleReject}>
                  Reject
                </Button>
                <Button className="close-button" onClick={handleApprove}>
                  Approve
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ArtikelModal;